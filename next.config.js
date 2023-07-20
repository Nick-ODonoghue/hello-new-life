/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  i18n: {
    locales: ["en-US", "hu-HU"],
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
