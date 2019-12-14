<template>
  <div class="max-w-3xl flex flex-col mx-auto justify-center px-4 py-2">
      <h1 class="text-2xl my-2">Setting</h1>
      <div class="py-2 h-32">
          <h1 class="text-xl border-b-2">Display Options</h1>
          <div class="flex flex-col flex-wrap py-2">
            <div class="flex flex-wrap items-center m-4 md:w-1/2 mx-auto">
                <BaseLabel 
                    class="flex-1"
                    :text="displayLabel"
                    :hidden="hiddenOnMobile" />
                <BaseFilter 
                    :model="itemPerPage.toString()"
                    :selectType="selectOptions"
                    :filterSection="pageSection"
                    @onBaseFilterChange="onFilterChange"/>
            </div>
          </div>
      </div>

      <div class="py-2">
        <h1 class="text-xl border-b-2">Rss Item Options</h1>
        <div class="flex flex-wrap items-center m-4 md:w-1/2 mx-auto">
            <BaseLabel 
                class="flex-1"
                :text="catLabel"
                :hidden="hiddenOnMobile" />
            <BaseFilter 
                :model="catSelected"
                :selectType="categoryType"
                :filterSection="catSection"
                @onBaseFilterChange="onFilterChange"/>
        </div>
        <div class="flex flex-wrap items-center m-4 md:w-1/2 mx-auto">
            <BaseLabel 
                class="flex-1"
                :text="dateLabel"
                :hidden="hiddenOnMobile" />
            <BaseFilter 
                :model="dateSelected"
                :selectType="dateType"
                :filterSection="dateSection"
                @onBaseFilterChange="onFilterChange"/>
        </div>
        <div class="flex my-10 justify-center items-center">
            <button class="bg-transparent hover:bg-red-500 text-blue-700 font-semibold 
            hover:text-white py-1 px-4 border border-blue-500 
            hover:border-transparent rounded"
            :class="{
                'opacity-50 cursor-not-allowed':
                changed !== true
            }"
            :key="changed"
            @click="applySetting">
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
            changed: false,
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
        if (localStorage.getItem('pageSize'))
            this.itemPerPage = localStorage.getItem('pageSize')
        if (localStorage.getItem('category'))
            this.catSelected = localStorage.getItem('category')
        if (localStorage.getItem('date'))
            this.dateSelected = localStorage.getItem('date')
    },

    computed: {
        pageSection() {
            return 'pageSize'
        },

        catSection() {
            return 'category'
        },

        dateSection() {
            return 'date'
        },

        displayLabel() {
            return 'Episodes Per Page'
        },

        catLabel() {
            return 'Default category'
        },

        dateLabel() {
            return 'Default date range'
        },

        hiddenOnMobile() {
            return false
        }
    },

    methods: {
        onFilterChange: function(value, filterSection) {
            switch(filterSection) {
                case 'pageSize':
                    this.itemPerPage = value
                    break
                case 'category':
                    this.catSelected = value
                    break
                case 'date':
                    this.dateSelected = value
                    break
            }
            this.changed = true
        },

        applySetting() {
            const payload = {
                'pageSize': this.itemPerPage,
                'category': this.catSelected,
                'date': this.dateSelected
            }
            this.$store.dispatch('settingChangeHandle', payload)
            this.$router.push('/')
        }
    }
}
</script>
