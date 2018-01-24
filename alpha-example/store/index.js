import shvl from 'shvl';

export const state = () => ({
  user:{},
  version:'',
  // access_token:'',
  isLogout:false,
  loading:{
    on:false,
    text:'拼命加载中'
  },
  news:[],
  _3rdGames:[],
  docable:false
})

export const getters = {
  ip:({user}) => user.ip,
  news:state => state.news,
  expires:({user}) => user.expires,
  token:({user}) => user.token,
  username:({user}) => user.name,
  isAgent:({user}) => user.is_agent,
  hasPayPw:({user}) => user.is_set_fund_password,
  hasProtection :({user}) => user.is_set_safety_question,
  GA :({user}) => user.is_open_google,
  _3rdPlatformPrefix:({user}) => user.third_party_game_platform_prefix,
  point:({user}) => user.return_point_per,
  bonusGroup:({user}) => user.prize_group,
  minBonusGroup:({user}) => Number(user.minimum_prize_group),
  lottoName:({route}) => {
    if(route.name && /lottery|reposal/.test(route.name)){
      return route.params.name
    }
    return ''
  },
  loading: state => state.loading,
  _3rdGames: state => state._3rdGames,
}

export const actions = {
  // third-party-game/all-balance
  async get3rdGames({commit}){
    commit('setState',{key:'_3rdGames',value:(await this.$axios.$post('third-party-game/all-balance')).data})
  },
  getUser({commit,state:{user}},callback = () => {}){
    return this.$axios.$post('user/find-info').then(({data}) => {
      const result = {...user,...data}
      commit('setUser',result)
      callback(result)
    })
  },
  getNews({commit}){
    return this.$axios.$post('news-info/get').then(({data}) => {
      commit('setState',{key:'news',value:data.list})
    })
  },
  // async nuxtServerInit ({ commit,dispatch }, { app,req,route }) {
  //   await dispatch('getNews')
  // }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  // setOauth(state,token){
  //   state.access_token = token
  // },
  spin(state,{on = true,text = '拼命加载中'} = {}){
    state.loading = {
      on,
      text
    }
  },
  setState(state,{key,value}){
    shvl.set(state,key,value)
  }
}