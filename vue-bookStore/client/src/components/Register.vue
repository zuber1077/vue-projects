<template>
  <div>
    <h2>Register</h2>
    <input type="email" name="email" placeholder="email" v-model="email" /> <br />
    <input type="password" name="password" placeholder="password" v-model="password" /> <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data);
    }
  }
}
</script>


<style scoped>

</style>
