<template>
  <nav class="flex p-1 justify-between bg-red-400 h-auto">
    <div class="flex pl-4 items-center">
        <img src="~/assets/podcast.png">
        <nuxt-link class="pl-2 tracking-wide text-xl"
            id="reloadPage"
            to="/">
            Podcast Club
        </nuxt-link>
    </div>

    <div class="hidden md:flex items-center">
        <img src="~/assets/settings.png">
        <nuxt-link class="px-1 md:pr-6 tracking-wide text-xl"
            to="/settings">
            Setting
        </nuxt-link>
    </div>
  </nav>
</template>
