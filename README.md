<h1 align="center">TMDB NextJS</h1>

## Getting Started

Create `.env.local` in the root and add below variables

```
TMDB_URL=https://api.themoviedb.org/3
TMDB_KEY=
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## TMDB

Get Upcoming Movies Endpoint

```
https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>></api_key>&language=en-US&page=1
```

## Recommended VSCode Plugins

- Eslint
- Prettier
- Editorconfig
