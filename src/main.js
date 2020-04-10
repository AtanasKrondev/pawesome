import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import firebaseConfig from './firebaseConfig.js'
import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth";
import { firestorePlugin } from 'vuefire'

import {
  MdApp,
  MdDrawer,
  MdToolbar,
  MdList,
  MdIcon,
  MdButton,
  MdContent,
  MdCard,
  MdAvatar,
  MdField,
  MdMenu,
  MdAutocomplete,
  MdHighlightText,
  MdTabs,
  MdDivider,
  MdSwitch,
  MdDialog,
  MdProgress,
  MdEmptyState,
} from 'vue-material/dist/components'

Vue.config.productionTip = false;
Vue.use(MdApp)
Vue.use(MdDrawer)
Vue.use(MdToolbar)
Vue.use(MdList)
Vue.use(MdIcon)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdCard)
Vue.use(MdAvatar)
Vue.use(MdField)
Vue.use(MdMenu)
Vue.use(MdAutocomplete)
Vue.use(MdHighlightText)
Vue.use(MdTabs)
Vue.use(MdDivider)
Vue.use(MdSwitch)
Vue.use(MdDialog)
Vue.use(MdProgress)
Vue.use(MdEmptyState)

Vue.use(firestorePlugin)

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();

let app;

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('initiate', user)
  if (!app) {
    app = new Vue({
      render: h => h(App),
      router,
      store,
    }).$mount('#app');
  }
})
