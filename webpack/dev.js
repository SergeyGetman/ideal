import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import { pathJoin } from './utils';

export default {
  mode: 'development',
  target: 'web',
  devtool: 'eval-cheap-source-map',
  devServer: {
    compress: false,
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 9001,
    client: {
      overlay: false,
    },
  },
  cache: {
    type: 'filesystem',
  },
  plugins: [
    new Dotenv({
      path: pathJoin('../environments.development'),
    }),
    new ForkTsCheckerWebpackPlugin({
      async: true,
      typescript: {
        configFile: pathJoin('../tsconfig.json'),
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    new ESLintPlugin({
      cache: true,
      context: pathJoin('../src'),
      extensions: ['.ts', '.tsx'],
    }),
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
  ],
  optimization: {
    splitChunks: false,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    minimize: false,
  },
};
