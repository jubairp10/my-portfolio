/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Remote app-store / play-store artwork used on the Projects cards.
    remotePatterns: [
      { protocol: 'https', hostname: '**.mzstatic.com' },
      { protocol: 'https', hostname: 'play-lh.googleusercontent.com' },
    ],
  },
};

export default nextConfig;
