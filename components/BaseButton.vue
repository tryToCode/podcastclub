<template>
    <button :disabled="disabled" 
        class="border-solid border-2 px-2 rounded">
        <slot class="inline align-middle" />
    </button>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>
