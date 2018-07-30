import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    clickOption: 0,
  },
  getters:{
    getType:function (state) {
      if(!state.clickOption){
        state.clickOption = localStorage.getItem('clickOption')
      }
      return state.clickOption;
    }
  },
  mutations:{
    //格式：类型(名字)+处理函数
    //加1
    changeClickOption(state,clickOption) {
      //console.log(state)//state对象
      state.clickOption = clickOption;
    }
  },
  actions:{
    /* increment({commit}){
       commit("INCREMENT")
     }*/
  }
})

export default store
