<template>
  <div class="flex flex-1 px-2 items-center">
        <BaseSearchFocus
            @keyup="focusSearch" />

        <input class="min-w-0 w-full md:w-3/4 py-1 lg:py-2 rounded-full pl-10
            justify-center flex border focus:outline-none"
            ref="search"
            id="search-input"
            type="search" 
            v-model.trim="searchInput"
            placeholder="Search Episode by title, url or podcast (Press &quot;/&quot; to focus)"
            @input="onInputChange($event)">

        <span class="absolute md:w-auto flex justify-start items-center 
                text-grey px-2 md:px-2">
            <img src="~/assets/search.png">
        </span>
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
        focusSearch(event) {
            if (event.key === "/")
                this.$refs.search.focus()
        },

        onInputChange: function(event) {
            this.$emit('inputChange', 'search', event.target.value)
        }
    }
}
</script>