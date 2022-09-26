import { params } from "./00-params.js";

const args = process.argv.slice(2); // drop meta args
console.log("params:", args);

const url = args[0]
  ? `${params.metabaseUrl}/api/card/${args[0]}?f=table`
  : // : `${params.metabaseUrl}/api/card/?f=recent`;
    `${params.metabaseUrl}/api/card/`;

fetch(url, params.optionsGET)
  .then((response) => response.json())
  .then((result) =>
    [...[result]] // ensure that input is always iterable / an Array
      .flat() // flatten to unnest result from Array-conversion
      // .slice(0, 1)
      // .map((entry) => console.log(entry.id, entry.display))
      .map((entry) => console.log(entry.id, entry.name, entry.display, entry))
  )
  .catch((err) => console.error(err));
