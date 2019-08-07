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
    'compression',
    'bundle-analyzer',
    'long-term-caching',
  ],
};
