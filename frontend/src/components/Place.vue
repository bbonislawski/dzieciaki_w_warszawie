<template>
  <b-row>
    <b-card v-bind:title="this.place.name"
                v-bind:img-src="this.place.image"
                v-bind:img-alt="this.place.name"
                img-top
                tag="article"
                style="width: 100%;"
                class="mb-2">
      <p class="card-text">
      {{ this.place.description }}

      <place-rating v-bind:place="place" />
      </p>
    </b-card>
  </b-row>
</template>

<script>
import PlaceRating from './PlaceRating'

export default {
  name: 'place',
  data () {
    return {
      place: { name: '', image: '', description: '' }
    }
  },
  methods: {
    getPlace() {
      this.$http.get(API_URL + '/places/' + this.$route.params.id).then(response => {
        console.log(response.body);
        this.place = response.body;
        this.place.rated = this.$cookie.get('place_rated_' + this.place.id) == 'true'
      }, response => {
        console.log('error')
      });
    }
  },
  beforeMount(){
      this.getPlace()
  },
  components: {
    PlaceRating
  }
}
</script>

<style scoped>
</style>
