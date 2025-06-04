<script setup lang="ts">

</script>

<template>
    <div class="transaction-skeleton d-flex justify-content-evenly w-100">
      <div class="skeleton skeleton-icon"></div>
      <div class="skeleton-text-wrap d-flex flex-column justify-content-center align-items-start">
        <div class="skeleton skeleton-line short"></div>
        <div class="skeleton skeleton-line shorter"></div>
        <div class="skeleton skeleton-line medium"></div>
      </div>
      <div class="skeleton skeleton-amount"></div>
    </div>
</template>

<style type="scss" scoped>
.skeleton {
  background: linear-gradient(90deg, #e0e0e0 25%, #f6f6f6 37%, #e0e0e0 63%);
  background-size: 400% 100%;
  animation: shimmer 1.2s infinite linear;
  border-radius: 4px;
}

.transaction-skeleton {
  padding: 0.5rem 1rem;
  gap: 1rem;
}

.skeleton-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.skeleton-line {
  height: 12px;
  margin: 6px 0;
}

.skeleton-line.short { width: 100px; }
.skeleton-line.shorter { width: 70px; }
.skeleton-line.medium { width: 120px; }

.skeleton-amount {
  width: 80px;
  height: 20px;
  align-self: center;
}

@keyframes shimmer {
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
</style>