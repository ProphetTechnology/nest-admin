const CracoLessPlugin = require("craco-less");
const path = require("path");

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  webpack: {
    alias: {
      "@": pathResolve("src"),
      "@images": pathResolve("src/images"),
      "@api": pathResolve("src/api"),
      "@common": pathResolve("src/common"),
      "@components": pathResolve("src/components"),
      "@layouts": pathResolve("src/layouts"),
      "@pages": pathResolve("src/pages"),
    },
  },
  babel: {
    plugins: [
      ["import", { libraryName: "antd", style: true }],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
