const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const exec = require('child_process').exec;
const {mergeDeep} = require('immutable')

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                    exec('.\\chrome-build.sh', (err, stdout, stderr) => {
                        if (stdout) process.stdout.write(stdout);
                        if (stderr) process.stderr.write(stderr);
                    });
                });
            }
        }
    ]
};

const vueConfig = mergeDeep(config, {
    entry: {background: './src/js/interface/popup.js'},
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

const consentConfig = mergeDeep(config, {
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

const desiresConfig = mergeDeep(config, {
    entry: './src/js/actions/desires/desires.js',
    output: {
        filename: 'desires.bundle.js',
        path: path.resolve(__dirname, './src/js/actions/desires/')
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

const adequaApiConfig = mergeDeep(config, {
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

const storageConfig = mergeDeep(config, {
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
    adequaApiConfig,
    desiresConfig
];
