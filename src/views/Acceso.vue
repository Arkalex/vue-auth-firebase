<template>
    <div>
        <h1>Login</h1>

        <form  @submit.prevent="ingresoUsuario({email: email, password: pass})">
            <input 
                type="email" 
                placeholder="Ingrese email"
                v-model=email
            >

            <input 
                type="password" 
                placeholder="Ingrese password"
                v-model=pass
            >
            <button type="submit">Login</button>
        </form>
        
        <p>{{error}}</p>

    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Acceso',
    data() {
        return {
            email: '',
            pass: ''
        }
    },
    methods: {
        ...mapActions(['ingresoUsuario'])
    },
    computed: {
        ...mapState(['error'])
    }
}
</script>