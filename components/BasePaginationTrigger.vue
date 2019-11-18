<template>
    <span class="base-pagination-trigger"
        @click="onClick">
        {{ pageNumber }}
    </span>
</template>

<script>
export default {
    props: {
        pageNumber: {
            type: Number,
            required: true
        }
    },
    methods: {
        onClick() {
            this.$emit("loadPage", this.pageNumber)
        }
    }
}
</script>

<style>
    .base-pagination-trigger {
        cursor: pointer;
        transition: all 300ms ease;
    }
    .base-pagination-trigger:hover {
        color: #FF0000;
    }
</style>