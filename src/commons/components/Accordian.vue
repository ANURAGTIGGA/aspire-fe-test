<script setup lang="ts">
const props = defineProps<{ title: string, id: string }>();

const accordianIdHash = "#" + props.id;

</script>

<template>
    <div class="accordion">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="accordianIdHash" aria-expanded="false" aria-controls="collapseTwo">
                    <div class="header-icon">
                        <slot name="header-img"></slot>
                    </div>
                    <div>
                        {{ title }}
                    </div>
                </button>
            </h2>
            <div :id="id" class="accordion-collapse collapse" data-bs-parent="#accordion">
                <div class="accordion-body p-0">
                    <slot></slot>
                </div>
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<style type="scss" scoped>
.accordion {
    margin-bottom: 24px;
    .header-icon{
        margin-right: 12px;
    }
    .accordion-header button {
        background-color: #F5F9FF;
        border: 1px solid #F5F5F5;
        box-shadow: 0px 0px 8px #0000000A;
        font-size: 14px;
        font-family: 'OpenSans-Regular', sans-serif;
        color: #0C365A;
    }
}
</style>
