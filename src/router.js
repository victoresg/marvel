import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import WorkUs from './views/WorkUs.vue'
import Character from './components/Character.vue'

Vue.use (Router)

export default new Router ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Sobre',
      name: 'about',
      component: About
    },
    {
      path: '/trabalhe-conosco',
      name: 'work-us',
      component: WorkUs
    },
    {
      path: '/character/:id/:name',
      name: 'character',
      component: Character
    }
  ]
})