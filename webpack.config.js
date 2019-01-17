const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');

const config = {
    mode: 'development',
    devtool: 'inline-source-map'
};

const vueConfig = Object.assign({}, config, {
    entry: './src/js/interface/popup.js',
    output: {
        filename: 'popup.bundle.js',
        path: path.resolve(__dirname, './src/js/interface/')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader'
            // },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
});

const consentConfig = Object.assign({}, config, {
    entry: './src/js/model/consent.js',
    output: {
        filename: 'consent.bundle.js',
        path: path.resolve(__dirname, './src/js/model/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
});

const adequaApiConfig = Object.assign({}, config, {
    entry: './src/js/page/adequa-api.js',
    output: {
        filename: 'adequa-api.bundle.js',
        path: path.resolve(__dirname, './src/js/page/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
});

const storageConfig = Object.assign({}, config, {
    entry: './src/js/storage.js',
    output: {
        filename: 'storage.bundle.js',
        path: path.resolve(__dirname, './src/js/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
});

module.exports = [
    vueConfig,
    consentConfig,
    storageConfig,
    adequaApiConfig
];
