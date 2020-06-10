<template>
  <v-container fluid>
    <v-row>
      <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          v-for="i of 4"
          :key="i"
      >
        <v-skeleton-loader
            type="card"
            class="ma-2"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Loader'
  }
</script>