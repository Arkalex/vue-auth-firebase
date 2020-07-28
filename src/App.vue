<template>
  <div class="container mt-2" id="app">
    <div>
      <router-link to="/" v-if="existeUsuario">Inicio</router-link> |
      <router-link to="/registro" v-if="!existeUsuario">Registro</router-link> |
      <router-link to="/acceso" v-if="!existeUsuario">Login</router-link>
      <button @click="cerrarSesion" v-if="existeUsuario">Logout</button>
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
