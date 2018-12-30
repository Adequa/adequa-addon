const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');

const config = {
    mode: 'production',
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
    entry: './src/js/actions/consent/consent.js',
    output: {
        filename: 'consent.bundle.js',
        path: path.resolve(__dirname, './src/js/actions/consent/')
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
    consentConfig
];
