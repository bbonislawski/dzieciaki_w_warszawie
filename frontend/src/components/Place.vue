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
      </p>
    </b-card>
  </b-row>
</template>

<script>
export default {
  name: 'place',
  data () {
    return {
      place: { name: '', image: '', description: '' }
    }
  },
  methods: {
    getPlace() {
      this.$http.get('http://localhost:3000/api/places/' + this.$route.params.id).then(response => {
        console.log(response.body);
        this.place = response.body;
      }, response => {
        console.log('error')
      });
    }
  },
  beforeMount(){
      this.getPlace()
  }
}
</script>

<style scoped>
</style>
