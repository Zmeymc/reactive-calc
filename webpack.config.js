const path = require('path');
var ExtractTextPlugin = require ('extract-text-webpack-plugin');
module.exports = {
        entry: ['./src/js/index.jsx'],
        output: {
            path: path.join(__dirname, "./dist"),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.js[x]?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.[s]?css$/,
                    use:ExtractTextPlugin.extract({
                        fallback:'style-loader',
                        use: 'css-loader'
                    }),
                }
            ]
        },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ],
        devServer: {
            contentBase: './dist'
        }
    };
