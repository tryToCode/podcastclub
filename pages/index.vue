<template>
    <div>
      <div class="bg-gray-600">
        <div class="px-4 lg:px-8 py-20 md:py-6">
          <div class="md:container lg:px-8 md:mx-auto">
            <div class="md:flex">
              <div class="md:order-last md:w-1/2">
                <IntroIcon />   
              </div>
              <div class="md:w-1/2 text-center md:text-left md:py-16">
                <h1 class="font-bold text-white text-2xl md:text-5xl leading-tight mb-4">
                  A daily updated Podcast aggregator
                </h1>

                <p class="text-indigo-100 md:text-xl md:pr-48">
                  With the focus of IT, Finance and Entrepreneurship
                </p>

                <nuxt-link
                  to="/show"
                  class="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white 
                    bg-red-500 hover:bg-red-600 rounded shadow">
                  Get Inspired
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div><!--hero-->

      <div class="bg-gray-300">
        <div class="px-4 lg:px-8 py-20 md:py-6">
          <div class="container lg:px-8 md:mx-auto block md:flex md:justify-between md:py-16">
            <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
              <div class="bg-white rounded-lg overflow-hidden shadow relative">
                <svg class="flex w-16 h-16 items-center mx-auto mt-8 fill-current text-red-400" viewBox="0 0 24 24">
                  <path d="M22 3.2A1.2 1.2 0 0020.8 2H3.2A1.2 1.2 0 002 3.2V15h20V3.2zM20 13H4V4h16v9zm2 3H2c-.197.372-2 4.582-2 4.998C0 21.52.418 22 1.002 22h21.996c.584 0 1.002-.48 1.002-1.002 0-.416-1.803-4.626-2-4.998zM9.771 21l.467-1h3.523l.467 1H9.771z"/>
                </svg>

                <div class="p-4 h-auto md:h-40 lg:h-48">
                  <a href="#" class="block text-gray-600 hover:text-gray-700 font-semibold mb-2 
                    text-lg md:text-base lg:text-lg text-center">
                    IT
                  </a>
                  <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem blanditiis unde asperiores? Officia amet perspiciatis ad quibusdam incidunt eaque, nobis, eveniet neque porro id commodi quisquam debitis!
                  </div>
                  <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#something</a>
                    <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#sky</a>
                  </div>
                </div>
              </div>
              </div>
              <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
                <div class="bg-white rounded-lg overflow-hidden shadow relative">
                  <svg class="flex w-16 h-16 items-center mx-auto mt-8 fill-current text-red-400" viewBox="0 0 24 24">
                    <path d="M11.329 19.6a.939.939 0 01-1.317.202.941.941 0 01-.202-1.315l1.077-1.456a.94.94 0 011.315-.199.934.934 0 01.201 1.313L11.329 19.6zm-.825-2.839a.942.942 0 10-1.518-1.113l-1.073 1.449a.942.942 0 001.517 1.115l1.074-1.451zm-1.9-1.388a.94.94 0 00-1.517-1.113l-1.083 1.461a.93.93 0 00.209 1.304.93.93 0 001.308-.19l1.083-1.462zm-1.898-1.386a.938.938 0 00-.203-1.315.94.94 0 00-1.315.201l-1.075 1.451a.94.94 0 101.517 1.113l1.076-1.45zM24 5.549s-1.555.301-2.667.479c-2.146.344-4.144-.416-6.361-1.562-.445-.229-.957-.466-1.458-.466-.461 0-.913.209-1.292.639-1.366 1.547-2.16 2.915-3.785 3.864-.801.468.14 1.934 1.86 1.331.878-.308 1.736-.895 2.706-1.677.762-.615 1.22-.524 1.879.135 1.238 1.238 5.404 5.351 5.404 5.351 1.317-.812 2.422-1.312 3.713-1.792V5.549zM13.476 18.211c-.158.459-.618 1.001-.953 1.455.297.235.608.334.882.334.717 0 1.188-.671.542-1.318l-.471-.471zm6.506-3.463c-1.07-1.055-4.732-4.667-5.803-5.713a.472.472 0 00-.608-.044c-.639.464-2.082 1.485-2.944 1.788-1.685.59-3.115-.222-3.422-1.359a1.547 1.547 0 01.727-1.781c1.008-.589 1.657-1.375 2.456-2.363-.695-.539-1.35-.732-1.991-.732-1.706 0-3.317 1.366-5.336 1.231C1.688 5.685 0 5.372 0 5.372v6.333c1.476.321 2.455.464 3.92 1.199l.462-.624a1.943 1.943 0 013.425.596c.951 0 1.667.602 1.898 1.387a1.932 1.932 0 011.897 1.385c1.171 0 2.017.92 1.981 2.007l1.168 1.168a.941.941 0 101.331-1.332l-1.686-1.687c-.22-.22.113-.553.333-.333l2.032 2.033a.94.94 0 101.331-1.331l-2.501-2.502c-.221-.218.113-.553.333-.333l2.7 2.701a.94.94 0 001.331 0 .933.933 0 00.027-1.291z"/>
                  </svg>

                  <div class="p-4 h-auto md:h-40 lg:h-48">
                    <a href="#" class="block text-gray-600 hover:text-gray-700 font-semibold mb-2 
                      text-lg md:text-base lg:text-lg text-center">
                      Entrepreneurship
                    </a>
                    <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aut quia alias ullam eveniet sunt! Ipsa, sunt. Inventore ipsum sit quasi. Alias quasi officiis blanditiis!
                    </div>
                    <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                      <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#pathway</a>
                      <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#woman</a>
                      <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#walkalone</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
                <div class="bg-white rounded-lg overflow-hidden shadow relative">
                  <svg class="flex w-16 h-16 items-center mx-auto mt-8 fill-current text-red-400" viewBox="0 0 24 24">
                    <path d="M22 2H8a2 2 0 00-2 2v4h16v3.5a.5.5 0 01-.5.5H20v2h2a2 2 0 002-2V4a2 2 0 00-2-2zm0 3H8v-.5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5V5zm-6 5H2a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2v-8a2 2 0 00-2-2zM5 20H3v-1h2v1zm3 0H6v-1h2v1zm.32-3.377a2.5 2.5 0 110-4.246 3.053 3.053 0 00-.857 2.123c0 .824.326 1.571.857 2.123zM12 20h-2v-1h2v1zm-1-3a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm4 3h-2v-1h2v1z"/>
                  </svg>

                  <div class="p-4 h-auto md:h-40 lg:h-48">
                    <a href="#" class="block text-gray-600 hover:text-gray-700 font-semibold mb-2 
                      text-lg md:text-base lg:text-lg text-center">
                      Finance
                    </a>
                    <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nemo magni saepe cumque error quia quae sint ducimus, maiores doloremque.
                    </div>
                    <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                      <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#forest</a>
                      <a class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#walk</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <div class="px-4 lg:px-8 py-20 md:py-6">
          <div class="flex flex-col md:flex-row mx-auto px-4 lg:px-8 justify-between md:py-16">
            <div class="md:w-1/2 items-center m-4 font-medium">
              Subscribe to our mailing list and get notified by daily updated shows.
            </div>
            <div class="md:w-1/2 m-4">
              <form class="w-full max-w-sm">
                  <div class="flex flex-col py-2">
                      <input class="w-full form-input" 
                          type="text" 
                          placeholder="Your Email" 
                          aria-label="Full name">
                      <button class="inline-block flex-shrink-0 bg-red-500 hover:bg-red-700 
                          border-red-500 hover:border-red-700 font-bold
                          text-white py-2 px-4 rounded my-2" 
                          type="button">
                          Continue
                      </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import { mapState } from "vuex";
import LoginModal from "@/components/LoginModal.vue"
import IntroIcon from '@/components/Icon/IntroductionIcon.vue'

export default {
  middleware: "error",

  head() {
    return {
      title: "Podcast Club",
      meta: [
        {
          name: "description",
          content:
            "Podcast club home index page, a daily updated podcast aggregator"
        }
      ]
    }
  },

  components: {
    IntroIcon
  }
}
</script>
