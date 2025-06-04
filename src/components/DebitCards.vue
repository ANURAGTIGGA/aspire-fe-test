<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Card from './Card.vue';
import Actions from './Actions.vue';
import TransactionBar from './TransactionBar.vue';
//defineProps<{ currency: string }>()

const transactions = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('/transactions.json');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    transactions.value = data.transactions;
  } catch (error) {
    console.error('Error:', error);
  }
});

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
                        <div class="accordion-body p-0">
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
                        <div class="accordion-body p-0">
                            <div v-for="transaction of transactions" class="transaction-wrap">
                                <TransactionBar :transaction="transaction" />
                            </div>
                        </div>
                        <div class="view-more">
                            View all card transactions
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
.transaction-wrap {
    border-bottom: 1px solid #F5F5F5;
    &:last-child {
        border-bottom: 0;
    }
}
.view-more {
    font-size: 13px;
    font-family: 'OpenSans-SemiBold', sans-serif;
    color: #01D167;
    background: #EDFFF5;
    padding: 15px;
    border: 1px solid #DDFFEC;
}
</style>
