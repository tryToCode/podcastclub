<template>
  <div class="py-16 lg:py-20">
    <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader color="#fc8181"></pulse-loader>
    </div>

    <div class="bg-white w-full">
        <div class="container max-w-5xl mx-8 mx-auto flex flex-col justify-between py-8">
            <div class="flex my-4">
                <v-gravatar class="h-24 object-cover rounded-lg" 
                    :email="email" />
                <span>
                    {{ displayName }}
                </span>
            </div>
        </div>
    </div>

    <div class="bg-gray-100 w-full">
        <div class="container max-w-5xl mx-8 mx-auto flex flex-col justify-between py-8">
            <div class="bg-white flex flex-col lg:w-2/3 justify-center overflow-hidden rounded">
                <ul class="flex border-b">
                    <li class="-mb-px">
                        <a class="flex items-center px-3 py-3 inline-block  
                            rounded-t text-blue-700 group cursor-pointer"
                            :class="playingTabClazz"
                            @click="playingTabClicked">
                            <svg class="fill-current text-blue-500 group-hover:text-blue-800" 
                                width="24" height="24" viewBox="0 0 24 24">
                            <path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 
                            12h17v-4h-17v4zm0 8h17v-4h-17v4z"/>
                            </svg>
                            <span class="mx-2 group-hover:text-blue-800">Playing list</span>
                        </a>
                    </li>
                    <li class="-mb-px">
                        <a class="flex items-center px-3 py-3 inline-block text-blue-500 
                             group cursor-pointer"
                             :class="transcriptTabClazz"
                             @click="transcriptTabClicked">
                            <svg class="fill-current text-blue-500 group-hover:text-blue-800" 
                            width="24" height="24" viewBox="0 0 24 24">
                                <path d="M24 20v1h-4v-1h.835c.258 0 
                                .405-.178.321-.422l-.473-1.371h-2.231l-.575-1.59h2.295l-1.362-4.077-1.154 
                                3.451-.879-2.498.921-2.493h2.222l3.033 8.516c.111.315.244.484.578.484h.469zm-6-1h1v2h-7v-2h.532c.459 
                                0 .782-.453.633-.887l-.816-2.113h-6.232l-.815 2.113c-.149.434.174.887.633.887h1.065v2h-7v-2h.43c.593 
                                0 1.123-.375 1.32-.935l5.507-15.065h3.952l5.507 15.065c.197.56.69.935 
                                1.284.935zm-10.886-6h4.238l-2.259-6.199-1.979 6.199z"/>
                            </svg>
                            <span class="mx-2 group-hover:text-blue-800">Transcripts</span>
                        </a>
                    </li>
                    <!-- <li class="-mb-px mr-1">
                        <a class="flex items-center px-3 py-3 inline-block text-blue-500 
                            group cursor-pointer"
                            :class="commentsTabClazz"
                            @click="commentsTabClicked">
                            <svg class="fill-current text-blue-500 group-hover:text-blue-800"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path d="M3.439 3l-1.439-1.714 1.532-1.286 17.382 20.714-1.533 
                                1.286-2.533-3.019h-5.848l-7 5.02v-5.02h-4v-15.981h3.439zm11.747 
                                14l-10.068-11.999h-3.118v11.999h4v3.105l4.357-3.105h4.829zm8.814 
                                1.981h-2.588l-1.662-1.981h2.25v-11.999h-12.319l-1.679-2.001h15.998v15.981z"/>
                            </svg>
                            <span class="mx-2 group-hover:text-blue-800">Comments</span>
                        </a>
                    </li> -->
                </ul> <!--tabs-->

                <ul class="relative w-full">
                    <li v-show="playingTabActived" class="absulte w-full top-0 left-0">
                        <div class="w-full text-center py-8">
                            <h2 class="text-color">Your Playing list</h2>
                            
                        </div>
                    </li>
                    <li v-show="transcriptTabActived" class="absulte w-full top-0 left-0">
                        <div class="w-full text-center py-8">
                            <h2 class="text-color">Transcripts</h2>
                            
                        </div>
                    </li>
                    <!-- <li v-show="commentsTabActived" class="absulte w-full top-0 left-0">
                        <div class="w-full text-center py-8">
                            <h2 class="text-color">Comments</h2>
                            
                        </div>
                    </li> -->
                </ul> <!--tab content-->
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { PulseLoader } from '@saeris/vue-spinners'
import axios from 'axios'

export default {
    name: 'profile',

    data() {
        return {
            email: '',
            displayName: '',
            playingTabActived: true,
            transcriptTabActived: false,
            commentsTabActived: false
        }
    },

    computed: {
        ...mapState({
            loading: state => state.loading.loading
        })
    },

    async asyncData ({ store, params }) {
        store.dispatch('loading/startLoading', null, { root: true })
        try {
            
        }
        catch (error) {
            
        }
        finally {
            store.dispatch("loading/stopLoading", null, { root: true })
        }
    },

    computed: {
        playingTabClazz() {
            return this.playingTabActived 
                ? 'bg-white border-l border-t border-r'
                : 'bg-gray-100'
        },

        transcriptTabClazz() {
            return this.transcriptTabActived
                ? 'bg-white border-l border-t border-r'
                : 'bg-gray-100'
        },

        commentsTabClazz() {
            return this.commentsTabActived
                ? 'bg-white border-l border-t border-r'
                : 'bg-gray-100'
        }
    },

    methods: {
        playingTabClicked() {
            this.playingTabActived = true
            this.transcriptTabActived = false
            this.commentsTabActived = false
        },

        transcriptTabClicked() {
            this.transcriptTabActived = true
            this.playingTabActived = false
            this.commentsTabActived = false
        },

        commentsTabClicked() {
            this.commentsTabActived = true
            this.playingTabActived = false
            this.transcriptTabActived = false
        }
    }
}
</script>