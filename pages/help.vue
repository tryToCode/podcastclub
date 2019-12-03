<template>
  <div class="max-w-3xl flex flex-col mx-auto justify-center px-4 py-2">
      <div class="my-2">
          <h1 class="text-2xl">Search</h1>
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
              Check out <nuxt-link class="border-b-2" to="/about">here</nuxt-link> to see availiable Podcasts.
          </p>
      </div>
      <div class="my-2">
          <h1 class="text-2xl">Filter</h1>
          <p class="py-1 font-bold">
              Known Issue: No Items Found
          </p>
          <p>
            Items are filtered by the given filter input which may include 
            <ul class="list-disc list-inside">
                <li>category of item</li>
                <li>published dated of item</li>
                <li>the result page number</li>
            </ul>
            The result page number could cause the search result "No Items Found".
          </p>
          <p class="py-1 font-bold">Solution</p>
          <p>
            Make sure the filter "Category" or "Date" is excuted without querying the page number.
          </p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>
