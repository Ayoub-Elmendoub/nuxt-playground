import { generate } from "openapi-typescript-codegen";
import { readFileSync } from "fs";

const zip = readFileSync('./target.zip')

export default defineEventHandler(async (event) => {

  return zip;
});
