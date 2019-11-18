<template>
    <button :disabled="disabled" 
        class="border-solid border-2 px-2 py-1 rounded hover:text-red-500">
        <slot />
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
