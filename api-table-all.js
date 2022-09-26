import { params } from "./00-params.js";

const args = process.argv.slice(2); // drop meta args
console.log("params:", args);

const url = args[0]
  ? `${params.metabaseUrl}/api/table/${args[0]}`
  : `${params.metabaseUrl}/api/table`;

fetch(url, params.options)
  .then((response) => response.json())
  .then((result) =>
    [...[result]] // ensure that input is always iterable / an Array
      .flat() // flatten to unnest result from Array-conversion
      .filter((entry) => entry.schema === "public")
      .map(function ({ schema, name, id }) {
        console.log({ schema, name, id });
      })
  )
  .catch((err) => console.error(err));
