<template>
    <div id="register">
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login card-panel lighten-4 black-text center">
                        <h3>Register</h3>
                        <form>
                            <div class="input-field">
                                <div class="material-icons prefix">email</div>
                                <input type="text" id="email" v-model="email">
                                <label for="email">Email</label>
                            </div>
                            
                            <div class="input-field">
                                <div class="material-icons prefix">lock</div>
                                <input type="password" id="password" v-model="password">
                                <label for="password">Password</label>
                            </div>
                            <button v-on:click="register" class="btn btn-large grey lighten-4 black-text">Register</button>
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
    name: 'register',
    data: function() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        register: function (e) {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    alert(`Account created for ${user.email}`);
                    this.$router.push('/');
                }, err => { alert(err.message)} ),
                
            e.preventDefault();
        }
    }
}
</script>
