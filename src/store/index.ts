import { defineStore } from 'pinia';
import type { CardType, TransactionType } from '../commons/typeDefinitions';

export const useCardStore = defineStore('card', {
  state: () => ({
    cardList: [] as CardType[],
    transactionsList: [] as TransactionType[]
  }),
  getters: {},
  actions: {
    setCards(cards: CardType[]) {
      this.cardList = cards;
    },
    addCard(card: CardType) {
      this.cardList = [...this.cardList, card];
    },
    setTransactions(transactions: TransactionType[]) {
      this.transactionsList = transactions;
    },
  },
});
