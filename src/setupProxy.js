const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: `https://4idiot.ddns.net:8080`,
      changeOrigin: true,
    }),
  );
};
