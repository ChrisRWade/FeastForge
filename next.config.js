const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com"],
  },
  env: {
    customKey: "value",
  },
  webpack: (config, {isServer}) => {
    if (!isServer) {
      // Modifies webpack config for client-side bundles
      config.resolve.fallback = {fs: false};
    }
    return config;
  },
};

module.exports = nextConfig;
