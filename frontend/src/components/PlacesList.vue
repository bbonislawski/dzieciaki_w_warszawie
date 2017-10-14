<template>
  <div>
    <b-row>
      <b-col sm='3'>
        <b-form-group
            id="fieldset1"
            label="Wiek dziecka"
        >
          <b-form-input v-model="selectedAge"
                        type="number"
                        min='0'
                        max='20'
                        />
        </b-form-group>
      </b-col>
      <b-col sm='3'>

        <b-form-group
            id="fieldset2"
            label="Minimalna ocena"
        >
          <b-form-select v-model="minRating" :options="minRatingOptions" class="mb-3" />
          </b-form-group>
        </span>
      </b-col>
      <b-col sm='3'>
        <b-form-group
            id="fieldset3"
            label="Darmowe wejscie"
        >
          <b-form-select v-model="freeEntrance" :options="freeEntranceOptions" class="mb-3" />
        </b-form-group>
      </b-col>
        <b-button variant='secondary' style="height: 50px; width: 150px; margin-top: 27px;" v-on:click="filterPlaces()">
          Filtruj
        </b-button>
    </b-row>
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
  </div>
</template>

<script>
import PlaceRating from './PlaceRating'

export default {
  name: 'places-list',
  data () {
    return {
      places: [],
        selectedAge: null,
        minRating: null,
        freeEntrance: null,
        minRatingOptions: [ 1, 2, 3, 4, 5],
        freeEntranceOptions: [ { value: 'false', text: 'Nie'}, { value: 'true', text: 'Tak' } ]
    }
  },
  methods: {
    getPlaces(filters) {
      this.$http.get(API_URL + '/places', {params: filters}).then(response => {
        this.places = response.body;
        for(let place of this.places){
          place.rated = this.$cookie.get('place_rated_' + place.id) == 'true'
        }
      }, response => {
        console.log('error')
      });
    },
    filterPlaces() {
      let filters = {
        q: {
        }
      }
      if(!!this.selectedAge)
        {
          filters.q.min_age_lt = this.selectedAge
          filters.q.max_age_gt = this.selectedAge
        }
      if(!!this.freeEntrance)
        {
          filters.q.free_entrance_eq = (this.freeEntrance == 'true')
        }
      if(!!this.minRating)
        {
          filters.q.avg_rating_gteq = this.minRating
        }
      this.getPlaces(filters)
    }
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
