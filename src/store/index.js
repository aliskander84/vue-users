import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {baseUrl} from '../api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    pagesCount: 3,
    currentPage: 1,
    modal: {
      isModal: false,
      currentUserId: null
    }
  },
  actions: {
    async fetchUsers({commit}) {
      try {
        const {data: {data, total_pages}} = await axios.get(`${baseUrl}/users?delay=3&per_page=4&page=${this.state.currentPage}`)
        commit('setUsers', data)
        commit('setPagesCount', total_pages)
      } catch (e) {
        console.log('fetch error:', e.error)
      }
    },
    changePage({commit, dispatch}, number) {
      // console.log('ch')
      commit('setCurrentPage', number)
      commit('setUsers', [])
      dispatch('fetchUsers')
    },
    deleteUser({commit, dispatch}) {
      // console.log(this.state.modal.currentUserId)
      const id = this.state.modal.currentUserId
      console.log(id)
      commit('deleteLocalUser', id)
      dispatch('deleteRemoteUser', id)
      dispatch('hideModal')
    },
    async deleteRemoteUser(ctx, id) {
      console.log(id)
      try {
        const data = await axios.delete(`${baseUrl}/users/${id}`)
        console.log('delete success:', data)
      } catch (e) {
        console.log('delete error:', e.error)
      }
    },
    showDeleteModal({commit}, id) {
      commit('setModal', {isModal: true, currentUserId: id})
    },
    hideModal({commit}) {
      commit('setModal', {isModal: false, currentUserId: null})
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
    },
    deleteLocalUser(state, id) {
      this.state.users = this.state.users.filter(u => {
        return u.id !== id
      })
      this.state.modal.currentUserId = null
    },
    setModal(state, modal) {
      this.state.modal = modal
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
    },
    modal(state) {
      return state.modal
    }
  }
})
