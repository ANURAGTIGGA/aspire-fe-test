<script setup lang="ts">

</script>

<template>
    <div class="card-skeleton green">
      <div class="skeleton skeleton-line short"></div>
      <div class="skeleton skeleton-logo"></div>
      <div class="skeleton skeleton-line medium"></div>
      <div class="skeleton skeleton-line long"></div>
      <div class="d-flex justify-content-between">
        <div class="skeleton skeleton-line short"></div>
        <div class="skeleton skeleton-line short"></div>
      </div>
      <div class="skeleton skeleton-logo small"></div>
    </div>
</template>

<style type="scss" scoped>
.skeleton {
  background: linear-gradient(90deg, #e0e0e0 25%, #f6f6f6 37%, #e0e0e0 63%);
  background-size: 400% 100%;
  animation: shimmer 1.2s infinite linear;
  border-radius: 4px;
  margin-bottom: 10px;
}

.skeleton-line {
  height: 16px;
  width: 100%;
}
.skeleton-line.short { width: 30%; }
.skeleton-line.medium { width: 60%; }
.skeleton-line.long { width: 90%; }

.skeleton-logo {
  height: 40px;
  width: 60px;
}
.skeleton-logo.small {
  height: 20px;
  width: 30px;
}

@keyframes shimmer {
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}

.card-skeleton {
    padding: 1rem;
    border-radius: 1rem;
    background-color: #cde3d3;
    width: 414px;
    height: 248px;
    margin: 60px 0;
}
</style>