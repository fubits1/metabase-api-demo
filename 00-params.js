import dotenv from "dotenv";
dotenv.config();

export const params = {
  metabaseUrl: process.env.metabaseUrl,
  optionsGET: {
    method: "GET",
    headers: { "X-Metabase-Session": process.env.sessionToken },
  },
  optionsPOST: {
    method: "POST",
    headers: { "X-Metabase-Session": process.env.sessionToken },
  },
};
