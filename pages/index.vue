<template>
  <div class="container">

  <div>
    <h1 class="mb-5 text-left">Bienvenidos a TAS</h1>
    <h3 class="mb-5">¿Qué desea realizar?</h3>

    <b-card-group deck>
      <b-card
        border-variant="success"
        header="Cotizaciónes de vehiculares"
        header-bg-variant="success"
        header-text-variant="white"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card
        border-variant="secondary"
        header="Administración de Póliza"
        header-border-variant="secondary"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>

      <b-card border-variant="secondary" header="Clientes" align="center" header-border-variant="secondary">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>

  </div>
</template>

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
