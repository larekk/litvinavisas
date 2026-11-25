// Import selected free Unsplash photos once into the repository.
// Later builds use the local files; browsers never request images.unsplash.com.
import { mkdir, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const assets = [
  { file: "visas-sheep.jpg", photo: "photo-1599475586494-c61241851d34", width: 1365, quality: 88 },
  { file: "consultation-workspace.jpg", photo: "photo-1524850011238-e3d235c7d4c9", width: 1600, quality: 82 },
  { file: "contacts-workspace.jpg", photo: "photo-1773158742082-6f26389f7492", width: 1600, quality: 82 },
  { file: "hero-etretat.jpg", photo: "photo-1621847468516-1ed5d0df56fe", width: 2600, quality: 87 },
  { file: "hero-etretat-muted.jpg", photo: "photo-1638470057389-3b2447707933", width: 2600, height: 1600, quality: 86 },
  { file: "destinations/europe.jpg", photo: "photo-1431274172761-fca41d930114", width: 1400, quality: 80 },
  { file: "destinations/usa.jpg", photo: "photo-1664995188057-8f13f472c1e7", width: 1400, quality: 80 },
  { file: "destinations/uk.jpg", photo: "photo-1771433630148-f1729b6053c7", width: 1400, quality: 80 },
  { file: "destinations/canada.jpg", photo: "photo-1632857997897-9418428d7368", width: 1400, quality: 80 },
  { file: "destinations/australia.jpg", photo: "photo-1711526131329-ce976f7057a4", width: 1400, quality: 80 },
  { file: "destinations/new-zealand.jpg", photo: "photo-1591640040362-f55d95a6b2bc", width: 1400, quality: 80 },
  { file: "destinations/japan.jpg", photo: "photo-1758940887296-f564f07e295d", width: 1400, quality: 80 },
  { file: "destinations/india.jpg", photo: "photo-1565505204576-1cc4b41662eb", width: 1400, quality: 80 },
];

async function fetchPhoto(asset) {
  const destination = join("public", "images", asset.file);
  try {
    const existing = await stat(destination);
    if (existing.size > 25000) {
      console.log("Already present:", destination, existing.size, "bytes");
      return;
    }
  } catch {}
  await mkdir(join("public", "images", asset.file.split("/").slice(0, -1).join("/")), { recursive: true });
  const url = "https://images.unsplash.com/" + asset.photo
    + "?fm=jpg&fit=crop&auto=compress&w=" + asset.width + (asset.height ? "&h=" + asset.height : "") + "&q=" + asset.quality;

  for (let attempt=1;attempt<=3;attempt++) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(45000) });
      if (!response.ok) throw new Error("HTTP " + response.status);
      if (!response.headers.get("content-type")?.startsWith("image/"))
        throw new Error("Response is not an image");
      const bytes = Buffer.from(await response.arrayBuffer());
      if (bytes.byteLength < 25000 || bytes[0] !== 0xff || bytes[1] !== 0xd8)
        throw new Error("Invalid JPEG returned ("+bytes.byteLength+" bytes)");
      await writeFile(destination, bytes);
      console.log("Saved", destination, bytes.byteLength, "bytes");
      return;
    } catch (error) {
      console.error(asset.file, "attempt", attempt, error.message);
      if (attempt === 3) throw error;
      await new Promise(resolve => setTimeout(resolve, 1200 * attempt));
    }
  }
}

for (const asset of assets) await fetchPhoto(asset);
