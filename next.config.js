const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "",
  env: {
    BACKEND_URL: "/",
  },
};
