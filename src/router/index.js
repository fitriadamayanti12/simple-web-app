import { createRouter, createWebHistory } from 'vue-router'
import ItemList from './components/ItemList.vue'
import ItemDetail from './components/ItemDetail.vue'
import AddItem from './components/AddItem.vue'
import EditItem from './components/EditItem.vue'

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
  },
  {
    path: '/add',
    name: 'AddItem',
    component: AddItem
  },
  {
    path: '/edit/:id',
    name: 'EditItem',
    component: EditItem
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
