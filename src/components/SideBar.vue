<script setup lang="ts">
</script>

<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Marwa Ounalli"
        subtitle="marwa@gmailcom"
      />
    </v-list>
    <v-divider />
    <div class="font-weight-light mb-2">
      <v-list density="compact" nav>
        <v-list-item class="nav-item mb-2" color="primary" prepend-icon="mdi-home" title="Acceuil" value="home" />
        <v-list-item class="nav-item mb-2" color="primary" prepend-icon="mdi-folder" title="Recettes" value="recipes" />
        <v-list-item class="nav-item mb-2" color="primary" prepend-icon="mdi-account-multiple" title="Utilisateurs" value="users " />
      </v-list>
    </div>
  </v-navigation-drawer>
</template>
