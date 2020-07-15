<template>
    <div>
        <b-container fluid="md"> 
            <h1>VUEX</h1>

            <b-row>
                    <b-col col="12">
                        <form @submit.prevent="agregarTarea(tarea)">
                            <input v-model="tarea" class="form-control mb-2">
                            <b-button type="submit">Agregar</b-button>
                        </form>
                    </b-col>
            </b-row>
        
            <ul>
                <li v-for="(item, index) in tareas" :key="index" >
                    {{item.id}} - {{item.nombre}}
                    <b-button class="btn-sm btn-warning">editar</b-button>
                    <b-button @click="eliminarTarea(item)" class="btn-sm btn-danger">eliminar</b-button>
                    <hr>
                </li>
            </ul>
        </b-container>
    </div>
</template>

<script>

import {db} from '@/plugins/firebase';

import { mapState, mapActions } from 'vuex';

import { actions } from '../../store';

export default {

         data(){
            return{
                tarea: ''
            }
        },


    //fetcth llamamos directamente a la tienda, antes que carge la pagina
    // fetch se cargan antes 
    // llamamos a store

    // fetch({store}){
    //      return db.collection('tareas').get()
    //     .then(query => {
    //          const tareas = []
    //         query.forEach(element =>{
    //             //console.log(element.data());
    //             tareas.push(element.data())
    //         });
    //         return store.commit('setTareas', tareas)
    //         // llamamos al commit de setTareas
    //     })
    //     .catch(function(error){
    //         console.log("Error gettin document:" . error);
    //     })
    // }

        computed:{

            //aqui llamamos al state de store por el computed
            ...mapState(['tareas'])
        // ...mapState({
        //         cotizacionVehicular: state => state.cotizacionVehicular.tareas
        //    })
        },
 
        // method: traemos el nombre d nuestra accion del store
        methods:{
            ...mapActions('cotizacionVehicular', ['agregarTarea','eliminarTarea']),

        }
   
}


</script>