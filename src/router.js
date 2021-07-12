import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound.vue'
import Posts from './pages/Posts'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/blog'},
        { path: '/blog', component: Posts},
        { path: '/:notFound(.*)', component: NotFound},
    ],
});

export default router;