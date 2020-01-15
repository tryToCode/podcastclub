<template>
    <div class="border-t-4 border-red-500 bg-white">
        <nav class="max-w-5xl flex-col flex md:flex-row md:items-center 
        justify-between md:justify-center flex-nowrap mx-auto h-auto">
            <div class="flex p-1">
                <div class="flex pl-4 items-center">
                    <img src="~/assets/podcast.png">
                    <nuxt-link class="pl-2 tracking-tight text-xl"
                        id="reloadPage"
                        to="/"
                        @click.native="reload">
                        Podcast Club
                    </nuxt-link>
                </div>
            </div>
            
            <div class="flex flex-1 pb-2 px-3 md:py-2 items-center md:justify-end">
                <BaseInput
                    @inputChange="inputChange" />
                
                <div class="hidden md:flex items-center">
                    <nuxt-link class="px-1 md:pr-6 tracking-wide"
                        to=""
                        @click.native="onLogin">
                        Login
                    </nuxt-link>
                    <a class="px-1 md:pr-6 tracking-wide cursor-pointer"
                        >
                        Register
                    </a>
                </div>
            </div>            
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
        },

        onLogin() {
            this.$emit('login')
        }
    }
}
</script>