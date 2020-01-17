<template>
  <div class="px-8 py-2" :key="rerender">
    <button class="w-full bg-transparent hover:bg-red-500 
        hover:text-white py-1 px-2 border border-red-500 
        hover:border-transparent rounded mb-4"
        @click="reset"
        :class="{
            'cursor-not-allowed':
            catSelected === 'All' && dateSelected === 'All Time'
        }">
        Reset Filter
    </button>

    <p class="my-2">Search Filter</p>
    
    <div>
        <p class="">Category</p>
        <BaseRadioBox v-for="category in categoryType"
            :key="category"
            :label="category"
            :model="catSelected"
            filterSection="category"
            @onBaseInputChange="filterChangeHandle" />
    </div>
    
    <div class="border-t my-4">
    </div>
    
    <div>
        <p class="mt-2">Time Periode</p>
        <BaseRadioBox v-for="date in dateType"
            :key="date"
            :label="date"
            :model="dateSelected"
            filterSection="date"
            @onBaseInputChange="filterChangeHandle" />
    </div>
  </div>
</template>

<script>
import BaseRadioBox from './Base/BaseRadiobox.vue'

export default {
    name: 'filter-area-v3',

    data() {
        return {
            rerender: false,
            catSelected: 'All',
            dateSelected: 'All Time'
        }
    },

    components: {
        BaseRadioBox
    },

    computed: {
        categoryType() {
            return [
                'All', 
                'IT', 
                'Entrepreneurship', 
                'Finance'
            ]
        },

        dateType() {
            return [
                'All Time', 
                'Last 24', 
                'Last Week', 
                'Last Month', 
                'Last Year'
            ]
        }
    },

    methods: {
        async filterChangeHandle(filterSection, value) {
            switch (filterSection) {
                case 'category':
                    this.catSelected = value
                    break
                case 'date':
                    this.dateSelected = value
                    break
            }
            this.$store.dispatch('apiUrl/filterChangeHandle', {
                section: filterSection,
                value: value
            })
        },

        async reset() {
            this.catSelected = 'All'
            this.dateSelected = 'All Time'
            const payload = {
                'pageSize': '20',
                'category': this.catSelected,
                'date': this.dateSelected
            }
            this.$store.dispatch('apiUrl/settingChangeHandle', payload)
            .then(() => {
                this.rerender = !this.rerender
            })
        }
    }
}
</script>