<template>
  <div>
    <navigation/>
        <b-container class="bv-example-row">
            <b-row>
                <b-col sm='4' v-for="place in places">
                  <b-card v-bind:title="place.name"
                        v-bind:img-src="place.image"
                        v-bind:img-alt="place.name"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                  <p class="card-text">
                  {{ place.description }}
                  </p>
                  <b-button href="#" variant="primary">Sprawdź</b-button>
                </b-card>

              </b-col>
            </b-row>
        </b-container>
  </div>
</template>

<script>
import Navigation from './Navigation'

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
  },
  beforeMount(){
      this.getPlaces()
  },
  components: {
    Navigation
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
