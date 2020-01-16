<template>
  <div class="flex flex-1 px-2 items-center">
        <BaseSearchFocus
            @keyup="focusSearch($event)" />

        <div class="relative w-full">
            <input class="w-full md:w-5/6 py-1 mx-1 rounded-full pl-8 md:pl-10 flex
                justify-center border focus:outline-none"
                ref="search"
                id="search-input"
                type="search" 
                v-model.trim="searchInput"
                placeholder="Search Episode (Press &quot;/&quot; to focus)"
                @input="onInputChange($event)"
                @keydown.esc="blur($event)">

            <div class="absolute top-0 ml-3 flex justify-center items-center pt-2 md:pt-2">
                <svg fill="currentColor" class="text-gray-500 h-5 w-5" 
                    viewBox="0 0 24 24" width="24" height="24">
                    <path class="heroicon-ui" 
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 
                    16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                    </path>
                </svg>
            </div>

            <div
                v-if="searchInput.length > 0"
                class="absolute top-0 right-0 text-2xl mr-2 cursor-pointer text-gray-600 
                    hover:text-gray-800"
                @click="reset">
                &times;
            </div>
        </div>
    </div>
</template>

<script>
import BaseSearchFocus from './BaseSearchFocus.vue'

export default {
    name: 'base-input',

    data() {
        return {
            searchInput: ''
        }
    },

    components: {
        BaseSearchFocus
    },

    mounted() {
        if (localStorage.getItem('apiUrl')) {
            let searchInput = null
            JSON.parse(localStorage.getItem('apiUrl'), (key, value) => {
                if (key === 'search') {
                    searchInput = value
                    return
                }
            })
            this.searchInput = searchInput
        }
    },

    methods: {
        reset() {
            this.searchInput = ''
            this.$emit('inputChange', 'search', '')
        },

        blur: function(event) {
            event.preventDefault()
            this.$refs.search.blur()
        },

        focusSearch: function(event) {
            if (event.key === "/") {
                event.preventDefault()
                this.$refs.search.focus()
            }
        },

        onInputChange: function(event) {
            this.$emit('inputChange', 'search', event.target.value)
        }
    }
}
</script>