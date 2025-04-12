import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  reactStrictMode: true,

  transpilePackages: [
    "antd",
    "@ant-design",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
    "rc-tree",
    "rc-table",
  ],

  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          productsRemote:
            "productsRemote@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          basketRemote: "basketRemote@http://localhost:3002/remoteEntry.js",
        },
        exposes: {
          "./basket": "./context/BasketContext.tsx",
        },
      })
    );
    return config;
  },
};

export default nextConfig;
