<template>
    <div>
        <h1>Agregar</h1>
        <form @submit.prevent="agregarTarea(nombre)">
            <input type="text" v-model="nombre" class="form-control mb-2" placeholder="Ingrese tarea">
            <button type="submit" class="btn btn-primary">Agregar</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Agregar',
    data() {
        return {
            nombre: ''
        }
    },
    methods:{
        ...mapActions(['agregarTarea'])
    }
}
</script>