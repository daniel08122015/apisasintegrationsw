<template>
    <div>
        <b-container fluid="md" class="content_coti">
         
        <h2 class="text-left mb-5">Nueva Cotización Vehicular</h2>
        
        <h4 class="mb-4">Información del Vehículo</h4>

<ValidationObserver ref="form" v-slot="{ invalid }">
        <b-form @submit.prevent="onSubmit">
            <b-row>
                <b-col sm="12" md="12" lg="3">
                    <ValidationProvider name="Clase" rules="required" v-slot="{ valid, errors }">
                    <b-form-group class="form-group add-style" label="Clase:">
                     <b-select place v-model="coti_clase_seleccionada" :options="coti_clase_seleccion" :state="errors[0] ? false : (valid ? true : null)"></b-select>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </b-form-group>
                    </ValidationProvider>
                </b-col>

                <b-col sm="12" md="12" lg="3">
                    <ValidationProvider name="Marca" rules="required" v-slot="{ valid, errors }">
                    <b-form-group class="form-group add-style" label="Marca:">
                        <select v-model="coti_marcas_seleccionada"  :state="errors[0] ? false : (valid ? true : null)" v-on:change="getModelo($event.target.value)" class="form-control" id="docente">
                        <option value="">Selecciona la marca de auto</option>
                        <option v-for="(item, index) in coti_marcas" :key="index" v-bind:value="item.idCarBrand">{{item.name}}</option>
                        </select>
    
                        <span class="text-danger">{{ errors[0] }}</span>
                    </b-form-group>
                    </ValidationProvider>
                </b-col>
                <b-col sm="12" md="12" lg="3">                                         
                     <b-form-group class="form-group add-style" label="Modelo:">
                        <select v-model="coti_modelo_seleccionada"  class="form-control" id="docente">
                        <option value="">Modelo</option>
                        <option v-for="(modelo, index) in coti_modelo" :key="index" v-bind:value="index">{{modelo.name}}</option>
                        </select>
                    </b-form-group>
                </b-col>
                 <b-col sm="12" md="12" lg="3">
                    <b-form-group class="form-group add-style" label="Versión:">
                        <b-select place v-model="coti_version_seleccionada" :options="coti_version_seleccion"></b-select>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row>
                <b-col sm="12" md="12" lg="3">
                    <b-form-group class="form-group add-style" label="Año:">
                        <b-input type="number" v-model="coti_ano"></b-input>
                    </b-form-group>
                </b-col>
                <b-col sm="12" md="12" lg="3">
                    <b-form-group class="form-group add-style" label="Suma Aseguradora:">
                        <b-input type="text" v-model="coti_suma_asegurada"></b-input>
                    </b-form-group>
                </b-col>
            </b-row>

             <b-row>
                 <b-col sm="12" md="12" lg="3">
                    <b-form-group class="form-group add-style" label="Estado:">
                        <b-input type="text" v-model="coti_estado"></b-input>
                    </b-form-group>
                </b-col>
                <b-col sm="12" md="12" lg="3">
                    <b-form-group class="form-group add-style" label="Ejecutivo:">
                        <b-select place v-model="coti_ejecutivo_seleccionada" :options="coti_ejecutivo_seleccion"></b-select>
                    </b-form-group>
                </b-col>
                 <b-col sm="12" md="12" lg="3">
                    <b-form-group class="form-group add-style" label="Tipo de uso:">
                        <b-select place v-model="coti_tipo_de_uso_seleccionada" :options="coti_tipo_de_uso_seleccion"></b-select>
                    </b-form-group>
                </b-col>
                 <b-col sm="12" md="12" lg="3">
                    <b-form-group class="form-group add-style" label="Antiguedad:">
                        <b-select place v-model="coti_antiguedad_seleccionada" :options="coti_antiguedad_seleccion"></b-select>
                    </b-form-group>
                </b-col>
             </b-row>

             <b-row>
                  <b-col sm="12" md="12" lg="12">
                    <b-form-group class="form-group add-style" label="Descripción:">
                        <b-textarea v-model="coti_descripcion_seleccionada"></b-textarea>
                    </b-form-group>
                </b-col>
             </b-row>


             <b-button variant="primary" type="submit" :disabled="invalid">Guardar</b-button>
</b-form>
</ValidationObserver>
       <!-- :disabled="habilitado == 0" -->
<!-- como inyectar axios en nuxt
dependen inyection

inyecines de dependencias -->



       
        <h4 class="mt-5 mb-4">Información de la Cotización</h4>
        <div id="table_cv" class="mb-5">
               <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Ruc</th>
                        <th scope="col">CIA Seguros</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in ciaseguros" :key="index">
                            <th scope="row">{{item.ruc}}</th>
                            <td>{{item.name}}</td>
                        </tr>
                    </tbody>
                    </table>
        </div>

        </b-container>
    </div>
</template>

<style scoped>
.btn {
    padding: 0.475rem 4.75rem;
}
thead {
    background-color: #035622;
    color: #fff;
}

.content_coti {
    background-color: white;
    margin-top: 1.4%;
    padding: 2% 4%;
    border-radius: 22px;
}

.add-style {
   color: #984c8f;
    font-weight: bold;
}

@media (min-width: 1200px){
.container, .container-sm, .container-md, .container-lg, .container-xl {
    max-width: 1453px;
}
}
</style>
<script>

import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});

export default {

    components: {
        ValidationProvider,
        ValidationObserver
    },

    data(){
        return{
            email:'',
            ciaseguros:[],

            coti_descripcion_seleccionada:'',
            coti_antiguedad_seleccionada: null,
            coti_antiguedad_seleccion: [
                { value : null , text:'Seleccione la antiguedad'},
                { value : '1' , text:'Nuevos'},
                { value : '2' , text:'1 año'},
                { value : '3' , text:'2 años'},
                { value : '4' , text:'3 año'},
                { value : '5' , text:'4 años'},
                { value : '6' , text:'5 año'},
                { value : '7' , text:'6 años'},
                { value : '8' , text:'7 año'},
                { value : '9' , text:'8 años'},
                { value : '10' , text:'9 año'},
                { value : '11' , text:'10 años'},
                { value : '12' , text:'11 año'},
                { value : '13' , text:'12 años'},
                { value : '14' , text:'13 año'},
                { value : '15' , text:'14 años'},
                { value : '16' , text:'15 año'},
                { value : '17' , text:'16 años'},
                { value : '18' , text:'17 año'},
                { value : '19' , text:'18 años'},
                { value : '20' , text:'19 año'}
            ],

            coti_tipo_de_uso_seleccionada:null,
            coti_tipo_de_uso_seleccion: [
                { value : null , text:'Seleccione el tipo de uso'},
                { value : '1' , text:'COMERCIAL'},
                { value : '2' , text:'PARTICULAR'},
                { value : '3' , text:'TAXI'},
                { value : '4' , text:'TRANSPORTE DE PERSONAL'},
                { value : '5' , text:'TURISMO'},
            ],

            coti_ejecutivo_seleccionada: null,
            coti_ejecutivo_seleccion: [
                { value : null , text:'Seleccione Ejecutivo'},
                { value : '1' , text:'Martin Chavez Chavez'},
                { value : '2' , text:'Maria Perez Chavez'}
                ],

            coti_estado:'',
            coti_suma_asegurada:'',
            coti_ano:null,
            
            coti_version_seleccionada: null,
            coti_version_seleccion: null,

            coti_clase_seleccionada: null,
            coti_clase_seleccion:[
                { value : null , text:'Selecciona la clase'},
                { value : '1' , text: 'AUTO'},
                { value : '2' , text: 'BUS'},
                { value : '3' , text: 'CAMION'},
                { value : '4' , text: 'CAMIONETA'},
                { value : '5' , text: 'CAMIONETA'},
                { value : '6' , text: 'CAMIONETA PANEL'},
                { value : '7' , text: 'CAMIONETA PICK UP'},
                { value : '8' , text: 'CAMIONETA RURAL'},
                { value : '9' , text: 'CAMIONETA RURAL'},
                { value : '10' , text: 'CAMIONETA STATION WAGON'},
                { value : '11' , text: 'CAMIONETA VAN'},
                { value : '12' , text: 'CISTERNA'},
                { value : '13' , text: 'F700'},
                { value : '14' , text: 'GENERADOR'},
                { value : '15' , text: 'MACAT'},
                { value : '16' , text: 'MAQUINARIA'},
                { value : '17' , text: 'MICROBUS'},
                { value : '18' , text: 'MOTOCICLETA'},
                { value : '19' , text: 'OMNIBUS'},
                { value : '20' , text: 'REMOLCADOR'},
                { value : '21' , text: 'SCOOTER'},
                { value : '22' , text: 'SEMI REMOLQUE'},
                { value : '23' , text: 'TRACTO'},
                { value : '24' , text: 'VOLQUETE'},
                
              
            ],
            
            valor: null,
            valorMarca: null,
            coti_marcas_seleccionada : '', // seleccione el que esta aqui
            coti_marcas:[],  //lista de marcas

            coti_modelo_seleccionada : '', // seleccione el que esta aqui
            coti_modelo:[],  //lista de marcas
           

            body: `<CarBrandIn>
                        <name></name>
                        </CarBrandIn>`,
            headers : { 
                    'Content-Type' : 'application/xml' ,
                    'Accept' : 'application/json' ,
                }

         

        }
    },


    computed:{
        bodyModelo(){
            return `<ModelCarIn>
                    <name></name>
                    <idCarBrand>${this.valorMarca}</idCarBrand>
                    </ModelCarIn>`.replace(/\s/g, "")
        },

        bodyCiaSeguros(){
            return `<CiaEnsuresIn>
                    <ruc></ruc>
                    </CiaEnsuresIn>`
        }
    
    },

    created(){
        this.getMarca(),
        this.getCiaSeguros()
     },



     methods:{
         async getMarca(){
            try{
             const res = await this.$axios.post('http://localhost:3000/WSCarBrand/listCarBrands/', this.body , { headers: this.headers})
                //console.log(res.data.data.data)
                this.coti_marcas = res.data.data.data
                //console.log("muestra id: ", this.coti_marca.id)
            }catch(error) {
                console.log(error)
            }
         },

          async getModelo(idMarca){
            
            this.valorMarca = idMarca

            try {
                
             const res = await this.$axios.post('http://localhost:3000/WSModelCar/listModelCars/', this.bodyModelo, { headers: this.headers})

                this.coti_modelo = res.data.data.data

                this.valor = await res.data.data.data[0].idCarBrand

                console.log(this.valor)

            }catch(error) {
                console.log(error)
            }
         },

          async getCiaSeguros(){
                try{
                    const res = await this.$axios.post('http://localhost:3000/WSCiaEnsures/listCiaEnsures/', this.bodyCiaSeguros , { headers: this.headers})
                         console.log(res.data.data.data)
                         this.ciaseguros = res.data.data.data
                        //console.log("muestra id: ", this.coti_marca.id)
                    }catch(error) {
                        console.log(error)
                }
          },

          onSubmit () {
                this.$refs.form.validate().then(success => {
                    if (!success) {
                    return;
                    }

                    alert('Form has been submitted!');

                    // Resetting Values
                    this.firstName = this.lastName = this.email = '';

                    // Wait until the models are updated in the UI
                    this.$nextTick(() => {
                    this.$refs.form.reset();
                    });
                });
        }

     }
}


</script>