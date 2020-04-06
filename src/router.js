import Vue from 'vue';
import VueRouter from 'vue-router';
import * as firebase from "firebase/app";
import "firebase/auth";

import AdList from './components/AdList.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Messages from './components/Messages.vue';
import ProfileEdit from './components/ProfileEdit.vue';
import AdForm from './components/AdForm.vue';
import AdDetails from './components/AdDetails.vue';
import NotFound from './components/core/NotFound.vue';

const routes = [
    { path: '/ads', component: AdList },
    { path: '/login', component: Login, meta: { requireGuest: true } },
    { path: '/register', component: Register, meta: { requireGuest: true } },
    { path: '/newad', component: AdForm, meta: { requireAuth: true } },
    { path: '/profile', component: ProfileEdit, meta: { requireAuth: true } },
    { path: '/messages', component: Messages, meta: { requireAuth: true } },
    { path: '/details', component: AdDetails },
    { path: '/', redirect: '/ads' },
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
    const isAuth = firebase.auth().currentUser;
    if (requiresAuth && !isAuth) {
        next("/login");
    } else if (requiresGuest && isAuth) {
        next("/profile");
    } else {
        next();
    }
})

export default router;
