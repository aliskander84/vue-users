<template>
  <v-hover>
    <template v-slot="{hover}">
      <v-card
          class="ma-2"
          :elevation="hover ? 4 : 1"
      >
        <v-img :src="user.avatar" alt=""/>
        <v-card-title>
          {{user.first_name}} {{user.last_name}}
        </v-card-title>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
  export default {
    name: 'UserCard',
    props: {
      user: Object
    }
  }
</script>

<style scoped lang="scss">
  @import "~vuetify/src/styles/main";

</style>