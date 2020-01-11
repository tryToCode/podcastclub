<template>
  <transition name="modal-fade">
    <div class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div class="flex flex-col shadow-lg bg-gray-200 overflow-x-auto"
            role="dialog"
            aria-labelledby="modalTitle"
            aria-describedby="modalDescription">
            <header class="flex p-4 border-b-2 justify-between">
                <div class="font-medium m-4">
                    Login to transcribe this episode
                </div> 

                <button
                    class="block bg-transparent cursor-pointer font-bold"
                    type="button"
                    aria-label="Close modal"
                    @click="close">
                    x
                </button>
            </header>
            <section class="relativ p-4">
                <form class="w-full max-w-sm">
                    <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
                        <input class="appearance-none bg-transparent border-none w-full 
                            text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                            type="text" 
                            placeholder="Your Email" 
                            aria-label="Full name">
                        <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 
                            border-teal-500 hover:border-teal-700 text-sm border-4 
                            text-white py-1 px-2 rounded" 
                            type="button">
                            Continue
                        </button>
                    </div>
                </form>
                <p class="flex items-center justify-center my-2">
                    We will never spam you.
                </p>
            </section>
            <footer class="flex flex-col items-center justify-center p-4 border-t-2">
                <p class="mb-2">
                    After Submit the Email, you'll received a link to verify.
                </p>
                <button
                    class="bg-teal-500 hover:bg-teal-700
                            border-teal-500 hover:border-teal-700 text-sm border-4 
                            text-white py-1 px-2 rounded"
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
        this.$emit('close');
      }
    }
}
</script>

<style>
   .modal-fade-enter,
   .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
</style>