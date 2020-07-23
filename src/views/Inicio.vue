<template>
    <div>
        <h1>Ruta protegida</h1>   
        <p>{{usuario.email}}</p>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'Inicio',
    computed: {
        ...mapState(['usuario'])
    }

}
</script>