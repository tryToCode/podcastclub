<template>
  <div class="bg-white px-4 py-4 border-b">
    <div class="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
        <div class="flex justify-between items-center">
            <nuxt-link class="block flex items-center py-2 text-xl font-bold"
                id="reloadPage"
                to="/"
                @click.native="reload">
                <img class="mr-2 fill-current text-red-500" src="~/assets/podcast.png">
                Podcast Club
            </nuxt-link>
            <div class="inline-block cursor-pointer md:hidden">
                <div class="bg-gray-400 w-8 mb-2" style="height: 2px;"></div>
                <div class="bg-gray-400 w-8 mb-2" style="height: 2px;"></div>
                <div class="bg-gray-400 w-8" style="height: 2px;"></div>
            </div>
        </div>

        <div>
        <div class="hidden md:block">
            <nuxt-link
                to="/"
                class="py-1 md:py-4 mr-6 hover:border-b-4 border-red-500
                font-medium">
                Home
            </nuxt-link>
            <nuxt-link class="py-1 md:py-4 hover:border-b-4 border-red-500
                font-medium"
                to="/show">
                Show
            </nuxt-link>  
        </div>
        </div>
        <div class="hidden md:block">
            <a
                @click="login"
                class="py-2 px-4 text-white bg-red-500 hover:bg-red-600 rounded
                    font-medium cursor-pointer">
                Login
            </a>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'navbar',
    
    computed: {
        ...mapState({
            loggedIn: state => state.auth.isAuthenticated
        })
    },

    methods: {
        reload() {
            if (process.browser) {
                window.location.reload(true)
                localStorage.clear()
            }
        },

        login() {
            this.$emit('login')
        }
    }
}
</script>