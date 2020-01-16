<template>
  <div class="hidden"></div>
</template>

<script>
export default {
    mounted() {
        this.handler = event => {
            event.preventDefault()
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