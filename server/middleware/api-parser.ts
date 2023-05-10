import OpenAPIParser from "@readme/openapi-parser";
import { OpenAPI } from "openapi-types";
declare module "h3" {
  interface H3EventContext {
    api: OpenAPI.Document<{}>;
  }
}

let api: OpenAPI.Document<{}>;
export default eventHandler(async (event) => {
  if (!api) {
    api = await OpenAPIParser.bundle("data/openapi.yaml");
  }
  event.context.api = api;
});
