<template>
  <div class="bg-black flex flex-col items-center justify-center h-screen">
    <p class="text-6xl text-red-500 font-extrabold">500</p>
    <p class="text-lg text-red-500">Server Error</p>
    <p class="text-red-500">It's not you, it's me.</p>
    <nuxt-link class="my-2 text-sm text-red-500 bg-transparent font-semibold
        border border-red-500 hover:border-transparent hover:bg-red-500 hover:text-white
        rounded py-2 px-4"
        id="reloadPage"
        to="/"
        @click.native="reload">
        Try Again
    </nuxt-link>
  </div>
</template>

<script>
export default {
    name: 'error-500',

    props: {
        error: {
        type: Object,
        default: () => {},
        }
    },

    methods: {
        reload() {
            if (process.browser)
                window.location.reload(true)
        }
    }
}
</script>