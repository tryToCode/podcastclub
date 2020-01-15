<template>
  <div class="flex flex-1 px-2 items-center relative">
        <input class="min-w-0 w-full md:w-3/4 py-1 lg:py-2 rounded pl-10
                justify-center flex border"
            id="search-input"
            type="search" 
            v-model.trim="searchInput"
            placeholder="Search Episode by title, url or podcast"
            @input="onInputChange($event)">
        <span class="absolute md:w-auto flex justify-start items-center 
                text-grey px-2 md:px-2">
            <img src="~/assets/search.png">
        </span>
    </div>
</template>

<script>
export default {
    name: 'base-input',

    data() {
        return {
            searchInput: ''
        }
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
        onInputChange: function(event) {
            this.$emit('inputChange', 'search', event.target.value)
        }
    }
}
</script>