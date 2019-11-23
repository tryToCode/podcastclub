<template>
    <nav class="max-w-5xl flex flex-nowrap bg-red-400 h-auto mx-auto">
        <div class="flex p-1">
            <div class="flex pl-4 items-center">
                <font-awesome-icon :icon="['fas', 'podcast']"/>
                <nuxt-link class="pl-2 tracking-wide text-xl"
                    to="/">
                    Podcasts Club
                </nuxt-link>
            </div>
        </div>
        
        <div class="flex min-w-0 w-40 pb-2 md:py-2 pl-4 items-center md:justify-around">
            <div class="flex items-center relative">
                <input class="flex-grow py-1 rounded md:py-3 pl-8 md:pl-12 font-base md:font-medium" 
                    type="text" 
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
    methods: {
        onInputChange: function(event) {
            this.$emit('onInputChange', event.target.value)
        }
    }
}
</script>