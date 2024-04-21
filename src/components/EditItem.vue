<template>
  <div>
    <h1>Edit Item</h1>
    <form @submit.prevent="updateItem">
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
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'EditItem',
  data() {
    return {
      form: {
        title: '',
        description: ''
      }
    }
  },
  async created() {
    const store = useStore()
    const route = useRouter()
    const itemId = route.params.id
    const item = store.state.items.find((item) => item.id == itemId)
    this.form.title = item.title
    this.form.description = item.body
  },
  methods: {
    async updateItem() {
      await this.$store.dispatch('updateItem', {
        id: this.$route.params.id,
        title: this.form.title,
        body: this.form.description
      })
      this.$router.push({ name: 'ItemList' })
    }
  }
}
</script>
