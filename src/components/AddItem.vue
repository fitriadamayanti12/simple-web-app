<template>
  <div>
    <h1>Add Item</h1>
    <form @submit.prevent="addItem">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" v-model="form.title" required />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          class="form-control"
          id="description"
          v-model="form.description"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'AddItem',
  data() {
    return {
      form: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    async addItem() {
      await this.$store.dispatch('addItem', {
        title: this.form.title,
        body: this.form.description
      })
      this.$router.push({ name: 'ItemList' })
    }
  }
}
</script>
