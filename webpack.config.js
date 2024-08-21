module.exports = {
    mode: "development",
    entry: "./src/test.tsx",
    module: {
        rules: [
            {
                use: "ts-loader",
                test: /\.tsx$/,
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extentions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: "index.tsx",
    }
}