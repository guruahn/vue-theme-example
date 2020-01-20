import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ThemePlugin from './plugins/theme.js'

Vue.config.productionTip = false
ThemePlugin.loadTheme()

router.beforeEach((to, from, next) => {
  if (!ThemePlugin.hasQuery(to) && ThemePlugin.hasQuery(from)) {
    const toWithQuery = Object.assign({}, to, { query: from.query })
    next(toWithQuery)
  } else {
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
