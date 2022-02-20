const path = require("path");
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@components": path.resolve(__dirname, "src/components/fragments"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@vectors": path.resolve(__dirname, "src/components/vectors"),
      "@fonts": path.resolve(__dirname, "src/fonts"),
      "@redux-store": path.resolve(__dirname, "src/redux/store"),
      "@redux-reducers": path.resolve(__dirname, "src/redux/reducers"),
    },
  };
  return config;
};
