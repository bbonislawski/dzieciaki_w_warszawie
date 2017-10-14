<template>
  <div>
    <places-list/>
  </div>
</template>

<script>
import Navigation from './Navigation'
import PlacesList from './PlacesList'

export default {
  name: 'main',
  components: {
    Navigation, PlacesList
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
