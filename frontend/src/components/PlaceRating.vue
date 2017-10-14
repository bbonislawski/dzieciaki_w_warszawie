<template>
  <div>
    <star-rating v-bind:increment="1"
                v-bind:max-rating="5"
                v-bind:rating=place.rating
                v-bind:read-only=isRated(place)
                inactive-color="#000"
                v-bind:show-rating=false
                @rating-selected ="setRating($event, place)"
                v-bind:active-color="starColor(place)"
                style='justify-content: center'
                v-bind:star-size="30">
    </star-rating>
    <p>
      {{ getRating(place) }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'place-rating',
  props: ['place'],
  data () {
    return {
    }
  },
  methods: {
    setRating(rating, place) {
      this.$http.post(API_URL + '/places/' + place.id + '/rate', { rating: rating }).then(response => {
        this.$cookie.set('place_rated_' + place.id, rating, 30);
        place.rated = true
        place.rating = response.body.rating;
      }, response => {
        console.log('error')
      });
    },
    starColor(place) {
      if(this.isRated(place))
        return '#bb0000'
      else
        return '#fff000'
    },
    getRating(place) {
      if(this.isRated(place))
        {
          return("Twoja ocena to: " + this.$cookie.get('place_rated_' + place.id))
        }
      else
        {
          return " ";
        }
    },
    isRated(place) {
      return !!this.$cookie.get('place_rated_' + place.id)
    }
  }
}
</script>

<style scoped>
</style>
