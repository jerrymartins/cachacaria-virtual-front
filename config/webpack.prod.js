const webpackMerge            = require('webpack-merge');
const {AngularCompilerPlugin}                     = require('@ngtools/webpack');
const UglifyJsPlugin          = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssnano                 = require('cssnano');
const CompressionPlugin = require('compression-webpack-plugin');

const commonConfig            = require('./webpack.common');
const helpers                 = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    optimization: {
        noEmitOnErrors: true,
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: 'single',
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),

            new OptimizeCSSAssetsPlugin({
                cssProcessor: cssnano,
                cssProcessorOptions: {
                    discardComments: {
                        removeAll: true
                    }
                },
                canPrint: false
            })
        ]
    },

    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: '@ngtools/webpack'
            },
            {
                test: /\.sass$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },

    plugins: [
        new AngularCompilerPlugin({
            tsConfigPath: helpers.root('tsconfig.aot.json'),
            entryModule: helpers.root('src', 'app', 'app.module#AppModule')
        }),
        new CompressionPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
});
