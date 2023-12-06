<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { ref } from 'vue';

const initialState = {
  title: '',
  description: '',
  select: null,
  items: [
    'Facile',
    'Moyenne',
    'Difficile',
  ],
};

const state = ref({
  ...initialState,
});

const rules = {
  title: { required },
  description: { required },
  select: { required },
  items: { required },
};

const v$ = useVuelidate(rules, state);

function clear() {
  v$.value.$reset();

  state.value = {
    ...initialState,
  };
}
</script>

<template>
  <v-card class="ma-5 pa-5">
    <form>
      <v-text-field
        v-model="state.title"
        :error-messages="v$.title.$errors.map(e => typeof e.$message === 'object' ? e.$message.value : e.$message)"
        :counter="10"
        label="Titre"
        required
        @input="v$.title.$touch"
        @blur="v$.title.$touch"
      />

      <v-select
        v-model="state.select"
        :items="state.items"
        :error-messages="v$.select.$errors.map(e => typeof e.$message === 'object' ? e.$message.value : e.$message)"
        label="Difficulté"
        required
        @change="v$.select.$touch"
        @blur="v$.select.$touch"
      />

      <v-textarea
        v-model="state.description"
        clearable
        clear-icon="mdi-close-circle"
        label="Description"
        :error-messages="v$.description.$errors.map(e => typeof e.$message === 'object' ? e.$message.value : e.$message)"
        :counter="10"
        required
        @input="v$.description.$touch"
        @blur="v$.description.$touch"
      />

      <v-btn class="me-4" @click="v$.$validate">
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </v-card>
</template>
