<template>
    <div>
        <b-container fluid="md" class="content_coti">
         
        <h2 class="text-left mb-5">Nueva Cliente</h2>
        
        <h4 class="mb-4">Datos Principales</h4>

        <ValidationObserver ref="form" v-slot="{ invalid }">


                <b-form @submit.prevent="onSubmit">

                    <b-row>
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                           
                                <b-form-group label="Tipo de Persona">
                                    <b-form-checkbox-group
                                    v-model="selected"
                                    :options="options"
                                    name="flavour-1a"
                                    ></b-form-checkbox-group>
                                </b-form-group>

                            </ValidationProvider>
                        </b-col>

                         <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                           
                                <b-form-group class="form-group add-style" label="Estado:">
                                    <b-input type="text" v-model="cli_estado"></b-input>
                                </b-form-group>

                            </ValidationProvider>
                        </b-col>

                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                           
                                <b-form-group class="form-group add-style" label="Usuario:">
                                    <b-input type="text" v-model="cli_usuario"></b-input>
                                </b-form-group>

                            </ValidationProvider>
                        </b-col>

                         <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                           
                                    <b-form-group class="form-group add-style" label="Grupo Económica:">
                                    <b-select place v-model="cli_grupo_economico_seleccionada" :options="cli_grupo_economico_seleccion"></b-select>
                                    </b-form-group>

                            </ValidationProvider>
                        </b-col>

                    </b-row>
                    <hr>
                     <h4 class="mb-4 mt-5">Comunicación Electrónica</h4>
                    <b-row>
                          <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                           
                                <b-form-group label="Comunicación Electrónica">
                                    <b-form-checkbox
                                        v-for="option in optionse"
                                        v-model="selectede"
                                        :key="option.value"
                                        :value="option.value"
                                        name="flavour-4a"
                                        inline
                                    >
                                        {{ option.text }}
                                    </b-form-checkbox>
                                </b-form-group>

                            </ValidationProvider>
                        </b-col>
                    </b-row>
 <hr>
                     <h4 class="mb-4 mt-5">Información de Cliente Natural</h4>

                     
                     <b-row>
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                           
                                <b-form-group class="form-group add-style" label="Ap. Paterno:">
                                    <b-input type="text" v-model="cli_apellido_paterno"></b-input>
                                </b-form-group>

                            </ValidationProvider>
                        </b-col>
                         <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                           
                                <b-form-group class="form-group add-style" label="Ap. Materno:">
                                    <b-input type="text" v-model="cli_apellido_materno"></b-input>
                                </b-form-group>

                            </ValidationProvider>
                        </b-col>
                          <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                           
                                <b-form-group class="form-group add-style" label="Nombres:">
                                    <b-input type="text" v-model="cli_nombre"></b-input>
                                </b-form-group>

                            </ValidationProvider> 
                            </b-col>
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                           
                        <b-form-group class="form-group add-style" label="Documento:">
                            <b-select place v-model="cli_documento_seleccionada" :options="cli_documento_seleccion"></b-select>
                            </b-form-group>

                            </ValidationProvider>
                        </b-col>
                     </b-row>

                      <b-row>
                           <b-col sm="12" md="12" lg="3">
                                <ValidationProvider>
                            
                            <b-form-group class="form-group add-style" label="Ejecutivo Comercial:">
                                <b-select place v-model="cli_ejecutivo_comercial_seleccionada" :options="cli_ejecutivo_comercial_seleccion"></b-select>
                                </b-form-group>

                                </ValidationProvider>
                          </b-col>

                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                           
                            <b-form-group label="Genero" >
                                    <b-form-checkbox
                                        v-for="option in optionsg"
                                        v-model="selectedg"
                                        :key="option.value"
                                        :value="option.value"
                                        name="flavour-4a"
                                        inline
                                    >
                                        {{ option.text }}
                                    </b-form-checkbox>
                                </b-form-group>

                            </ValidationProvider>
                        </b-col>

                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                           
                                    <label for="example-datepicker" class="add-style">Fecha de Nacimiento</label>
                                    <b-form-datepicker id="example-datepicker" v-model="cli_fecha_nacimiento" class="mb-2"></b-form-datepicker>

                            </ValidationProvider>
                        </b-col>

                         <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group class="form-group add-style" label="Vinculo:">
                                    <b-input type="text" v-model="cli_vinculo"></b-input>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                      </b-row>
 <hr>
                    <h4 class="mb-4 mt-5">Ubicación</h4>
                    <h6 class="mb-4 mt-5">Copiar Cobranza</h6>
                    <b-row>
                         <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group class="form-group add-style" label="Dirección:">
                                    <b-input type="text" v-model="cli_direccion"></b-input>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>

                        <b-col sm="12" md="12" lg="3">
                             <ValidationProvider>
                                    <b-form-group class="form-group add-style" label="Departamento:">
                                    <b-select place v-model="cli_departamento_seleccionada" :options="cli_departamento_seleccion"></b-select>
                                    </b-form-group>
                            </ValidationProvider>
                        </b-col>

                         <b-col sm="12" md="12" lg="3">
                             <ValidationProvider>
                                    <b-form-group class="form-group add-style" label="Provincia:">
                                    <b-select place v-model="cli_provincia_seleccionada" :options="cli_provincia_seleccion"></b-select>
                                    </b-form-group>
                            </ValidationProvider>
                        </b-col>

                          <b-col sm="12" md="12" lg="3">
                             <ValidationProvider>
                                    <b-form-group class="form-group add-style" label="Distrito:">
                                    <b-select place v-model="cli_distrito_seleccionada" :options="cli_distrito_seleccion"></b-select>
                                    </b-form-group>
                            </ValidationProvider>
                        </b-col>
                    </b-row>

                    <b-row>
                            <b-col sm="12" md="12" lg="12">
                                <b-form-group class="form-group add-style" label="Referencia:">
                                    <b-textarea v-model="cli_referencia"></b-textarea>
                                </b-form-group>
                            </b-col>
                    </b-row>


                    <h6 class="mb-4 mt-5">Copiar Dirección</h6>
                    <b-row>
                         <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group class="form-group add-style" label="Dirección:">
                                    <b-input type="text" v-model="cli_cobranza"></b-input>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>

                        <b-col sm="12" md="12" lg="3">
                             <ValidationProvider>
                                    <b-form-group class="form-group add-style" label="Departamento:">
                                    <b-select place v-model="cli_cobranza_departamento_seleccionada" :options="cli_cobranza_departamento_seleccion"></b-select>
                                    </b-form-group>
                            </ValidationProvider>
                        </b-col>

                          <b-col sm="12" md="12" lg="3">
                             <ValidationProvider>
                                    <b-form-group class="form-group add-style" label="Provincia:">
                                    <b-select place v-model="cli_cobranza_provincia_seleccionada" :options="cli_cobranza_provincia_seleccion"></b-select>
                                    </b-form-group>
                            </ValidationProvider>
                        </b-col>

                          <b-col sm="12" md="12" lg="3">
                             <ValidationProvider>
                                    <b-form-group class="form-group add-style" label="Distrito:">
                                    <b-select place v-model="cli_cobranza_distrito_seleccionada" :options="cli_cobranza_distrito_seleccion"></b-select>
                                    </b-form-group>
                            </ValidationProvider>
                        </b-col>
                    </b-row>

                     <b-row>
                            <b-col sm="12" md="12" lg="12">
                                <b-form-group class="form-group add-style" label="Referencia:">
                                    <b-textarea v-model="cli_cobranza_referencia"></b-textarea>
                                </b-form-group>
                            </b-col>
                    </b-row>

                    <b-button variant="primary" type="submit" :disabled="invalid">Guardar</b-button>
        </b-form>
        </ValidationObserver>
        </b-container>
    </div>
</template>

<style scoped>

.form-control{
color: #495057;
    background-color: #fff;
    border-color: #9da4ab;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(126, 128, 130, 0.25);
}
.custom-select{
color: #495057;
    background-color: #fff;
    border-color: #9da4ab;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(126, 128, 130, 0.25);
}

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


export default {
    name: 'Cliente',

    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Natural', value: 'natural' }
        ],
        cli_estado:'',
        cli_usuario:'',
        cli_grupo_economico_seleccionada:null,
        cli_grupo_economico_seleccion:[
                { value : null , text:'Selecciona la clase'},
                { value : '1' , text: 'USMP'},
                { value : '2' , text: 'MELTALPREN'}
                // { value : '3' , text: 'CAMION'},
                // { value : '4' , text: 'CAMIONETA'},
                // { value : '5' , text: 'CAMIONETA'},
                // { value : '6' , text: 'CAMIONETA PANEL'},
                // { value : '7' , text: 'CAMIONETA PICK UP'},
                // { value : '8' , text: 'CAMIONETA RURAL'},
                // { value : '9' , text: 'CAMIONETA RURAL'},
                // { value : '10' , text: 'CAMIONETA STATION WAGON'},
                // { value : '11' , text: 'CAMIONETA VAN'},
        ],
        selectede: [], // Must be an array reference!
        optionse: [
          { text: 'Si', value: 'si' },
          { text: 'No', value: 'No' },
        ],
        cli_apellido_paterno:'',
        cli_apellido_materno:'',
        cli_nombre:'',
        cli_documento:'',

        cli_documento_seleccionada:null,
        cli_documento_seleccion:[
                { value : null , text:'Selecciona el documento'},
                { value : '1' , text: 'DNI'},
                { value : '2' , text: 'PASAPORTE'}
        ],

        cli_ejecutivo_comercial_seleccionada:null,
        cli_ejecutivo_comercial_seleccion:[
                { value : null , text:'Selecciona el documento'},
                { value : '1' , text: 'Maria Perez Chavez'},
                { value : '2' , text: 'Martin Chavez Chavez'}
        ],
        selectedg: [], // Must be an array reference!
        optionsg: [
          { text: 'Masculino', value: 'M' },
          { text: 'Femenino', value: 'F' },
        ],
        cli_fecha_nacimiento:'',
        cli_vinculo:'',
        cli_direccion:'',

        cli_departamento_seleccionada:null,
        cli_departamento_seleccion:[
                { value : null , text:'Selecciona el documento'},
                { value : '1' , text: 'LIMA'},
                { value : '2' , text: 'LA LIBERTAD'}
        ],

        cli_provincia_seleccionada:null,
        cli_provincia_seleccion:[
                { value : null , text:'Selecciona el documento'},
                { value : '1' , text: 'CANTA'},
                { value : '2' , text: 'CAÑETE'}
        ],
        cli_distrito_seleccionada:null,
        cli_distrito_seleccion:[
                { value : null , text:'Selecciona el documento'},
                { value : '1' , text: 'LA VICTORIA'},
                { value : '2' , text: 'LA MOLINA'}
        ],
        cli_referencia:'',

        cli_cobranza:'',
        cli_cobranza_departamento_seleccionada:null,
        cli_cobranza_departamento_seleccion:[
                { value : null , text:'Selecciona el documento'},
                { value : '1' , text: 'LIMA'},
                { value : '2' , text: 'LA LIBERTAD'}
        ],
        cli_cobranza_provincia_seleccionada:null,
        cli_cobranza_provincia_seleccion:[
                { value : null , text:'Selecciona el documento'},
                { value : '1' , text: 'CANTA'},
                { value : '2' , text: 'CAÑETE'}
        ],
        cli_cobranza_distrito_seleccionada:null,
        cli_cobranza_distrito_seleccion:[
                { value : null , text:'Selecciona el documento'},
                { value : '1' , text: 'LA VICTORIA'},
                { value : '2' , text: 'LA MOLINA'}
        ],
        cli_cobranza_referencia:''
        
      
      }
    }
}


</script>