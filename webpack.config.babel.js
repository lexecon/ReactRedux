import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

const defaultEnv = {
  dev: true,
  production: false,
};

export default (env = defaultEnv) => ({
  entry: [
    path.resolve('src', 'index.jsx'),
  ],
  output: {
    path: path.resolve('build'),
    filename: 'app.[hash:6].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new WebpackNotifierPlugin({ skipFirstNotification: true }),
    new ExtractTextPlugin({
      filename: '[name].[hash:6].css',
      allChunks: true,
      disable: env.dev,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.tpl.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin([
      { from: 'data.json' },
    ]),
    ...env.production ? [
      new CleanWebpackPlugin([path.resolve(__dirname, 'build')]),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        threshold: 10240,
        minRatio: 0.8,
      }),
    ] : [],
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: [
            'babel-preset-env',
            'babel-preset-react',
          ],
          plugins: [
            'react-hot-loader/babel',
            'transform-class-properties',
          ],
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                alias: {
                  common: path.resolve(__dirname, 'src/common'),
                },
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            'postcss-loader',
            'sass-loader',
            // {
            //   loader: 'sass-resources-loader',
            //   options: {
            //     resources: path.resolve(__dirname, 'src/common/css/variables/**/*.scss'),
            //   },
            // },
          ],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
          ],
        }),
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'media/[name].[ext]',
        },
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
    ],
  },
  devtool: env.dev ? 'eval-source-map' : false,
  devServer: {
    contentBase: './build',
    hot: true,
    historyApiFallback: true,
    https: false,
    host: '0.0.0.0',
  },
});
