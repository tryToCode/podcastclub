<template>
  <div class="py-16 lg:py-20">
    <div v-if="loading"
        class="flex flex-col justify-center items-center h-screen">
        <pulse-loader color="#fc8181"></pulse-loader>
    </div>

    <div class="bg-white w-full">
        <div class="container max-w-5xl mx-8 mx-auto flex flex-col justify-between py-8">
            <div class="flex my-4">
                <p>
                    Settings
                </p>
            </div>
        </div>
    </div>

    <div class="bg-gray-100 w-full">
        <div class="container max-w-5xl mx-8 mx-auto flex flex-col justify-between py-8">
            <div class="bg-white flex flex-col lg:w-2/3 justify-center overflow-hidden rounded">
                alalalla
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { PulseLoader } from '@saeris/vue-spinners'
export default {
    name: 'settings',

    computed: {
        ...mapState({
            loading: state => state.loading.loading
        })
    }
}
</script>