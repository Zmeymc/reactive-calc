const path = require('path');
var ExtractTextPlugin = require ('extract-text-webpack-plugin');
module.exports = {
        entry: ['./src/index.jsx'],
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
                // {
                //     test: /\.(scss|sass)$/i,
                //     include: [
                //         path.resolve(__dirname, 'node_modules'),
                //     ],
                //     loaders: ["css", "sass"]
                // },
                {
                    test: /\.css$/,
                    use:ExtractTextPlugin.extract({
                        fallback:'style-loader',
                        use: 'css-loader'
                    }),
                }
                // {
                //     test: /\.scss$/,
                //     use: [
                //         {
                //             loader: 'style-loader'
                //         },
                //         {
                //             loader: 'css-loader'
                //         }
                //     ]
                // }
            ]
        },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ],
        devServer: {
            contentBase: './dist'
        }
    };
