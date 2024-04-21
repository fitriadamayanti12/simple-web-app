import { createStore } from 'vuex'

const store = createStore({
  state: {
    items: []
  },
  mutations: {
    setItems(state, items) {
      state.items = items
    },
    addItem(state, newItem) {
      state.items.unshift(newItem)
    },
    updateItem(state, updatedItem) {
      const index = state.items.findIndex((item) => item.id === updatedItem.id)
      if (index !== -1) {
        state.items.splice(index, 1, updatedItem)
      }
    },
    deleteItem(state, itemId) {
      state.items = state.items.filter((item) => item.id !== itemId)
    }
  },
  actions: {
    async fetchItems({ commit }) {
      // Fetch items from mock API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      commit('setItems', data)
    },
    async addItem({ commit }, newItem) {
      // Add item to mock API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      const data = await response.json()
      commit('addItem', data)
    },
    async updateItem({ commit }, updatedItem) {
      // Update item in mock API
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${updatedItem.id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedItem),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      const data = await response.json()
      commit('updateItem', data)
    },
    async deleteItem({ commit }, itemId) {
      // Delete item from mock API
      await fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`, {
        method: 'DELETE'
      })
      commit('deleteItem', itemId)
    }
  }
})

export default store
