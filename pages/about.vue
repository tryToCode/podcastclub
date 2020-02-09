<template>
  <div>
    <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader color="#fc8181"></pulse-loader>
    </div>

    <div class="max-w-4xl mx-auto">
        <div class="m-4 bg-white rounded p-4">
            <h1 class="text-xl font-medium">Welcome to Podcast Club</h1>
            <p class="pt-2">
                Podcast Club is a daily updated podcast aggregator inspired from 
                <a class="border-b-2" 
                    href="https://alltop.com">
                    Alltop.com
                </a>  
                <br>
                We focus on the topics IT, Entrepreneurship and Finance.
                <br>
                All data come from the Internet, if you see any violiations of your 
                rights in any form, please 
                <a class="border-b-2 cursor-pointer" 
                    @click="sendMail">
                    Contact
                </a> us.
            </p>
        </div>

        <div class="m-4 bg-white rounded p-4">
            <h1 class="text-xl font-medium">How it works</h1>
            <p class="pt-2">
                Podcast Club consumes Data from the 
                <a class="border-b-2" 
                    href="https://github.com/tryToCode/podcast-api">
                    Podcast API
                </a> 
                which is built 
                with the 
                <a class="border-b-2" 
                    href="https://www.django-rest-framework.org/">
                    Django Rest API
                </a>.  
            </p>
        </div>

        <div class="m-4 bg-white rounded p-4">
            <h1 class="text-xl font-medium my-4">Podcasts we currently cover: </h1>
            <a v-for="podcast in podcasts"
                :key="podcast.id"
                :href="podcast.base_url"
                class="flex md:inline-flex items-center mx-2 border rounded">
                <img class="w-auto h-8 object-cover mr-2" 
                    :src="podcast.image_url" 
                    :alt="podcast.name">
                <span class="pr-1 hover:bg-gray-200 font-medium">{{ podcast.name }}</span>
            </a>
        </div>

        <div class="flex items-center justify-center m-4 bg-white rounded p-4">
            <p class="font-semibold">
                You host a podcast and want to be on the list, let us 
                <a class="border-b-2 cursor-pointer" 
                    @click="sendMail">
                    know
                </a>.
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { PulseLoader } from '@saeris/vue-spinners'

export default {
    middleware: 'error',
    
    head () {
        return {
            title: "About",
            meta: [
                { name: 'description', 
                  content: 'Podcast club Podcast Club is a weekly updated podcast aggregator' }
            ]
        }
    },

    components: {
        PulseLoader
    },

    async fetch({ store }) {
        await store.dispatch('podcasts/loadPodcasts')
    },

    computed: {
        ...mapGetters({
            podcasts: 'podcasts/podcasts'
        }),

        ...mapState({
            loading: state => state.loading.loading
        })
    },

    methods: {
        sendMail() {
            if (process.browser)
                window.location.href= 'mailto:hello@podcastclub.net'
        }
    }
}
</script>
