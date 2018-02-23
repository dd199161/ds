import { Router } from 'express'
// import axios from 'axios'
// import {oauthParms,HOST,baseURL} from '../../build/api-config'
const router = Router()

router.get('/init', function(req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  // axios.post(`${HOST}/oauth/token`,oauthParms)
  // .then(({data:{access_token}}) => {
  //   res.json({access_token,ip})
  // })
  res.json({ ip })
})

router.post('/doc_enter', function(req, res, next) {
  if (req.body.pw === 'a123newtopsky321') {
    return res.json({success:'heihei123'})
  }
  res.json({error:1,message:'密码错误！请联系管理员'})
})

router.post('/doc_auth', function(req, res, next) {
  if (req.body.pw === 'heihei123') {
    return res.send(true)
  }
})

export default router
