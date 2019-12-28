<template>
  <div class="bg-black flex flex-col items-center justify-center h-screen">
    <p class="text-6xl text-red-500 font-extrabold">404</p>
    <p class="text-red-500">The Page you're looking for does not exist.</p>
    <nuxt-link class="my-2 text-sm text-red-500 bg-transparent font-semibold
        border border-red-500 hover:border-transparent hover:bg-red-500 hover:text-white
        rounded py-2 px-4"
        to="/">
        Home
    </nuxt-link>
  </div>
</template>

<script>
export default {
    name: 'error-404',

    props: {
        error: {
        type: Object,
        default: () => {},
        }
    }
}
</script>

<style>

</style>