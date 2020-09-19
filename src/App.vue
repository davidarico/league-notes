<template>
  <div id="app">
    <div class="body">
      <Search v-if="currentPage === 'search'" />
      <Add v-if="currentPage === 'add'" />
      <History v-if="currentPage === 'history'" />
    </div>
    <div class="nav-bar">
      <md-bottom-bar md-type="fixed" class="md-accent">
        <div class="nav-button"> 
          <md-bottom-bar-item md-icon="Search" @click="currentPage = 'search'"></md-bottom-bar-item>
        </div>
        <div class="nav-button"> 
          <md-bottom-bar-item md-icon="Add" @click="currentPage = 'add'"></md-bottom-bar-item>
        </div>
        <div class="nav-button"> 
          <md-bottom-bar-item md-icon="History" @click="currentPage = 'history'"></md-bottom-bar-item>
        </div>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
import Search from './components/Search'
import Add from './components/Add'
import History from './components/History'

export default {
  name: 'App',
  components: {
    Search,
    Add,
    History
  },
  data() {
    return {
      currentPage: 'search'
    }
  },
  methods: {
    test() {
      this.$db.test.insert({hello: 'world'}, (err, doc) => {
        console.log(err)
        console.log(doc)
      })

      this.$db.test.find({ hello: 'world'}, (err, docs) => {
        console.log(docs)
      })
    }
  }
}
</script>

<style>
.nav-button {
  width: 33%;
}

.nav-bar {
  width: 322px;
  height: 200px;
  display: inline-flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid rgba(#000, .26);
  background: rgba(#000, .06);
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;

}
body {
  background-color: rgb(40, 40, 40);
  height: 100%;
}
</style>
