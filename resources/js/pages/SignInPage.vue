<template>
    <form @submit.prevent="submit()">
        <div>
            <label for="">E-mail: </label>
            <input type="email" name="email">            
        </div>
        <div>
            <label for="password">Wachtwoord: </label>
            <input type="password" name="password">          
        </div>
        <div>
            <button type="submit">
                Log in
            </button>            
        </div>
    </form>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

    export default {
        name: 'sign-in',
        data () {
            return {
                form: {
                    email: '',
                    password: '',
                }
            }
        },
        components: {
            
        },
        methods: {
            ...mapActions({
                signIn: 'auth/signIn'
            }),

            submit() {
                this.signIn(this.form).catch();
            }
        },
    }
</script>