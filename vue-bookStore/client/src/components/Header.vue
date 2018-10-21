<template>
  <v-toolbar fixed dark class="blue-grey">
    <v-toolbar-title class="mr-4 logo">
      <router-link tag="span" :to="{name: 'books'}">VueBookStore</router-link>
     </v-toolbar-title>
    <v-toolbar-items>
      <!-- <v-btn router flat dark to="books">Browse</v-btn> -->
      <v-btn flat dark :to="{name: 'books'}">Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{name: 'register'}">Sign Up</v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" router flat dark  :to="{name: 'login'}">Login</v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" router flat dark  @click="logout">Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'books'
      })
    }
  }
}
</script>


<style scoped>
.logo {
  cursor: pointer;
}
</style>
