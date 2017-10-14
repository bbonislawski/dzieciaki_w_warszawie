<template>
  <b-navbar toggleable="md" type="dark">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-navbar-brand style='width: 80%; padding-left: 10%' href="#"><b-img style='width: 100%' src="/static/logo1.png"/></b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">


      <b-nav is-nav-bar class="ml-auto" style='padding-right: 25%'>
        <b-nav-item href="/#/places" active>Miejsca</b-nav-item>
        <b-nav-item href="/#/events">Wydarzenia</b-nav-item>

        <!-- <b-nav-form> -->
        <!--   <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Szukaj"/> -->
        <!--   <b-button size="sm" class="my-2 my-sm-0" type="submit">Szukaj</b-button> -->
        <!-- </b-nav-form> -->
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
