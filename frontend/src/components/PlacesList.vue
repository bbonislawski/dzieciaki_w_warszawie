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
      <b-col sm='3'>
        <b-form-group
            id="fieldset4"
            label="Dzielnica"
        >
          <multiselect v-model="selectedDistricts"
                       :options="districts"
                       :multiple="true"
                       :close-on-select="false"
                       class="mb-3" />
        </b-form-group>
      </b-col>
      </b-row>
      <b-row>
        <b-col sm='3'/>
        <b-col sm='4' style="margin-left: 50px;">
        <b-button-group>
          <b-button variant='success' style="height: 50px; width: 150px;" v-on:click="filterPlaces()">
            Filtruj
          </b-button>
          <b-button variant='secondary' style="height: 50px; width: 150px;" v-on:click="clearFilters()">
            Wyczyść
          </b-button>
        </b-button-group>
      </b-col>
        <b-col sm='4'/>
    </b-row>
    <b-row style='margin-top: 20px;' class='align-items-stretch'>
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
import Multiselect from 'vue-multiselect'

export default {
  name: 'places-list',
  data () {
    return {
      places: [],
        selectedAge: null,
        minRating: null,
        freeEntrance: null,
        selectedDistricts: [],
        minRatingOptions: [ 1, 2, 3, 4, 5],
        freeEntranceOptions: [ { value: 'false', text: 'Nie'}, { value: 'true', text: 'Tak' } ],
        districts: ['Bemowo', 'Białołęka', 'Bielany', 'Mokotów', 'Ochota', 'Praga-Południe', 'Praga-Północ',
          'Rembertów', 'Śródmieście', 'Targówek', 'Ursus', 'Ursynów', 'Wawer', 'Wesoła', 'Wilanów', 'Włochy', 'Wola',
          'Żoliborz']
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
      if(this.selectedDistricts)
        {
          filters.q.district_in = this.selectedDistricts
        }
      this.getPlaces(filters)
    },
    clearFilters() {
      this.selectedAge = null;
      this.freeEntrance = null;
      this.minRating = null;
      this.selectedDistricts = [];
      this.getPlaces();
    }
  },
  beforeMount(){
      this.getPlaces()
  },
  components: {
    PlaceRating, Multiselect
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.mb-2 {
  height: 95%;
}

.card-text {
  min-height: 100px;
}

.card-title {
  min-height: 53px;
}
</style>
