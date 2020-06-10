import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {baseUrl} from '../api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    pagesCount: 3,
    currentPage: 1
  },
  actions: {
    async fetchUsers({commit}) {
      try {
        const {data: {data, total_pages}} = await axios(`${baseUrl}/users?delay=3&per_page=4&page=${this.state.currentPage}`)
        commit('setUsers', data)
        commit('setPagesCount', total_pages)
      } catch (e) {
        console.log(e.error)
      }
    },
    changePage({commit, dispatch}, number) {
      // console.log('ch')
      commit('setCurrentPage', number)
      commit('setUsers', [])
      dispatch('fetchUsers')
    }
  },
  mutations: {
    setUsers(state, users) {
      // console.log('mut', users)
      this.state.users = users
    },
    setPagesCount(state, count) {
      this.state.pagesCount = count
    },
    setCurrentPage(state, number) {
      this.state.currentPage = number
    }
  },
  getters: {
    users(state) {
      return state.users
    },
    pagesCount(state) {
      return state.pagesCount
    },
    currentPage(state) {
      return state.currentPage
    }
  }
})
