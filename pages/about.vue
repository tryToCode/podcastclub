<template>
  <div class="max-w-5xl flex flex-col mx-auto justify-center">
      <BasePageNav />

      <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader color="#fc8181"></pulse-loader>
      </div>

      <div v-else>
        <div class="m-4">
            <h1 class="text-xl">Welcome to Podcast Club</h1>
            <p class="pt-2">
                Podcast Club is a daily updated podcast aggregator inspired from 
                <a class="border-b-2" 
                    href="https://alltop.com">
                    Alltop.com
                </a>  
                <br>
                We focus on the topics IT, Entrepreneurship and Finance.
                <br>
                All data come from the Internet, if you see any violiations of your rights in any form,
                please 
                <a class="border-b-2 cursor-pointer" 
                    @click="sendMail">
                    Contact
                </a> us.
            </p>
        </div>
        <div class="m-4">
            <h1 class="text-xl">How it works</h1>
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
        <div class="m-4 items-center">
            <h1 class="text-xl pb-2">Podcasts we currently cover: </h1>
            <div v-for="podcast in podcasts"
                :key="podcast.id"
                class="pb-1">
                <a :href="podcast.base_url"
                class="border-b-2">
                    {{ podcast.name }}
                </a>
            </div>
        </div>
        <div class="m-4">
            <p class="font-semibold">
                You host a podcast and want to be on the list, let us 
                <a class="border-b-2 cursor-pointer" 
                    @click="sendMail">
                    know
                </a>. 
            </p>
        </div>
      </div><!--v-else-->
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import BasePageNav from '@/components/Base/BasePageNav.vue'
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
        BasePageNav,
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
                window.location.href= 'mailto:tu295t.dy@gmail.com'
        }
    }
}
</script>
