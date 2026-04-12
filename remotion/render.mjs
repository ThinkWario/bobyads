// Run: node remotion/render.mjs
import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log("📦 Bundling...");
const bundleLocation = await bundle({
  entryPoint: path.resolve(__dirname, "./index.tsx"),
  webpackOverride: (config) => config,
});

const composition = await selectComposition({
  serveUrl: bundleLocation,
  id: "HeroVideo",
  inputProps: {},
});

console.log("🎬 Rendering HeroVideo (240 frames @ 30fps = 8s)...");
await renderMedia({
  composition,
  serveUrl: bundleLocation,
  codec: "h264",
  outputLocation: path.resolve(__dirname, "../public/hero.mp4"),
  inputProps: {},
  onProgress: ({ progress }) => {
    process.stdout.write(`\r  Progress: ${(progress * 100).toFixed(0)}%`);
  },
});

console.log("\n✅ Rendered to public/hero.mp4");
