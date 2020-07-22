import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from '../firebase';
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    errores: null
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario = payload;
    },
    setError(state, payload){
      state.error = payload;
    }
  },
  actions: {
    crearUsuario({commit}, usuario) {
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then( res => {
          console.log(res)
          const usuarioCreado = {
            email: res.user.email,
            uid: res.user.uid
          }
          commit('setUsuario', usuarioCreado);

          router.push('/')

        })
        .catch( err => {
          console.log(err);
          commit('setError', err);
        })
    },
    ingresoUsuario({commit}, usuario){
      auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err);
          commit('setError', err);
        })
    }
  },
  modules: {
  }
})
