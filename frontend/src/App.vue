<template>
  <div id="app">
      <navigation/>
    <b-container class="bv-example-row">
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Kohinoor Bangla' Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
