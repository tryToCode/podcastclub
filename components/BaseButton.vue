<template>
    <button :disabled="disabled" class="btn">
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

<style>
    .btn {
        text-decoration: none;
        border: 2px solid #FF0000;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: white;
        cursor: pointer;
    }
    .btn:hover {
        background-color: #FF0000;
        color: white;
    }
</style>