<template>
  <div>
    <h1>{{ msg }}</h1>
    <button class="btn btn-primary" v-on:click="getPlaces()">Get a Quote</button>
    <ul id="places-list">
      <li v-for="place in places">
        {{ place.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'main',
  fetchData() {

  },
  data () {
    return {
      msg: 'Dzieciaki w Warszawie',
      places: []
    }
  },
  methods: {
    getPlaces() {
      this.$http.get('http://localhost:3000/api/places').then(response => {
        console.log('success')
        console.log(response.body);
        this.places = response.body;
      }, response => {
        console.log('error')
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
