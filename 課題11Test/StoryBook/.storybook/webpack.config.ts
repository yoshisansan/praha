// const path = require('path');
// const custom = require('../webpack.config.ts');

module.exports = async ({ config, mode }: {config: any, mode: any}) => {
  return {
    ...config,
    resolve: { ...config.resolve, ...custom.resolve },
    module: { ...config.module, rules: custom.module.rules }
  };
};

