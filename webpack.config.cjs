module.exports = {
  entry: './lib/wpentry.ts',
  mode: 'development',
  output: {
    path: `${__dirname}/wpdist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"]
     }
  },
  externals: {
    'node:crypto': 'commonjs crypto'
  }
}