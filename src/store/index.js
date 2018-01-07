import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  id: null,                //音乐ID
  optionNum: 1,            //底部选择编号
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
})
