import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
<<<<<<< HEAD
    // remotePatterns: [
    //   new URL("https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/**"),
    // ],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "raw.githubusercontent.com",
          port: "",
          pathname: "**"
        }
      ]
=======
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
>>>>>>> 8d2e899d41684a3864aa86a3bb7549cda2e628ac
  },
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
