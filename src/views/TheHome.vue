<script setup lang="ts">
</script>

<template>
  <v-card class="ma-5 pa-5">
    <div class="text-right mb-10">
      <router-link to="/create-recipe">
        <v-btn class="bg-yellow-darken-2">
          Ajouter une recette
        </v-btn>
      </router-link>
    </div>
    <v-row>
      <v-col v-for="n in 9" :key="n" cols="4" sm="4" xs="5" md="3" lg="3">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-auto" color="grey-lighten-4" max-width="600" v-bind="props">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 30}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 30}`"
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
                  Ingrédients : <br>
                  - Farine<br>
                  - Sucre<br>
                  - Chocolat<br>
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-item>
              <v-card-title class="font-weight-light text-grey text-h6 mb-2">
                Cafe Badilico
              </v-card-title>

              <v-card-subtitle>
                <span class="me-1">Local Favorite</span>

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
                Small plates, salads & sandwiches - an intimate setting with
                12 indoor seats plus patio
                seating.
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
