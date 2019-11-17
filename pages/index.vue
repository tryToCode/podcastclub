<template>
  <div>
    <BaseFilterRow
      :count="count"
      :timeSpend="time"
      @loadItemsOfCategory="categoryChangeHandler" />
    <div class="max-w-5xl bg-gray-100 flex flex-col mx-auto"
      v-for="item in items"
      :key="item.id">
      <div class="overflow-hidden">
          <div class="px-6">
              <a class="font-semibold text-base"
                :href="item.item_url"
                v-tooltip.top="item.description">
                {{item.title}}
              </a>
              <span class="text-gray-500 text-sm">
                  ({{item.item_url}})
              </span>
          </div>
          <div class="px-6">
              <a class="inline-block px-1 text-sm font-semibold text-gray-500"
                :href="'https://' + item.creator.base_url">
                {{item.creator.name}}
              </a>
              <span class="text-gray-500">|</span>
              <span class="inline-block px-1 text-sm font-semibold text-gray-500">
                {{item.creator.category.split('.')[1]}}
              </span>
              <span class="text-gray-500">|</span>
              <span class="inline-block px-1 text-sm font-semibold text-gray-500">
                {{$moment(item.pub_date).fromNow()}}
              </span>
              <span class="text-gray-500">|</span>
              <span class="inline-block px-1 text-sm font-semibold text-gray-500">
                #{{item.episode_number}}
              </span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseFilterRow from '@/components/BaseFilterRow.vue'

export default {
  components: {
    BaseFilterRow
  },

  created() {
    this.$store.dispatch('loadItems')
  },

  computed: {
    ...mapState({
      items: 'items',
      count: 'itemsCount',
      time: 'time'
    })
  },

  methods: {
    categoryChangeHandler(value) {
      this.$store.dispatch('loadItemsOnCategory', value)
    }
  }
}
</script>
