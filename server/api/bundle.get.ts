import { generate } from "openapi-typescript-codegen";
import { createWriteStream } from "fs";

import archiver from "archiver";

var output = createWriteStream("target.zip");
var archive = archiver("zip");

output.on("close", function () {
  console.log(archive.pointer() + " total bytes");
  console.log(
    "archiver has been finalized and the output file descriptor has closed."
  );
});

archive.on("error", function (err) {
  throw err;
});

archive.pipe(output);

// append files from a sub-directory, putting its contents at the root of archive
archive.directory("./generated", "sdk");

archive.finalize();

export default defineEventHandler(async (event) => {
  await generate({
    input: "data/openapi.yaml",
    output: "./generated",
  });
  return "OK";
});
