import { Untar } from "https://deno.land/std@0.106.0/archive/tar.ts";
import { ensureFile } from "https://deno.land/std@0.106.0/fs/ensure_file.ts";
import { ensureDir } from "https://deno.land/std@0.106.0/fs/ensure_dir.ts";
import { Buffer } from "https://deno.land/std@0.106.0/io/buffer.ts";
import { copy } from "https://deno.land/std@0.106.0/io/util.ts";
import { gunzip } from "https://deno.land/x/compress@v0.3.8/mod.ts";
import { parse } from "https://deno.land/std@0.115.1/flags/mod.ts";

const { _: [template, name = template], repo = "redhwannacef/create-app" } =
  parse(Deno.args);
const fullTemplate = `templates/${template}`;

const response = await fetch(`https://api.github.com/repos/${repo}/tarball`);
const arrayBuffer = await response.arrayBuffer();
const uint8Array = new Uint8Array(arrayBuffer);
const decompressed = gunzip(uint8Array);

const reader = new Buffer(decompressed);
const untar = new Untar(reader);

for await (const entry of untar) {
  if (entry.fileName.includes(fullTemplate)) {
    const fileName = updateFileName(entry.fileName, fullTemplate, name as string);

    if (entry.type === "directory") {
      await ensureDir(fileName);
    } else {
      await ensureFile(fileName);
      const file = await Deno.open(fileName, { write: true });
      await copy(entry, file);
    }
  }
}

function updateFileName(fileName: string, template: string, name: string) {
  const templateIndex = fileName.indexOf(template);
  return fileName.slice(templateIndex).replace(template, name);
}
