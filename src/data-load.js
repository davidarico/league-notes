console.log('LOADING DATASTORE')

import Vue from 'vue'

import Datastore from 'nedb'
import path from 'path'
import { remote } from 'electron'

const dataPath = path.join(remote.app.getPath('user_data'), '/data.db')

const db = new Datastore({
  autoload: true,
  filename: dataPath
})

Vue.prototype.$db = db