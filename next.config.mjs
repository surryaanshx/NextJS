/** @type {import('next').NextConfig} */
const nextConfig = {
  // This allows you to use standard <img> tags with external domains
  // or switch to <Image> component later if you wish.
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;