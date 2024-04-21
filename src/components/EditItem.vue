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
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'EditItem',
  setup() {
    const store = useStore()
    const router = useRouter()

    const form = ref({
      title: '',
      description: ''
    })

    const fillFormWithItemData = async () => {
      const itemId = router.currentRoute.value.params.id
      const item = store.state.items.find((item) => item.id == itemId)
      if (item) {
        form.value.title = item.title
        form.value.description = item.body
      }
    }

    onMounted(fillFormWithItemData)

    const updateItem = async () => {
      await store.dispatch('updateItem', {
        id: router.currentRoute.value.params.id,
        title: form.value.title,
        body: form.value.description
      })
      router.push({ name: 'ItemList' })
    }

    return {
      form,
      updateItem
    }
  }
}
</script>
