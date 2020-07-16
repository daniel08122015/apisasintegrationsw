import {db} from '@/plugins/firebase';

import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

// Add a rule.
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
});

Object.keys(rules).forEach(rule => {
      extend(rule, rules[rule]);
});

export const state = () => ({
usuario:'',    
tareas: '',
titulo : 'hola amor',
curso : 'matematica',
})

export const getters = {
   existeUsuario(state){
       if(state.usuario === null){
           return false
       }
       return true
   }
}



// llenamos las tareas / llenar nuestro state
export const mutations = {
    setTareas(state, payload){
        state.tareas = payload
    },

    setTarea(state, payload){
        state.tareas.push(payload)
    },
    eliminarTarea(state, payload){
        const index = stare.tareas.findIndex(item=> item.id === payload.id);
        state.tareas.splice(index, 1)
    }

}

//llamamos a la bd
export const actions = {

    //ejecuta automaticamente 
    nuxtServerInit({commit},{req}){
        return db.collection('tareas').get()
        .then(query =>{
            const tareas = []
            query.forEach(element =>{
                let tarea = element.data();
                tarea.id = element.id;
                tareas.push(tarea)
                
            });
            return commit('setTareas', tareas);
        })
        .catch(function(error){
                    console.log("Error gettin document:" . error);
                })
    },

    async agregarTarea({commit}, payload){
        try{
            const doc = await db.collection('tareas').add({
                nombre: payload,
                fecha: new Date()
            })
            commit('setTarea', { nombre: payload, id: doc.id })
        }catch (error){
            console.log(error);
        }
    }, 
    
    eliminarTarea({commit}, payload){
        db.collection('tareas').doc(payload.id).delete()
        .then( function(){
            console.log("Documento ha sido borrado!!!");
            commit('eliminarTarea', payload)
        }).catch(function(error){
            console.log("error moving document:" , error);
        })  
    }
}

