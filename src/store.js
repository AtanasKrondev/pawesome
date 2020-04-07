import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from "firebase/app";
import "firebase/auth";
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
            firebase
                .auth()
                .createUserWithEmailAndPassword(payload.email, payload.password)
                .then((response) => {
                    commit('setUser', response.user);
                    router.push("/profile");
                })
                .catch(err => console.log(err));
        },
        login: ({ commit }, payload) => {
            firebase
                .auth()
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then((response) => {
                    commit('setUser', response.user);
                    router.push("/");
                })
                .catch(err => console.log(err));
        },
        logout: ({ commit }) => {
            firebase
                .auth()
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
            const user = firebase.auth().currentUser;
            user.updateProfile(payload)
                .then(() => {
                    commit('updateUser', payload);
                })
                .catch(err => console.log(err));
        },
        updateEmail: ({ commit }, payload) => {
            const user = firebase.auth().currentUser;
            user.updateEmail(payload)
                .then(() => {
                    commit('updateUser', { email: payload });
                })
                .catch(err => console.log(err));
        },
    }
});

export default store;
