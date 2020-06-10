<template>
  <v-hover>
    <template v-slot="{hover}">
      <v-btn
          icon
          :elevation="hover ? 4 : 1"
          @click="click"
      >
        <v-icon>{{icon}}</v-icon>
      </v-btn>
    </template>
  </v-hover>
</template>

<script>
  export default {
    name: 'ArrowBtn',
    props: {
      icon: String
    },
    methods: {
      click() {
        this.$emit('click')
      }
    }
  }
</script>