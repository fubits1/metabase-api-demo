# Metabase API Demo

🔗 Official Metabase API documentation: https://www.metabase.com/docs/latest/api-documentation

## Setup

> use **`Node 18`** (for `fetch`-support)

- `cp .env.example .env`
- add Metabase instance URL and API session token to `.env` (without trailing slash `/`!)
- `pnpm install` / `npm install`

## Quickstart

### Tables

`npm run tables` (same as `npm run table`): returns overview of all _schema:public_ DB tables
`npm run table-120`: hardcoded demo - returns table with id 120
`npm run table <tableIdNr>`: returns table with id `nr`

### Cards (Queries / Questions)

`npm run cards` (same as `npm run query`): returns sorted overview of all saved queries (cards)
`npm run query-28`: hardcoded demo - returns query result values as `json` for card id 28
`npm run query <cardIdNr>`: returns query result values as `json` for card id `nr`
