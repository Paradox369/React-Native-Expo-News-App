const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Next Gen Documentation',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Next Gen Documentation',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App',
          templates:
            'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\node_modules\\docz-core\\dist\\templates',
          docz:
            'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\.docz',
          cache:
            'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\.docz\\.cache',
          app:
            'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\.docz\\app',
          appPackageJson:
            'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\package.json',
          appTsConfig:
            'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\tsconfig.json',
          gatsbyConfig:
            'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\gatsby-config.js',
          gatsbyBrowser:
            'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\gatsby-browser.js',
          gatsbyNode:
            'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\gatsby-node.js',
          gatsbySSR:
            'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\gatsby-ssr.js',
          importsJs:
            'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\.docz\\app\\imports.js',
          rootJs:
            'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\.docz\\app\\root.jsx',
          indexJs:
            'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\.docz\\app\\index.jsx',
          indexHtml:
            'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\.docz\\app\\index.html',
          db:
            'D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
