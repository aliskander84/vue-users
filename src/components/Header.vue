<template>
  <v-app-bar
      app
      color="primary"
      dark
  >
    <v-toolbar-title>
      {{routeName}}
    </v-toolbar-title>

    <v-spacer/>

    <router-link
        to="/"
        :class="homeLinkColorClass"
    >
      Home
    </router-link>

    <router-link
        to="/users"
        :class="usersLinkColorClass"
        class="ml-4"
    >
      Users
    </router-link>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'Header',
    computed: {
      homeLinkColorClass() {
        switch (this.$route.name) {
          case 'Home':
            return 'yellow--text text--lighten-1'
          default:
            return 'white--text'
        }
      },
      usersLinkColorClass() {
        switch (this.$route.name) {
          case 'Users':
            return 'yellow--text text--lighten-1'
          default:
            return 'white--text'
        }
      },
      routeName() {
        return this.$route.name
      }
    },
    mounted() {
      console.log(this.$route.name)
    }
  }
</script>