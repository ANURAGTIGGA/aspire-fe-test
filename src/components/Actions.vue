<script setup lang="ts">
import ACTIONS from '../commons/configs/actionsConfig';
const props = defineProps<{ onActionClick: Function }>()

const actionsList = ACTIONS;

function getImagePath(name: string) {
  return new URL(`../assets/action-icons/${name}.svg`, import.meta.url).href;
}

function onActionHandler(code: string) {
    if(code === "freeze") {
        props.onActionClick();
    }
}

</script>

<template>
    <div class="actions-wrap d-flex justify-content-evenly">
        <div v-for="action of actionsList" 
            class="action d-flex flex-column justify-content-center align-items-center" 
            :class="action.code"
            @click="onActionHandler(action.code)"
        >
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
        flex-basis: 60px;
        gap: 7px;
        line-height: 14px;
        font-family: 'OpenSans-Regular', sans-serif;
        font-size: 13px;
        color: #0C365A;
        img {
            height: 32px;
            width: 32px;
        }
        &.freeze{
            cursor: pointer;
        }
    }
}
</style>
