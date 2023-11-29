
<script lang="ts" setup >
  import SideBar from './components/SideBar.vue'
</script> 

<template>
  <VApp>
    <SideBar />
    <VMain>
      <router-view/>
    </VMain>
  </VApp>
</template>

