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
        logoutUrl: 'http://localhost:8000/auth/logout/',
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
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/jsonFormatter.js', mode: 'client' },
        { src: '~/plugins/localStorage.js', mode: 'client' },
        { src: '~/plugins/genAvatar.js', mode: 'client' },
        { src: '~/plugins/paypal.js', mode: 'client' }
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
    modules: [
        '@nuxtjs/auth',
        '@nuxtjs/axios',
    ],

    auth: {
        strategies: {
            local: false,
            facebook: {
                client_id: '207477890441285',
                userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
                scope: ['public_profile', 'email', 'user_birthday']
            },
            google: {
                client_id:
                '593867821565-00d0sqag9sln4k9rsic3k0iff0mkmcbg.apps.googleusercontent.com'
            }
        }
    },
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