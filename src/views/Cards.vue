<script setup lang="ts">
import CardHeader from '../components/CardHeader.vue';
import CardContainer from '../components/CardContainer.vue';

</script>

<template>
  <div class="cards-page">
    <CardHeader currency="SGD" />
    <CardContainer />
  </div>
</template>

<style scoped>
.cards-page {
  padding: 40px 40px 40px 16px;
}
</style>
