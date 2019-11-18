<template>
    <span class="border px-2 py-1 rounded text-gray-500 cursor-pointer hover:text-red-500"
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
