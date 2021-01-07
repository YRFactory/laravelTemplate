module.exports = {
  "devServer": {
    "port": 9001,
     proxy: {
        '/api': {
            target: 'http://127.0.0.1:8000'
        }
  },
},
  "outputDir": "../public",
  "assetsDir": "assets",
  "indexPath": "index.html",
  "transpileDependencies": [
    "vuetify"
  ]
}