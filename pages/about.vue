<template>
  <div class="max-w-5xl flex flex-col mx-auto justify-center px-4 py-2">
      <div class="my-2">
          <h1 class="text-2xl">About Podcasts Zone</h1>
          <p>
              Podcasts Zone is constantly updated podcast aggregator inspired from Alltop.com <br>
                We focus on the topics IT, Entrepreneurship and Finance.
                All data come from the Internet, if you see any violiations of your rights in any form,
                please contact us using the contact form.
          </p>
      </div>
      <div class="items-center">
          <h1 class="text-2xl">Podcast we currently covered: </h1>
          <div v-for="podcast in podcasts"
            :key="podcast.id">
            <a :href="podcast.base_url">{{podcast.name}}</a>
          </div>
      </div>
      <div class="my-2">
          <p class="font-semibold">If you have any thoughs, feel free to let us know. </p>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {   
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
