import highlightjs from 'highlight.js'
import getSiteMeta from './utilities/getSiteMeta'

const meta = getSiteMeta();

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',


  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || 'https://kingsley.sh'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    ...meta,

    title: 'The website of Kingsley Raspe | kingsley.sh',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;0,700;1,400&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/app.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    'nuxt-compress',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'vue-plausible',
    '@nuxtjs/axios',
    '@nuxt/content',
    ['nuxt-highlightjs', {
      style: 'github-gist'
    }]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ['lodash', 'moment']
  },

  content: {
    markdown: {
      highlighter (rawCode, lang) {
        const highlightedCode = highlightjs.highlight(lang, rawCode).value

        // We need to create a wrapper, because
        // the returned code from highlight.js
        // is only the highlighted code.
        return `<pre><code class="hljs ${lang}">${highlightedCode}</code></pre>`
      }
    }
  }
}
