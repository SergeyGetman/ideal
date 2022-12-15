import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { isDevelopment, pathJoin, aliasItems } from './utils';

export default {
  entry: {
    main: [pathJoin('../pokercasta.font.json'), pathJoin('../src/index.tsx')].concat(
      isDevelopment ? [pathJoin('./clearConsole.js')] : [],
    ),
  },
  output: {
    path: pathJoin('../dist'),
    pathinfo: false,
    filename: 'js/[name]_[contenthash].js',
    chunkFilename: 'js/[name]_[contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.font\.json/,
        type: 'javascript/auto',
        use: ['style-loader', 'css-loader', 'webfonts-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'thread-loader',
            options: {
              poolTimeout: isDevelopment ? Infinity : 500,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
              transpileOnly: true,
              experimentalWatchApi: true,
              getCustomTransformers: () => ({
                before: isDevelopment ? [ReactRefreshTypeScript()] : [],
              }),
            },
          },
        ],
      },
      {
        test: /\.po$/,
        use: [{ loader: 'json-loader' }, { loader: 'po-gettext-loader' }],
      },
      {
        test: /\.(png|webp|jpg|jpeg|gif|svg)$/,
        exclude: [/svg_icons/],
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]_[contenthash].[ext]',
              outputPath: 'images',
              limit: 10 * 1000, // 10kb
            },
          },
        ],
      },
      {
        test: /svg_icons.*\.svg$/,
        loader: '@svgr/webpack',
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: aliasItems,
  },
  resolveLoader: {
    modules: [`${pathJoin('../node_modules')}`, 'node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: pathJoin('../assets/index.html'),
      filename: 'index.html',
      inject: true,
      minify: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: pathJoin('../src/i18n'), to: 'i18n' },
        { from: pathJoin('../assets/fonts'), to: 'fonts' },
        { from: pathJoin('../assets/images'), to: 'images' },
        { from: pathJoin('../assets/manifest.json'), to: 'manifest.json' },
      ],
    }),
  ],
  stats: {
    children: false,
    modules: false,
    errorDetails: true,
  },
  performance: {
    hints: false,
  },
  optimization: {
    runtimeChunk: true,
  },
};
