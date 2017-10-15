<template>
  <div>
    <b-row v-show="!this.alreadyDone">
      <b-card v-bind:title="'Oceniasz miejsce: ' + this.place.name"
                  tag="article"
                  style="width: 100%;"
                  class="mb-2">
        <p class="card-text">
          <b-form @submit="onSubmit">
            <b-form-group id="exampleInputGroup1"
                          label="Wiek dziecka:" label-for="exampleInput1"
                          >
              <b-form-input id="exampleInput1"
                            type="number" min='0' max='20' v-model="form.age" required
                            placeholder="Wprowadź wiek dziecka"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2"
                          label="Czy polecasz to miejsce?" label-for="exampleInput2">
              <b-form-select id="exampleInput2"
                            v-model="form.recommended" required
                            :options="['Tak', 'Nie']"
              ></b-form-select>
            </b-form-group>

            <b-form-group id="cleanlinessGroup"
                          label="Jak oceniasz czystość tego miejsca?" label-for="exampleInput3">
              <star-rating v-bind:increment="1"
                          v-bind:max-rating="10"
                          v-bind:rating="form.cleanlinessRating"
                          inactive-color="#000"
                          v-bind:show-rating=false
                          active-color="#fff000"
                          v-bind:star-size="30">
              </star-rating>
            </b-form-group>

            <b-form-group id="happinessGroup"
                          label="Jak oceniasz zadowolenie dziecka z tego miejsca?" label-for="exampleInput4">
              <star-rating v-bind:increment="1"
                          v-bind:max-rating="10"
                          v-bind:rating="form.happinessRating"
                          inactive-color="#000"
                          v-bind:show-rating=false
                          active-color="#fff000"
                          v-bind:star-size="30">
              </star-rating>
            </b-form-group>

            <b-form-group id="directionsGroup"
                          label="Jak oceniasz dostępność tego miejsca?" label-for="exampleInput5">
              <star-rating v-bind:increment="1"
                          v-bind:max-rating="10"
                          v-bind:rating="form.directionsRating"
                          inactive-color="#000"
                          v-bind:show-rating=false
                          active-color="#fff000"
                          v-bind:star-size="30">
              </star-rating>
            </b-form-group>

            <!-- <b-form-group id="exampleGroup4"> -->
            <!--   <b-form-checkbox v-model="form.checked" id="exampleInput4"> -->
            <!--     Check me out -->
            <!--   </b-form-checkbox> -->
            <!-- </b-form-group> -->
            <b-button type="submit" variant="primary">Wyślij ankietę</b-button>
            <b-button type="reset" variant="secondary">Wyczyść</b-button>
          </b-form>
        </p>
      </b-card>
    </b-row>
    <b-row v-show="this.alreadyDone">
      <b-col sm="12"> Dziękujemy za wypełnienie ankiety!</b-col>

      <b-col sm="12"><b-button variant="outline-primary" v-bind:href="'/#/places/' + this.place.id">Wróć</b-button></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'place',
  data () {
    return {
      alreadyDone: false,
      place: { name: '', image: '', description: '', lat: 0, lng: 0, rating: 0 },
      form: {
        age: '',
        recommended: '',
        cleanlinessRating: 0,
        happinessRating: 0,
        directionsRating: 0
      }
    }
  },
  methods: {
    getPlace() {
      this.$http.get(API_URL + '/places/' + this.$route.params.id).then(response => {
        console.log(response.body);
        this.place = response.body;
        this.alreadyDone = this.checkAlreadyDone();
      }, response => {
        console.log('error')
      });
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$http.post(API_URL + '/places/' + this.place.id + '/questionary', { data: this.form }).then(response => {
        this.$cookie.set('place_questionary_finished_' + this.place.id, true, 30);
        this.alreadyDone = true;
      }, response => {
        console.log('error')
      });
    },
    checkAlreadyDone() {
      return this.$cookie.get('place_questionary_finished_' + this.place.id)
    }
  },
  beforeMount(){
    this.getPlace()
  }
}
</script>

<style scoped>
p {
  text-align: left;
  padding-left: 40px;
  margin-bottom: 0px;
}
</style>
