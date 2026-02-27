import fs from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");

const walkHtmlFiles = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return walkHtmlFiles(fullPath);
      if (entry.isFile() && fullPath.endsWith(".html")) return [fullPath];
      return [];
    }),
  );
  return files.flat();
};

const splitUrl = (value) => {
  const match = value.match(/^([^?#]*)([?#].*)?$/);
  return {
    pathname: match?.[1] ?? value,
    suffix: match?.[2] ?? "",
  };
};

const toRelativeFromRoot = (rootPathname, htmlFilePath) => {
  const relativeDir = path.relative(distDir, path.dirname(htmlFilePath));
  const depth = relativeDir ? relativeDir.split(path.sep).length : 0;
  const prefix = depth > 0 ? "../".repeat(depth) : "./";

  if (!rootPathname || rootPathname === "/") return `${prefix}index.html`;

  const stripped = rootPathname.replace(/^\/+/, "");
  const hasExtension = /\.[a-z0-9]+$/i.test(path.posix.basename(stripped));
  if (hasExtension) return `${prefix}${stripped}`;

  const normalized = stripped.endsWith("/") ? stripped : `${stripped}/`;
  return `${prefix}${normalized}index.html`;
};

const replaceRootLinks = (html, htmlFilePath) =>
  html.replace(/(href|src)=(")(\/[^"]*)(")/g, (full, attr, q1, value, q2) => {
    if (value.startsWith("//")) return full;
    const { pathname, suffix } = splitUrl(value);
    const next = toRelativeFromRoot(pathname, htmlFilePath) + suffix;
    return `${attr}=${q1}${next}${q2}`;
  });

const run = async () => {
  const htmlFiles = await walkHtmlFiles(distDir);
  await Promise.all(
    htmlFiles.map(async (filePath) => {
      const html = await fs.readFile(filePath, "utf8");
      const updated = replaceRootLinks(html, filePath);
      if (updated !== html) {
        await fs.writeFile(filePath, updated, "utf8");
      }
    }),
  );
  // eslint-disable-next-line no-console
  console.log(`Rewrote root links in ${htmlFiles.length} HTML files for file:// usage.`);
};

run().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exitCode = 1;
});

