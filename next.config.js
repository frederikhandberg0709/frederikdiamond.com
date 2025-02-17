/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  env: {},
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
