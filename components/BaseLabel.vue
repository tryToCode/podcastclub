<template>
    <label class="hidden md:block md:px-2 tracking-wide text-gray-700">
        {{text}}
    </label>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>
