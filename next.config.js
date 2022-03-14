/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  env: {
    MONGO_URL: 'mongodb+srv://vedant:nextapi@cluster0.pydml.mongodb.net/employee-management?retryWrites=true&w=majority',
  },
}