const path = require("path");
module.exports = {
  transpileDependencies: ["vuetify"],
  outputDir: path.resolve(__dirname, "../public"),
  devServer: {
    proxy: {
      "/api/": {
        target: "http://localhost:3000"
      }
    }
  }
  // publicPath: process.env.NODE_ENV === "production" ? "../public/" : "/",
};

// customize it so when you want to test as a standalone vuejs,
// run build(default) that builds to dist
// but when you want it integrated with the server
// run build(with custom config that builds to server's /public folder)
