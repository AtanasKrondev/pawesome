import Vue from 'vue'
import App from './App.vue'
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

new Vue({
  render: h => h(App),
}).$mount('#app')
