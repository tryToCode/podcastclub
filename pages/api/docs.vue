<template>
    <div class="max-w-5xl flex flex-col mx-auto justify-center overflow-hidden">
        <BasePageNav />
        
        <div v-if="loading"
            class="flex flex-col justify-center items-center h-screen">
            <pulse-loader color="#fc8181"></pulse-loader>
        </div>

        <div v-else>
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
            <BaseDocSection
                title="Items"
                baseUrl="http://fathomless-beyond-28426.herokuapp.com/api/rssItems"
                :jsonData="items" />
            <BaseDocSection
                title="Single Item"
                baseUrl="http://fathomless-beyond-28426.herokuapp.com/api/rssItems/:id"
                :jsonData="item" />
            <BaseDocSection
                title="Podcasts"
                baseUrl="http://fathomless-beyond-28426.herokuapp.com/api/podcasts"
                :jsonData="podcasts" />
            <BaseDocSection
                title="Single Podcast"
                baseUrl="http://fathomless-beyond-28426.herokuapp.com/api/podcasts/:id"
                :jsonData="podcast" />
        </div> <!--v-else-->
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import BasePageNav from '@/components/Base/BasePageNav.vue'
import BaseDocSection from '@/components/Base/BaseDocSection.vue'
import { PulseLoader } from '@saeris/vue-spinners'

export default {
    middleware: 'error',

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
        BasePageNav,
        PulseLoader,
        BaseDocSection
    },

    computed: {
        ...mapGetters({
            item: 'docItems/item',
            items: 'docItems/items',
            itemsCount: 'docItems/itemsCount',
            podcast: 'podcasts/podcast',
            podcasts: 'podcasts/podcasts4Doc',
            podcastsCount: 'podcasts/podcastsCount'
        }),

        ...mapState({
            loading: state => state.loading.loading,
        })
    },

    fetch({ store }) {
        store.dispatch('docItems/loadDocItems')
        store.dispatch('podcasts/loadPodcasts')
    }
}
</script>

