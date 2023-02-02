<template>
  <div class="container">
    <h3 class="p-3 text-center">Vue.js - Display a list of items with v-for</h3>
    <table class="table table-striped table-bordered">
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Nom du film</td>
        <td>Année de tournage</td>
        <td>Nom du réalisateur</td>
      </tr>
      <tr v-for="location in locations" :key="location.id">
        <td>{{location.nom_tournage}}</td>
        <td>{{location.annee_tournage}}</td>
        <td>{{location.nom_realisateur}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import {getLocations} from "../_services";

let locations;
export default {
  mounted() {
    let JSONlocations = getLocations(localStorage.getItem('jwt_token'));
    locations = JSON.parse(JSONlocations);
  },
  name: "locations",
  data() {
    return {
      locations: locations,
    };
  },
  methods: {

  },
};
</script>

<style scoped>

</style>