<script setup lang="ts">
import { ref } from 'vue';
import { useCardStore } from '../../store/index';

const props = defineProps<{ onAddNew: Function }>()

const closeRef = ref<HTMLButtonElement | null>(null);
const cardStore = useCardStore();

function setCardName(e: Event) {
    const target = e.target as HTMLInputElement;
    cardStore.setCardName(target.value);
}

function addNewCardHandler() {
    props.onAddNew();
    closeRef.value?.click();
}

</script>

<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Add a New Card</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3 text-start">
                    <label for="name" class="form-label">Card Name</label>
                    <input type="text" 
                            class="form-control" 
                            id="name" 
                            placeholder="Enter Name here ..."
                            @change="setCardName"
                    >
                </div>
            </div>
            <div class="modal-footer">
                <button ref="closeRef" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="addNewCardHandler">Add</button>
            </div>
            </div>
        </div>
    </div>
</template>

<style type="scss" scoped>
</style>
<!-- Modal -->
