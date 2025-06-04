import { defineStore } from 'pinia';
import type { CardType, TransactionType } from '../commons/typeDefinitions';

export const useCardStore = defineStore('card', {
  state: () => ({
    cardList: [] as CardType[],
    transactionsList: [] as TransactionType[],
    newCardName: ""
  }),
  getters: {},
  actions: {
    setCards(cards: CardType[]) {
      this.cardList = cards;
    },
    addCard(card: CardType) {
      this.cardList = [...this.cardList, card];
    },
    updateCardFreezeStatus(id: string) {
      const map = this.cardList.map((item)=>{
        if(item.id === id) {
          return {
            ...item,
            freeze: !item.freeze
          };
        }
        return item;
      });
      this.cardList = map;
    },
    setTransactions(transactions: TransactionType[]) {
      this.transactionsList = transactions;
    },
    setCardName(name: string) {
      this.newCardName = name;
    }
  },
});
