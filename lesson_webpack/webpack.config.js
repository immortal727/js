// webpack.config.js - настройки webpack
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    // Точки входа - главные файлы, в котором подключатся остальные
    entry: {
        // main и about выдуманные переменный
        // в данном случае берем по именам папок, чтоб не путаться
        main: './src/main/js/index.js',
        about: './src/about/js/index.js',
    },
    output: {
        // [name] - имя свойство в entry
        filename: '[name].js',
        // В корне проекта создается папка, к примеру dist
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: ["@babel/plugin-transform-runtime"]
                        }
                    }
                ]
            },

            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    // генерация новых css файлов
    // css файлы берутся из index.js
    // В них их регистрируют
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};