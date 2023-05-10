import { generate } from "openapi-typescript-codegen";

export default defineEventHandler(async (event) => {
  const { params, api } = event.context;
  // const code = await generate({
  //   input: "data/swagger.yaml",
  //   output: "./generated",
  // });
  return {
    api,
  };
});
