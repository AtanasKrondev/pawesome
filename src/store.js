import Vue from 'vue';
import Vuex from 'vuex';
// import * as firebase from "firebase/app";
// import "firebase/auth";
import { auth } from "./main.js"
import router from './router.js'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null
    },
    getters: {
        user: state => {
            return state.user;
        }
    },
    mutations: {
        setUser: (state, payload) => {
            state.user = payload;
        },
        updateUser: (state, payload) => {
            state.user = Object.assign({}, state.user, payload)
        },
    },
    actions: {
        register: ({ commit }, payload) => {
            auth
                .createUserWithEmailAndPassword(payload.email, payload.password)
                .then((response) => {
                    commit('setUser', response.user);
                    router.push("/profile");
                })
                .catch(err => console.log(err));
        },
        login: ({ commit }, payload) => {
            auth
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then((response) => {
                    commit('setUser', response.user);
                    router.push("/");
                })
                .catch(err => console.log(err));
        },
        logout: ({ commit }) => {
            auth
                .signOut()
                .then(() => {
                    commit('setUser', null);
                    router.push("/login");
                })
                .catch(err => console.log(err));
        },
        initiate: ({ commit }, payload) => {
            commit('setUser', payload);
        },
        updateProfile: ({ commit }, payload) => {
            auth.currentUser.updateProfile(payload)
                .then(() => {
                    commit('updateUser', payload);
                })
                .catch(err => console.log(err));
        },
        updateEmail: ({ commit }, payload) => {
            auth.currentUser.updateEmail(payload)
                .then(() => {
                    commit('updateUser', { email: payload });
                })
                .catch(err => console.log(err));
        },
    }
});

export default store;
