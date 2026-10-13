// Post-build step for the static export: inline the CSS so it no longer blocks first paint.
// The original <link> is kept (React's hydration looks for it) but downgraded to a
// non-blocking print stylesheet that switches to `all` once loaded.
import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('out');
const linkRe = /<link rel="stylesheet" href="(\/_next\/static\/css\/[\w-]+\.css)"([^>]*)\/>/g;

for (const file of fs.readdirSync(outDir).filter((f) => f.endsWith('.html'))) {
  const htmlPath = path.join(outDir, file);
  let html = fs.readFileSync(htmlPath, 'utf8');
  let inlined = 0;

  html = html.replace(linkRe, (_, href, attrs) => {
    const css = fs.readFileSync(path.join(outDir, href), 'utf8');
    inlined += 1;
    return `<style>${css}</style><link rel="stylesheet" href="${href}"${attrs} media="print" onload="this.media='all'"/>`;
  });

  if (inlined) {
    fs.writeFileSync(htmlPath, html);
    console.log(`inline-css: ${file} (${inlined} stylesheet${inlined > 1 ? 's' : ''})`);
  }
}
