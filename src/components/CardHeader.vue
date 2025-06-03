<script setup lang="ts">
import { CURRENCY_MAP } from '../commons/constants';

function getImagePath(name: string) {
  return new URL(`../assets/nav-icons/${name}.svg`, import.meta.url).href;
}

defineProps<{ currency: string }>()

</script>

<template>
  <div class="card-header row justify-content-between align-items-end">
    <div class="balance-details col-6 text-start">
        <p class="balance-details-title">Available Balance</p>
        <!-- <img src="../assets/logos/AspireLogo.svg" class="logo" alt="aspire logo" /> -->
        <span class="currency">{{ CURRENCY_MAP[currency] }}</span>
        <span class="amount">3000</span>
    </div>
    <div class="add-action col-6 text-end">
        <button class="btn btn-primary new-card-btn">
            <img src="../assets/box.svg" class="add-icon" alt="add icon" />
            New Card</button>
    </div>
  </div>
</template>

<style type="scss" scoped>
.card-header {
    margin-bottom: 34px;
}
.balance-details {
    .balance-details-title {
        color: #222222;
        font-size: 14px;
        margin-bottom: 0;
    }
    .amount {
        font-size: 26px;
        font-weight: 700;
        color: #222222;
        vertical-align: middle;
    }
    .currency {
        width: 40px;
        height: 24px;
        background-color: #01D167;
        border-radius: 4px;
        font-size: 13px;
        color: #FFFFFF;
        margin-right: 12px;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
    }
}
.new-card-btn {
    background-color: #325BAF;
    height: 35px;
    width: 109px;
    font-size: 13px;
    line-height: 18px;
    img.add-icon {
        vertical-align: bottom;
    }
}
</style>
