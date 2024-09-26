import { mergeWithCustomize, customizeObject } from "webpack-merge";

import shared from "../rspack.shared";
import resolveCwd from "../../../utils/resolve";
import { serverLoader } from "../loader/ts-loader";
import { cssLoader } from "../loader/css-loader";

import { serverVars } from "../plugins/DefinePlugin";
import { Configuration, rspack } from "@rspack/core";

export default mergeWithCustomize<Configuration>({
  customizeObject: customizeObject({
    "module.rules": "append",
    resolve: "append",
    output: "append",
  }),
})(shared, {
  target: "node",
  entry: [resolveCwd("src/server/index.ts")],
  optimization: {
    minimize: false,
  },
  output: {
    path: resolveCwd("build/server"),
    libraryTarget: "commonjs",
  },
  plugins: [
    new rspack.DefinePlugin(serverVars),
    new rspack.ProgressPlugin({ prefix: "server" }),
  ],

  module: {
    rules: [...serverLoader, ...cssLoader({ isServer: true })],
  },
});