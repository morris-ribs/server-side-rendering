import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: path.resolve(__dirname, 'src/index'),
    target: 'web',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(), // optimizes the order that our files are bundled
        new webpack.DefinePlugin(GLOBALS), // define variables that are available to the libraries Webpack is bundling
        new ExtractTextPlugin('styles.css'), // extracts CSS into a separate file
        new webpack.optimize.DedupePlugin(), // remove duplicate packages from the bundle
        new webpack.optimize.UglifyJsPlugin() // minifies JS
    ],
    module: {
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
            { test: /(\.css)$/, loader: ExtractTextPlugin.extract('css?sourceMap') },
            { test: /(\.scss)$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
    }
};