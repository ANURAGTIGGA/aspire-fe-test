<script setup lang="ts">
import MaskCardNumber from './MaskCardNumber.vue';
import type { CardType } from '../commons/typeDefinitions';

defineProps<{ cardDetails: CardType }>()

</script>

<template>
    <div class="card-wrap">
        <div class="debit-card green" :style="{opacity: cardDetails.freeze ? 0.3 : 1}">
            <div class="show-card-no">
                <img src="../assets/remove_eye.svg" class="remove-mask" alt="remove card mask" />
                Show card number</div>
            <div class="card-logo">
                <img src="../assets/logos/AspireLogoWhite.svg" class="logo" alt="aspire logo" />
            </div>
            <div class="cardholder">{{ cardDetails.cardholder }}</div>
            <div>
                <MaskCardNumber :cardnumber="cardDetails.cardNumber.split('-')[3]" />
            </div>
            <div class="card-date-cvv d-flex">
                <div class="expiry">Thru: {{ cardDetails.expiryDate }}</div>
                <div class="cvv">CVV: ***</div>
            </div>
            <div class="card-logo">
                <img v-if="cardDetails.networkType === 'visa'" src="../assets/logos/VisaLogo.svg" class="logo" alt="aspire logo" />
            </div>
        </div>
    </div>
</template>

<style type="scss" scoped>
.card-wrap {
    margin-bottom: 56px;
    padding-top: 60px;
    .debit-card {
        position: relative;
        height: 248px;
        width: 414px;
        background-color: #01D167;
        color: #FFFFFF;
        border-radius: 8px;
        padding: 27px 22px 27px 27px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        .card-logo {
            align-self: flex-end;
        }
        .cardholder {
            font-family: 'OpenSans-Bold', sans-serif;
            font-size: 24px;
        }
        .card-date-cvv{
            gap: 27px;
        }
        .show-card-no {
            color: #01D167;
            font-size: 12px;
            font-family: 'OpenSans-Bold', sans-serif;
            position: absolute;
            top: -25px;
            right: 0;
        }
    }
}
</style>
