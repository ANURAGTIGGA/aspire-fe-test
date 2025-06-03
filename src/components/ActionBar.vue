<script setup lang="ts">
import { ref } from 'vue';
import ACTIONS from '../commons/configs/actionConfig.ts';

const actions = ACTIONS;

// defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div>
    logo
  </div>
  <nav class="actions-wrap">
    <div v-for="action of actions">
      <RouterLink :to="action.route">{{ action.name }}</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
