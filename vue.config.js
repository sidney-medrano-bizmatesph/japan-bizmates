module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'postcss-loader']
                }
            ]
        }
    }
}