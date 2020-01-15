<template>
  <div>
      <BasePageNav />
      <div class="bg-gray-200">
          <div class="max-w-5xl flex flex-col p-4 mx-auto">
            <div class="m-4 bg-white rounded p-4">
              <h1 class="text-xl font-medium">Search</h1>
              <p class="py-1">
                  The following internal items are used to match the input search query.
              </p>
              <div class="flex items-center my-2">
                <input type="checkbox" disabled class="form-checkbox text-green-500" checked>
                <span class="mx-2">
                  RSS Item title
                </span>
              </div>
              <div class="flex items-center my-2">
                <input type="checkbox" disabled class="form-checkbox text-green-500" checked>
                <span class="mx-2">
                  Item description
                </span>
              </div>
              <div class="flex items-center my-2">
                <input type="checkbox" disabled class="form-checkbox text-green-500" checked>
                <span class="mx-2">
                  Podcast
                </span>
              </div>
              <div class="flex items-center my-2">
                <input type="checkbox" disabled class="form-checkbox text-green-500" checked>
                <span class="mx-2">
                  Podcast original URL
                </span>
              </div>
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
                <div class="flex items-center my-2">
                  <input type="checkbox" disabled class="form-checkbox text-green-500" checked>
                  <span class="mx-2">
                    Category of Item
                  </span>
                </div>
                <div class="flex items-center my-2">
                  <input type="checkbox" disabled class="form-checkbox text-green-500" checked>
                  <span class="mx-2">
                    Published date of Item
                  </span>
                </div>
                <div class="flex items-center my-2">
                  <input type="checkbox" disabled class="form-checkbox text-green-500" checked>
                  <span class="mx-2">
                    The page number, the <span class="font-bold">default page number</span> is 1
                  </span>
                </div>
                The page number (Pagination number at the bottom) could cause the result "No Items Found".
              </div>
              <p class="py-1 font-bold">Solution</p>
              <p>
                Make sure the filter "Category" or "Date" is executed by querying with 
                the default page number <span class="font-bold">1</span>.
              </p>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import BasePageNav from '@/components/Base/BasePageNav.vue'

export default {
  components: {
    BasePageNav
  }  
}
</script>
