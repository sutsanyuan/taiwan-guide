import type { NextConfig } from "next";
import { defaultLocale } from "./lib/i18n/config";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.73.212"],

  // 打開 / 時，自動導向預設語言 /zh-TW
  async redirects() {
    return [
      {
        source: "/",
        destination: `/${defaultLocale}`,
        permanent: false, // 307 暫時導向：瀏覽器不會記住，之後改規則才會生效
      },
    ];
  },
  // 允許 <Image> 載入 Wikimedia Commons 的圖片（其他網域一律擋掉）
  images: {
    remotePatterns: [
      new URL("https://thumb.wikimedia.org/wikipedia/commons/**"),
      new URL("https://upload.wikimedia.org/wikipedia/commons/**"),
    ],
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
