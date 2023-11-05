<template>
    <div>
        <main>
            <div id="landing">
                <div id="landing-text">
                    <div id="landing-text-inner">
                        <h1>Photography</h1>
                        <h2>Beautiful Natural Photography</h2>
                        <button class="btn_log" @click="showModal = true">
                            LOGIN
                        </button>
                    </div>
                </div>
                <div id="landing-image"></div>
            </div>

            <div id="images">
                <div id="header">
                    <h2>Our Work</h2>
                </div>

                <img
                    src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                />
                <div class="caption">
                    <h3>Photo One</h3>
                    <p>Body of Water during Golden Hour</p>
                </div>
                <img
                    src="https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                />
                <div class="caption">
                    <h3>Photo Two</h3>
                    <p>Brown Tunnel Near Body of Water</p>
                </div>
                <img
                    src="https://images.pexels.com/photos/3363295/pexels-photo-3363295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                />
                <div class="caption">
                    <h3>Photo Three</h3>
                    <p>Photo Of Waterfalls During Daytime</p>
                </div>
                <img
                    src="https://images.pexels.com/photos/748626/pexels-photo-748626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                />
                <div class="caption">
                    <h3>Photo Four</h3>
                    <p>
                        White and Black Moon With Black Skies and Body of Water
                        Photography during Night Time
                    </p>
                </div>
                <img
                    src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                />
                <div class="caption">
                    <h3>Photo Five</h3>
                    <p>Black Sand Dunes</p>
                </div>
            </div>
        </main>
        <footer>
            <h3>Get In Touch</h3>
            <p>Email or call us to set up a consult</p>
            <p>
                Email:
                <strong>almatyphotography@photos.test</strong>
            </p>
            <p>
                Phone:
                <strong>(707) 777-7777</strong>
            </p>
        </footer>
        <LoginModal v-show="showModal" @close-modal="showModal = false" />
    </div>
</template>

<script>
import firebase from 'firebase';
import LoginModal from '@/views/LoginModal.vue';
export default {
    components: { LoginModal },
    name: 'Home',
    data() {
        return {
            showModal: false,
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
h1 {
    font-weight: 400;
    font-size: 2.5rem;
    text-transform: uppercase;
    margin: 0;
}

h2 {
    font-weight: 400;
    font-size: 1.2rem;
    text-transform: capitalize;
    margin: 0;
}

img {
    display: block;
    width: 100%;
}

main {
    max-width: 900px;
    margin: auto;
}

main {
    box-shadow: 30px 0px 40px rgba(0, 0, 0, 0.1),
        -30px 0 40px rgba(0, 0, 0, 0.1);
}

#landing {
    background: #fff;
}

#landing-text {
    display: flex;
    flex: 0 1 40vw;
    height: 50vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-right: 1rem;
    padding-left: 1rem;
}

#landing-text h2 {
    color: #888;
}

#landing-image {
    background: url(https://images.pexels.com/photos/3981749/pexels-photo-3981749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50vh;
    flex: 0 1 60vw;
    margin: 0;
}

#header {
    padding: 1.5rem;
    text-align: center;
    background: #333;
    color: #fff;
}

#header h2 {
    border-left: dotted 1px #fff;
    border-right: dotted 1px #fff;
    display: inline-block;
    padding-right: 1rem;
    padding-left: 1rem;
}

.caption {
    padding: 0.8rem;
    text-align: center;
}

footer {
    text-align: center;
    padding: 2rem 1rem;
    margin: auto;
    color: #333;
}

footer h3 {
    font-size: 3rem;
    margin-bottom: 0;
}

/* Screen Sizes 500px and Up */
@media (min-width: 600px) {
    #landing {
        display: flex;
        height: 100%;
    }

    #landing-text {
        height: 100vh;
    }

    #landing-image {
        height: 100vh;
    }
}

/* Screen Sizes 700px and Up */
@media (min-width: 700px) {
    .btn {
        padding: 1rem 3rem;
    }
}
</style>
