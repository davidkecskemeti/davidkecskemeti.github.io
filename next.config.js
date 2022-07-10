const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/davidkecskemeti.github.io/",
  assetPrefix: "/davidkecskemeti.github.i/o",
};
