<template>
  <nav class="fixed w-full z-30 top-0 text-white"
        :class="bgNav">

        <div class="w-full container mx-auto max-w-5xl mx-8 
            flex flex-wrap items-center justify-between mt-0 py-2">
                
            <div class="flex items-center">
                <nuxt-link class="tracking-tighter no-underline hover:no-underline 
                    font-bold text-2xl lg:text-4xl"
                    :class="bgText"
                    id="reloadPage"
                    to="/"
                    @click.native="reload">
                    Podcast Club
                </nuxt-link>
            </div>

            <div class="block lg:hidden pr-4">
                <button id="nav-toggle" class="flex items-center p-1 text-orange-800 hover:text-gray-900">
                    <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

            <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block 
                mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20">
                <ul class="list-reset lg:flex justify-end flex-1 items-center">
                    <li class="mr-3">
                        <nuxt-link class="inline-block py-2 px-4 font-bold no-underline" 
                        :class="bgText"
                        to="/">
                            Home
                        </nuxt-link>
                    </li>
                    <li class="mr-3">
                        <nuxt-link class="inline-block no-underline hover:text-gray-800 
                            hover:text-underline py-2 px-4" 
                            :class="bgText"
                        to="/show">
                        Show
                        </nuxt-link>
                    </li>
                </ul>
                <button v-if="!loggedIn"
                    @click="login"
                    class="mx-auto lg:mx-0 hover:underline
                        font-bold rounded mt-4 lg:mt-0 py-2 px-4"
                    :class="bgBtn">
                    Login
                </button>

                <div v-else class="relative">
                    <button class="flex items-center outline-none focus:outline-none" 
                        @click="isOpen = !isOpen" 
                        @keydown.escape="isOpen = false">
                        <v-gravatar class="w-8 h-8 rounded-full" email="somebody@somewhere.com" />
                        <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 
                            1.4-1.4l3.3 3.29 3.3-3.3z" class="heroicon-ui">
                            </path>
                        </svg>
                    </button>
                    <ul class="absolute font-normal bg-white shadow overflow-hidden rounded w-48 
                        border mt-2 py-1 right-0 z-20 transform origin-top-right"
                        :class="{ 'hidden': !isOpen }">
                        <li>
                            <a href="#" class="flex items-center px-3 py-3 hover:bg-gray-200">
                                <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24" 
                                    class="text-gray-600">
                                <path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 
                                    0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 
                                    1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" class="heroicon-ui">
                                    </path>
                                </svg>
                                <span class="ml-2">Account</span>
                            </a>
                        </li>
                        <li class="border-b border-gray-400">
                            <a href="#" class="flex items-center px-3 py-3 hover:bg-gray-200">
                                <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24" 
                                class="text-gray-600">
                                <path d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 
                                1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 
                                8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 
                                1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 
                                1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 
                                2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 
                                1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 
                                7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 
                                2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 
                                1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 
                                1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 
                                1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 
                                6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 
                                0 0 4z" 
                                class="heroicon-ui">
                                </path>
                                </svg>
                                <span class="ml-2">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center px-3 py-3 hover:bg-gray-200">
                                <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" 
                                class="text-gray-600">
                                <path d="M0 0h24v24H0z" fill="none">
                                </path>
                                <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 
                                2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 
                                0 2-.9 2-2V5c0-1.1-.9-2-2-2z">
                                </path>
                                </svg>
                                <span class="ml-2">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'navbar',
    data() {
        return {
            isOpen: false,
            windowTop: 0
        }
    },

    computed: {
        ...mapState({
            loggedIn: state => state.auth.isAuthenticated
        }),

        bgNav: function() {
            return this.windowTop > 10 
                ? 'bg-white shadow' 
                : 'gradient' 
        },

        bgText: function() {
            return this.windowTop > 10 
                ? 'text-black' 
                : 'text-white' 
        },

        bgBtn: function() {
            return this.windowTop > 10 
                ? 'gradient text-white' 
                : 'bg-white text-gray-800 opacity-75'
        }
    },

    mounted() {
        if (process.browser)
            window.addEventListener("scroll", this.onScroll)
    },

    beforeDestroy() {
        if (process.browser)
            window.removeEventListener("scroll", this.onScroll)
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
        },

        away: function() {
            this.isOpen = false
        },

        onScroll(e) {
            if (process.browser)
                this.windowTop = window.top.scrollY
        }
    }
}
</script>