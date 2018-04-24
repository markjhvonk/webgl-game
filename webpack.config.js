module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './dev/game.ts',
    output: {
        path: __dirname + '/docs/js',
        filename: 'main.js',
        publicPath: '/js/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.ts?$/, loader: 'ts-loader' }
        ]
    }
}