// news-image-20261125 — "Sum up 25 November's world news in one image".
//
// The entry is a hand-drawn newspaper front page (entry.png) that sums up
// Wednesday 25 November 2026: US tariffs on 14 nations, the Houthi strike
// on Riyadh's tallest tower, Shenzhou-24 docking at Tiangong, the Cairo
// tanker fire, and the Netanyahu bribery-case recommendation, plus a ticker
// of the day's other big stories. The image ships inside this repo, so no
// input directory is needed; this program copies it to the output directory.
// Node 22, standard library only, deterministic.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
// Output dir from the runner, falling back to /output when unset.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "entry.png"), join(outDir, "entry.png"));
