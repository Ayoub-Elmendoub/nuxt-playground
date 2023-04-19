import OpenAPIParser from "@readme/openapi-parser";
export default defineEventHandler(async (event) => {
  const api = await OpenAPIParser.bundle("data/swagger.yaml");
  return {
    api,
  };
});
