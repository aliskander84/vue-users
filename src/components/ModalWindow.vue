<template>
  <v-row justify="center">
    <v-dialog
        v-model="modal.isModal"
        persistent
        max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Really delete this user?</v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              text
              class="teal--text text--darken-0"
              @click="dialog = false"
          >
            CANCEL
          </v-btn>

          <v-btn
              text
              class="red--text text--darken-1"
              @click="deleteUser"
          >
            DELETE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'ModalWindow',
    computed: {
      ...mapGetters(['modal'])
    },
    methods: {
      ...mapActions(['deleteUser'])
    }
  }
</script>