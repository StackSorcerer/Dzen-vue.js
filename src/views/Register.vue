<template>
    <div>
        <form @submit.prevent="register">
            <h2 class="margn_20">Register</h2>
            <div class="form-field">
                <input
                    type="email"
                    placeholder="Email address..."
                    v-model="email"
                />
            </div>
            <div class="form-field">
                <input
                    type="password"
                    placeholder="password..."
                    v-model="password"
                />
            </div>
            <div class="form-field">
                <button type="submit" class="btn">Register</button>
            </div>
        </form>
    </div>
</template>
<script>
import firebase from 'firebase';

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        register() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                });
        },
    },
};
</script>
