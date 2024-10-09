import { fileURLToPath } from 'url';
import path from 'path';

// Define __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    // Aliases
    config.resolve.alias['@components'] = path.resolve(
      __dirname,
      'src/components'
    );
    config.resolve.alias['@assets'] = path.resolve(__dirname, 'src/assets');
    config.resolve.alias['@utils'] = path.resolve(__dirname, 'src/utils');

    return config;
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/scss')],
    prependData: `
      @import "@assets/scss/_variables.scss";
      @import "@assets/scss/_mixins.scss";
      @import "@assets/scss/_breakpoint.scss";
    `,
  },
};

export default nextConfig;
