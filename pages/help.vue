<template>
  <div class="max-w-5xl flex flex-col mx-auto justify-center">
      <BasePageNav />

      <div class="m-4">
          <h1 class="text-xl">Search</h1>
          <p class="py-1">
              The following internal items are used to match the input search query.
          </p>
          <ul class="list-disc list-inside">
            <li>RSS Item title</li>
            <li>Item description</li>
            <li>Podcast</li>
            <li>Podcast original URL</li>
            </ul>
          <p class="py-1">
              Check out 
              <nuxt-link 
                class="border-b-2" 
                to="/about">
                here
              </nuxt-link> to see available Podcasts.
          </p>
      </div>
      <div class="m-4">
          <h1 class="text-xl">Filter</h1>
          <p class="py-1 font-bold">
              Possible Filter Result: No Items Found
          </p>
          <p>
            Items are filtered by the given filter input which may include 
            <ul class="list-disc list-inside py-1">
                <li>Category of Item</li>
                <li>Published date of Item</li>
                <li>The page number, the <span class="font-bold">default page number</span> is 1</li>
            </ul>
            The page number (Pagination number at the bottom) could cause the result "No Items Found".
          </p>
          <p class="py-1 font-bold">Solution</p>
          <p>
            Make sure the filter "Category" or "Date" is executed by querying with 
            the default page number <span class="font-bold">1</span>.
          </p>
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
