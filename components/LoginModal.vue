<template>
  <transition name="modal-fade">
    <div class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center 
            backdrop-color"
        @click="$emit('close')">
        <div class="flex flex-col shadow-lg bg-white overflow-x-auto px-8 py-4 border rounded"
            role="dialog"
            aria-labelledby="modalTitle"
            aria-describedby="modalDescription"
            @click.stop>
            <header class="flex p-4 justify-between">
                <div class="text-lg font-medium m-2">
                    Login to transcribe this episode
                </div> 

                <button
                    class="block bg-transparent cursor-pointer font-bold py-1 px-2"
                    type="button"
                    aria-label="Close modal"
                    @click="close">
                    x
                </button>
            </header>
            <section class="relativ p-4">
                <p class="flex items-center justify-start mb-1 text-base">
                    Email is used to received transcripts once it's done.
                </p>
                <form class="w-full max-w-sm">
                    <div class="flex flex-wrap justify-center items-center py-2">
                        <div class="w-full sm:w-2/3 sm:pr-2 mb-3 sm:mb-0">
                            <input class="w-full form-input mr-2" 
                            type="text" 
                            v-model.trim="loginEmail"
                            placeholder="Your Email"
                            @input="onInputChange($event)"
                            aria-label="Full name">
                        </div>
                        
                        <div class="w-full sm:w-1/3 sm:pl-2">
                            <button class="w-full bg-orange-500 hover:bg-orange-600 font-bold
                                text-white py-2 px-4 rounded"
                                @click="requestToken" 
                                type="button">
                                Continue
                            </button>
                        </div>
                    </div>
                    <div>
                        <p class="text-red-500 text-base italic"
                            v-if="error.length > 0">
                            {{error}}
                        </p>
                        <p class="text-green-500 text-base" 
                            v-if="message">
                            {{message.Info}}
                        </p>
                    </div>
                </form>
                <p class="mb-4 text-center">OR</p>
                <hr class="block w-full mb-4 border-0 border-t border-gray-300" />

                <div class="flex flex-wrap justify-center">
                    <div class="w-full sm:w-1/2 sm:pr-2 mb-3 sm:mb-0">
                        <button
                            class="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold 
                            py-2 px-3 focus:outline-none focus:shadow-outline rounded"
                            type="button">
                            Login with Facebook
                        </button>
                    </div>
                    <div class="w-full sm:w-1/2 sm:pl-2">
                        <button
                            class="w-full bg-red-700 hover:bg-red-800 text-white font-bold 
                            py-2 px-4 focus:outline-none focus:shadow-outline rounded"
                            type="button">
                            Login with Google
                        </button>
                    </div>
                </div>
            </section>
            <footer class="flex flex-col items-center justify-center p-4">
                <p class="mb-2">
                    After Submit the Email, you'll received a link to verify.
                </p>
                <button
                    class="bg-transparent hover:bg-red-700 hover:text-white
                            border-red-500 hover:border-red-700 text-sm border 
                            py-2 px-4 rounded"
                    aria-label="Close modal"
                    type="button"
                    @click="close">
                    Cancel
                </button>
            </footer>
        </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'modal',

    data() {
        return {
            loginEmail: '',
            reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
            error: ''
        }
    },

    transition: {
        name: 'modal-fade'
    },

    computed: {
        ...mapState({
            message: state => state.auth.message
        })
    },

    methods: {
        close() {
            this.$emit('close')
        },
         
        onInputChange: function(event) {
            this.error = ''
            this.loginEmail = event.target.value
        },

        requestToken() {
            if (!this.reg.test(this.loginEmail)) {
                this.error = 'Please provide valid email.'
                return 
            }
            this.$store.dispatch('auth/login', {
                email: this.loginEmail
            })
        }
    }
}
</script>

<style>
    .backdrop-color {
        background-color: rgba(0, 0, 0, 0.3)    
    }

   .modal-fade-enter,
   .modal-fade-leave-active {
    opacity: 0;
    
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
</style>