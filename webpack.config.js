const path = require('path');
module.exports = {
    entry: "./demo/index.js",
    output: {
        path: path.join(__dirname, '/demo'),
        filename: "bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./')
          ]
    },
    devServer: {
        contentBase: path.join(__dirname, "demo"),
        compress: true,
        port: 3000,
        historyApiFallback: true
      },
    watch: true
}