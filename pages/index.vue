<template>
  <div>
    <BaseFilterRow :count="count" :timeSpend="time"
      @loadItemsOfCategory="categoryChangeHandler" />
    <div class="max-w-5xl bg-gray-100 flex flex-col mx-auto"
      v-for="item in items"
      :key="item.id">
      <BaseItemRow :item="item" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseFilterRow from '@/components/BaseFilterRow.vue'
import BaseItemRow from '@/components/BaseItemRow.vue'

export default {
  components: {
    BaseFilterRow,
    BaseItemRow
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
