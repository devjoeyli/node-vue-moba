import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
import ItemEdit from '../views/ItemEdit.vue' // eslint-disable-line no-unused-vars
import ItemList from '../views/ItemList.vue' // eslint-disable-line no-unused-vars


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView,
    children: [
      { path: '/categories/create', component: CategoryEdit},
      { path: '/categories/edit/:id', component: CategoryEdit, props: true}, 
      { path: '/categories/list', component: CategoryList},

      { path: '/items/create', component: ItemEdit},
      { path: '/items/edit/:id', component: ItemEdit, props: true}, 
      { path: '/items/list', component: ItemList}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
