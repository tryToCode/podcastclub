<template>
    <nav class="max-w-5xl flex-col flex md:flex-row flex-nowrap bg-red-400 h-auto mx-auto">
        <div class="flex p-1">
            <div class="flex pl-4 items-center">
                <img src="~/assets/podcast.png">
                <nuxt-link class="pl-2 tracking-wide text-xl"
                    to="/"
                    @click.native="reload">
                    Podcast Club
                </nuxt-link>
            </div>
        </div>
        
        <div class="flex flex-1 pb-2 px-3 md:py-2 items-center md:justify-end">
            <div class="flex flex-1 px-2 items-center relative">
                <input class="min-w-0 w-full md:w-3/4 py-1 lg:py-2 rounded pl-10
                     font-base md:font-medium justify-center flex" 
                    type="text" 
                    v-model="searchInput"
                    placeholder="Search Episode by title, url or podcast"
                    @input="onInputChange($event, 'search')">
                <span class="absolute md:w-auto flex justify-start items-center text-grey px-2 md:px-2">
                    <img src="~/assets/search.png">
                </span>
            </div>
            <div class="hidden lg:flex items-center">
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
export default {
    data() {
        return {
            searchInput: ''
        }
    },

    mounted() {
        if (localStorage.searchInput) {
            this.searchInput = localStorage.searchInput
        }
    },

    watch: {
        searchInput(newInput) {
            if (newInput.length === 0)
                localStorage.removeItem("searchInput")
            localStorage.searchInput = newInput
        }
    },

    methods: {
        onInputChange: function(event, filterSection) {
            this.$emit('onInputChange', event.target.value, filterSection)
        },

        reload() {
            this.$emit('reload')
        }
    }
}
</script>