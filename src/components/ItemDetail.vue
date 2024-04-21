<template>
  <div>
    <h1>{{ item.title }}</h1>
    <div>{{ item.body }}</div>
  </div>
</template>

<script>
export default {
  name: 'ItemDetail',
  data() {
    return {
      item: {}
    }
  },
  methods: {
    async fetchItem() {
      const itemId = this.$route.params.id
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
      this.item = await response.json()
    }
  },
  created() {
    this.fetchItem()
  }
}
</script>
