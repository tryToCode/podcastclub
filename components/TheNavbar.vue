<template>
    <nav class="max-w-5xl flex-col flex md:flex-row flex-nowrap bg-red-400 h-auto mx-auto">
        <div class="flex p-1">
            <div class="flex pl-4 items-center">
                <img src="~/assets/podcast.png">
                <nuxt-link class="pl-2 tracking-wide text-xl"
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
                <img src="~/assets/settings.png">
                <nuxt-link class="px-1 md:pr-6 tracking-wide text-xl"
                    to="/settings">
                    Setting
                </nuxt-link>
            </div>
        </div>            
    </nav>
</template>

<script>
import BaseInput from './Base/BaseInput.vue'

export default {
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