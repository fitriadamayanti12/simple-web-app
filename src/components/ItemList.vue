<template>
  <div>
    <h1>List of Items</h1>
    <router-link to="/add" class="btn btn-success mb-3">Add Item</router-link>
    <ul class="list-group mb-3">
      <li
        v-for="item in items"
        :key="item.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <router-link :to="{ name: 'ItemDetail', params: { id: item.id } }">{{
          item.title
        }}</router-link>
        <span>{{ item.body }}</span>
        <button @click="editItem(item)" class="btn btn-primary btn-sm">Edit</button>
        <button @click="deleteItem(item.id)" class="btn btn-danger btn-sm">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'ItemList',
  computed: {
    items() {
      return this.$store.state.items
    }
  },
  methods: {
    editItem(item) {
      this.$router.push({ name: 'EditItem', params: { id: item.id } })
    },
    async deleteItem(itemId) {
      if (confirm('Are you sure you want to delete this item?')) {
        await this.$store.dispatch('deleteItem', itemId)
      }
    },
    addItemToList(newItem) {
      this.$store.commit('addItem', newItem)
    }
  },
  async created() {
    await this.$store.dispatch('fetchItems')
  },
  onMounted() {
    this.$on('item-added', this.addItemToList)
  }
}
</script>
