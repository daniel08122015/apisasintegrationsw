<template>
  <div>

  <b-container fluid="md" class="content_coti">

    <h1 class="mt-5 mb-5 text-right"><b-icon icon="house"></b-icon> Bienvenidos a <span style="color:black;">T</span>AS</h1>
    <h3 class="mb-5">¿Qué desea realizar?</h3>

    <b-card-group deck>

          <b-card
        header-text-variant="white"
        header-tag="header"
        header-bg-variant="dark"
        footer="Cotización Vehícular"
        footer-tag="footer"
        footer-bg-variant="success"
        footer-border-variant="dark"
        title="Cotización Vehícular"
        style="max-width: 20rem;"
      >
        <b-card-text>
            <b-icon icon="file-earmark-text" font-scale="7.5"></b-icon>
        </b-card-text>
      </b-card>

          <b-card
        header-text-variant="white"
        header-tag="header"
        header-bg-variant="dark"
        footer="Administración de Póliza"
        footer-tag="footer"
        footer-bg-variant="success"
        footer-border-variant="dark"
        title="Administración de Póliza"
        style="max-width: 20rem;"
      >
        <b-card-text>
            <b-icon icon="files" font-scale="7.5"></b-icon>
        </b-card-text>
      </b-card>

          <b-card
        header-text-variant="white"
        header-tag="header"
        header-bg-variant="dark"
        footer="Cliente"
        footer-tag="footer"
        footer-bg-variant="success"
        footer-border-variant="dark"
        title="Cliente"
        style="max-width: 20rem;"
      >
        <b-card-text>
            <b-icon icon="person-fill" font-scale="7.5"></b-icon>
        </b-card-text>
      </b-card>

    </b-card-group>
  </b-container>
 
  </div>
</template>

<style scoped>
.content_coti {
    background-color: white;
    margin-top: 1.4%;
    padding: 2% 4%;
    border-radius: 22px;
}

.card-deck .card:hover{
  color : floralwhite;
  cursor: pointer;
}

@media (min-width: 1200px){
.container, .container-sm, .container-md, .container-lg, .container-xl {
    max-width: 1453px;
}
}
</style>

<script>

export default {

  head:{
    title: 'esta es mi pagina de inicio',
    meta:[
      {hid:'description', name:'description', content: 'Esta es la descripcion de la pagina de'}
    ]
  }

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
