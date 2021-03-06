import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    css: [
        "~/assets/css/style.css"
    ],
    publicRuntimeConfig: {
        // baseURL: process.env.BASE_URL
    },
    privateRuntimeConfig: {
        tmdbApiKey: process.env.TMDB_API_KEY
    },
})
