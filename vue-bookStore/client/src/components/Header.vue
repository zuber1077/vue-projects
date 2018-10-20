<template>
  <v-toolbar fixed dark class="blue-grey">
    <v-toolbar-title class="mr-4">VueBookStore</v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark>Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" router flat dark  to="register">Sign Up</v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" router flat dark  to="login">Login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
}
</script>


<style scoped>

</style>
