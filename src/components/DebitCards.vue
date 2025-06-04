<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Card from './Card.vue';
import Actions from './Actions.vue';
import TransactionBar from './TransactionBar.vue';
import Accordian from '../commons/components/Accordian.vue';
import { fetchCards, fetchTransactions } from '../service/index';
import type { CardType, TransactionType } from '../commons/typeDefinitions';
import { useCardStore } from '../store/index';
//defineProps<{ currency: string }>()

const cardStore = useCardStore();
const carouselRef = ref<HTMLElement | null>(null);

function actionHandler() {
    if (carouselRef.value) {
        const activeItem = carouselRef.value.querySelector('.carousel-item.active');
        const allItems = carouselRef.value.querySelectorAll('.carousel-item');

        const activeIndex = Array.from(allItems).indexOf(activeItem as Element);
        cardStore.updateCardFreezeStatus(String(activeIndex))
    }
}

onMounted(async () => {
  try {
    const [transactionsRes, cards] = await Promise.all([
      fetchTransactions(),
      fetchCards()
    ]);

    cardStore.setCards(cards as CardType[]);
    cardStore.setTransactions(transactionsRes as TransactionType[]);
  } catch (error) {
    console.error('Error:', error);
  }
});

</script>

<template>
    <div class="debit-cards-container row">
        <div class="col-6">
            <div>
                <div ref="carouselRef" id="cardCarousel" class="carousel slide">
                    <div class="carousel-indicators">
                        <button v-for="card,index of cardStore.cardList"
                                :key="card.id"
                                :class="{ active: index === 0 }"
                                type="button" 
                                data-bs-target="#cardCarousel" 
                                :data-bs-slide-to="card.id"
                                aria-current="true" 
                                :aria-label="'slide ' + card.id"></button>
                    </div>
                    <div class="carousel-inner">
                        <div 
                            class="carousel-item" 
                            :class="{ active: index === 0 }"
                            :key="card.id"
                            v-for="card,index of cardStore.cardList"
                        >
                            <Card :cardDetails="card"/>
                        </div>
                    </div>
                </div>
                <Actions :onActionClick="actionHandler" />
            </div>
        </div>
        <div class="col-6 accordian-wrap">
            <Accordian title="Card Details" id="cards" :open="false">
                <template #header-img>
                    <img src="../assets/card.svg" class="logo" alt="aspire logo" />
                </template>
            </Accordian>

            <Accordian title="Recent Transactions" id="transactions" :open="true"> 
                <template #header-img>
                    <img src="../assets/transaction.svg" class="logo" alt="aspire logo" />
                </template>
                <div v-for="transaction of cardStore.transactionsList" class="transaction-wrap">
                    <TransactionBar :transaction="transaction" />
                </div>
                <template #footer>
                    <div class="view-more">
                        View all card transactions
                    </div>
                </template>
            </Accordian>
        </div>
    </div>
</template>

<style type="scss" scoped>
.accordian-wrap {
    padding-top: 60px;
}
.carousel-indicators [data-bs-target] {
    background-color: #01D167;
}
.carousel-indicators {
    button {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        &.active {
            width: 16px;
            border-radius: 45%;
        }
    }
}
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
