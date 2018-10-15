<template>
    <div id="login">
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login card-panel green white-text center">
                        <h3>Login</h3>
                        <form>
                            <div class="input-field">
                                <div class="material-icons prefix">email</div>
                                <input type="text" id="email" v-model="email">
                                <label class="white-text" for="email">Email</label>
                            </div>
                            
                            <div class="input-field">
                                <div class="material-icons prefix">lock</div>
                                <input type="password" id="password" v-model="password">
                                <label class="white-text" for="password">Password</label>
                            </div>
                            <button v-on:click="login" class="btn btn-large grey lighten-4 black-text">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>


<script>
import firebase from 'firebase'
export default {
    name: 'login',
    data: function() {
    return {
        email: '',
        password: ''
    }
},
methods: {
    login: function (e) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user => {
                alert(`You are logged in as ${user.email}`);
                this.$router.push('/');
            },
             err => {  alert(err.message) }
            ),
        e.preventDefault();
    }
}
}
</script>
