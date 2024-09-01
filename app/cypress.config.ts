import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    baseUrl: "http://localhost:4001",
    supportFile: false,
    fileServerFolder: './src/e2e'
  },
});