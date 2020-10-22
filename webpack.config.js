/* eslint-disable */
const path = require('path');
const slsw = require('serverless-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


const isLocal = slsw.lib.webpack.isLocal;

module.exports = {
    mode: isLocal ? 'development' : 'production',
    entry: slsw.lib.entries,
    externals: [nodeExternals()],
    devtool: 'source-map',
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                // Include ts, tsx, js, and jsx files.
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'cache-loader',
                        options: {
                            cacheDirectory: path.resolve('.webpackCache')
                        }
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: './tsconfig.src.json'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts'],
        plugins: [new TsconfigPathsPlugin()]
    },
    plugins: [new ForkTsCheckerWebpackPlugin()],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                },
                parallel: true,
                sourceMap: true
            })
        ]
    }
};
