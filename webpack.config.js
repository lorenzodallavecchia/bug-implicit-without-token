const path = require("path");

module.exports = {
    mode: "development",
    context: __dirname,
    entry: {
        "app": "./app/index",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./out"),
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            { test: /\.ts$/, exclude: /node_modules/, loader: "ts-loader" },
        ]
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
		static: {
			directory: path.resolve(__dirname, "www"),
			watch: true,
		},
        client: {
			overlay: {
	            errors: true,
	            warnings: false,
	        },
		},
    },
};