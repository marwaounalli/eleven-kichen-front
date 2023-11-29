<script lang="ts" >
import { defineComponent, DefineComponent } from 'vue';
import { accountService } from '@/services/account';

import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

const initialState = {
    email: '',
}

const state = reactive({
    ...initialState,
})



const rules = {
    email: { required, email },
}

const v$ = useVuelidate(rules, state)

//   function clear () {
//     v$.value.$reset()

//     for (const [key, value] of Object.entries(initialState)) {
//       state[key] = value
//     }
//   }

export default defineComponent({
    name: 'Login',
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            show1: false,
            show2: true,
            password: 'Password',
            rules: {
                required: (value: any) => !!value || 'Required.',
                emailMatch: () => (`The email and password you entered don't match`),
            },

        }
    },
    methods: {
        login() {
            accountService.login(this.user)
                .then(res => {
                    accountService.saveToken(res.data.access_token)
                    this.$router.push('/')
                })
                .catch(err => console.log(err))
        }
    }
});
</script>

<template>
        <v-card class="ma-5 pa-5">
            <h1>Connexion</h1>

            <form @submit.prevent="login">
                <v-text-field v-model="user.email" label="E-mail" required></v-text-field>
                    <v-text-field v-model="user.password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required]" :type="show1 ? 'text' : 'password'" name="input-10-1"
                        label="Password" hint="At least 8 characters" counter
                        @click:append="show1 = !show1"></v-text-field>
                <v-btn class="me-4">
                    login
                </v-btn>
            </form>


        </v-card>


    </template>


    <style>
        form {
            max-width: 300px;
            margin: 0 auto;
        }

        .formGroup {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
        }
    </style>
