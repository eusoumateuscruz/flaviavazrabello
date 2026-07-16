import { copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import type { Plugin } from "vite";

export function sites(): Plugin {
  let root = process.cwd();

  return {
    name: "chatgpt-sites-static-worker",
    apply: "build",
    configResolved(config) {
      root = config.root;
    },
    async closeBundle() {
      const outputDirectory = resolve(root, "dist");

      await mkdir(resolve(outputDirectory, "server"), { recursive: true });
      await mkdir(resolve(outputDirectory, ".openai"), { recursive: true });
      await copyFile(resolve(root, "worker", "index.js"), resolve(outputDirectory, "server", "index.js"));
      await copyFile(
        resolve(root, ".openai", "hosting.json"),
        resolve(outputDirectory, ".openai", "hosting.json"),
      );
    },
  };
}
