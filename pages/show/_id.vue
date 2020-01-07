<template>
  <div class="max-w-5xl flex flex-col mx-auto justify-center overflow-hidden">
    <BasePageNav />
        
    <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader color="#fc8181"></pulse-loader>
    </div>

    <div class="flex flex-col lg:flex-row">
        <div class="flex flex-col m-4 lg:w-3/4 mx-auto">
            <div class="flex py-2 items-center">
                <img class="h-16 object-cover" :src="podcastImg" :alt="item.creator.name">
                <a class="ml-2 text-lg" :href="'https://' + item.creator.base_url">
                    {{item.creator.name}}
                </a>
            </div> 
            <div class="text-xl font-bold">
                {{item.title}}
            </div>
            <div class="py-2 text-gray-500">
                {{$moment(item.pub_date).format('LL')}}
            </div>
            <div class="flex p-2 md:p-4">
                <a class="px-2 py-1 flex items-center mr-2 justify-center cursor-pointer"
                    @click="playSound(item.enclosure)"
                    :href="item.enclosure">
                    <svg class="fill-current text-red-400 hover:text-red-500 w-12 h-12 mr-2" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 
                        10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 
                        17v-10l9 5.146-9 4.854z"/>
                    </svg>
                    Play
                </a>
            </div>

            <div class="flex">
                <a class="bg-gray-200 rounded px-2 py-1 flex items-center mr-2 justify-center"
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
                <a class="bg-gray-200 rounded px-2 py-1 flex items-center mr-2 justify-center">
                    <svg class="fill-current text-red-400 w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"  
                        viewBox="0 0 24 24">
                        <path d="M6.503 20.752A3.25 3.25 0 013.252 24 3.25 3.25 0 010 20.752a3.25 3.25 0 
                        013.252-3.248 3.25 3.25 0 013.251 3.248zM0 8.18v4.811c6.05.062 10.96 4.966 11.022 
                        11.009h4.817C15.777 15.29 8.721 8.242 0 8.18zm0-3.368C10.58 4.858 19.152 13.406 
                        19.183 24H24C23.97 10.769 13.245.046 0 0v4.812z"/>
                    </svg>
                    RSS
                </a>
                <a class="bg-gray-200 rounded px-2 py-1 flex items-center justify-center">
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
                    Let automated speech-to-text technology transcribes this episode so you can
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
                        Transcribe episode for &#36;{{calcPrice(item.duration)}}
                    </button>
                    <p>We have generated 0 transcripts so far</p>
                </div>
            </div>

            <div class="my-2 rounded shadow-lg p-4">
                <span class="font-black">Disclaimer</span>: 
                The podcast and artwork embedded on this page are from the Podcast 
                <a :href="item.creator.base_url" class="border-b-2">
                    {{item.creator.name}}
                </a>,
                which is the property of its owner and not affiliated with or endorsed by Podcast Club.
            </div>
        </div><!--detail section -->

        <!--div class="lg:w-1/3 m-4 p-2 rounded shadow-lg flex flex-col items-center">
            
        </div-->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BasePageNav from '@/components/Base/BasePageNav.vue'
import { PulseLoader } from '@saeris/vue-spinners'

export default {
    middleware: 'error',

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
        BasePageNav,
        PulseLoader
    },

    computed: {
        ...mapState({
            loading: state => state.loading.loading,
            item: state => state.items.item
        }),

        enclosure() {
            return this.item.enclosure
        },

        podcastImg() {
            return this.item.creator.image_url
        }
    },

    methods: {
        playSound (sound) {
            if(sound) {
                var audio = new Audio(sound);
                audio.play();
            }
        },

        calcPrice(duration) {
            const price =  Math.ceil(duration / 15) * 0.02
            return Math.round( price * 100 + Number.EPSILON ) / 100
        }
    },

    fetch({ store, params }) {
        store.dispatch('items/loadItem', params.id)
    }
}
</script>