<script setup lang="ts">
import { TRANSACTION } from '../commons/constants';
import type { TransactionType } from '../commons/typeDefinitions';

defineProps<{ transaction: TransactionType }>()

const iconMap = TRANSACTION.ICON_MAP;

function getImagePath(name: string) {
  return new URL(`../assets/transaction-icons/${name}.svg`, import.meta.url).href;
}

</script>

<template>
    <div class="transaction-bar d-flex justify-content-evenly">
        <div class="icon d-flex justify-content-center align-items-center" :style="{ backgroundColor: iconMap[transaction.merchantType] }">
            <img :src="getImagePath(transaction.merchantType)" class="transaction-icon" :alt="transaction.merchantType" />
        </div>
        <div class="transaction-details d-flex flex-column justify-content-center align-items-start">
            <div class="merchant">{{ transaction.merchantName }}</div>
            <div class="date">{{ transaction.date }}</div>
            <div class="note d-flex">
                <div class="icon-wrap">
                    <img :src="getImagePath('business-and-finance')" class="transaction" alt="transaction" />
                </div>
                <span>Refund on debit card</span>
            </div>
        </div>
        <div class="amount-details" :style="{ color: transaction.type === 'credit' ? '#01D167' : '#222222'}">{{transaction.type === "credit" ? "+" : "-"}} S$ 150
            <img src="../assets/next.svg" class="transaction-details-icon" alt="transaction-details" />
        </div> 
    </div>
</template>

<style type="scss" scoped>
.transaction-bar{
    padding-top: 16px;
    padding-bottom: 16px;
    .icon {
        height: 48px;
        width: 48px;
        border-radius: 50%;
    }
    .transaction-details {
        .merchant {
            font-size: 14px;
            font-family: 'OpenSans-SemiBold', sans-serif;
            color: #222222;
            margin-bottom: 4px;
        }
        .date {
            font-size: 13px;
            font-family: 'OpenSans-Regular', sans-serif;
            color: #AAAAAA;
        }
        .note{
            font-size: 12px;
            font-family: 'OpenSans-SemiBold', sans-serif;
            color: #325BAF;
            gap: 8px;
            margin-top: 12px;
            .icon-wrap {
                background-color: #325BAF;
                height: 20px;
                width: 24px;
                border-radius: 50%;
            }
        }
    }
    .amount-details {
        font-size: 14px;
        font-family: 'OpenSans-Bold', sans-serif;
        .transaction-details-icon {
            padding: 0 0 2px 10px;
        }
    }
}
</style>
