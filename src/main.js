import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyDr37a5V2fL37ekiENDyDwGv-OlQnlie5g',
    authDomain: 'vue-firebase-auth-134e9.firebaseapp.com',
    projectId: 'vue-firebase-auth-134e9',
    storageBucket: 'vue-firebase-auth-134e9.appspot.com',
    messagingSenderId: '750324839996',
    appId: '1:750324839996:web:f580f412919a5ea4a8f539',
    measurementId: 'G-8XSM4JLP50',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
