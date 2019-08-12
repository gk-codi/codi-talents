module.exports = {
  plugins: [
    {
      name: 'scss',
      options: [
        {
          dev: {
            sourceMap: true,
          },
          prod: {
            sourceMap: false,
          },
        },
      ],
    },
    {
      name: 'compression',
      options: {
        brotli: true,
        gzip: true,
        compressionPlugin: {},
        brotliPlugin: {
          asset: '[path].br[query]',
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.7,
        },
      },
    },
    'bundle-analyzer',
    // 'long-term-caching',
  ],
};
