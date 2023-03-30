/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  exclude: ["__test__/**/*", "__mocks__/**/*"],
  generateBuildId: () => "board_deploy",
};

module.exports = nextConfig;
