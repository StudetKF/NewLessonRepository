module.exports = {
    mode: 'development',
    entry: './components.js',
    output: {
      filename: './build.js'
    },
    watch: true,
    watchOptions: {
      aggregateTimeout: 500,
      poll: 1000
  }
  }