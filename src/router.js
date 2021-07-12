import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import NotFound from './pages/NotFound.vue'
import Posts from './pages/Posts'
import Post from './pages/Posts/Post'
import User from './pages/Posts/Post/User'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/blog'},
        { path: '/blog', component: Posts},
        { path: '/author/:id', component: User},
        { path: '/:notFound(.*)', component: NotFound},
    ],
});

export default router;