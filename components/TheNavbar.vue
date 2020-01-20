<template>
  <div class="bg-indigo-900 px-4 py-4">
    <div class="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
        <div class="flex justify-between items-center">
            <nuxt-link class="block flex items-center py-2 text-white text-xl font-bold"
                id="reloadPage"
                to="/"
                @click.native="reload">
                <img class="mr-2 fill-current text-red-500" src="~/assets/podcast.png">
                Podcast Club
            </nuxt-link>
            <div class="inline-block cursor-pointer md:hidden">
                <div class="bg-gray-400 w-8 mb-2" style="height: 2px;"></div>
                <div class="bg-gray-400 w-8 mb-2" style="height: 2px;"></div>
                <div class="bg-gray-400 w-8" style="height: 2px;"></div>
            </div>
        </div>

        <div>
        <div class="hidden md:block">
            <nuxt-link
                to="/"
            class="inline-block py-1 md:py-4 text-gray-100 mr-6 font-bold">
                Home
            </nuxt-link>
            <nuxt-link class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100 
                visited:text-gray-100 visited:font-bold mr-6"
                to="/show">
                Show
            </nuxt-link>  
        </div>
        </div>
        <div class="hidden md:block">
        <a
            href="#"
            class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100 mr-6">
            Login
            </a>
        <a
            href="#"
            class="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg">
            Sign Up
            </a>
        </div>
    </div>
  </div>
</template>

<script>
import BaseInput from './Base/BaseInput.vue'

export default {
    name: 'navbar',

    components: {
        BaseInput
    },

    methods: {
        inputChange: function(filterSection, value) {
            this.$emit('onInputChange', filterSection, value)
        },

        reload() {
            if (process.browser) {
                window.location.reload(true)
                localStorage.clear()
            }
        }
    }
}
</script>