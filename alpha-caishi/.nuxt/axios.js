import Axios from 'axios'

// We cannot extend Axios.prototype
const axiosExtraProto = {}

// Sets a common header
axiosExtraProto.setHeader = function setHeader (name, value, scopes = 'common') {
  if(!Array.isArray(scopes)) {
    scopes = [scopes]
  }
  scopes.forEach(scope => {
    if (!value) {
      delete this.defaults.headers[scope][name];
      return
    }
    this.defaults.headers[scope][name] = value
  })
}

// Set requests token
axiosExtraProto.setToken = function setToken (token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token
    this.setHeader('Authorization', value, scopes)
}

// Request helpers
const reqMethods = [
    'request', 'delete', 'get', 'head', 'options', // url, config
    'post', 'put', 'patch' // url, data, config
]
reqMethods.forEach(method => {
  axiosExtraProto['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data)
  }
})

// Setup all helpers to axios instance (Axios.prototype cannot be modified)
function setupHelpers( axios ) {
  for (let key in axiosExtraProto) {
    axios[key] = axiosExtraProto[key].bind(axios)
  }
}

const redirectError = {"401":"\u002Flogin"}

// Set appreciate `statusCode` and `message` to error instance
function errorHandler(error, ctx) {
  if (error.response) {
    // Error from backend (non 2xx status code)
    // ...Auto redirect on special status codes
    if (redirectError[error.response.status]) {
      ctx.redirect(redirectError[error.response.status])
    }
    error.statusCode = error.statusCode || parseInt(error.response.status) || 500
    error.message = error.message || error.response.statusText || (error.statusCode + ' (Internal Server Error)')
  } else if (error.request) {
    // Error while making request
    error.statusCode = error.statusCode || 500
    error.message = error.message || 'request error'
  } else {
    // Something happened in setting up the request that triggered an Error
    error.statusCode = error.statusCode || 0
    error.message = error.message || 'axios error'
  }

  return Promise.reject(error)
}





// Setup BaseURL
const baseURL = process.browser
  ? (process.env.API_URL_BROWSER || '/api')
  : (process.env.API_URL || 'http://localhost:3200/api')

// Custom init hook

  const initHook = function(axios) {
      axios.defaults.timeout = '5000';
    }


export default async(ctx, inject) => {
  const { req } = ctx

  // Create a fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
  const headers = {
    common : {
      'Accept': 'application/json, text/plain, */*'
    },
    delete: {},
    get: {},
    head: {},
    post: {},
    put: {},
    patch: {}
  }

  
  // Default headers
  headers.common = (req && req.headers) ? Object.assign({}, req.headers) : {}
  delete headers.common['accept']
  delete headers.common['host']
  

  // Create new axios instance
  const axios = Axios.create({
    baseURL,
    headers
  })

  
  // Send credentials only to relative and API Backend requests
  axios.interceptors.request.use(config => {
    if (config.withCredentials === undefined) {
      if (!/^https?:\/\//i.test(config.url) || config.url.indexOf(baseURL) === 0) {
        config.withCredentials = true
      }
    }
    return config
  });
  

  

  

  
  // Custom response interceptor
  const resInter = function(response, { redirect, store }) {
      const { data: { errorCode } } = response;
      if (errorCode === 102901 || errorCode === 100002) {
        // require('./util/logout')(store),webpack Cannot read property 'call' of undefined
        store.commit('setUser', { ip: store.state.user.ip });
        store.commit('setState', { key: 'isLogout', value: errorCode });
        redirect('/login');
      }
      return response;
    }
  axios.interceptors.response.use(config => resInter(config, ctx))
  

  // Error handler
  
  axios.interceptors.response.use(undefined, err => errorHandler(err, ctx));
  

  // Inject axios to the context as $axios
  ctx.$axios = axios
  inject('axios', axios)

  
  await initHook(axios, ctx)
  


  // Setup axios helpers
  setupHelpers(axios)
}
