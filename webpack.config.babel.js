import merge from 'webpack-merge';
import baseConfig from './webpack/base';
import devConfig from './webpack/dev';
import prodConfig from './webpack/prod';
import { isDevelopment } from './webpack/utils';

module.exports = isDevelopment ? merge(baseConfig, devConfig) : merge(baseConfig, prodConfig);
