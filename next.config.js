/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_APP_PROXY: "https://bt-product-server.herokuapp.com",
  },
};

module.exports = nextConfig;
