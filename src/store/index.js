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
      currentUserId: null,
      isEdit: false,
      isAdd: false
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
    saveUser({dispatch}, form) {
      console.log(form.firstName)
      const user = {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        id: this.state.modal.currentUserId
      }
      dispatch('saveLocalUser', user)
      dispatch('saveRemoteUser', user)
      dispatch('hideModal')
    },
    addUser({dispatch}, form) {
      const user = {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        id: new Date().getDate()
      }
      dispatch('addLocalUser', user)
      dispatch('addRemoteUser', user)
      dispatch('hideModal')
    },
    addLocalUser({commit}, user) {
      const updated = [...this.state.users, user]
      commit('setUsers', updated)
    },
    async addRemoteUser(ctx, user) {
      const str = JSON.stringify(user)
      try {
        const data = await axios.post(`${baseUrl}/users`, str)
        console.log('post success:', data)
      } catch (e) {
        console.log('post error:', e.error)
      }
    },
    saveLocalUser({commit}, user) {
      console.log(user)
      const id = this.state.modal.currentUserId
      const updated = this.state.users.map(u => {
        if (u.id === id) {
          return {
            ...u,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
          }
        } else {
          return u
        }
      })
      commit('setUsers', updated)
    },
    async saveRemoteUser(ctx, user) {
      const str = JSON.stringify(user)
      try {
        const data = await axios.put(`${baseUrl}/users/${user.id}`, str)
        console.log('put success:', data)
      } catch (e) {
        console.log('put error:', e.error)
      }
    },
    showDeleteModal({commit}, id) {
      commit('setModal', {...this.state.modal, isModal: true, currentUserId: id})
    }
    ,
    showEditModal({commit}, id) {
      commit('setModal', {...this.state.modal, isModal: true, currentUserId: id, isEdit: true})
    },
    showAddModal({commit}) {
      commit('setModal', {...this.state.modal, isModal: true, isAdd: true})
    },
    hideModal({commit}) {
      commit('setModal', {
        ...this.state.modal,
        isModal: false,
        currentUserId: null,
        isEdit: false,
        isAdd: false
      })
    }
  },
  mutations: {
    setUsers(state, users) {
      // console.log('mut', users)
      this.state.users = users
    }
    ,
    setPagesCount(state, count) {
      this.state.pagesCount = count
    }
    ,
    setCurrentPage(state, number) {
      this.state.currentPage = number
    }
    ,
    deleteLocalUser(state, id) {
      this.state.users = this.state.users.filter(u => {
        return u.id !== id
      })
      this.state.modal.currentUserId = null
    }
    ,
    setModal(state, modal) {
      this.state.modal = modal
    }
  }
  ,
  getters: {
    users(state) {
      return state.users
    }
    ,
    pagesCount(state) {
      return state.pagesCount
    }
    ,
    currentPage(state) {
      return state.currentPage
    }
    ,
    modal(state) {
      return state.modal
    }
  }
})
