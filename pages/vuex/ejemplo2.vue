<template>
    <div>
        <p>{{ numeroveintidos }}</p>
        <!-- <button @click="mostrarMarcas"></button> -->
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
//import { actions } from '../../store/cotizacion';
import { actions } from '../../store';

export default {
        
        computed:{

            //aqui llamamos al state de store por el computed
           // ...mapState(['counter'])
        ...mapState(['numeroveintidos']),
        },



 

        // method: traemos el nombre d nuestra accion del store
        methods:{
            //...mapActions(['mostrarMarcas'])

        }
}


</script>