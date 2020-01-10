<template>
  <div class="max-w-5xl flex flex-col mx-auto justify-center overflow-hidden">
    <BasePageNav />

    <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader color="#fc8181"></pulse-loader>
    </div>

    <div class="flex flex-col lg:flex-row">
        <div class="flex flex-col m-4 lg:w-3/4 mx-auto">
            <div class="text-3xl font-medium">
                {{ item.title }}
            </div>

            <div class="flex py-2 items-center">
                <img class="h-16 object-cover" 
                    :src="item.creator.image_url" 
                    :alt="item.creator.name">

                <div class="flex flex-col">
                    <a class="ml-2 text-lg" 
                        :href="'https://' + item.creator.base_url">
                        By <span class="">{{ item.creator.name }}</span>
                    </a>
                    <div class=" ml-2 text-gray-500">
                        {{$moment(item.pub_date).format('llll')}}
                    </div>
                </div>
            </div> 
            
            <AudioPlayer :audioSource="item.enclosure" />
            

            <div class="flex my-2">
                <a class="bg-gray-200 rounded px-2 py-1 flex items-center mx-1 justify-center"
                    href="">
                    <svg class="fill-current text-red-400 hover:text-red-500 w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path d="M12 9.229C12.234 8.109 13.547 3 17.382 3 19.602 3 22 4.551 22 8.003c0 
                        3.907-3.627 8.47-10 12.629C5.627 16.473 2 11.91 2 8.003c0-3.484 2.369-5.005 
                        4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zM0 8.003C0 12.071 3.06 17.484 
                        12 23c8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737C9.662-.996 
                        0-.004 0 8.003z"/>
                    </svg>
                    Like
                </a>
                <a class="bg-gray-200 rounded px-2 py-1 flex items-center mx-1 justify-center"
                    :href="item.item_url">
                    <svg class="fill-current text-red-400 hover:text-red-500 w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24">
                        <path d="M6.188 8.719a6.446 6.446 0 011.444-1.087c2.887-1.591 6.589-.745 8.445 
                        2.069l-2.246 2.245a3.385 3.385 0 00-3.834-1.949 3.33 3.33 0 00-1.633.898L4.06 
                        15.201a3.355 3.355 0 000 4.74 3.355 3.355 0 004.74 0l1.327-1.327a8.533 8.533 0 
                        003.779.575l-2.929 2.929a6.43 6.43 0 11-9.093-9.093l4.304-4.306zm6.836-6.836l-2.929 
                        2.929a8.534 8.534 0 013.779.574L15.2 4.06a3.355 3.355 0 014.74 0 3.355 3.355 0 010 
                        4.74l-4.305 4.305a3.358 3.358 0 01-4.74 0 3.567 3.567 0 01-.727-1.051l-2.246 
                        2.245c.236.358.481.667.796.982a6.404 6.404 0 003.036 1.704 6.441 6.441 0 004.613-.617 
                        6.446 6.446 0 001.444-1.087l4.304-4.305a6.429 6.429 0 10-9.091-9.093z"/>
                    </svg>
                    Link
                </a>
                <a class="bg-gray-200 rounded px-2 py-1 flex items-center mx-1 justify-center">
                    <svg class="fill-current text-red-400 w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"  
                        viewBox="0 0 24 24">
                        <path d="M6.503 20.752A3.25 3.25 0 013.252 24 3.25 3.25 0 010 20.752a3.25 3.25 0 
                        013.252-3.248 3.25 3.25 0 013.251 3.248zM0 8.18v4.811c6.05.062 10.96 4.966 11.022 
                        11.009h4.817C15.777 15.29 8.721 8.242 0 8.18zm0-3.368C10.58 4.858 19.152 13.406 
                        19.183 24H24C23.97 10.769 13.245.046 0 0v4.812z"/>
                    </svg>
                    RSS
                </a>
                <a class="bg-gray-200 rounded px-2 py-1 flex items-center mx-1 justify-center">
                    <svg class="fill-current text-red-400 w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24">
                        <path d="M5 7a5 5 0 11-.001 10.001A5 5 0 015 7zm11.122 12.065A3.946 3.946 0 0016 
                        20a4 4 0 104-4 3.974 3.974 0 00-2.935 1.301l-5.488-2.927a6.973 6.973 0 01-.943 
                        1.764l5.488 2.927zM24 4a4 4 0 00-8 0c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 
                        1.127.943 1.764l5.488-2.927A3.974 3.974 0 0020 8a4 4 0 004-4z"/>
                    </svg>
                    Share
                </a>
            </div>
            
            <div class="rounded shadow-lg p-4 my-4">
                <p class="text-xl py-2">About this Episode</p>
                <div v-html="item.summary">
                </div> 
            </div>

            <div class="rounded shadow-lg p-4 my-4">
                <p class="text-xl py-2">Transcript</p>
                <p>
                    Let automated speech-to-text technology transcribe this episode so you can
                    get more out of the content.
                </p>
                <h2 class="mt-2">Before purchase: </h2>
                <p>
                    <span class="font-bold">Note</span>: The speech recongazition we use is 
                    the most advanced in the industry,
                </p>
                <p>
                    If you're looking for 100% accurately transcribe, please use services like
                    <a class="border-b-2" href="https://www.rev.com/">Rev</a> or 
                    <a class="border-b-2" href="https://www.transcribeme.com/">TranscribeMe</a> 
                    which take up to 12 Hours and cost more 
                    as well.
                </p>
                <div class="bg-yellow-200 my-4 p-2">
                    <h3>Term of Sale</h3>
                    <ul class="my-2">
                        <li>All sales are final. No refunds.</li>
                        <li>After you make the payment, we will start transcribing this 
                            episode immediately. It costs us money to do so. You cannot 
                            cancel the transcription once it starts. And no refunds.
                        </li>
                        <li></li>
                    </ul>
                </div>
                <div class="flex flex-col items-center mx-auto justify-center my-4">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
                        px-4 border border-blue-700 rounded">
                        Transcribe episode for &#36;{{ calcPrice }}
                    </button>
                    <p>We have generated 0 transcripts so far</p>
                </div>
            </div>

            <div class="my-2 rounded shadow-lg p-4">
                <span class="font-black">Disclaimer</span>: 
                The podcast and artwork embedded on this page are from the Podcast 
                <a :href="item.creator.base_url" 
                    class="border-b-2">
                    {{ item.creator.name }}
                </a>,
                which is the property of its owner and not affiliated with or endorsed by Podcast Club.
            </div>
        </div><!--detail section -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AudioPlayer from '@/components/AudioPlayer.vue'
import BasePageNav from '@/components/Base/BasePageNav.vue'
import { PulseLoader } from '@saeris/vue-spinners'
import axios from 'axios'

export default {
    middleware: 'error',

    data() {
        return {
            item: {}
        }
    },

    head () {
        return {
            title: this.item.title,
            meta: [
                { name: 'description', 
                  content: 'Podcast club Podcast Club show' }
            ]
        }
    },

    components: {
        AudioPlayer,
        BasePageNav,
        PulseLoader
    },

    computed: {
        ...mapState({
            loading: state => state.loading.loading
        }),

        calcPrice() {
            const price =  Math.ceil(this.item.duration / 15) * 0.02
            return Math.round( price * 100 + Number.EPSILON ) / 100
        }
    },

    methods: {
        upVote(itemId) {
            this.likes += 1
            this.$store.dispatch('items/updateLikes', itemId)
        }
    },

    async asyncData ({ store, params }) {
        store.dispatch('loading/startLoading', null, { root: true })
        try {
            const item = await axios.get(`${process.env.baseItemUrl}/${params.id}/`)
            return {item: item.data}
        }
        catch (error) {
            store.dispatch("error/onError", 
                { statusCode: 500, message: 'Server unavailable' }, 
                { root: true }
            )
        }
        finally {
            store.dispatch("loading/stopLoading", null, { root: true })
        }
    }
}
</script>