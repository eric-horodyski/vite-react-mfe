import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { createEsBuildAdapter } from "@softarc/native-federation-esbuild";
import { reactReplacements } from "@softarc/native-federation-esbuild/src/lib/react-replacements";

export default defineConfig(async ({ command }) => ({
  plugins: [
    await federation({
      options: {
        workspaceRoot: __dirname,
        outputPath: "dist",
        tsConfig: "tsconfig.json",
        federationConfig: "federation.config.cjs",
        verbose: true,
        dev: command === "serve",
      },
      adapter: createEsBuildAdapter({
        plugins: [],
        fileReplacements: reactReplacements.dev,
      }),
    }),
    react(),
  ],
}));
