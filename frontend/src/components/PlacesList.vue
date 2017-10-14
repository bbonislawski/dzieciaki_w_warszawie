<template>
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
          {{ place.short_description }}
        </p>
        <place-rating v-bind:place="place" />
        <b-button v-bind:href="'/#/places/' + place.id" variant="primary" style='border-radius: 15em'>Sprawdź</b-button>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import PlaceRating from './PlaceRating'

export default {
  name: 'places-list',
  data () {
    return {
      places: []
    }
  },
  methods: {
    getPlaces() {
      this.$http.get('http://localhost:3000/api/places').then(response => {
        this.places = response.body;
        for(let place of this.places){
          place.rated = this.$cookie.get('place_rated_' + place.id) == 'true'
        }
      }, response => {
        console.log('error')
      });
    },
  },
  beforeMount(){
      this.getPlaces()
  },
  components: {
    PlaceRating
  }
}
</script>

<style scoped>
</style>
