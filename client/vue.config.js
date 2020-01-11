module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === "production" ? "../public/" : "/",
  outputDir: process.env.NODE_ENV === "production" ? "../public/" : "dist"
};

// customize it so when you want to test as a standalone vuejs,
// run build(default) that builds to dist
// but when you want it integrated with the server
// run build(with custom config that builds to server's /public folder)
