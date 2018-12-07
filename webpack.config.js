let path = require('path');

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: '/node-modeules/'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'sourcemap'
};

module.exports = (env, options) => {
    let prodaction = options.mode === 'production';

    conf.devtool = prodaction
                        ? false
                        : 'eval-sourcemap';

    return conf;
}