import webpack from "webpack";
import { join } from "path";
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");


const config: webpack.Configuration = {
    mode: "production",
    entry: {
        index_shell: join(__dirname, "src/index.ts"),
        home_shell: join(__dirname, "src/home.ts"),
        test: join(__dirname, "src/test.ts"),
    },
    output: {
        path: join(__dirname, "dist"),
        filename: "[name].js"
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
            // {
            //     test: /\.tsx?$/,
            //     exclude: /node_modules/,
            //     enforce: "pre",
            //     loader: "tslint-loader",
            //     options: {
            //         tsConfigFile: join(__dirname, "tsconfig.json")
            //     }
            // },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.(css|styl)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            minimize: true,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            plugins: () => [autoprefixer],
                        },
                    },
                    {
                        loader: "stylus-loader",
                        options: {
                            sourceMap: true,
                            paths: "src/resources/styles",
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].[hash].css",
        }),
        new CleanWebpackPlugin([
            "dist"
        ], {
                root: __dirname,
            }),
    ]
};

export default config;