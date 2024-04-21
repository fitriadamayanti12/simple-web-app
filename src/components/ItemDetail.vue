<template>
  <div>
    <h1>{{ item.title }}</h1>
    <p>{{ item.body }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'ItemDetail',
  data() {
    return {
      item: {}
    }
  },
  async created() {
    const store = useStore()
    const route = useRoute()
    const itemId = route.params.id
    this.item = store.state.items.find((item) => item.id == itemId)
  }
}
</script>
