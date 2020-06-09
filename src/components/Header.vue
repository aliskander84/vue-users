<template>
  <v-app-bar
      app
      color="primary"
      dark
  >
    <router-link
        to="/users"
        style="text-decoration: none"
        class="ml-n4"
        v-if="routeName === 'User'"
    >
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </router-link>

    <v-toolbar-title>
      {{title}}
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
    props: {
      id: Number
    },
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
      },
      routeUserName() {
        return this.$route.params.userName
      },
      title() {
        return this.routeUserName ? this.routeUserName : this.routeName
      }
    },
    mounted() {

    }
  }
</script>