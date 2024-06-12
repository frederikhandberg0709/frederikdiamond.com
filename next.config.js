/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
    env: {
        MAIL_API_URL: process.env.MAIL_API_URL,
        MAIL_ACCESS_KEY: process.env.MAIL_ACCESS_KEY,
    },
    output: 'export',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
