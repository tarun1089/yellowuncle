const webpack = require('webpack');
const path = require('path');
const config = require('sapper/config/webpack.js');
const pkg = require('./package.json');
const sveltePreprocess = require('svelte-preprocess');
const babelConfig = require('./babel.config');
const preprocess = sveltePreprocess({
  babel: {
    presets: babelConfig.presets,
    plugins: babelConfig.plugins,
  },
  postcss: {
    plugins: [require('autoprefixer')],
  },
  scss: true,
});

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const alias = {
  svelte: path.resolve('node_modules', 'svelte'),
  src: path.resolve(__dirname, 'src'),
  stores: path.resolve(__dirname, 'src/stores'),
  articles: path.resolve(__dirname, 'src/articles'),
  icons: path.resolve(__dirname, 'src/icons'),
  config: path.resolve(__dirname, 'src/config'),
  helpers: path.resolve(__dirname, 'src/helpers'),
  components: path.resolve(__dirname, 'src/components'),
};
const extensions = ['.mjs', '.js', '.json', '.svelte', '.html'];
const mainFields = ['svelte', 'module', 'browser', 'main'];
const commonRules = [
  {
    test: /\.m?js$/,
    exclude: /node_modules\/(?!(svelte\/|(react-comp\/(?!node_modules\/))))/,
    use: [
      {
        loader: 'babel-loader',
        options: babelConfig(),
      },
    ],
  },
  {
    test: /\.font\.js/,
    use: ['style-loader', 'css-loader', 'webfonts-loader'],
  },
];
module.exports = {
  client: {
    entry: config.client.entry(),
    output: config.client.output(),
    resolve: { alias, extensions, mainFields },
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              preprocess,
              dev,
              hydratable: true,
              //hotReload: false // pending https://github.com/sveltejs/svelte/issues/2377
            },
          },
        },
        ...commonRules,
      ],
    },
    mode,
    plugins: [
      // pending https://github.com/sveltejs/svelte/issues/2377
      // dev && new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
    ].filter(Boolean),
    devtool: dev && 'inline-source-map',
  },

  server: {
    entry: config.server.entry(),
    output: config.server.output(),
    target: 'node',
    resolve: { alias, extensions, mainFields },
    externals: Object.keys(pkg.dependencies).concat('encoding'),
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              preprocess,
              css: false,
              generate: 'ssr',
              dev,
            },
          },
        },
        ...commonRules,
      ],
    },
    mode: process.env.NODE_ENV,
    performance: {
      hints: false, // it doesn't matter if server.js is large
    },
  },

  // serviceworker: {
  // 	entry: config.serviceworker.entry(),
  // 	output: config.serviceworker.output(),
  // 	mode: process.env.NODE_ENV
  // }
};
