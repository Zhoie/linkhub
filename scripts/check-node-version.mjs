import { pathToFileURL } from 'node:url';

export function isSupportedNode(version) {
  const match = /^v?(\d+)\.(\d+)\.(\d+)$/.exec(version);
  if (!match) return false;
  const [, major, minor, patch] = match.map(Number);
  return major === 22 && (minor > 23 || (minor === 23 && patch >= 4));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  if (!isSupportedNode(process.version)) {
    console.error(`Node.js 22.23.4 or a newer 22.x release is required; found ${process.version}.`);
    process.exitCode = 1;
  } else {
    console.log(`Verified patched Node.js ${process.version}`);
  }
}
