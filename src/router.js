import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index'
import Details from './views/Details'
import NotFound from './views/NotFound'
//ES6

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home, children:[
        { path:"", component: Index },
        { path:"details/:lid", component: Details,props:true },
    ]},
    { path: '/*', component:NotFound }
  ]
})
