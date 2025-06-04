<script setup lang="ts">

defineProps<{ cardnumber: string }>()

</script>

<template>
  <div class="masked-card-number">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="space"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="space"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="space"></span>
    <span>{{ cardnumber }}</span>
  </div>
</template>

<style type="scss" scoped>
.masked-card-number {
    .dot {
        display: inline-block;
        height: 9.03px;
        width: 9.03px;
        background-color: #FFFFFF;
        border-radius: 50%;
        margin-right: 5px;
    }
    .space {
        display: inline-block;
        width: 27px;
    }
}
</style>
