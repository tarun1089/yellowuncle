module.exports = function(api) {
  api && api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        loose: true,
        // No need for babel to resolve modules
        modules: false,
        targets: {
          // ! Very important. Target es6+
          esmodules: true,
        },
      },
    ],
  ];
  const plugins = [
    ['@babel/plugin-proposal-optional-chaining', { loose: true }],
  ];
  return { presets, plugins, babelrc: false };
};
