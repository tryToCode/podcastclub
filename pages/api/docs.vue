<template>
    <div class="max-w-5xl bg-gray-100 flex flex-col mx-auto p-2 justify-center items-center overflow-hidden">
        <div class="m-2">
            <h1 class="text-2xl">Podcast Club consumes data from the podcast backend Api </h1>
        </div>
        <div class="flex flex-col border-2 p-4 m-2">
            <h1 class="text-2xl font-extrabold m-2">Items</h1>
            <div>
                <span class="inline border-2 bg-green-300 px-2 py-1 rounded uppercase m-2">Get</span>
                <span class="bg-green-100">http://fathomless-beyond-28426.herokuapp.com/api/rssItems</span>
            </div>
            <div class="m-2">
                <vue-json-pretty
                    :data="items.slice(0, 2)">
                </vue-json-pretty>                
            </div>
        </div>
        <div class="flex flex-col border-2 p-4 m-2">
            <h1 class="text-2xl font-extrabold m-2">Single Item</h1>
            <div>
                <span class="inline border-2 bg-green-300 px-2 py-1 rounded uppercase m-2">Get</span>
                <span class="bg-green-100">http://fathomless-beyond-28426.herokuapp.com/api/rssItems/:id</span>
            </div>
            <div class="m-2">
                <vue-json-pretty
                    :data="items.slice(0, 1)">
                </vue-json-pretty>                
            </div>
        </div>
        <div class="flex flex-col border-2 p-4 m-2">
            <h1 class="text-2xl font-extrabold m-2">Podcasts</h1>
            <div>
                <span class="inline border-2 bg-green-300 px-2 py-1 rounded uppercase m-2">Get</span>
                <span class="bg-green-100">http://fathomless-beyond-28426.herokuapp.com/api/podcasts</span>
            </div>
            <div class="m-2">
                <vue-json-pretty
                    :data="podcasts.slice(0, 2)">
                </vue-json-pretty>                
            </div>
        </div>
        <div class="flex flex-col border-2 p-4 m-2">
            <h1 class="text-2xl font-extrabold m-2">Single Podcast</h1>
            <div>
                <span class="inline border-2 bg-green-300 px-2 py-1 rounded uppercase m-2">Get</span>
                <span class="bg-green-100">http://fathomless-beyond-28426.herokuapp.com/api/podcasts/:id</span>
            </div>
            <div class="m-2">
                <vue-json-pretty
                    :data="podcasts.slice(0, 1)">
                </vue-json-pretty>                
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    created() {
        this.$store.dispatch('loadItems', 'http://fathomless-beyond-28426.herokuapp.com/api/rssItems')
        this.$store.dispatch('loadPodcasts')
    },

    computed: {
        ...mapState({
            items: 'items',
            podcasts: 'podcasts'
        })
    }
}
</script>

