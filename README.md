# Table - Fullstack Demo

This is a truncated port of my internal repository showcasing TypeScript for React frontend and Express backend. From inception, this repository was and is to serve as reference and Proof of Concept of a typed fullstack app, with an emphasis on component driven design (CDD). À la title, the primary feature is a table with paginations.

The server uses a simple implementation of Controller <-> Service <-> Model, leveraging classes whenever possible. The client model is a SPA, with components living under its own folder. Filenames have meta properties such as `tables.interfaces.ts` or `Tables.stories.tsx`. I chose not to use "index" for frontend components, for easier search and the need to couple components with its corresponding stories.

## Tech Stack

- `react-table`: interactive table, pagination
- `tailwindcss`: styling
- `ladle`: a lighter, faster alternative to Storybook
- `vite`: webpack alternative, leverages ESM and esbuild
- `swc`: TypeScript/JavaScript compiler written in Rust
- `jest` and `supertest`: backend test
- `playwright`: e2e for frontend (TODO)

## Installation

```bash
# install in client
cd ./client && npm i

# install in server
cd ./server && npm i

# run from root
cd path/to/root
npm i && npm start

# run ladle, ui stories
cd client && npm run ladle
```

Check localhost:3000 and localhost:4123.

## Notes

- The `server` is almost production ready
- `client` is still work in progress
