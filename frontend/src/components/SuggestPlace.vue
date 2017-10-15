<template>
  <div>
    <b-row v-show="!this.alreadyDone">
      <b-card title="Dodaj nowe miejsce"
              tag="article"
              style="width: 100%;"
              class="mb-2">
        <p class="card-text">
          <b-form @submit="onSubmit">
            <b-form-group id="exampleInputGroup1"
                          label="Nazwa miejsca:" label-for="exampleInput1"
                          >
              <b-form-input id="exampleInput1"
                            type="text" v-model="form.name" required
                            placeholder="Podaj nazwę"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup2"
                          label="Opis miejsca:" label-for="exampleInput2"
                          >
              <b-form-textarea id="exampleInput2"
                            v-model="form.description" required
                            placeholder="Opisz to miejsce"
              ></b-form-textarea>
            </b-form-group>

            <b-form-group id="exampleInputGroup3"
                          label="Zdjecie:" label-for="exampleInput3"
                          >
              <b-form-input id="exampleInput3"
                            type="text" v-model="form.image" required
                            placeholder="Podaj adres zdjęcia"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup6"
                          label="Adres:" label-for="exampleInput6"
                          >
              <b-form-input id="exampleInput6"
                            type="text" v-model="form.address" required
                            placeholder="Podaj adres miejsca"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup7"
                          label="Dzielnica:" label-for="exampleInput7"
                          >
              <b-form-input id="exampleInput7"
                            type="text" v-model="form.district" required
                            placeholder="Podaj dzielnicę"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup9"
                          label="Szerokosc geograficzna:" label-for="exampleInput9"
                          >
              <b-form-input id="exampleInput9"
                            type="number" step="0.0000001" v-model="form.lat" required
                            placeholder="Podaj szerokosc geograficzna"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup10"
                          label="Długość geograficzna:" label-for="exampleInput10"
                          >
              <b-form-input id="exampleInput10"
                            type="number" step="0.0000001" v-model="form.lng" required
                            placeholder="Podaj wysokość geograficzna"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup4"
                          label="Sugerowany minimalny wiek dziecka:" label-for="exampleInput4"
                          >
              <b-form-input id="exampleInput4"
                            type="number" min='0' max='20' v-model="form.min_age" required
                            placeholder="Wprowadź minimalny sugerowany wiek dziecka"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup5"
                          label="Sugerowany maksymalny wiek dziecka:" label-for="exampleInput5"
                          >
              <b-form-input id="exampleInput5"
                            type="number" min='0' max='20' v-model="form.max_age" required
                            placeholder="Wprowadź maksymalny sugerowany wiek dziecka"
              ></b-form-input>
            </b-form-group>


            <b-button type="submit" variant="primary">Dodaj miejsce</b-button>
            <b-button type="reset" variant="secondary">Wyczyść</b-button>
          </b-form>
        </p>
      </b-card>
    </b-row>
    <b-row v-show="this.alreadyDone">
      <b-col sm="12"> Dziękujemy za dodanie miejsca. Pojawi się na liście gdy je sprawdzimy i zaakceptujemy!</b-col>

      <b-col sm="12"><b-button variant="outline-primary" href='/#/places/'>Wróć</b-button></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'place',
  data () {
    return {
      alreadyDone: false,
      form: {
        name: '',
        min_age: 0,
        max_age: 20,
        description: '',
        image: '',
        lat: 0,
        lng: 0,
        address: '',
        district: ''
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$http.post(API_URL + '/places', this.form).then(response => {
        this.alreadyDone = true;
      }, response => {
        console.log('error')
      });
    }
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
