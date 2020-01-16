<template>
  <div class=""></div>
</template>

<script>
export default {
    mounted() {
        this.handler = event => {
            this.$emit('keyup', event)
        }
        if (process.browser)
            window.addEventListener('keyup', this.handler)
    },

    beforeDestroy() {
        if (process.browser)
            window.removeEventListener('keyup', this.handler)
    }
}
</script>

<style>

</style>