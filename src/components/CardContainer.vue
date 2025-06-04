<script setup lang="ts">
import DebitCards from './DebitCards.vue'
//defineProps<{ currency: string }>()

</script>

<template>
    <ul class="nav nav-underline">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" id="debit-tab" data-bs-toggle="tab" data-bs-target="#debit-tab-pane">My debit cards</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true" id="all-cards-tab" data-bs-toggle="tab" data-bs-target="#all-cards-tab-pane">All company cards</a>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="debit-tab-pane" role="tabpanel" aria-labelledby="debit-tab" tabindex="0">
            <DebitCards />
        </div>
        <div class="tab-pane fade" id="all-cards-tab-pane" role="tabpanel" aria-labelledby="all-cards-tab" tabindex="0"></div>
    </div>
</template>

<style type="scss" scoped>
.nav-item .nav-link {
    font-family: 'avenir-next-demi-bold', sans-serif;
    font-size: 14px;
    color: #222222;

    &.disabled {
        color: rgba(34, 34, 34, 0.30);
    }
}
.nav-underline .nav-link.active {
    border-bottom: 3px solid #23CEFD;
}
.nav-underline .nav-link:hover, .nav-underline .nav-link:focus {
    border-bottom-color: #23CEFD;
}
.tab-content {
    margin-top: 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 12px #00000014;
    border: 1px solid #FCFCFC;
    padding: 0 40px 40px 40px;
}
</style>
