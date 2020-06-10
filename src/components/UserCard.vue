<template>
  <v-hover>
    <template v-slot="{hover}">
      <v-card
          class="ma-2"
          :elevation="hover ? 4 : 1"
      >
        <v-img :src="user.avatar" alt=""/>

        <v-card-title class="pa-3">
          {{user.first_name}} {{user.last_name}}
        </v-card-title>

        <v-card-subtitle class="px-3 pb-1 ma-0">
          {{user.email}}
        </v-card-subtitle>

        <v-card-actions class="pa-2">
          <v-spacer/>

          <router-link
              :to="{name: 'User', params: {id: index, userName}}"
              style="text-decoration: none;"
              v-if="viewBtn"
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
              @click="showEditModal(user.id)"
          >
            EDIT
          </v-btn>

          <v-btn
              text
              class="red--text text--darken-1"
              @click="showDeleteModal(user.id)"
          >
            DELETE
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'UserCard',
    props: {
      user: Object,
      index: Number,
      viewBtn: Boolean
    },
    computed: {
      userName() {
        return `${this.user.first_name} ${this.user.last_name}`
      }
    },
    methods: {
      ...mapActions(['showDeleteModal', 'showEditModal'])
    }
  }
</script>

<style scoped lang="scss">
  @import "~vuetify/src/styles/main";

</style>