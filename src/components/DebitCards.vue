<script setup lang="ts">
import Card from './Card.vue';
import Actions from './Actions.vue';
//defineProps<{ currency: string }>()

</script>

<template>
    <div class="debit-cards-container row">
        <div class="col-7">
            <div>
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <Card />
                        </div>
                        <div class="carousel-item">
                            <Card />
                        </div>
                        <div class="carousel-item">
                            <Card />
                        </div>
                    </div>
                </div>
                <Actions />
            </div>
        </div>
        <div class="col-5">
            <div>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Card Details
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the first item’s accordion body.</strong>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Recent Transactions
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the second item’s accordion body.</strong>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<style type="scss" scoped>
.carousel-indicators [data-bs-target] {
    background-color: #01D167;
}
/* .carousel-indicators {
    bottom: -40px;
} */
</style>
