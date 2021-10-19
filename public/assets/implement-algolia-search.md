[Back Home](https://midayex.github.io)

---

# Implement algoliasearch in JS framework based project

Algolia is a search engine that works with indexation concept.

[Documentation](https://www.algolia.com/doc/api-reference/api-methods/search/)

## Add to project

At the root of your project, enter the command

```zsh
$ yarn add algoliasearch
# or
$ npm install algoliasearch
```

## Implement algoliasearch

At the root of the project, create a env.js file and dont forget to add it to `.gitignore`. It will contains your `ALGOLIA_APP_ID` and your `ALGOLIA_SEARCH_API_KEY`.

Also at the root of the project, create a config folder and inside of it, create a algolia-config.js file.

First of all, import your env.js file and the algoliasearch package.

Then, define a `client` variable that create a algoliasearch instance with `env.ALGOLIA_APP_ID` and `env.ALGOLIA_SEARCH_API_KEY` as parameters.

Next create an index variable that use `.initIndex()` function of the algoliasearch instance. It takes an indice (from your algolia app) as string parameter.

After you did this, you can implement all the requests you need from your Algolia app !

Here is the config file without any function :

```Javascript
import * as env from "../../env";
import algoliasearch from "algoliasearch/lite";

const client = algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
const index = client.initIndex("PRODUCT");
```

## Example of function using algoliasearch package

```Javascript
export const searchProducts = async (query) => {
  const result = await index.search(query, {
    hitsPerPage: 15,
    attributesToRetrieve: ["name", "price"],
  });
  return result.hits;
};
```

For more details about how to use algolia API, RTFM [here](https://www.algolia.com/doc/api-client/getting-started/what-is-the-api-client/javascript/?client=javascript) ;)
