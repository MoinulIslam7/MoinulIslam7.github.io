const path = require('path');

const nextConfig = {
  output: 'export',
  assetPrefix: './',
  basePath: '',
  trailingSlash: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'app/css')],
  },

  images: {
    domains: ['res.cloudinary.com', 'media.dev.to'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
