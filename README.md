# Metabase API Demo

🔗 Official Metabase API documentation: https://www.metabase.com/docs/latest/api-documentation

## Setup

> use **`Node 18`** (for `fetch`-support)

- `cp .env.example .env`
- add Metabase instance URL and API session token to `.env` (without trailing slash `/`!)
- `pnpm install` / `npm install`

## Quickstart

`npm run table`: returns all _schema:public_ DB tables
`npm run table-120`: hardcoded demo - returns table with id 120
`npm run table <tableIdNr>`: returns table with id `nr`
