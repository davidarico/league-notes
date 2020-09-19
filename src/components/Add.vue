<template>
  <div class="add">
    <div class="entryField">
      <md-autocomplete v-model="userChamp" :md-options="champs">
        <label>User Champ</label>
      </md-autocomplete>
    </div>
    <div class="entryField">
      <md-autocomplete v-model="enemyChamp" :md-options="champs">
        <label>Enemy Champ</label>
      </md-autocomplete>
    </div>
    <div class="inputSection">
      <md-field>
        <label>Notes</label>
        <md-textarea v-model="notes" placeholder="No notes for current matchup"></md-textarea>
      </md-field>
    </div>
  </div>
</template>

<script>
import leagueChamps from '../league-champs'

export default {
  name: 'Add',
  data () {
    return {
      userChamp: null,
      enemyChamp: null,
      role: 'mid',
      win: true,
      champs: leagueChamps,
      notes: null
    }
  }
}
</script>

<style>
.entryField {
  width: 25%;
  display: inline-block;
}
.entryField:first-of-type {
  margin-right: 10%;
  margin-left: -5%;
}
.inputSection {
  width: 75%;
}
</style>