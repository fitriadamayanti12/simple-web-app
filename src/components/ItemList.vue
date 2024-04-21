<!-- ItemList.vue -->
<template>
  <div>
    <h1>Items</h1>
    <ul class="list-group">
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
    <router-link to="/add" class="btn btn-success mt-3">Add Item</router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
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
    }
  },
  created() {
    this.$store.dispatch('fetchItems')
  }
}
</script>
