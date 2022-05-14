const { createProxyMiddleware } = require('http-proxy-middleware');

// eslint-disable-next-line func-names
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: `https://4idiot.ddns.net:8080`,
      changeOrigin: true,
    }),
  );
};
