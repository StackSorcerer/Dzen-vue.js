<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/register">Register</router-link> |
            <router-link to="/dashboard">Dashboard</router-link> |
            <button class="btn_log" @click="logout">Logout</button>
        </div>
        <router-view />
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    methods: {
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    alert('Successfully logged out');
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                    this.$router.push('/');
                });
        },
    },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
body {
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0;
    background: #eee;
    height: auto;
}
#app {
    text-align: center;
    width: 600px;
    margin: auto;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #888;
}

#nav a.router-link-exact-active {
    color: #29293d;
}

.btn_log {
    border: 1px #ccc solid;
    display: inline-block;
    margin: 2rem 0 0;
    border-radius: 50px;
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    z-index: 1;
    color: #090909;
    padding: 0.3em 1em;
    font-size: 18px;
    background: #e8e8e8;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
}
.btn_log:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}
.btn_log:hover {
    color: #ffffff;
    border: 1px solid #009087;
}
.btn_log:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
}

.btn_log:after {
    content: '';
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #009087;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
}
.btn_log:hover:before {
    top: -35%;
    background-color: #009087;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.btn_log:hover:after {
    top: -45%;
    background-color: #009087;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}
</style>
