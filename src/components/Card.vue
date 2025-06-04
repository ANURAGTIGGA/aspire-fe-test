<script setup lang="ts">
import MaskCardNumber from './MaskCardNumber.vue';

interface Card {
    "id": string;
    "cardholder": string;
    "cardNumber": string;
    "expiryDate": string;
    "cvv": string;
    "networkType": string;
    "cardType": string;
}

defineProps<{ cardDetails: Card }>()

</script>

<template>
    <div class="card-wrap">
        <div class="debit-card green">
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
    .debit-card {
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
    }
}
</style>
