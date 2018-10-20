<template>
<v-container fluid fill-height>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <div class="white elevation-2">
        <v-toolbar flat dense color="lime darken-4" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <input type="email" name="email" placeholder="email" v-model="email" /> <br />
          <input type="password" name="password" placeholder="password" v-model="password" /> <br />
          <div class="error" v-html="error" />
          <v-btn class="lime darken-4" @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</v-container>
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
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
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
