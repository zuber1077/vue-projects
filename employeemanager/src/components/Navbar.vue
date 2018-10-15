<template>
   <nav>
       <div class="nav-wrapper green">
           <div class="container">
               <router-link to="/" class="brand-logo">Employee Manager</router-link>
               <ul class="right">
                   <li><router-link to="/">Dashboard</router-link></li>
                   <li><router-link to="/login">Login</router-link></li>
                   <li><router-link to="/register">Register</router-link></li>
                   <li><button v-on:click="logout" class="btn black">Logout</button></li>
               </ul>
           </div>
       </div>
   </nav>
</template>


<script>
import firebase from 'firebase'
export default {
    name: 'navbar',
    data() {
        return {
            isLoggedIn: false,
            currentUser: false
        }
    },
    methods: {
        logout: function () {
            firebase.auth().signOut().then(() => {
                this.$router.push('/login');
            });
        }
    }
}
</script>

