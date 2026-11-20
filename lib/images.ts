import fs from "node:fs";
import path from "node:path";

/**
 * Returns `real` if the file exists in /public, otherwise `fallback`.
 * Runs at build time (server components only), so dropping a real photo in
 * /public/images/ and redeploying swaps it in automatically.
 */
export function pickImage(real: string, fallback: string): { src: string; isReal: boolean } {
  try {
    if (fs.existsSync(path.join(process.cwd(), "public", real))) return { src: real, isReal: true };
  } catch {
    /* ignore */
  }
  return { src: fallback, isReal: false };
}

export const STOCK = {
  box: "/images/stock-moving-box.jpg",
  singleItem: "/images/stock-single-item.jpg",
};
