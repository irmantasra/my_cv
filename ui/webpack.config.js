const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const appDir = __dirname + '/app/';
const buildDir = __dirname + '/app/dist/';

module.exports = env => ({
    entry: appDir + 'index.jsx',
    output: {
        filename: 'bundle.js',
        path: buildDir,
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: appDir + 'index.html'
        }),
        new CopyWebpackPlugin([
            {from: __dirname + '/web.config', to: buildDir},
			{from: __dirname + '/app/favicon.ico', to: buildDir}
        ]),
        new webpack.NormalModuleReplacementPlugin(
          /(.*)-APP_TARGET(\.*)/,
          function(resource){
            resource.request = resource.request
              .replace(/-APP_TARGET/, `-${env.production || env.development}`);
          }
        )],
    devtool: env && env.production ? 'none' : 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: buildDir,
        hot: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [{
                    loader: 'eslint-loader',
                    query: {
                        configFile: './.eslintrc'
                    }
                }]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['transform-object-rest-spread', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'content/'
                        }
                    }
                ]
            }
        ]
    }
});
