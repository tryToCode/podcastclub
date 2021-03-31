<template>
    <div class="bg-gray-100 border-t">
        <div class="max-w-5xl flex flex-wrap mx-auto p-8 justify-center items-center">
            <nuxt-link class="text-sm text-black px-2"
                to="/about">About
            </nuxt-link>  
            <span>•</span>
            <nuxt-link class="text-sm text-black px-2"
                to="/help">Help
            </nuxt-link>    
            <span>•</span>
            <nuxt-link class="text-sm text-black px-2"
                to="/api/docs">API Dokumentation
            </nuxt-link>
            <span>•</span>
            <a class="text-sm text-black px-2" 
                href="https://github.com/tryToCode/podcastclub">
                Contribute/Fork
            </a>
            <span>•</span>
            <nuxt-link class="text-sm text-black px-2"
                to="/privacy">Privacy Polices
            </nuxt-link>
            <span>•</span>
            <nuxt-link class="text-sm text-black px-2"
                to="/terms_of_service">Terms of Service
            </nuxt-link>
        </div>
    </div>
</template>