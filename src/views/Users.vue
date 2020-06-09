<template>
  <div class="pa-2">
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
              view-btn="true"
          />
        </v-col>
      </v-row>
    </v-container>

    <div class="loader" v-if="users.length === 0">
      Empty
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import UserCard from '../components/UserCard'

  export default {
    name: 'Users',
    components: {UserCard},
    data() {
      return {
        pageNumber: 1
      }
    },
    computed: {
      ...mapGetters(['users'])
    },
    methods: {
      ...mapActions(['fetchUsers']),
      routeTo() {
        this.$router.history.push()
      }
    },
    mounted() {
      if (this.users.length === 0) {
        this.fetchUsers(this.pageNumber)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~vuetify/src/styles/main";

  .users {

  }

  .col {
    @extend .mb-4;
    @extend .ml-4;

    &:first-child {
      @extend .ml-0
    }
  }
</style>
