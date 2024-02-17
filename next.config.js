/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["images.pexels.com"],
  },
  plugins: {
    "postcss-custom-properties-fallback": {
      importFrom: require.resolve("react-spring-bottom-sheet/defaults.json"),
    },
  },
};

module.exports = nextConfig;
