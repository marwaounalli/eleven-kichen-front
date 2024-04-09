<script setup lang="ts">
</script>

<template>
  <v-card>
    <v-navigation-drawer location="left" permanent>
      <template v-slot:prepend>
        <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg" subtitle="Logged in"
          title="Marwa Ounalli"></v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item class="nav-item mb-2" color="primary" prepend-icon="mdi-home" title="Acceuil" value="home" />
        <v-list-item class="nav-item mb-2" color="primary" prepend-icon="mdi-folder" title="Recettes" value="recipes" />
        <v-list-item class="nav-item mb-2" color="primary" prepend-icon="mdi-account-multiple" title="Utilisateurs"
          value="users " />
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
