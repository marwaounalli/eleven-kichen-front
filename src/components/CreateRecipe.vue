<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

import recipesService from '@/services/recipes';
const router = useRouter();


const state = reactive({
  title: '',
  description: '',
  image: '',
  difficulty: '',
  category: '',
});

const difficulty = [
    {label: 'Facile', value: 'easy'},
    {label: 'Moyenne', value: 'medium'},
    {label: 'Difficile', value: 'hard'},
  ];
  
const categories = ['party', 'sweets', 'batch cooking'];
const rules = {
  title: { required },
  description: { required },
  image: { required },
  difficulty: { required },
  category: { required },
};

const v$ = useVuelidate(rules, state);

function clear() {
  v$.value.$reset();
}

const create = () => {
  console.log(state);
  recipesService.postRecipe(state)
    .then((res) => {
      router.push('/recipes');
    })
    .catch((err) => console.error(err));
};

</script>

<template>
  <v-card class="ma-5 pa-5">
    <form @submit.prevent="create">
      <v-text-field v-model="state.title"
        :error-messages="v$.title.$errors.map(e => typeof e.$message === 'object' ? e.$message.value : e.$message)"
        :counter="10" label="Titre" required @input="v$.title.$touch" @blur="v$.title.$touch" />

        <v-select :items="difficulty"
        :error-messages="v$.difficulty.$errors.map(e => typeof e.$message === 'object' ? e.$message.value : e.$message)"
        label="Difficulté"  item-title="label" value="value" required @change="v$.difficulty.$touch" @blur="v$.difficulty.$touch" />

        <v-select :items="categories"
        :error-messages="v$.category.$errors.map(e => typeof e.$message === 'object' ? e.$message.value : e.$message)"
        label="Catégorie" required @change="v$.category.$touch" @blur="v$.category.$touch" />

      <v-textarea v-model="state.description" clearable clear-icon="mdi-close-circle" label="Description"
        :error-messages="v$.description.$errors.map(e => typeof e.$message === 'object' ? e.$message.value : e.$message)"
        :counter="10" required @input="v$.description.$touch" @blur="v$.description.$touch" />

      <v-file-input accept="image/png, image/jpeg, image/bmp" placeholder="choisir une image" prepend-icon="mdi-camera"
        label="Image" @change="v$.image.$touch"></v-file-input>

      <v-btn type="submit" class="me-4">
        submit
      </v-btn>
      <v-btn class="bg-secondary" @click="clear">
        clear
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
