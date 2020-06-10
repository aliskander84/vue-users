<template>
  <div class="pa-2">
    <Pagination class="pa-2"/>

    <v-container fluid>
      <v-row>
        <v-col
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
            v-for="(user, index) of users"
            :key="user.id"
            :v-if="users.length !== 0"
        >
          <UserCard
              :user="user"
              :index="index"
              :view-btn="true"
          />
        </v-col>
      </v-row>
    </v-container>

    <div class="loader" v-if="users.length === 0">
      Empty
    </div>

    <Pagination class="pa-2"/>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import UserCard from '../components/UserCard'
  import Pagination from '../components/Pagination/Pagination'

  export default {
    name: 'Users',
    components: {Pagination, UserCard},
    computed: {
      ...mapGetters(['users'])
    },
    methods: {
      ...mapActions(['fetchUsers'])
    },
    mounted() {
      if (this.users.length === 0) {
        this.fetchUsers()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~vuetify/src/styles/main";


</style>
