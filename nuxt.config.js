const StyleLintPlugin = require('stylelint-webpack-plugin'); //eslint-disable-line
const md5 = require('md5'); //eslint-disable-line
const pkg = require('./package');
const apiURL = require('./apiURL');

const hash = md5(new Date().getTime());

module.exports = {
  env: {
    CACHE_VERSION: hash,
  },
  router: {
    prefetchLinks: false,
  },
  cache: true,
  mode: 'universal',
  head: {
    title: 'Nuxt ',
    titleTemplate: '%sPavellv',
    meta: [
      { charset: 'utf-8' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  css: [
    {
      src: '~/assets/styles/styles.scss',
      lang: 'scss',
    },
  ],
  plugins: [
    { src: '~/plugins/popups', ssr: true },
    { src: '~/plugins/isTouch', ssr: false },
    { src: '~/plugins/VueMediaQueries', ssr: false },
    { src: '~/plugins/arrayFromPolifill', ssr: false },
    { src: '~plugins/closestPolyfill', ssr: false },
    { src: '~plugins/customEvent', ssr: false },
    { src: '~/plugins/VueSvgSprite', ssr: false },
    { src: '~/node_modules/svg4everybody/dist/svg4everybody.min.js', ssr: false },
  ],
  module: {
    rules: [
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'fonts/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  modules: [
    'nuxt-webfontloader',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', { icon: false, meta: false }],
  ],
  axios: {
    baseURL: apiURL,
    withCredentials: true,
    https: true,
  },
  styleResources: {
    scss: './assets/styles/settings.scss',
  },
  build: {
    analyze: false,
    extractCSS: true,
    cssSourceMap: undefined,
    postcss: {
      autoprefixer: {
        flexbox: true,
        grid: true,
        browsers: [
          'last 2 versions',
          'ie >= 11',
          'ios >= 9',
        ],
      },
      cssMqPacker: {},
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });

        // Run Stylelint on save
        config.plugins.push(new StyleLintPlugin({
          emitErrors: true,
          syntax: 'scss',
        }));
      }

      // Transform to ES5
      if (ctx.isClient) {
        const babelLoader = config.module.rules.find(rule => (String(rule.test) === String(/\.jsx?$/i)));
        babelLoader.exclude = file => (
          /node_modules(\\|\/)(?!(swiper|dom7|lazy-value|gsap)).*/.test(file) && !/\.vue\.js/.test(file)
        );
      }
    },
  },
  render: {
    http2: {
      push: true,
    },
    resourceHints: true,
    bundleRenderer: {
      shouldPreload: (file, type) => ['script', 'style', 'font'].includes(type),
    },
    static: {
      maxAge: '1y',
      index: false,
      setHeaders(res, path) {
        // Исключаем сервис воркер из кеша
        if (path.match(/sw.js$/) || path.match(/OneSignalSDKUpdaterWorker.js$/) || path.match(/OneSignalSDKWorker.js$/)) {
          res.setHeader('Cache-Control', 'no-cache');
        }
      },
    },
    dist: {
      maxAge: '1y',
      index: false,
    },
  },
  workbox: {
    offlineAssets: [`/assets/sprite.svg?v=${hash}`, '/assets/index/offline.png', '/assets/index/offline-mobile.png', '/assets/index/offline.webp', '/assets/index/offline-mobile.webp'],
    offlinePage: '/assets/pages/offline_ru.html',
    runtimeCaching: [
      {
        // Кеш запросов на 3 дня
        urlPattern: apiURL,
        // handler: 'cacheFirst',
        strategyOptions: {
          cacheName: 'data',
          cacheExpiration: {
            maxEntries: 60,
            maxAgeSeconds: 1000 * 60 * 60 * 24 * 3,
          },
        },
      },
    ],
  },
  manifest: {
    name: 'Nuxt',
    lang: 'ru',
    description: pkg.description,
    theme_color: '#ffffff',
    icons: [{
      src: '/assets/favicon/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    }, {
      src: '/assets/favicon/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    }],
    short_name: 'Hello-digital',
  },
  webfontloader: {
    classes: false,
    events: false,
    custom: {
      families: ['Gotham Pro', 'Gilroy', 'Proxima Nova'],
      urls: [`../assets/fonts.css?v=${hash}`],
    },
  },
};
