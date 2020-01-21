<template>
    <label class="md:block tracking-wide text-gray-700"
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
