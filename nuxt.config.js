export default {
    mode: 'universal',
    /*
     **podcast api endpoint
     */
    env: {
        baseItemUrl: 'http://localhost:8000/api/rssItems',
        basePodcastUrl: 'http://localhost:8000/api/podcasts',
        relatedItemsUrl: 'http://localhost:8000/api/relatedItems',
        loginUrl: 'http://localhost:8000/auth/login/',
        verifyTokenUrl: 'http://localhost:8000/auth/login/token_post/'
    },
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: 'https://img.icons8.com/ios-glyphs/50/000000/podcast.png' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#f56565',
        height: '4px'
    },
    /*
     ** Global CSS
     */
    css: [
        'plyr/dist/plyr.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/jsonFormatter.js', mode: 'client' },
        { src: '~/plugins/localStorage.js', mode: 'client' }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/moment', ['@nuxtjs/google-analytics', { id: 'UA-153093382-1' }]
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}