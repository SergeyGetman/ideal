import Dotenv from 'dotenv-webpack';
import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { pathJoin } from './utils';

export default {
  cache: false,
  mode: 'production',
  devtool: false,
  plugins: [
    new Dotenv({
      path: pathJoin('../environments'),
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*'],
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 100, // 1 for demo
    }),
  ],
  optimization: {
    splitChunks: false,
    removeAvailableModules: true,
    removeEmptyChunks: true,
    minimize: true,
  },
};
