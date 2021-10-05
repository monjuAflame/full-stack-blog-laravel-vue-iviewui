import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

// admin project pages
import home from './components/pages/home.vue';
import tags from './components/pages/tags.vue'
import categories from './components/admin/pages/category.vue'


const routes = [
    {
        path: '/',
        component: home,
        name: 'home'

    },
    {
        path: '/tags',
        component: tags,
        name: 'tags'

    },
    {
        path: '/categories',
        component: categories,
        name: 'categories'

    },

]


export default new Router({
    mode: 'history',
    routes

})