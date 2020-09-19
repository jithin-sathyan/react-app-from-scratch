const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }]
    },
    resolve: { extensions: ["*", "js", "jsx"] },
    output: {
        path: path.resolve(_dirname, "dist/"),
        publicPath: "/dist/",
        fileName: "bundle.js",
    },
    devServer: {
        contentBase: path.join(_dirname, "public/"),
        port: 8000,
        publicPath: "http://localhost:8000/dist/",
        hotOnly: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};