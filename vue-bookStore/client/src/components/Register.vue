<template>
<v-layout align-center justify-center>
  <v-flex xs12 sm8 md4>
    <div class="white elevation-2">
      <v-toolbar flat dense color="blue-grey" dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
        <form name="tab-tracker-form" autocomplete="off">
          <v-text-field type="email" prepend-icon="person" v-model="email" label="Email"></v-text-field> <br>
          <v-text-field type="password" autocomplete="new-password" prepend-icon="lock" v-model="password" label="Password"></v-text-field>
          <div class="red--text" v-html="error" />
        </form>
          <v-btn dark class="blue-grey" @click="register">Register</v-btn>
      </div>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({ name: 'books' })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>


<style scoped>
  .error{ 
    color: red;
  }
</style>
