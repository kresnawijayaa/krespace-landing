import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceDir = path.join(root, "private", "work", "png");
const outputDir = path.join(root, "public", "work");

const light = (left, top, width, height) => ({ left, top, width, height, blur: 3.25 });
const lightSmall = (left, top, width, height) => ({ left, top, width, height, blur: 2.8 });
const secret = (left, top, width, height) => ({ left, top, width, height, blur: 18 });
const rows = (ys, rectangles) => ys.flatMap((top) => rectangles.map(([left, width, height = 22]) => light(left, top, width, height)));

const redactions = {
  "ceksekitarmu1.png": [lightSmall(92, 8, 112, 94)],
  "ceksekitarmu2.png": [24, 62, 100, 138, 176, 214, 252].map((top) => lightSmall(208, top, 246, 24)),
  "ceksekitarmu3.png": [
    lightSmall(394, 0, 105, 24),
    ...[24, 62, 100, 138, 176, 214, 252].map((top) => lightSmall(208, top, 246, 24)),
  ],
  "invoice-doku1.png": [
    light(1390, 26, 165, 30),
    light(265, 282, 175, 42),
    ...rows([672, 747, 822, 897, 972, 1047], [
      [255, 245, 28],
      [625, 250, 28],
      [1560, 115, 28],
    ]),
  ],
  "invoice-doku2.png": [
    light(438, 57, 310, 28),
    secret(420, 746, 1080, 36),
    secret(420, 858, 1080, 36),
    light(420, 1072, 310, 55),
  ],
  "invoice-doku3.png": [
    light(1390, 25, 165, 30),
    light(313, 173, 310, 38),
    light(340, 330, 360, 78),
    light(340, 495, 790, 92),
    secret(1230, 650, 340, 82),
    secret(1330, 1015, 290, 120),
  ],
  "logistics-system1.png": [
    ...rows([852, 913, 974, 1035, 1096, 1157], [
      [230, 310, 24],
      [1125, 765, 38],
    ]),
  ],
  "logistics-system2.png": [
    light(337, 78, 600, 25),
    ...rows([143], [
      [340, 295, 28],
      [655, 295, 28],
      [970, 295, 28],
      [1280, 295, 28],
    ]),
    ...rows([345, 410, 475], [
      [345, 295, 28],
      [655, 295, 28],
      [965, 295, 28],
      [1275, 295, 28],
    ]),
    ...rows([515, 540, 565, 590, 615, 640], [[345, 1120, 20]]),
    ...rows([790, 855, 920], [
      [345, 400, 28],
      [760, 400, 28],
      [1175, 400, 28],
    ]),
    ...rows(Array.from({ length: 15 }, (_, index) => 190 + index * 64), [[1600, 275, 24]]),
    light(300, 1030, 1280, 95),
  ],
  "logistics-system3.png": rows(
    Array.from({ length: 29 }, (_, index) => 190 + index * 32),
    [
      [812, 245, 20],
      [1040, 135, 20],
      [1180, 280, 20],
      [1470, 405, 20],
    ],
  ),
};

const files = (await fs.readdir(sourceDir)).filter((name) => name.toLowerCase().endsWith(".png")).sort();

for (const file of files) {
  const inputPath = path.join(sourceDir, file);
  const outputPath = path.join(outputDir, file.replace(/\.png$/i, ".webp"));
  const overlays = [];

  for (const region of redactions[file] ?? []) {
    const { left, top, width, height, blur } = region;
    const patch = await sharp(inputPath).extract({ left, top, width, height }).blur(blur).toBuffer();
    overlays.push({ input: patch, left, top });
  }

  const isChurchWebsite = file.startsWith("gereja-gpib");
  const webpOptions = isChurchWebsite
    ? { quality: 94, effort: 6, smartSubsample: true }
    : { quality: 96, nearLossless: true, effort: 6, smartSubsample: true };

  await sharp(inputPath).composite(overlays).webp(webpOptions).toFile(outputPath);
  const metadata = await sharp(outputPath).metadata();
  const stat = await fs.stat(outputPath);
  console.log(`${path.basename(outputPath)}\t${metadata.width}x${metadata.height}\t${(stat.size / 1024).toFixed(1)} KB`);
}
