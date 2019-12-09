<template>
  <div class="max-w-3xl flex flex-col mx-auto justify-center px-4 py-2">
      <h1 class="text-2xl my-2">Setting</h1>
      <div class="py-2 h-24">
          <h1 class="text-xl border-b-2">Display Options</h1>
          <div class="flex flex-col flex-wrap text-sm">
            <div class="flex flex-wrap justify-center items-center m-4">
                <BaseLabel :text="displayLabel"
                    :hidden="hiddenOnMobile" />
                <BaseFilter 
                    :model="itemPerPage"
                    :selectType="selectOptions"
                    :filterSection="filterSection"
                    @onBaseFilterChange="onFilterChange"/>
            </div>
          </div>
      </div>

      <div class="py-2">
        <h1 class="text-xl border-b-2">Rss Item Options</h1>
        <div class="flex flex-wrap justify-center items-center m-4">
            <BaseLabel :text="catLabel"
                :hidden="hiddenOnMobile" />
            <BaseFilter 
                :model="catSelected"
                :selectType="categoryType"
                :filterSection="category"
                @onBaseFilterChange="onFilterChange"/>
        </div>
        <div class="flex flex-wrap justify-center items-center m-4">
            <BaseLabel :text="dateLabel"
                :hidden="hiddenOnMobile" />
            <BaseFilter 
                :model="dateSelected"
                :selectType="dateType"
                :filterSection="date"
                @onBaseFilterChange="onFilterChange"/>
        </div>
        <div class="flex my-8 justify-end items-end">
            <button class="bg-transparent hover:bg-red-500 text-blue-700 font-semibold 
            hover:text-white py-1 px-4 border border-blue-500 
            hover:border-transparent rounded"
            :class="{
                'opacity-50 cursor-not-allowed':
                this.itemPerPage === 20
            }"
            @click="$router.go(-1)">
                Apply
            </button>
        </div>
      </div>
  </div>
</template>

<script>
import BaseLabel from '@/components/BaseLabel.vue'
import BaseFilter from '@/components/BaseFilter.vue'

export default {
    head () {
        return {
            title: "Settings",
            meta: [
                { name: 'description', 
                  content: 'Podcast club Podcast Club is a weekly updated podcast aggregator, episodes per page settings' }
            ]
        }
    },

    data() {
        return {
            itemPerPage: 20,
            selectOptions: [
                {value: 10, id: 0},
                {value: 20, id: 1},
                {value: 30, id: 2},
                {value: 50, id: 3}
            ],
            catSelected: 'All',
            categoryType: [
                {value: 'All', id: 0},
                {value: 'IT', id: 1},
                {value: 'Entrepreneurship', id: 2},
                {value: 'Finance', id: 3}
            ],
            dateSelected: 'All Time',
            dateType: [
                {value: 'All Time', id: 1},
                {value: 'Last 24', id: 2},
                {value: 'Past Week', id: 3},
                {value: 'Past Month', id: 4},
                {value: 'Past Year', id: 5}
            ]
        }
    },

    components: {
        BaseLabel,
        BaseFilter
    },

    mounted() {
        if (localStorage.pageSize)
            this.itemPerPage = localStorage.pageSize
    },
    
    computed: {
        filterSection() {
            return ''
        },

        displayLabel() {
            return 'Episodes Per Page'
        },

        catLabel() {
            return 'Default type'
        },

        dateLabel() {
            return 'Default date range'
        },

        hiddenOnMobile() {
            return false
        }
    },

    watch: {
        itemPerPage(newSize) {
            if (newSize === 20)
                localStorage.removeItem("pageSize")
            localStorage.pageSize = newSize
        }
    },

    methods: {
        onFilterChange: function(event) {                
            localStorage.setItem('pageSize', event.target.value)
        }
    }
}
</script>
