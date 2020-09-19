import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

import Datastore from 'nedb'

let db = {}

db.matches = new Datastore({
  autoload: true,
  filename: './user_data/matches.db'
})

db.notes = new Datastore({
  autoload: true,
  filename: './user_data/notes.db'
})

db.test = db.notes = new Datastore({
  autoload: true,
  filename: './user_data/test.db'
})

console.log('LOADING DATASTORE')
Vue.prototype.$db = db

Vue.config.productionTip = false

Vue.use(VueMaterial)

new Vue({
  render: h => h(App),
}).$mount('#app')
