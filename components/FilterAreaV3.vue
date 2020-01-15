<template>
  <div class="px-8 py-2">
    <button class="w-full bg-transparent hover:bg-red-500 
        hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded mb-4">
        Reset Filter
    </button>
    <p class="my-2">Search Filter</p>
    <div class="">
        <p class="">Category</p>
        <BaseRadioBox v-for="category in categoryType"
            :key="category"
            :label="category"
            :model="catSeleted"
            filterSection="category"
            @onBaseInputChange="filterChangeHandle" />
    </div>
    <div class="border-t my-4">
    </div>
    <div >
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
    data() {
        return {
            catSeleted: 'All',
            dateSelected: 'All Time'
        }
    },

    components: {
        BaseRadioBox
    },

    computed: {
        categoryType() {
            return ['All', 'IT', 'Entrepreneurship', 'Finance']
        },

        dateType() {
            return ['All Time', 'Last 24', 'Last Week', 'Last Month', 'Last Year']
        }
    },

    methods: {
        async filterChangeHandle(filterSection, value) {
            this.$store.dispatch('apiUrl/filterChangeHandle', {
                section: filterSection,
                value: value
            })
        }
    }
}
</script>