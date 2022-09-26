import { params } from "./00-params.js";

const args = process.argv.slice(2); // drop meta args
console.log("params:", args);

const url = args[0]
  ? `${params.metabaseUrl}/api/card/${args[0]}/query/json`
  : `${params.metabaseUrl}/api/card/`;

fetch(url, args[0] ? params.optionsPOST : params.optionsGET)
  .then((response) => response.json())
  .then((result) =>
    args[0]
      ? console.log(result)
      : result
          .sort((a, b) => b.id - a.id)
          .map((card) =>
            console.log(
              card.id,
              card.display,
              "|",
              card.name,
              "|",
              card.creator["first_name"],
              "|",
              card["created_at"]
            )
          )
  )
  .catch((err) => console.error(err));
