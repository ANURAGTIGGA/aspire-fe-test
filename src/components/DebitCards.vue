<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Card from './Card.vue';
import Actions from './Actions.vue';
import TransactionBar from './TransactionBar.vue';
import Accordian from '../commons/components/Accordian.vue';
import { fetchCards, fetchTransactions } from '../service/index';
import type { CardType, TransactionType } from '../commons/typeDefinitions';
import { useCardStore } from '../store/index';
//defineProps<{ currency: string }>()

const cardStore = useCardStore();

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
        <div class="col-7">
            <div>
                <div id="cardCarousel" class="carousel slide">
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
                <Actions />
            </div>
        </div>
        <div class="col-5">
            <Accordian title="Card Details" id="cards">
                <template #header-img>
                    <img src="../assets/card.svg" class="logo" alt="aspire logo" />
                </template>
            </Accordian>

            <Accordian title="Recent Transactions" id="transactions">
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
.carousel-indicators [data-bs-target] {
    background-color: #01D167;
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
