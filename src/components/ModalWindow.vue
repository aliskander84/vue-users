<template>
  <v-row justify="center">
    <v-dialog
        v-model="modal.isModal"
        persistent
        max-width="300"
    >
      <v-card>
        <v-card-title class="headline" v-if="!modal.isEdit && !modal.isAdd">
          Really delete user?
        </v-card-title>
        <v-card-title class="headline" v-if="modal.isEdit">
          Edit user
        </v-card-title>
        <v-card-title class="headline" v-if="modal.isAdd">
          Add user
        </v-card-title>

        <v-card-text v-if="modal.isEdit || modal.isAdd">
          <form autocomplete="off">
            <v-text-field
                label="First name"
                single-line
                v-model="form.firstName"
            />
            <v-text-field
                label="Last name"
                single-line
                v-model="form.lastName"
            />
            <v-text-field
                label="Email"
                single-line
                v-model="form.email"
            />
          </form>

        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              v-if="modal.isEdit || modal.isAdd"
              text
              class="teal--text text--darken-0"
              @click="saveUserHandler"
          >
            SAVE
          </v-btn>

          <v-btn
              text
              :class="modal.isEdit || modal.isAdd ? 'amber--text text--darken-4' : 'teal--text text--darken-0'"
              @click="cancelHandler"
          >
            CANCEL
          </v-btn>

          <v-btn
              v-if="!modal.isEdit && !modal.isAdd"
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
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email: ''
        },
        isFilled: false
      }
    },
    computed: {
      ...mapGetters(['modal', 'users']),
      currentUser() {
        const filtered = this.users.filter(({id}) => {
          return id === this.modal.currentUserId
        })
        return filtered[0]
      }
    },
    methods: {
      ...mapActions(['deleteUser', 'hideModal', 'saveUser', 'addUser']),
      saveUserHandler() {
        if (this.modal.isEdit) {
          this.saveUser(this.form)
          this.isFilled = false
        }
        if (this.modal.isAdd) {
          this.addUser(this.form)
        }
        this.resetForm()
      },
      cancelHandler() {
        this.hideModal()
        this.isFilled = false
        this.resetForm()
      },
      resetForm() {
        this.form = {
          firstName: '',
          lastName: '',
          email: ''
        }
      }
    },
    beforeUpdate() {
      if (this.modal.isEdit && !this.isFilled) {
        // console.log('fill')
        this.form.firstName = this.currentUser.first_name
        this.form.lastName = this.currentUser.last_name
        this.form.email = this.currentUser.email
        this.isFilled = true
      }
    }
  }
</script>