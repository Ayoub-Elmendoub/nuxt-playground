import { generate } from "openapi-typescript-codegen";

export default defineEventHandler(async (event) => {
  await generate({
    input: "data/openapi.yaml",
    output: "./generated",
  });
  return 'OK';
});
