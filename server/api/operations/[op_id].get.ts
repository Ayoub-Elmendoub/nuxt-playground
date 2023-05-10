export default defineEventHandler(async (event) => {
  const { params, api } = event.context;
  // const code = await generate({
  //   input: "data/swagger.yaml",
  //   output: "./generated",
  // });
  const opId = params && params.op_id;

  let opData

  for (const path in api.paths)
    for (const method in api.paths[path]) {
      const methods = ["get", "post", "put", "delete", "patch"];
      if (!methods.includes(method)) continue;

      for (const opProp in api.paths[path][method]){
        if(opProp != 'operationId') continue
        else if(api.paths[path][method][opProp] == opId) opData = api.paths[path][method]
      }
    }

  // api.paths;
  return {
    opData,
  };
});
