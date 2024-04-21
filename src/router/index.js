import { createRouter, createWebHistory } from 'vue-router'
import ItemList from './components/ItemList.vue'
import ItemDetail from './components/ItemDetail.vue'

const routes = [
  {
    path: '/',
    name: 'ItemList',
    component: ItemList
  },
  {
    path: '/item/:id',
    name: 'ItemDetail',
    component: ItemDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
