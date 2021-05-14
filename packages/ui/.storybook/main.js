const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@etchteam/storybook-addon-status/register',
    'storybook-addon-performance/register',
    // 'storybook-addon-react-docgen',
    {
      name: 'storybook-addon-turbo-build',
      options: {
        optimizationLevel: 2,
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
    },
  },
  babel: async (options) => {
    options.plugins.push('babel-plugin-inline-react-svg');
    return options;
  },
  webpackFinal: (config) => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      assert: require.resolve('assert-browserify/'),
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
    };
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
