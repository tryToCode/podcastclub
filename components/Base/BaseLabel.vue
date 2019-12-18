<template>
    <label class="md:block md:px-2 tracking-wide text-gray-700"
        :class="{'hidden': hidden}">
        {{text}}
    </label>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },

        hidden: {
            type: Boolean,
            required: true
        }
    }
}
</script>
