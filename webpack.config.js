const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            title: "",
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    devtool: "inline-source-map",
    devServer: {
        watchFiles: ["src/*.html"],
        hot: true,
        static: {
            directory: path.join(__dirname, 'src/images'),
            publicPath: '/images'
        },
    },
};