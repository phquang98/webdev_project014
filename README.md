# MEN front end

Last updated: 05/03/2020

Use this repo to fastly create React using Typescript and Material UI.\

Typescript: OK
Use DefType: OK
Use custom types in `types` folder: OK
Use Material UI: OK
Personal ESLint and Prettier: OK

TODO:

- delete the yarn lock file, personal taste like npm more than yarn
- having problems that eslint-node and eslint-import dont recognise path to custom definition type `personalType.ts` (should be `personalType.d.ts` but dont recognise -> cant import and use)

## Personal notes

- all cmds to run this:
  - for DefTypes: `npm i @types/react @types/react-dom`
  - for Material UI: `npm i @material-ui/core @material-ui/icons @material-ui/styles`
  - for personal eslint config to run OK: `npm i -D eslint-config-prettier eslint-plugin-node eslint-plugin-prettier prettier`, eslint will not run if missing npm packages
- use `.tsx`, cant write JSX in `.ts`
- to add Roboto font:
  - add this link to index.html in public: `<link href="https://fonts.googleapis.com/css?family=Roboto:300i,400,500,700&display=swap" rel="stylesheet" />`
  - add this to body ele `style="font-family: 'Roboto', sans-serif;"`
- set `core.autocrlf true` as when commit, files will have LF but when in your machine will be CRLF
- settings for import resolver must use all file format, including .js, .ts and .tsx

## Links

- <https://www.sitepoint.com/react-with-typescript-best-practices/>
- <https://fettblog.eu/typescript-react/>
