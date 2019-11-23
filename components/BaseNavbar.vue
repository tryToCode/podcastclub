<template>
    <nav class="max-w-5xl flex-col flex md:flex-row flex-nowrap bg-red-400 h-auto mx-auto">
        <div class="flex p-1">
            <div class="flex pl-4 items-center">
                <font-awesome-icon :icon="['fas', 'podcast']"/>
                <nuxt-link class="pl-2 tracking-wide text-xl"
                    to="/">
                    Podcast Club
                </nuxt-link>
            </div>
        </div>
        
        <div class="flex flex-1 pb-2 px-3 md:py-2 items-center md:justify-end">
            <div class="flex flex-1 px-2 items-center relative">
                <input class="min-w-0 w-full md:w-3/4 py-1 lg:py-2 rounded pl-8 md:pl-12
                     font-base md:font-medium justify-center flex" 
                    type="text" 
                    v-model="searchInput"
                    placeholder="Search Episode by title, url or author"
                    @input="onInputChange($event)">
                <span class="absolute md:w-auto flex justify-start items-center text-grey px-2 md:px-4">
                    <font-awesome-icon :icon="['fas', 'search']"/>
                </span>
            </div>
            <div class="hidden lg:flex items-center">
                <font-awesome-icon :icon="['fas', 'cog']"/>
                <a class="px-1 md:pr-6 tracking-wide text-xl" href="#">
                    Setting
                </a>
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

    methods: {
        onInputChange: function(event) {
            this.$emit('onInputChange', event.target.value)
        }
    }
}
</script>