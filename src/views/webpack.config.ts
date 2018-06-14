import webpack from "webpack";
import { join } from "path";
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");


const config: webpack.Configuration = {
    mode: "production",
    entry: join(__dirname, "src/test.ts"),
    output: {
        path: join(__dirname, "dist"),
        filename: "foo.bundle.js"
    },

    target: "web",

    // Currently we need to add ".ts" to the resolve.extensions array.
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: join(__dirname, "tsconfig.json")
            })
        ]
    },

    // Source maps support ("inline-source-map" also works)
    devtool: "#@source-map",

    // Add the loader for .ts files.
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },

};

export default config;