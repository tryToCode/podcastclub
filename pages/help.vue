<template>
  <div>
      <BasePageNav />
      <div class="max-w-4xl flex flex-col p-4 mx-auto">
        <div class="m-4 bg-white rounded p-4">
          <h1 class="text-xl font-medium">Search</h1>
          <p class="py-1">
              The following internal items are used to match the input search query:
          </p>
          <BaseCheckedBox v-for="t in searchInputType"
            :key="t"
            :label="t" />
          <p class="py-1">
            Check out 
            <nuxt-link 
              class="border-b-2" 
              to="/about">
              here
            </nuxt-link> to see available Podcasts.
          </p>
        </div>

        <div class="m-4 bg-white rounded p-4">
          <h1 class="text-xl font-medium">Filter</h1>
          <p class="py-1">
              Possible Filter Result: No Items Found
          </p>
          <div>
            Items are filtered by the given filter input which may include 
            <BaseCheckedBox v-for="t in filterType"
              :key="t"
              :label="t" />
            The <span class="font-bold">default page number</span> is 1
            The page number (Pagination number at the bottom) could cause the result "No Items Found".
          </div>
          <p class="mt-4 mb-2 font-bold">Solution</p>
          <p>
            Make sure the filter "Category" or "Date" is executed by querying with 
            the default page number <span class="font-bold">1</span>.
          </p>
        </div>
      </div>
  </div>
</template>

<script>
import BasePageNav from '@/components/Base/BasePageNav.vue'
import BaseCheckedBox from '@/components/Base/BaseCheckedBox.vue'

export default {
  components: {
    BaseCheckedBox,
    BasePageNav
  },

  computed: {
    searchInputType() {
      return [
        'RSS Item title', 
        'Item description', 
        'Podcast', 
        'Podcast original URL']
    },

    filterType() {
      return [
        'Category of Item',
        'Published date of Item',
        'The page number'
      ]
    }
  }
}
</script>
