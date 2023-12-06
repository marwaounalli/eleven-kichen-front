<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

import accountService from '@/services/account';

const router = useRouter();

const showPassword = ref(false);

const state = reactive({
  email: '',
  password: '',
});

const rules = {
  email: { required, email },
  password: { required },
};

const v$ = useVuelidate(rules, state);

const login = () => {
  accountService.login(state)
    .then((res) => {
      accountService.saveToken(res.data.access_token);
      router.push('/');
    })
    .catch((err) => console.error(err));
};
</script>

<template>
  <v-card class="ma-5 pa-5">
    <h1>Connexion</h1>

    <form @submit.prevent="login">
      <v-text-field
        v-model="state.email"
        label="E-mail"
        required
        :error-messages="v$.email.$errors.map(e => typeof e.$message === 'object' ? e.$message.value : e.$message)"
        @input="v$.email.$touch"
        @blur="v$.email.$touch"
      />
      <v-text-field
        v-model="state.password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        :error-messages="v$.password.$errors.map(e => typeof e.$message === 'object' ? e.$message.value : e.$message)"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="showPassword = !showPassword"
        @input="v$.password.$touch"
        @blur="v$.password.$touch"
      />
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
