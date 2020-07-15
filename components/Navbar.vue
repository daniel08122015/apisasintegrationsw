<template>
    <div>
  <b-navbar toggleable="md" type="dark" variant="info" class="header" > <!-- fixed="top" v-if="!existeUsuario" -->
    <b-navbar-brand href="#">
      <img src="../assets/img/logo-letter-1p.png" alt="">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Inicio</b-nav-item>
        <b-nav-item to="/blog">Blog</b-nav-item>
        <b-nav-item to="/vuex">Vuex</b-nav-item>
        <b-nav-item to="/vuex/cliente">Cliente</b-nav-item>
        <b-nav-item to="/vuex/cotizacion" >Cotización Vehicular</b-nav-item>
         <b-nav-item to="/vuex/ejemplo">ejemplo</b-nav-item>
         <b-nav-item to="/vuex/ejemplo2">ejemplo2</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-link to="/vuex/login/Ingreso" size="sm" class="my-2 my-sm-0 btn btn-primary">Cerrar Sesión</b-link>
        </b-nav-form>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>


<script>

import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters(['existeUsuario'])
  }
}
</script>