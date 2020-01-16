<template>
    <div class="border-t-4 border-red-500 bg-white">
        <nav class="max-w-5xl flex-col flex md:flex-row md:items-center 
        justify-between flex-nowrap mx-auto h-auto px-4 py-2">
            <div class="flex pl-4 items-center md:w-1/2">
                <img src="~/assets/podcast.png">
                <nuxt-link class="pl-2 tracking-tight text-xl"
                    id="reloadPage"
                    to="/"
                    @click.native="reload">
                    Podcast Club
                </nuxt-link>
            </div>
            
            <BaseInput class="md:w-1/2"
                    @inputChange="inputChange" />           
        </nav>
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