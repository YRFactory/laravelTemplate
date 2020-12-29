module.exports = {
  "devServer": {
    "port": 9001,
    "proxy": {
      "^/api": {
        "target": "http://nginx"
      }
    }
  },
  "configureWebpack": {
    "resolve": {
      "alias": {
        "vue$": "vue/dist/vue.esm.js"
      }
    }
  },
  "outputDir": "../public",
  "assetsDir": "assets",
  "indexPath": "index.html",
  "transpileDependencies": [
    "vuetify"
  ]
}