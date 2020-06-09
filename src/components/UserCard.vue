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

        <v-card-subtitle>
          {{user.email}}
        </v-card-subtitle>

        <v-card-actions>
          <v-spacer/>

          <router-link
              :to="{name: 'User', params: {id: index}}"
              style="text-decoration: none;"
          >
            <v-btn
                text
                class="teal--text text--darken-0"
            >
              VIEW
            </v-btn>
          </router-link>

          <v-btn
              text
              class="amber--text text--darken-4"
          >
            EDIT
          </v-btn>

          <v-btn
              text
              class="red--text text--darken-1"
          >
            DELETE
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
  export default {
    name: 'UserCard',
    props: {
      user: Object,
      index: Number
    }
  }
</script>

<style scoped lang="scss">
  @import "~vuetify/src/styles/main";

</style>