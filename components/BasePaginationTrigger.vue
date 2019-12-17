<template>
    <span class="border px-2 rounded text-gray-500 cursor-pointer hover:text-red-500"
        :id="triggerId"
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

    computed: {
        triggerId() {
            return 'trigger-' + this.pageNumber.toString()
        }
    },

    methods: {
        onClick() {
            this.$emit("loadPage", this.pageNumber)
        }
    }
}
</script>
