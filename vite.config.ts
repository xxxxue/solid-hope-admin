import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import Pages from "vite-plugin-pages";
export default defineConfig({
  plugins: [
    solidPlugin(),
    Pages({
      extensions: ["tsx"],
    }),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
