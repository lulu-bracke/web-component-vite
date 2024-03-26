import { fileURLToPath, URL } from "url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default ({ mode }) => {

  // Load environment variables from .env file and merge them with current process environment
  // This was necessary to resolve the following error when using the build: Uncaught ReferenceError: process is not defined
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    // Define global constants for the application
    define: {
      // Expose merged environment variables to the application code
      "process.env": process.env
    },
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      lib: {
        entry: "./src/custom-element-setup.js",
        formats: ["es", "umd"],
        name: "custom-element-setup",
      },
      target: "es2015",
      minify: true,
    },
  })
};
