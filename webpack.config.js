
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        mode: 'development',
        entry: './src/main/main.ts',
        target: 'electron-main',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: /src/,
                    use: [
                        {
                            loader: 'ts-loader'
                        }
                    ]
                }
            ]
        },
        output: {
            path: __dirname + '/lib/',
            filename: 'main.js'
        },
    },
    {
        mode: 'development',
        entry: './src/renderer/boot.tsx',
        target: 'electron-renderer',
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    include: /src/,
                    use: [
                        {
                            loader: 'ts-loader'
                        }
                    ]
                }
            ]
        },
        output: {
            path: __dirname + '/lib/renderer/',
            filename: 'app.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/renderer/index.html'
            })
        ]
    }
];

