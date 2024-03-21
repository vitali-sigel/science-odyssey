import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import alias from "@rollup/plugin-alias";
import path from "path";

// vite.config.js
export default defineConfig({
    plugins: [glsl()],
    resolve: {
        alias: {
            three: path.resolve(__dirname, "./node_modules/three"),
        },
    },
    server: {
        host: "localhost",
        cors: "*",
        hmr: {
            host: "localhost",
            protocol: "ws",
        },
    },
    build: {
        minify: true,
        manifest: true,
        rollupOptions: {
            input: "./src/main.js",
            output: {
                format: "umd",
                entryFileNames: "main.[hash].js",
                esModule: false,
                compact: true,
                globals: {
                    jquery: "$",
                },
            },
            external: ["jquery"],
        },
    },
});
