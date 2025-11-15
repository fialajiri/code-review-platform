import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: [
      "src/**/*.{test,spec}.{ts,tsx,js,jsx}",
      "services/api/src/**/*.{test,spec}.{ts,tsx,js,jsx}",
    ],
    environment: "node",
    globals: false,
  },
});
