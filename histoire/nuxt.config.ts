// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
    extends: ['../ui'],
    devtools: {
        enabled: true
    },
})
