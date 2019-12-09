<template>
  <div class="max-w-3xl flex flex-col mx-auto justify-center px-4 py-2">
      <h1 class="text-2xl my-2">Setting</h1>
      <div class="py-2 border-b-2 h-48">
          <h1 class="text-xl border-b-2">Display Options</h1>
          <div class="flex flex-col flex-wrap text-sm">
            <div class="flex flex-wrap justify-center items-center m-4">
                <label class="px-2 tracking-wide text-gray-700" 
                    for="grid-state">
                    Episodes Per Page
                </label>
                <div class="relative">
                    <select class="block appearance-none bg-gray-200 
                            border border-gray-200 text-gray-700 
                            px-1 py-1 pr-8 md:px-2 md:pr-8 rounded leading-tight focus:outline-none 
                            focus:bg-white focus:border-gray-500" 
                        name="selectOptions"
                        @change="onFilterChange($event)"
                        v-model="itemPerPage">
                        <option v-for="option in selectOptions"
                            :value="option.value" 
                            :key="option.id">
                            {{ option.value }}
                        </option>
                    </select>
                    <BaseDownArrow />
                </div>
            </div>
            <div class="flex m-2 justify-end items-end">
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
  </div>
</template>

<script>
import BaseDownArrow from '@/components/BaseDownArrow.vue'

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
            ]

        }
    },

    components: {
        BaseDownArrow
    },

    mounted() {
        if (localStorage.pageSize)
            this.itemPerPage = localStorage.pageSize
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
