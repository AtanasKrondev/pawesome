import Vue from 'vue';
import Vuex from 'vuex';
import { auth, db } from "./main.js"
import router from './router.js'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null,
        loading: false,
        noResult: false,
        showSnackbar: false,
        snackbarText: '',
    },
    getters: {
        user: state => {
            return state.user;
        },
        loading: state => {
            return state.loading
        },
        noResult: state => {
            return state.noResult
        },
        showSnackbar: state => {
            return state.showSnackbar
        },
        snackbarText: state => {
            return state.snackbarText
        }
    },
    mutations: {
        setUser: (state, payload) => {
            state.user = payload;
        },
        updateUser: (state, payload) => {
            state.user = Object.assign({}, state.user, payload)
        },
        setLoading: (state, payload) => {
            state.loading = payload;
        },
        setNoResult: (state, payload) => {
            state.noResult = payload;
        },
        setShowSnackbar: (state, payload) => {
            state.showSnackbar = payload;
        },
        setSnackbarText: (state, payload) => {
            state.snackbarText = payload;
        },
    },
    actions: {
        register: ({ commit }, payload) => {
            auth
                .createUserWithEmailAndPassword(payload.email, payload.password)
                .then((response) => {
                    commit('setUser', response.user);
                    commit('setSnackbarText', 'Registration successful')
                    commit('setShowSnackbar', true);
                    router.push("/profile");
                    db
                        .collection("users")
                        .doc(response.user.uid)
                        .set({})
                        .catch(catchError);
                })
                .catch(catchError);
        },
        login: ({ commit }, payload) => {
            auth
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then((response) => {
                    commit('setUser', response.user);
                    commit('setSnackbarText', 'Login successful')
                    commit('setShowSnackbar', true);
                    router.push("/");
                })
                .catch(catchError);
        },
        logout: ({ commit }) => {
            auth
                .signOut()
                .then(() => {
                    commit('setUser', null);
                    commit('setSnackbarText', 'Logout successful')
                    commit('setShowSnackbar', true);
                    router.push("/login");
                })
                .catch(catchError);
        },
        initiate: ({ commit }, payload) => {
            commit('setUser', payload);
        },
        updateProfile: ({ commit }, payload) => {
            auth.currentUser.updateProfile(payload)
                .then(() => {
                    commit('updateUser', payload);
                    commit('setSnackbarText', 'Profile updated')
                    commit('setShowSnackbar', true);
                })
                .catch(catchError);
        },
        updateEmail: ({ commit }, payload) => {
            auth.currentUser.updateEmail(payload)
                .then(() => {
                    commit('updateUser', { email: payload });
                    commit('setSnackbarText', 'Email updated')
                    commit('setShowSnackbar', true);
                })
                .catch(catchError);
        },
    }
});

const catchError = err => {
    store.commit('setSnackbarText', err.message)
    store.commit('setShowSnackbar', true);
};

export default store;
