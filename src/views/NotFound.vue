<script setup lang="ts">
const text = "Page Not Found!"

</script>

<template>
  <div class="not-found-page d-flex justify-content-center align-items-center h-100">
    <div class="container py-4 px-3 mx-auto">
      <h1>{{ text }}</h1>
        <button class="btn btn-primary">
          <RouterLink class="nav-item" to="/cards">Go back to Cards page.</RouterLink>
        </button>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #FFFFFF;
  font-size: 16px;
  text-decoration: none;
}
</style>
