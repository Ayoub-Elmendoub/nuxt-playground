import { writeFileSync } from "fs";
// import openTS from "openapi-typescript";
import { genFromData } from 'openapi-generator';

export default defineEventHandler(async (event) => {
  const { api } = event.context;
  const localPath = new URL("../../data/openapi.yaml", import.meta.url); // may be YAML or JSON format
  // const localPath = new URL("./data/openapi.yaml", import.meta.url); // may be YAML or JSON format
  // const output = await openTS(localPath);
  // writeFileSync("./here.ts", output);

  const output = await genFromData({sdkDir: './omma'}, api);
  return {
    output,
  };
});
