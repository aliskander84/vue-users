<template>
  <div class="users">
    {{users}}
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'Users',
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
