<template>
  <transition name="modal-fade">
    <div class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center backdrop-color">
        <div class="flex flex-col shadow-lg bg-white overflow-x-auto px-8 py-4 border rounded"
            role="dialog"
            aria-labelledby="modalTitle"
            aria-describedby="modalDescription">
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
                    <div class="flex items-center py-2">
                        <input class="appearance-none bg-transparent border border-red-500 w-full 
                            text-gray-700 mr-1 py-2 px-2 leading-tight focus:outline-none rounded" 
                            type="text" 
                            placeholder="Your Email" 
                            aria-label="Full name">
                        <button class="flex-shrink-0 bg-red-500 hover:bg-red-700 
                            border-red-500 hover:border-red-700 text-sm border-4
                            text-white py-1 px-2 rounded" 
                            type="button">
                            Continue
                        </button>
                    </div>
                </form>
                <p class="flex items-center justify-center mb-1 text-sm">
                    We will never spam you.
                </p>
            </section>
            <footer class="flex flex-col items-center justify-center p-4 border-t-2">
                <p class="mb-2">
                    After Submit the Email, you'll received a link to verify.
                </p>
                <button
                    class="bg-transparent hover:bg-red-700 hover:text-white
                            border-red-500 hover:border-red-700 text-sm border 
                            py-1 px-2 rounded"
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
export default {
    name: 'modal',

    transition: {
        name: 'modal-fade'
    },

    methods: {
      close() {
        this.$emit('close')
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