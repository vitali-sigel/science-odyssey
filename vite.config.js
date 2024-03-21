import { defineConfig } from "vite";
import path from "path";
import glsl from "vite-plugin-glsl";

// vite.config.js
export default defineConfig({
    plugins: [glsl()],
    server: {
        host: "localhost",
        cors: "*",
        hmr: {
            host: "localhost",
            protocol: "ws",
        },
    },
    // build: {
    //   minify: true,
    //   manifest: true,
    //   rollupOptions: {
    //     input: './src/main.js',
    //     output: {
    //       format: 'umd',
    //       entryFileNames: 'main.js',
    //       esModule: false,
    //       compact: true,
    //       globals: {
    //         jquery: '$',
    //       },
    //     },
    //     external: ['jquery'],
    //   },
    // },
    build: {
        minify: true,
        manifest: true,
        rollupOptions: {
            input: "./src/main.js",
            output: {
                // Remove 'format: "umd"' or set it to 'es' if you need ESM output
                entryFileNames: "main.js",
                compact: true,
                globals: {
                    jquery: "$",
                },
            },
            external: ["jquery"],
        },
    },
    // resolve: {
    //   alias: {
    //     'three': path.resolve(__dirname, './node_modules/three'),
    //     // Add other aliases if necessary
    //   },
    // },
});
