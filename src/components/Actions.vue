<script setup lang="ts">
import ACTIONS from '../commons/configs/actionsConfig';
//defineProps<{ cardnumber: string }>()

const actionsList = ACTIONS;
const relativePath = "../assets/action-icons/";

function getImagePath(name: string) {
  return new URL(`../assets/action-icons/${name}.svg`, import.meta.url).href;
}

</script>

<template>
    <div class="actions-wrap d-flex">
        <div v-for="action of actionsList" class="action d-flex flex-column justify-content-center align-items-center">
            <img :src="getImagePath(action.icon)" class="action-icon" :alt="action.icon" />
            <span>{{ action.name }}</span>
        </div>
    </div>
</template>

<style type="scss" scoped>
.actions-wrap {
    height: 116px;
    width: 414px;
    background-color: #EDF3FF;
    border-radius: 16px;
    .action {
        cursor: pointer;
        img {
            height: 32px;
            width: 32px;
        }
    }
}
</style>
