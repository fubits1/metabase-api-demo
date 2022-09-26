import dotenv from "dotenv";
dotenv.config();

export const params = {
  metabaseUrl: process.env.metabaseUrl,
  options: {
    method: "GET",
    headers: { "X-Metabase-Session": process.env.sessionToken },
  },
};
