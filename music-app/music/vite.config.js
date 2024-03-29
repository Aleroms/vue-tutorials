import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
//visualizer helps debug what is taking up memory
//import { visualizer } from "rollup-plugin-visualizer";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    global: true,
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Music App",
        theme_color: "#ff5e3a",
        icons: [
          {
            src: "assets/img/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        description:
          "Learned how to use Vue's tools and connecting Google's firebase",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,}"],
      },
    }),
    //visualizer({ open: true }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
