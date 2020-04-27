import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store.js'

const AdList = () => import('./components/ads/AdList.vue');
const Login = () => import('./components/auth/Login.vue');
const Register = () => import('./components/auth/Register.vue');
const Messages = () => import('./components/messages/Messages.vue');
const Chat = () => import('./components/messages/Chat.vue');
const ProfileEdit = () => import('./components/auth/ProfileEdit.vue');
const AdPost = () => import('./components/ads/AdPost.vue');
const AdEdit = () => import('./components/ads/AdEdit.vue');
const AdDetails = () => import('./components/ads/AdDetails.vue');
const MyAds = () => import('./components/ads/MyAds.vue');
const FollowedAds = () => import('./components/ads/FollowedAds.vue');
const NotFound = () => import('./components/core/NotFound.vue');

const routes = [
    { path: '/ads', name: 'ads', component: AdList },
    { path: '/login', component: Login, meta: { requireGuest: true } },
    { path: '/register', component: Register, meta: { requireGuest: true } },
    { path: '/post-ad', component: AdPost, meta: { requireAuth: true } },
    { path: '/edit/:id', name: 'edit', component: AdEdit, meta: { requireAuth: true } },
    { path: '/profile', component: ProfileEdit, meta: { requireAuth: true } },
    { path: '/my-ads', component: MyAds, meta: { requireAuth: true } },
    { path: '/followed-ads', component: FollowedAds, meta: { requireAuth: true } },
    { path: '/messages', component: Messages, meta: { requireAuth: true } },
    { path: '/message/:id', name:'message', component: Chat, meta: { requireAuth: true } },
    { path: '/details/:id', name: 'details', component: AdDetails },
    { path: '/', redirect: '/ads' },
    { path: '*', component: NotFound },
]

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    store.commit("setNoResult", false);
    store.commit("setLoading", false);
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
