<template>
  <div class="flex items-center my-2">
    <input type="checkbox" 
        disabled 
        class="form-checkbox"
        :class="color"
        checked>
    <span class="mx-2">
        {{ label }}
    </span>
  </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },

        color: {
            type: String,
            default: "text-green-500"
        }
    }
}
</script>

<style>

</style>