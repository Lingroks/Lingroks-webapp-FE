import { fileURLToPath } from 'url';
import path from 'path';

// Define __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  experimental: {},
  webpack: (config) => {
    // Aliases
    config.resolve.alias['@components'] = path.resolve(
      __dirname,
      'src/components'
    );
    config.resolve.alias['@assets'] = path.resolve(__dirname, 'src/assets');
    config.resolve.alias['@utils'] = path.resolve(__dirname, 'src/utils');

    config.module.rules.push({
      test: /\.(mp3|wav|ogg)$/,
      type: 'asset/resource', // Use 'asset/resource' to handle audio files
      generator: {
        filename: 'static/media/[hash][ext][query]', // Define where to store the audio files
      },
    });

    return config;
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/scss')],
    prependData: `
      @import "@assets/scss/_variables.scss";
      @import "@assets/scss/_mixins.scss";
      @import "@assets/scss/_breakpoint.scss";
      @import "@assets/scss/_font.scss";
      
    `,
  },

  images: {
    domains: ['images.pexels.com'],
  },
};

export default nextConfig;