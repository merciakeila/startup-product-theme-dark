const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,

      _components: path.resolve(__dirname, "src/components"),
      _UI: path.resolve(__dirname, "src/components/UI"),
      _routes: path.resolve(__dirname, "src/routes"),
      _screens: path.resolve(__dirname, "src/screens"),
      _errors: path.resolve(__dirname, "src/errors"),
      _assets: path.resolve(__dirname, "src/assets"),
      _services: path.resolve(__dirname, "src/services"),
      _styles: path.resolve(__dirname, "src/styles"),
      _models: path.resolve(__dirname, "src/models"),
      _mock: path.resolve(__dirname, "src/mock"),
    },
  };

  return config;
};
