import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store.js'

import AdList from './components/ads/AdList.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Messages from './components/messages/Messages.vue';
import ProfileEdit from './components/auth/ProfileEdit.vue';
import AdForm from './components/ads/AdForm.vue';
import AdDetails from './components/ads/AdDetails.vue';
import NotFound from './components/core/NotFound.vue';

const routes = [
    { path: '/ads/:type/:breed', name: 'ads', component: AdList },
    { path: '/login', component: Login, meta: { requireGuest: true } },
    { path: '/register', component: Register, meta: { requireGuest: true } },
    { path: '/post-ad', component: AdForm, meta: { requireAuth: true } },
    { path: '/profile', component: ProfileEdit, meta: { requireAuth: true } },
    { path: '/messages', component: Messages, meta: { requireAuth: true } },
    { path: '/details/:id', name: 'details', component: AdDetails },
    { path: '/', redirect: '/ads/all/all' },
    { path: '*', component: NotFound },
]

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requireAuth);
    const requiresGuest = to.matched.some(record => record.meta.requireGuest);
    const isAuth = store.getters.user;
    if (requiresAuth && !isAuth) {
        next("/login");
    } else if (requiresGuest && isAuth) {
        next("/profile");
    } else {
        next();
    }
})

export default router;
