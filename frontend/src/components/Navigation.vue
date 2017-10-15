<template>
  <b-navbar toggleable="md" type="dark">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-navbar-brand style='width: 80%; padding-left: 10%' href="/#/"><b-img style='width: 100%' src="/static/logo1.png"/></b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar class="ml-auto" style='padding-right: 25%'>
        <b-nav-item href="/#/suggest_place" active>Dodaj miejsce</b-nav-item>
        <b-nav-item href="/#/places" active>Lista Miejsc</b-nav-item>
      </b-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Kohinoor Bangla';
}
.bg-light {
  background-color: #fff;
}
.navbar-dark .navbar-nav .nav-link {
  color: black;
  font-family: 'Kohinoor Bangla';
  font-size: 20px;
}
</style>
