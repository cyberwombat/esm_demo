const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  //'react-markdown', // Doesn't help
  //'@lotusengine/oldcore'
])

const defaultConfig = {
  experimental: {
    esmExternals: true
  }
}

module.exports = withPlugins([withTM], defaultConfig)
