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
      <b-row>
        <b-col sm='5'>
          <gmap-map
            v-bind:center="generateLocation()"
            :zoom="15"
            map-type-id="terrain"
            style="width: 100%; height: 300px"
          >
            <gmap-marker
                :position="generateLocation()"
                :clickable="true"
                >
            </gmap-marker>
          </gmap-map>

        </b-col>
        <b-col sm='7'>
          {{ this.place.description }}
        </b-col>

      </b-row>
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
      place: { name: '', image: '', description: '', lat: 0, lng: 0 }
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
    },
    generateLocation() {
      return { lat: parseFloat(this.place.lat), lng: parseFloat(this.place.lng)}  ;
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
