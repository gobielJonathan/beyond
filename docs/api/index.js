const { default: app } = require("../build/server/main");

module.exports = async function handler(req, res) {
  await app.ready();
  app.server.emit("request", req, res);
};
