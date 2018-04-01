const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader');


module.exports = {
    entry: "./src/client/index.ts",
    watch: true,
    devtool: "source-map",
    output: {
        devtoolLineToLine: true,
        sourceMapFilename: "./bundle.js.map",
        path: path.resolve(__dirname, "public/dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader",
                exclude: [
                    path.resolve(__dirname, "typings"),
                    path.resolve(__dirname, "node_modules")
                ],
                options: {
                    transpileOnly: true
                }
            },
            {
                test: /\.spec.ts$/,
                use: "ignore-loader"
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                "test": [ /\.vert$/, /\.frag$/ ],
                "use": 'raw-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(['dist']),
        new CheckerPlugin(),
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]
};

