const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        popup: path.resolve('./src/popup/popup.tsx'),
        options: path.resolve('./src/options/options.tsx'),
        background: path.resolve('./src/background/background.ts'),
        contentScript: path.resolve('./src/contentScript/contentScript.ts'),
        newTab: path.resolve('src/tabs/index.tsx'),
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader', 
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [tailwindcss, autoprefixer],
                            },
                        },
                    },
                ],
            },
            {
                type: 'assets/resource',
                test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg|webp)$/,
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new CopyPlugin({
            patterns: [
              { 
                from: path.resolve('src/static'),
                to: path.resolve('dist') 
              },
              
              
            ],
        }),
        ...getHtmlPlugins([
            'popup',
            'options',
            'newTab'
        ]),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
      },
}

function getHtmlPlugins(chunks) {
    return chunks.map(chunk => new HtmlWebpackPlugin({
        title: 'LeetCrush Extension',
        filename: `${chunk}.html`,
        chunks: [chunk]
    }))
}