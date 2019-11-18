<template>
    <button :disabled="disabled" 
        class="border-solid border-2 px-2 rounded hover:text-red-500">
        <slot class="inline-block align-middle" />
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
