<template>
  <div class="pa-2">
    <v-container fluid class="pa-0 ma-0">
      <v-row
          class="ma-0 justify-center"
      >
        <v-col
            class="pa-0"
            cols="12"
            xs="12"
            sm="9"
            md="6"
            lg="4"
            xl="3"
        >
          <UserCard
              :user="user"
              :index="id"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import UserCard from '../components/UserCard'
  import {mapGetters} from 'vuex'
  export default {
    name: 'User',
    components: {UserCard},
    props: {
      id: Number
    },
    computed: {
      ...mapGetters(['users']),
      user() {
        return this.users[this.id]
      }
    }
  }
</script>

<style scoped lang="scss">
  .row {
    /*margin: 0 auto;*/
  }
</style>
