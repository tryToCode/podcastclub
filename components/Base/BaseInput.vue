<template>
  <div class="flex flex-1 items-center">
        <BaseSearchFocus
            @keyup="focusSearch($event)" />

        <div class="relative w-full">
            <input class="w-full form-input pl-8 pr-6"
                ref="search"
                id="search-input"
                type="search" 
                v-model.trim="searchInput"
                placeholder="Search Episode (&quot;/&quot; to focus)"
                @input="onInputChange($event)"
                @keydown.esc="blur($event)">

            <div class="absolute top-0 left-0 ml-2 pt-3">
                <svg class="fill-current text-gray-500 h-5 w-5" 
                    viewBox="0 0 24 24" width="24" height="24">
                    <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 
                    16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                    </path>
                </svg>
            </div>

            <div
                v-if="searchInput.length > 0"
                class="absolute top-0 right-0 text-2xl mr-2 cursor-pointer text-gray-600 
                    hover:text-gray-800 pt-1"
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

<style>
    /*remove 'X' from input search bar on chrome and IE */
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration { 
        display: none; 
    }
</style>