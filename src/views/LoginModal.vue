<template>
    <div class="modal-overlay">
        <div class="modal">
            <form @submit.prevent="login">
                <h2 class="margn_20">Login</h2>
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
                    <button class="btn" type="submit">Login</button>
                </div>
            </form>
        </div>
        <div class="close" @click="$emit('close-modal')">
            X
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'LoginModal',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$router.push('/dashboard');
                })
                .catch(error => {
                    alert(error.message);
                });
        },
    },
};
</script>
<style>
.close {
    margin: 20% 0 0 16px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #009087;
    color: aliceblue;
    font-weight: bold;
    text-align: center;
    line-height: 25px;
}
.modal-overlay {
    z-index: 2;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
}
.modal {
    z-index: 3;
    text-align: center;
    background-color: white;
    height: 300px;
    width: 500px;
    margin-top: 20%;
    padding: 60px 0;
    border-radius: 20px;
}
form .form-field::before {
    font-size: 20px;
    position: absolute;
    left: 15px;
    top: 17px;
    color: #888888;
    content: ' ';
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
}
form .form-field:nth-child(2)::before {
    background-image: url(../assets/user-icon.png);
    width: 20px;
    height: 20px;
    top: 15px;
}
form .form-field:nth-child(3)::before {
    background-image: url(../assets/lock-icon.png);
    width: 16px;
    height: 16px;
}
form .form-field {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 1rem;
    position: relative;
}
form input {
    font-family: inherit;
    width: 90%;
    outline: none;
    background-color: #fff;
    border-radius: 4px;
    border: none;
    display: block;
    padding: 0.9rem 0.7rem;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 17px;
    color: #4a4a4a;
    text-indent: 40px;
}
form .btn {
    outline: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 auto;
    padding: 0.9rem 2.5rem;
    text-align: center;
    background-color: #009087;
    color: #fff;
    border-radius: 4px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 17px;
}
.margn_20 {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
