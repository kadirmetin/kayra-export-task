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
      })
    );
    return config;
  },
};

export default nextConfig;
