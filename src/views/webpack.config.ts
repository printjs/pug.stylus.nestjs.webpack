import webpack from "webpack";
import { join } from "path";
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");


const config: webpack.Configuration = {
    mode: "production",
    entry: {
        "index.page": join(__dirname, "src/index.ts"),
        "home.page": join(__dirname, "src/home.ts"),
        "pas.page": join(__dirname, "src/pas.ts"),
        "culture.page": join(__dirname, "src/culture.ts"),
        "join.page": join(__dirname, "src/join.ts"),
        "about.page": join(__dirname, "src/about.ts"),
        "job.list": join(__dirname, "src/job.list.ts"),
        "job.detail": join(__dirname, "src/job.detail.ts"),
        "pas.detail": join(__dirname, "src/pas.detail.ts"),
    },
    output: {
        path: join(__dirname, "dist"),
        filename: "[name].js",
    },

    target: "web",

    // Currently we need to add ".ts" to the resolve.extensions array.
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: join(__dirname, "tsconfig.json"),
            }),
        ],
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
                loader: "ts-loader",
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
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: "url-loader?limit=8192&name=[path][name].[ext]",
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].[hash].css",
        }),
        new CleanWebpackPlugin([
            "dist",
        ], {
                root: __dirname,
            }),
    ],
};

export default config;
