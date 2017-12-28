import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  id: null,                //音乐ID
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
})
