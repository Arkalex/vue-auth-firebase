<template>
  <div class="container mt-2" id="app">
    <div>
      <router-link to="/" v-if="existeUsuario" class="btn btn-dark mr-2">Inicio</router-link>
      <router-link to="/registro" v-if="!existeUsuario" class="btn btn-dark mr-2">Registro</router-link>
      <router-link to="/acceso" v-if="!existeUsuario" class="btn btn-dark mr-2">Login</router-link>
      <button @click="cerrarSesion" v-if="existeUsuario" class="btn btn-dark mr-2">Logout</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  methods: {
    ...mapActions(['cerrarSesion'])
  },
  computed: {
    ...mapGetters(['existeUsuario'])
  }  
}
</script>

</style>
