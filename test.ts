import { OpenAPIV3 } from "openapi-types";
import * as OpenAPIParser from "@readme/openapi-parser";

async function main() {
  // try {
  const openapiDocUrl = "./data/openapi.yaml"; // Replace with your OpenAPI document URL
  const operationId = "your-operation-id"; // Replace with the operationId you want to retrieve

  const openapiDoc = await OpenAPIParser.bundle("data/openapi.yaml");
  const paths = openapiDoc.paths; // Replace with the desired HTTP method for your operation
  console.log(paths);

  //   const dereferencedOperation: OpenAPI.Operation = JSON.parse(JSON.stringify(operation));
  //   dereference(openapiDoc, dereferencedOperation); // Dereference all schemas in the operation

  //   console.log(`Parsed and dereferenced OpenAPI operation ${operationId}: ${JSON.stringify(dereferencedOperation, null, 2)}`);
  // } catch (error) {
  //   console.error(`Error parsing or dereferencing OpenAPI document: ${error}`);
  // }
}

// function dereference(openapiDoc: OpenAPIV3.Document, obj: any) {
//   const dereferenced = openapiDoc.components?.schemas ?? {};
//   Object.keys(dereferenced).forEach(key => dereferenced[key] = dereferenced[key].$ref ? dereferenced[key].$ref : dereferenced[key]);

//   const queue = [obj];
//   while (queue.length > 0) {
//     const item = queue.shift();
//     if (typeof item === 'object' && item !== null) {
//       if ('$ref' in item) {
//         const refPath = item.$ref.substr(2).split('/');
//         const referenced = refPath.reduce((obj, pathSegment) => obj[pathSegment], openapiDoc) as OpenAPIV3.SchemaObject;
//         const dereferencedRef = dereference(openapiDoc, referenced);
//         Object.assign(item, dereferencedRef);
//         delete item.$ref;
//       } else {
//         for (const prop in item) {
//           queue.push(item[prop]);
//         }
//       }
//     }
//   }
//   return obj;
// }

main();
