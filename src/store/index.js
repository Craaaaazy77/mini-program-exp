import Vue from 'vue'
import Vuex from 'vuex'
import { request } from '../utils/wx'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    url: '',
    wife: {}
  },
  mutations: {
    username (state, val) {
      state.username = val
    },
    url (state, val) {
      state.url = val
    },
    setWife (state, val) {
      state.wife = val
    }
  },
  actions: {
    async search ({ commit }, wd) {
      var res = await request({
        url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
        data: {
          wd
        }
      })
      // 对请求的个性化处理放在不同actions中
      return res.data.slice(0, 40)
    }
  }
})
