<template>
  <div>
    <h1>Add Item</h1>
    <form @submit.prevent="addItem">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" v-model="form.title" required />
        <span class="text-danger" v-if="errors.title">{{ errors.title }}</span>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          class="form-control"
          id="description"
          v-model="form.description"
          required
        ></textarea>
        <span class="text-danger" v-if="errors.description">{{ errors.description }}</span>
      </div>
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<script>
import { ref, defineEmits } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'AddItem',
  data() {
    return {
      form: {
        title: '',
        description: ''
      },
      errors: {}
    }
  },
  methods: {
    async addItem() {
      if (this.isFormValid()) {
        await this.$store.dispatch('addItem', {
          title: this.form.title,
          body: this.form.description
        })
        this.form.title = ''
        this.form.description = ''
        this.$router.push({ name: 'ItemList' })
        this.$emit('item-added') // Emit custom event after adding item
      }
    },
    isFormValid() {
      this.errors = {}

      if (!this.form.title) {
        this.errors.title = 'Title is required.'
      }

      if (!this.form.description) {
        this.errors.description = 'Description is required.'
      }

      return Object.keys(this.errors).length === 0
    }
  }
}
</script>
