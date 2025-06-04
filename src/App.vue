<script setup lang="ts">
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div class="row h-100">
    <div class="col-3  h-100">
      <SideBar />
    </div>
    <div class="col-9">
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
main {
  overflow-y: scroll;
  height: 100vh;
}
</style>
