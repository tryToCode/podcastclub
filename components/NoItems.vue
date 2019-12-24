<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <p id="no-items">No Items found</p> 
    <p id="of-category" v-if="categoryInput.length !== 0">
        of the category <span class="font-semibold">{{categoryInput}}</span>
    </p>
    <p id="of-date" v-if="dateInput.length !== 0">
        in the period <span class="font-semibold">{{dateInput}}</span>
    </p>
    <p id="for-seaarch" v-if="searchInput.length !== 0">
        for the search input <span class="font-semibold">{{searchInput}}</span>
    </p>
    <br>
    <nuxt-link to="/help" class="border-b-2">
        Help
    </nuxt-link>
  </div>
</template>

<script>
export default {
    name: 'no-items',

    data() {
        return {
            url: this.baseUrl,
            categoryInput: '',
            dateInput: '',
            searchInput: ''
        }
    },

    props: {
        baseUrl: {
            type: String,
            required: true
        }
    },

    mounted() {
        this.extractInput()
    },

    methods: {
        extractInput: function() {
            if (this.url.length === 0)
                return
            var url = new URL(this.url)
            if (url.searchParams.has('category'))
                this.categoryInput = url.searchParams.get('category')
            if (url.searchParams.has('date'))
                this.dateInput = url.searchParams.get('date')
            if (url.searchParams.has('search'))
                this.searchInput = url.searchParams.get('search')
        }
    }
}
</script>
