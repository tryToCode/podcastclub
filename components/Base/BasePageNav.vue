<template>
  <nav class="max-w-5xl flex flex-col md:flex-row p-1 justify-between h-auto mx-auto">
    <div class="flex pl-4 items-center">
        <img src="~/assets/podcast.png">
        <nuxt-link class="pl-2 tracking-tight text-xl"
            id="backToHome"
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
