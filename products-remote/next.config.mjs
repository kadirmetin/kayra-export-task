import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  reactStrictMode: true,

  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "productsRemote",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./RemoteComponent": "./components/RemoteComponent.tsx",
        },
        remotes: {
          host: "host@http://localhost:3000/_next/static/chunks/remoteEntry.js",
        },
      })
    );
    return config;
  },
};

export default nextConfig;
