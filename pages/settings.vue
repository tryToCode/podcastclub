<template>
  <div class="max-w-5xl flex flex-col justify-between mx-auto">
      <BasePageNav />

      <div class="m-4">
        <h1 class="text-2xl my-2">Setting</h1>
      </div>
      <div class="m-4">
        <h1 class="text-xl border-b-2">Display Options</h1>
        <div class="flex m-4 items-center mx-auto">
            <BaseLabel
                class="flex-1"
                text="Episodes Per Page"
                :hidden="false" />
            <BaseFilter 
                id="pageSizeSelect"
                :model="itemPerPage"
                :selectType="selectOptions"
                filterSection="pageSize"
                @onBaseFilterChange="onFilterChange"/>
        </div>
      </div>

      <div class="m-4">
        <h1 class="text-xl border-b-2">Rss Item Options</h1>
        <div class="flex items-center m-4 mx-auto">
            <BaseLabel 
                class="flex-1"
                text="Default category"
                :hidden="false" />
            <BaseFilter 
                id="categorySelect"
                :model="catSelected"
                :selectType="categoryType"
                filterSection="category"
                @onBaseFilterChange="onFilterChange"/>
        </div>
        <div class="flex items-center m-4 mx-auto">
            <BaseLabel 
                class="flex-1"
                text="Default date range"
                :hidden="false" />
            <BaseFilter
                id="dateSelect" 
                :model="dateSelected"
                :selectType="dateType"
                filterSection="date"
                @onBaseFilterChange="onFilterChange"/>
        </div>
      </div>
      <div class="flex justify-center items-center h-24 md:h-32 lg:h-40">
        <button class="bg-transparent hover:bg-red-500 text-blue-700 
            font-semibold hover:text-white py-1 px-4 border 
            border-blue-500 hover:border-transparent rounded"
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
</template>

<script>
import BaseLabel from '@/components/Base/BaseLabel.vue'
import BaseFilter from '@/components/Base/BaseFilter.vue'
import BasePageNav from '@/components/Base/BasePageNav.vue'

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
            itemPerPage: '20',
            selectOptions: [
                {value: '10', id: 0},
                {value: '20', id: 1},
                {value: '30', id: 2},
                {value: '50', id: 3}
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
        BaseFilter,
        BasePageNav
    },

    methods: {
        onFilterChange: function(filterSection,value) {
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
            this.$store.dispatch('apiUrl/settingChangeHandle', payload)
            this.$router.push('/')
        }
    }
}
</script>
