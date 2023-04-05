const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(proxy("/api/**", { // https://github.com/chimurai/http-proxy-middleware
    target: "https://blogsite-6vx5.onrender.com",
    secure: false
  }));
};