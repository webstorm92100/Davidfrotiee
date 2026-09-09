import type { NextConfig } from 'next';

const isO2switch = process.env.O2SWITCH_STATIC === '1';

const nextConfig: NextConfig = isO2switch
  ? {
      output: 'export',
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
    }
  : {};

export default nextConfig;
