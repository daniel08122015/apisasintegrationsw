<template>
    <div>
        <b-container fluid="xl"> 
            <b-row>
                    <b-col sm="12" md="4" lg="4" class="backgroundSize" :style="{ backgroundImage: `url(${backgroundImage})`}">

                    </b-col>
                    <b-col sm="12" md="4" lg="8">
                        <h6 class="text-right mt-4"> Don't have an account yet? Sign Up!</h6>

                        <div class="content_login mt-5">
                                 <h1 class="text-center mb-3">Sign In</h1>

                                    <b-alert variant="warning" show>Enter your username and password</b-alert>

                                    <b-form>
                                        <b-row align-v="center">
                                        <b-col sm="12" md="12" lg="12">
                                        <b-form-group class="form-group" label="Email:">
                                        <b-input type="text" placeholder="Email"></b-input>
                                        </b-form-group>
                                        </b-col>
                                        <b-col sm="12" md="12" lg="12">
                                        <b-form-group class="form-group" label="Contraseña:">
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
.backgroundSize {
    background-size: cover;
    height:100vh;
}

.form-control {
    height: calc(2.2em + 0.75rem + 2px);
    border: 0px solid #ced4da;
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