<template>
    <div>
        <b-container fluid="md" class="content_coti">
         
            <h2 class="text-left mb-5">Nueva Poliza</h2>
            <h4 class="mb-4">Busqueda de Cliente</h4>

            <ValidationObserver ref="form" v-slot="{ invalid }">
                    <b-form @submit.prevent="onSubmit">

                    <b-row>
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                           
                                <b-form-group class="form-group add-style" label="Nro. Documento:">
                                    <b-input type="number" v-model="adm_poli_documento"></b-input>
                                </b-form-group>

                            </ValidationProvider>
                        </b-col>
                         <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                           
                                <b-form-group class="form-group add-style" label="Nombre del Cliente:">
                                    <b-input type="text" v-model="adm_poli_cliente_nombre"></b-input>
                                </b-form-group>

                            </ValidationProvider>
                        </b-col>
                         <b-col sm="12" md="12" lg="3">
                              <b-form-group class="form-group add-style" label="." style="color:white;">
                               <b-button variant="primary">Buscar</b-button>
                              </b-form-group>
                        </b-col>
                    </b-row>

                    <hr>

                    
                    <h4 class="mb-4 mt-5">Datos Generales</h4>

                    <b-row>
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>   
                                <b-form-group label="Cia. Seguros:" class="add-style">
                                     <b-select place v-model="adm_poli_ciaseguros_seleccionada" :options="adm_poli_ciaseguros_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                          <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>   
                                <b-form-group label="Producto:" class="add-style">
                                     <b-select place v-model="adm_poli_producto_seleccionada" :options="adm_poli_producto_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>

                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                           
                                <b-form-group class="form-group add-style" label="Comisión TAS: %">
                                    <b-input type="number" v-model="adm_poli_comision_tas"></b-input>
                                </b-form-group>

                            </ValidationProvider>
                        </b-col>

                         <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>   
                                <b-form-group label="Estado:" class="add-style">
                                     <b-select place v-model="adm_poli_estado_seleccionada" :options="adm_poli_estado_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                        
                    </b-row>

                    <b-row>
                         <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group class="form-group add-style" label="Usuario:">
                                    <b-input type="text" v-model="adm_poli_usuario"></b-input>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>

                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                           
                                    <label for="registro-datepicker" class="add-style">Registro</label>
                                    <b-form-datepicker id="registro-datepicker" v-model="adm_poli_registro" class="mb-2"></b-form-datepicker>

                            </ValidationProvider>
                        </b-col>
                    </b-row>
                     

                    <hr>

                    <h4 class="mb-4 mt-5">Datos de la póliza</h4>

                    <b-row>
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group class="form-group add-style" label="Póliza:">
                                    <b-input type="text" v-model="adm_poli_poliza"></b-input>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>  
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>   
                                <b-form-group label="Tipo Vigencia:" class="add-style">
                                     <b-select place v-model="adm_poli_tipo_vigente_seleccionada" :options="adm_poli_tipo_vigente_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                         <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>   
                                <b-form-group label="Tipo Póliza:" class="add-style">
                                     <b-select place v-model="adm_poli_tipo_poliza_seleccionada" :options="adm_poli_tipo_poliza_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>   
                                <b-form-group label="Unidad de Negocio:" class="add-style">
                                     <b-select place v-model="adm_poli_unidad_negocio_seleccionada" :options="adm_poli_unidad_negocio_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group class="form-group add-style" label="Area Comercial:">
                                    <b-input type="text" v-model="adm_poli_area_comercial"></b-input>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col> 
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>   
                                <b-form-group label="Unidad de Negocio:" class="add-style">
                                     <b-select place v-model="adm_poli_venta_cruzada_seleccionada" :options="adm_poli_venta_cruzada_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>   
                                <b-form-group label="Tipo de Desgravamen:" class="add-style">
                                     <b-select place v-model="adm_poli_tipo_desgravamen_seleccionada" :options="adm_poli_tipo_desgravamen_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                    <label for="fecha-solicitud-datepicker" class="add-style">Fecha Solicitud Seguro:</label>
                                    <b-form-datepicker id="fecha-solicitud-datepicker" v-model="adm_poli_fecha_solictud" class="mb-2"></b-form-datepicker>
                            </ValidationProvider>
                        </b-col>
                    </b-row>



                    <b-row>
                           <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group label="Moneda en Suma:" class="add-style">
                                     <b-select place v-model="adm_poli_moneda_suma_seleccionada" :options="adm_poli_moneda_suma_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>

                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group class="form-group add-style" label="Inicio de Vigencia:">
                                    <b-input type="text" v-model="adm_poli_inicio_vigencia"></b-input>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col> 

                              <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group class="form-group add-style" label="Fin de Vigencia:">
                                    <b-input type="text" v-model="adm_poli_fin_vigencia"></b-input>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col> 

                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group label="Categoría:" class="add-style">
                                     <b-select place v-model="adm_poli_categoria_seleccionada" :options="adm_poli_categoria_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>

                    </b-row>


                    <b-row>
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group label="Tipo Contragarantia::" class="add-style">
                                     <b-select place v-model="adm_poli_tipo_contragarantia_seleccionada" :options="adm_poli_tipo_contragarantia_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                             <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                    <label for="fecha-aviso-siniestro-datepicker" class="add-style">Fecha Aviso Siniestro:</label>
                                    <b-form-datepicker id="fecha-aviso-siniestro-datepicker" v-model="adm_poli_fecha_aviso_siniestro" class="mb-2"></b-form-datepicker>
                            </ValidationProvider>
                        </b-col>
                        
                    </b-row>

                  
                    <hr>

                    <h4 class="mb-4 mt-5">Datos de la Prima</h4>

                    
                    
                    <b-row>
                         <b-col sm="12" md="12" lg="2">
                            <ValidationProvider>
                                <b-form-group class="form-group add-style" label="IGV:">
                                    <b-input type="number" v-model="adm_poli_dp_igv"></b-input>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col> 
                            <b-col sm="12" md="12" lg="2">
                            <ValidationProvider>
                                <b-form-group class="form-group add-style" label="DE:">
                                    <b-input type="number" v-model="adm_poli_dp_de"></b-input>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col> 

                         <b-col sm="12" md="12" lg="4">
                            <ValidationProvider>
                                <b-form-group label="Tipo de Pago:" class="add-style">
                                     <b-select place v-model="adm_poli_dp_tipo_pago_seleccionada" :options="adm_poli_dp_tipo_pago_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider> 
                        </b-col>

                         <b-col sm="12" md="12" lg="4">
                            <ValidationProvider>
                                <b-form-group label="Ejecutivo Comercial:" class="add-style">
                                     <b-select place v-model="adm_poli_dp_ejecutivo_comercial_seleccionada" :options="adm_poli_dp_ejecutivo_comercial_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>

                     

                    </b-row>

                    <b-row>
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group label="Ejecutivo Tecnico 1:" class="add-style">
                                     <b-select place v-model="adm_poli_dp_ejecutivo_tecnico1_seleccionada" :options="adm_poli_dp_ejecutivo_tecnico1_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group label="Ejecutivo Tecnico 2:" class="add-style">
                                     <b-select place v-model="adm_poli_dp_ejecutivo_tecnico2_seleccionada" :options="adm_poli_dp_ejecutivo_tecnico2_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>

                            <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group label="Ejecutivo Tecnico 3:" class="add-style">
                                     <b-select place v-model="adm_poli_dp_ejecutivo_tecnico2_seleccionada" :options="adm_poli_dp_ejecutivo_tecnico3_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>

                          <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group label="Entidad Afianzada:" class="add-style">
                                     <b-select place v-model="adm_poli_dp_entidad_fianzada_seleccionada" :options="adm_poli_dp_entidad_fianzada_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                    </b-row>


                    <hr>

                    <h4 class="mb-4 mt-5">Datos Adicionales</h4>

                    <b-row>
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group class="form-group add-style" label="No. Asegurados::">
                                    <b-input type="number" v-model="adm_poli_da_numero_asegurado"></b-input>
                                </b-form-group> 
                            </ValidationProvider>
                        </b-col> 
                           <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group class="form-group add-style" label="Monto Planilla:">
                                    <b-input type="number" v-model="adm_poli_da_monto_planilla"></b-input>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col> 

                         <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group label="Giro de Negocio:" class="add-style">
                                     <b-select place v-model="adm_poli_da_giro_negocio_seleccionada" :options="adm_poli_da_giro_negocio_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider> 
                        </b-col>

                         <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group label="Suma Asegurada Ilimitada:" class="add-style">
                                     <b-select place v-model="adm_poli_da_suma_asegurad_ilimitada_seleccionada" :options="adm_poli_da_suma_asegurad_ilimitada_seleccion"></b-select>
                                </b-form-group>
                            </ValidationProvider>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group class="form-group add-style" label="No. Asegurados Titulares:">
                                    <b-input type="number" v-model="adm_poli_da_asegurado_titulares"></b-input>
                                </b-form-group> 
                            </ValidationProvider>
                        </b-col> 
                            <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group class="form-group add-style" label="No. Asegurados Derechohabientes:">
                                    <b-input type="number" v-model="adm_poli_da_asegurados_derechohabientes"></b-input>
                                </b-form-group> 
                            </ValidationProvider>
                        </b-col> 
                       
                            <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group class="form-group add-style" label="Tasa:">
                                    <b-input type="number" v-model="adm_poli_da_tasa"></b-input>
                                </b-form-group> 
                            </ValidationProvider>
                        </b-col> 
                            <b-col sm="12" md="12" lg="3">
                            <ValidationProvider>
                                <b-form-group class="form-group add-style" label="Número Crédito(* Solo Clientes Acceso)">
                                    <b-input type="number" v-model="adm_poli_da_numero_credito"></b-input>
                                </b-form-group> 
                            </ValidationProvider>
                        </b-col> 
                    </b-row>

                      <b-row>
                            <b-col sm="12" md="12" lg="12">
                                <b-form-group class="form-group add-style" label="Descripción:">
                                    <b-textarea v-model="adm_poli_da_descripcion"></b-textarea>
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
    name: 'AdministracionPoliza',

    data() {
      return {
            adm_poli_documento: null,
            adm_poli_cliente_nombre: '',

            adm_poli_ciaseguros_seleccionada: [], // Must be an array reference!
            adm_poli_ciaseguros_seleccion: [
            { text: 'PACIFICO SEGURO', value: '1' },
            { text: 'PACIFICO VIDA', value: '2' }
            ],

            adm_poli_producto_seleccionada: [], // Must be an array reference!
            adm_poli_producto_seleccion: [
            { text: 'AUTOMOVILES PLANES', value: '1' },
            { text: 'MULTIRIESGO DEL HOGAR', value: '2' }
            ],

            adm_poli_comision_tas:'',
            adm_poli_registro:'',

            adm_poli_estado_seleccionada: [], // Must be an array reference!
            adm_poli_estado_seleccion: [
            { text: 'VIGENTE', value: '1' },
            { text: 'ANULADA', value: '2' },
            { text: 'VENCIDA VIGENTE', value: '2' }
            ],
            adm_poli_usuario:'',
            adm_poli_poliza:'',
            adm_poli_tipo_vigente_seleccionada: [], // Must be an array reference!
            adm_poli_tipo_vigente_seleccion: [
            { text: 'ANUAL', value: '1' },
            { text: 'PERIODICA', value: '2' }
            ],
            adm_poli_tipo_poliza_seleccionada: [], // Must be an array reference!
            adm_poli_tipo_poliza_seleccion: [
            { text: 'INDIVIDUAL', value: '1' },
            { text: 'COPERATIVA', value: '2' }
            ],
            
            adm_poli_unidad_negocio_seleccionada: [], // Must be an array reference!
            adm_poli_unidad_negocio_seleccion: [
            { text: 'SOAT', value: '1' },
            { text: 'TAS VEHICULAR', value: '2' }
            ],
            adm_poli_area_comercial:'',
            adm_poli_venta_cruzada_seleccionada:[], // Must be an array reference!
            adm_poli_venta_cruzada_seleccion: [
            { text: 'SI', value: '1' },
            { text: 'NO', value: '2' }
            ],

            adm_poli_tipo_desgravamen_seleccionada:[], // Must be an array reference!
            adm_poli_tipo_desgravamen_seleccion: [
            { text: 'NO RESPONDER', value: '1' },
            { text: 'INDIVIDUAL', value: '2' },
            { text: 'MANCOMUNADO', value: '3' }
            ],
            
            adm_poli_moneda_suma_seleccionada:[], // Must be an array reference!
            adm_poli_moneda_suma_seleccion: [
            { text: 'SOLES (S/.)', value: '1' },
            { text: 'DOLARES (US$)', value: '2' }
            ],

            adm_poli_inicio_vigencia: '',
            adm_poli_fin_vigencia: '',

            adm_poli_categoria_seleccionada:[], // Must be an array reference!
            adm_poli_categoria_seleccion: [
            { text: 'CORPORATIVA', value: '1' },
            { text: 'MODULAR', value: '2' },
            { text: 'COLECTIVA', value: '3' }
            ],

            adm_poli_tipo_contragarantia_seleccionada:[], // Must be an array reference!
            adm_poli_tipo_contragarantia_seleccion: [
            { text: 'No Corresponde', value: '1' },
            ],

            adm_poli_fecha_aviso_siniestro:'',

            //datos de la prima
            adm_poli_dp_igv: null,
            adm_poli_dp_de: null,

            adm_poli_dp_tipo_pago_seleccionada:[], // Must be an array reference!
            adm_poli_dp_tipo_pago_seleccion: [
            { text: 'FINACIADO', value: '1' },
            { text: 'CARGO EN CUENTA', value: '2' },
            ],
            
            
            adm_poli_dp_ejecutivo_comercial_seleccionada:[],
            adm_poli_dp_ejecutivo_comercial_seleccion: [
            { text: 'SELECCIONE', value: '' },
            ],

            adm_poli_dp_ejecutivo_tecnico1_seleccionada:[],
            adm_poli_dp_ejecutivo_tecnico1_seleccion: [
            { text: 'SELECCIONE', value: '' },
            ],

              adm_poli_dp_ejecutivo_tecnico2_seleccionada:[],
            adm_poli_dp_ejecutivo_tecnico2_seleccion: [
            { text: 'SELECCIONE', value: '' },
            ],

            adm_poli_dp_ejecutivo_tecnico3_seleccionada:[],
            adm_poli_dp_ejecutivo_tecnico3_seleccion: [
            { text: 'SELECCIONE', value: '' },
            ],

            adm_poli_dp_entidad_fianzada_seleccionada:[],
            adm_poli_dp_entidad_fianzada_seleccion: [
            { text: 'SELECCIONE', value: '' },
            ],

            adm_poli_da_numero_asegurado:'', 
            adm_poli_da_monto_planilla: '',

             adm_poli_da_giro_negocio_seleccionada:[],
            adm_poli_da_giro_negocio_seleccion: [
            { text: 'SELECCIONE', value: '' },
            ],

            adm_poli_da_suma_asegurad_ilimitada_seleccionada:[],
            adm_poli_da_suma_asegurad_ilimitada_seleccion: [
            { text: 'SELECCIONE', value: '' },
            ],

            adm_poli_da_asegurado_titulares : null,
            adm_poli_da_asegurados_derechohabientes  : null,
            adm_poli_da_tasa : null,
            adm_poli_da_numero_credito : null,
            adm_poli_da_descripcion:''
      }
    }
}


</script>