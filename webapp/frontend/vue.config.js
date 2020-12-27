module.exports = {
    devServer: {
      port: 9001
    },
    outputDir: '../public',
    assetsDir: 'assets',
    indexPath: process.env.NODE_ENV === 'production'
      ? '../resources/views/index.blade.php'
      : 'index.html'
  }