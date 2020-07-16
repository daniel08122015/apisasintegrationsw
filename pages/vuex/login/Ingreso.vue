<template>
    <div>
        <b-container fluid="xl" class="bg-white"> 
            <b-row>
                    <b-col sm="12" md="4" lg="5" class="backgroundSize" :style="{ backgroundImage: `url(${backgroundImage})`}">
                         <!-- <img src="../../../assets/img/bg-4.jpg" alt="">  -->

                         
                                 <img src="../../../assets/img/logo-letter-1.png" class="img-w mb-5" alt="">
                      
                                 <h4 class="mt-5">Bienvenidos a TAS!</h4>
                                 <p class="mb-5">TAS Corredores de Seguros, es una organización especializada 
                                  en la Asesoría Integral de Seguros.</p>
                           
                                  <p class="mt-5">© 2020 TAS</p>
                            
                         
                    </b-col>
                    <b-col sm="12" md="4" lg="7">
                        <h6 class="text-right mt-4"> ¿No tienes cuenta? Registrate!</h6>

                        <div class="content_login mt-5">
                                 <h3 class="text-center mb-5">Inicia sesión en TAS</h3>

                                    <b-alert variant="warning" class="text-center" show> Usa tu cuenta y tu contraseña continua.</b-alert>

                                    <b-form>
                                        <b-row align-v="center">
                                        <b-col sm="12" md="12" lg="12">
                                        <b-form-group class="form-group">
                                        <b-input type="text" placeholder="Email"></b-input>
                                        </b-form-group>
                                        </b-col>
                                        <b-col sm="12" md="12" lg="12">
                                        <b-form-group class="form-group">
                                        <b-input type="password" placeholder="Contraseña"></b-input>
                                        </b-form-group>
                                        </b-col>
                                        </b-row>
                                        <b-button variant="outline-primary" >Ingresar</b-button>
                                    </b-form>
                        </div>
                       
                    </b-col>
            </b-row>
        </b-container>
    </div>
</template>


<style scoped>

h4, p {color: floralwhite;}
.flex-row-fluid {
    -webkit-box-flex: 1;
    flex: 1 auto;
    -ms-flex: 1 0 0px;
    min-width: 0;
}

.bg-white {
    background-color: white;
}

.justify-content-center {
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
}
.flex-column-auto {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
}
img.img-w {
    width: 100px;
}


.backgroundSize {
    background-size: cover;
    height:100vh;
    padding: 3.75rem !important
}

.form-control {
    height: calc(2.2em + 0.75rem + 2px);
    border: 2px solid #ced4da;
    border-radius: 6px;
}

@media (min-width: 1200px){
    .container, .container-sm, .container-md, .container-lg, .container-xl {
        max-width: 100%;
    
    }
    .content_login {
        margin: 0 26%;
    }
}

</style>

<script>

export default {
    name: 'Ingreso',

    methods:{
      
    },

    computed:{
        backgroundImage() {
            return "../../../_nuxt/assets/img/bg-4.jpg";
        },
    }
}
</script>