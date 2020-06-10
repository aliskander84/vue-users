<template>
  <v-hover>
    <template v-slot="{hover}">
      <v-btn
          icon
          :elevation="hover ? 4 : 1"
          :class="`font-weight-bold ${accentClass}`"
          @click="click"
      >
        {{pageNumber}}
      </v-btn>
    </template>
  </v-hover>
</template>

<script>
  export default {
    name: 'PageNumberBtn',
    props: {
      pageNumber: Number,
      accent: Boolean
    },
    computed: {
      accentClass() {
        return this.accent ? 'amber lighten-2' : ''
      }
    },
    methods: {
      click() {
        this.$emit('click')
      }
    }
  }
</script>