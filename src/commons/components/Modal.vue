<script setup lang="ts">
//const props = defineProps<{ title: string, id: string }>();


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
                    <input type="text" class="form-control" id="name" placeholder="Enter Name here ...">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Add</button>
            </div>
            </div>
        </div>
    </div>
</template>

<style type="scss" scoped>
</style>
<!-- Modal -->
