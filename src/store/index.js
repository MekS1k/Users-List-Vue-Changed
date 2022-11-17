import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {
  },
  mutations: {
    USERS_GET:(state, data)=>{//продолжаем работу с мутацией
      state.data = data; //записываем данные в массив
    } 
  },
  actions: {
    async GET_DATA({commit}) {
      //парсим данные
        const data = await axios(
          "https://jsonplaceholder.typicode.com/users"
        )
          commit('USERS_GET', data.data)//создаем мутацию 
    },
  },
  modules: {
  }
})
