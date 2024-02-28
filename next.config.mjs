/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        CLAVE: process.env.CLAVE || 'default-value',
      },
};

export default nextConfig;
