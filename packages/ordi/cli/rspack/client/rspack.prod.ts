import { Configuration, rspack } from "@rspack/core";
import { mergeWithCustomize, customizeObject } from "webpack-merge";

import common from "./rspack.config";

export default mergeWithCustomize<Configuration>({
  customizeObject: customizeObject({
    output: "merge",
  }),
})(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: process.env.ASSET_PREFIX,
  },
  plugins: [new rspack.ProgressPlugin({ prefix: "client" })],
});
