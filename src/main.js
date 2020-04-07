import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import firebase from 'firebase/app'

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
} from 'vue-material/dist/components'

Vue.config.productionTip = false
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

const firebaseConfig = {
  apiKey: "AIzaSyAiWeqZkIPopGzq9DgRwN4CFLqeSvHQ1Go",
  authDomain: "paw-esome.firebaseapp.com",
  databaseURL: "https://paw-esome.firebaseio.com",
  projectId: "paw-esome",
  storageBucket: "paw-esome.appspot.com",
  messagingSenderId: "91561704662",
  appId: "1:91561704662:web:d4b07f88c1182779cedd77"
};

firebase.initializeApp(firebaseConfig);

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
