import Vue from 'vue';
import VueRouter from 'vue-router';
import AdList from '../components/AdList.vue';
import Auth from '../components/Auth.vue';
import Messages from '../components/Messages.vue';
import ProfileEdit from '../components/ProfileEdit.vue';
import AdForm from '../components/AdForm.vue';
import AdDetails from '../components/AdDetails.vue';
import NotFound from '../components/core/NotFound.vue';

const routes = [
    { path: '/ads', component: AdList },
    { path: '/auth', component: Auth },
    { path: '/newad', component: AdForm },
    { path: '/profile', component: ProfileEdit },
    { path: '/messages', component: Messages },
    { path: '/details', component: AdDetails },
    { path: '/', redirect: '/ads' },
    { path: '*', component: NotFound },
]

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes
});