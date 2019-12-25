<template>
    <div class="max-w-5xl flex flex-col mx-auto justify-center overflow-hidden">
        <BasePageNav />
        
        <div class="m-2">
            <h1 class="text-xl font-medium m-2">Intro</h1>
            <p class="text-base m-2">
                Podcast Club consumes data from the 
                <a class="border-b-2" 
                    href="https://github.com/tryToCode/podcast-api">
                    Podcast backend Api</a> 
                which is built with the
                <a class="border-b-2" 
                    href="https://www.django-rest-framework.org/">
                    Django Rest API
                </a>.
                The backend Api contains mainly 2 Resources as described below 
                and currently only supports
                HTTP GET method. 
            </p>
            <p class="m-2">
                <strong>Note</strong>: The base Url to the backend Api: 
                http://fathomless-beyond-28426.herokuapp.com
            </p>
        </div>
        <div class="flex flex-col m-2">
            <h1 class="text-xl font-medium m-2">Resources</h1>
            <p>
                <span class="text-green-400 m-2">api/rssItems</span>
                <span class="">{{itemsCount}} items</span>
            </p>
            <p>
                <span class="text-green-400 m-2">api/podcasts</span>
                <span class="">{{podcastsCount}} podcasts</span>
            </p>
        </div>
        <div class="flex flex-col m-2">
            <h1 class="text-xl font-medium m-2">Routes</h1>
            <p>
                <span class="py-1 m-2 uppercase">get</span>
                <span class="text-green-400">api/rssItems</span>
            </p>
            <p>
                <span class="py-1 m-2 uppercase">get</span>
                <span class="text-green-400">api/rssItems/1</span>
            </p>
            <p>
                <span class="py-1 m-2 uppercase">get</span>
                <span class="text-green-400">api/podcasts</span>
            </p>
            <p>
                <span class="py-1 m-2 uppercase">get</span>
                <span class="text-green-400">api/podcasts/1</span>
            </p>
        </div>
        <div class="flex flex-col border-2 p-4 m-4">
            <h1 class="text-xl font-bold m-2">Items</h1>
            <div>
                <span class="font-bold border-2 text-green-400 px-2 
                    py-1 rounded uppercase m-2">
                    Get
                </span>
                <span class="bg-green-100">
                    http://fathomless-beyond-28426.herokuapp.com/api/rssItems
                </span>
            </div>
            <div class="m-2">
                <vue-json-pretty
                    :data="items">
                </vue-json-pretty>                
            </div>
        </div>
        <div class="flex flex-col border-2 p-4 m-4">
            <h1 class="text-xl font-bold m-2">Single Item</h1>
            <div>
                <span class="font-bold border-2 text-green-400 px-2 py-1 
                    rounded uppercase m-2">
                    Get
                </span>
                <span class="bg-green-100">
                    http://fathomless-beyond-28426.herokuapp.com/api/rssItems/:id
                </span>
            </div>
            <div class="m-2">
                <vue-json-pretty
                    :data="item">
                </vue-json-pretty>                
            </div>
        </div>
        <div class="flex flex-col border-2 p-4 m-4">
            <h1 class="text-xl font-bold m-2">Podcasts</h1>
            <div>
                <span class="font-bold border-2 text-green-400 px-2 
                    py-1 rounded uppercase m-2">
                    Get
                </span>
                <span class="bg-green-100">
                    http://fathomless-beyond-28426.herokuapp.com/api/podcasts
                </span>
            </div>
            <div class="m-2">
                <vue-json-pretty
                    :data="podcasts">
                </vue-json-pretty>                
            </div>
        </div>
        <div class="flex flex-col border-2 p-4 m-4">
            <h1 class="text-xl font-bold m-2">Single Podcast</h1>
            <div>
                <span class="font-bold border-2 text-green-400 px-2 py-1 
                    rounded uppercase m-2">
                    Get
                </span>
                <span class="bg-green-100">
                    http://fathomless-beyond-28426.herokuapp.com/api/podcasts/:id
                </span>
            </div>
            <div class="m-2">
                <vue-json-pretty
                    :data="podcast">
                </vue-json-pretty>                
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BasePageNav from '@/components/Base/BasePageNav.vue'

export default {
    head () {
        return {
            title: "Api Docs",
            meta: [
                { name: 'description', 
                  content: 'Podcast club Podcast Club backend Api documetation' }
            ]
        }
    },

    components: {
        BasePageNav
    },

    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            this.$store.dispatch('docItems/loadDocItems')
            this.$store.dispatch('podcasts/loadPodcasts')
            .then(() => 
                this.$nuxt.$loading.finish()
            )
        })
    },

    computed: {
        ...mapGetters({
            item: 'docItems/item',
            items: 'docItems/items',
            itemsCount: 'docItems/itemsCount',
            podcast: 'podcasts/podcast',
            podcasts: 'podcasts/podcasts4Doc',
            podcastsCount: 'podcasts/podcastsCount'
        })
    }
}
</script>

