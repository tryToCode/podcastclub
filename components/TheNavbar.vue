<template>
  <div class="bg-white px-4 lg:px-8 mx-auto container border-b">
    <div class="container md:mx-auto md:flex md:items-center md:justify-between lg:px-8 py-4">
        <div class="flex justify-between items-center">
            <nuxt-link class="block flex items-center py-2 text-2xl font-bold text-red-600"
                id="reloadPage"
                to="/"
                @click.native="reload">
                <!--img class="mr-2 fill-current text-red-500" src="~/assets/podcast.png"-->
                Podcast Club
            </nuxt-link>
            <div class="inline-block cursor-pointer md:hidden">
                <div class="bg-gray-400 w-8 mb-2" style="height: 2px;"></div>
                <div class="bg-gray-400 w-8 mb-2" style="height: 2px;"></div>
                <div class="bg-gray-400 w-8" style="height: 2px;"></div>
            </div>
        </div>

        <div class="hidden md:flex">
            <div class="flex -mb-px mr-8">
                <nuxt-link to="/" 
                    class="no-underline opacity-50 md:text-grey-dark md:opacity-100 
                    flex items-center py-4 border-b border-transparent hover:opacity-100 
                    md:hover:border-grey-dark">
                 <HomeIcon class="text-red-500" />Home
                </nuxt-link>
            </div>
            <div class="flex -mb-px mr-8">
                <nuxt-link to="/show" 
                    class="no-underline opacity-50 md:text-grey-dark md:opacity-100 
                    flex items-center py-4 border-b border-transparent hover:opacity-100 
                    md:hover:border-grey-dark">
                 <ShowIcon class="text-red-500" />Show
                </nuxt-link>
            </div>
        </div>
        <div class="hidden md:block">
            <a
                @click="login"
                class="py-2 px-4 text-white bg-red-700 hover:bg-red-800 rounded
                    font-medium cursor-pointer">
                Login
            </a>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HomeIcon from './Icon/HomeIcon.vue'
import ShowIcon from './Icon/ShowIcon.vue'
export default {
    name: 'navbar',
    
    computed: {
        ...mapState({
            loggedIn: state => state.auth.isAuthenticated
        })
    },

    components: {
        HomeIcon,
        ShowIcon
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