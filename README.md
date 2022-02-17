# Solid Recipe Store

A Node / Express app that stores recipes, reviews and a shopping list using 
[Solid pods](https://solidproject.org/about) as the data storage.

Mostly a place for me to experiment with Solid pods and OIDC auth using 
server side logic and rendering.

## Local development

Requires Node 16+.

```bash
npm install

npm run dev
```

By default the app runs on port `3001`. You can override this by setting the 
`PORT` environment variable.

Inrupt's client libraries for interacting with a Solid pod use ES6 so this app 
uses Babel to transpile these into JS that Node can work with. This only works 
with the server side JS.
