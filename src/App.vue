<template>
  <v-app>
    <Header/>

    <v-content>
      <router-view/>
    </v-content>

    <ModalWindow/>
  </v-app>
</template>

<script>
  import Header from './components/Header'
  import ModalWindow from './components/ModalWindow'
  export default {
    name: 'App',
    components: {ModalWindow, Header}
  }
</script>
