<template>
  <div class="users pa-4">
    <UserCard
      v-for="user of users"
      :key="user.id"
      :user="user"
      :v-if="users.length !== 0"
    />
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
      ...mapActions(['fetchUsers'])
    },
    mounted() {
      this.fetchUsers(this.pageNumber)
    }
  }
</script>

<style scoped lang="scss">

</style>
