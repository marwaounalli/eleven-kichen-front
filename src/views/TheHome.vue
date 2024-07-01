<script lang="ts">
import recipesService from '@/services/recipes';

export default {
  data() {
    return {
      recipes: []
    }
  },
  async mounted() {
    let result = await recipesService.getRecipes();
    this.recipes = result.data;
    console.log(this.recipes);
  }
}
</script>

<template>
  <v-card class="ma-5 pa-5">
    <div class="text-right mb-10">
      <router-link to="/create-recipe">
        <v-btn>
          Ajouter une recette
        </v-btn>
      </router-link>
    </div>
    <v-row>
      <v-col v-for="recipe in recipes" :key="recipe.id" cols="4" sm="4" xs="5" md="3" lg="3">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-auto" color="grey-lighten-4" max-width="600" v-bind="props">
            <v-img
              :src="`https://localhost/${recipe.imagePath}`"
              :lazy-src="`https://localhost/${recipe.imagePath  }`"
              aspect-ratio="1"
              cover
              class="bg-grey-lighten-2"
            >
              <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey-lighten-5" />
                </v-row>
              </template>

              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out bg-yellow-darken-2 v-card--reveal text-h6"
                  style="height: 100%;"
                >
                  <v-list class="bg-yellow-darken-2">
                    Ingrédients :

                  <v-list-item
        v-for="(item, i) in recipe.ingredients"
        :key="i"
        :value="item"
      >
      <v-list-item-title v-text="item.name + `:  ${item.quantity} ${item.measurmentUnit}`" max-width="600"></v-list-item-title>
      </v-list-item>
      </v-list>
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-item>
              <v-card-title class="font-weight-light text-grey text-h6 mb-2">
                {{ recipe.title }}
              </v-card-title>

              <v-card-subtitle>
                <span class="me-1">{{ recipe.category }}</span>

                <v-icon color="error" icon="mdi-fire-circle" size="small" />
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :model-value="4.5"
                  color="amber"
                  density="compact"
                  half-increments
                  readonly
                  size="small"
                />

                <div class="text-grey ms-4">
                  4.5 (413)
                </div>
              </v-row>

              <div class="my-4 text-subtitle-1" />

              <div class="font-weight-light mb-2">
                {{ recipe.description }}
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-card>
</template>
<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .7;
    position: absolute;
    width: 100%;
}
</style>
