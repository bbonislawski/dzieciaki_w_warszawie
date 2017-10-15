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
            <p><b>Dzielnica:</b> {{ this.place.district }}</p>
            <p><b>Adres:</b> {{ this.place.address }}</p>
            <p><b>Opis:</b> {{ this.place.description }}</p>
          </b-col>

        </b-row>
        <place-rating v-bind:place="place" />
      </p>

      <b-button-group>
        <b-button v-if="!checkQuestionaryAlreadyDone()" variant="outline-primary" v-bind:href="'/#/places/' +
          this.place.id + '/questionary'" >Wypełnij ankietę</b-button>

        <b-button variant="outline-secondary" href='/#/places/'>Wróć do listy</b-button>
      </b-button-group>

      <div class="comments">
        <vue-disqus shortname="dzieciaki-1"></vue-disqus>
      </div>
    </b-card>
  </b-row>
</template>

<script>
import PlaceRating from './PlaceRating'
import VueDisqus from 'vue-disqus/VueDisqus.vue'

export default {
  name: 'place',
  data () {
    return {
      place: { name: '', image: '', description: '', lat: 0, lng: 0, rating: 0 }
    }
  },
  methods: {
    getPlace() {
      this.$http.get(API_URL + '/places/' + this.$route.params.id).then(response => {
        this.place = response.body;
        this.place.rated = this.$cookie.get('place_rated_' + this.place.id) == 'true'
      }, response => {
        console.log('error')
      });
    },
    checkQuestionaryAlreadyDone() {
      return this.$cookie.get('place_questionary_finished_' + this.place.id)
    },
    generateLocation() {
      return { lat: parseFloat(this.place.lat), lng: parseFloat(this.place.lng)}  ;
    }
  },
  beforeMount(){
      this.getPlace()
  },
  components: {
    PlaceRating, VueDisqus
  }
}
</script>

<style scoped>
p {
  text-align: left;
  padding-left: 40px;
  margin-bottom: 0px;
}
.btn {
  margin-left: 4%;
}
</style>
