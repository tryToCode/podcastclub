<template>
  <div class="max-w-3xl flex flex-col mx-auto justify-center px-4 py-2">
      <div class="my-2">
          <h1 class="text-2xl">Welcome to Podcast Club</h1>
          <p class="pt-2">
            Podcast Club is a weekly updated podcast aggregator inspired from 
            <a class="border-b-2" href="https://alltop.com">Alltop.com</a>  
            <br>
            We focus on the topics IT, Entrepreneurship and Finance.
            <br>
            All data come from the Internet, if you see any violiations of your rights in any form,
            please <nuxt-link to="/contact" class="border-b-2">Contact</nuxt-link> us.
          </p>
      </div>
      <div class="my-2">
          <h1 class="text-2xl">How it works</h1>
          <p class="pt-2">
            Podcast Club consumes Data from the 
            <a class="border-b-2" href="https://github.com/tryToCode/podcast-api">Podcast API</a> which is build 
            with the <a class="border-b-2" href="https://www.django-rest-framework.org/">Django Rest API</a>.  
          </p>
      </div>
      <div class="items-center">
          <h1 class="text-2xl pb-2">Podcasts we currently cover: </h1>
          <div v-for="podcast in podcasts"
            :key="podcast.id"
            class="pb-1">
            <a :href="podcast.base_url"
            class="border-b-2">
                {{podcast.name}}
            </a>
          </div>
      </div>
      <div class="my-2">
          <p class="font-semibold">You host a podcast and want to be on the list, let us know. </p>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    head () {
        return {
            title: "About",
            meta: [
                { name: 'description', 
                  content: 'Podcast club Podcast Club is a weekly updated podcast aggregator' }
            ]
        }
    },

    created() {
        this.$store.dispatch('loadPodcasts')
    },

    computed: {
        ...mapState({
            podcasts: 'podcasts'
        })
    }
}
</script>
