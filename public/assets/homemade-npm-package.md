[Back Home](https://midayex.github.io)

---

# Homemade npm package

## Local - Connection to the npm registry && publish the package

In order to publish the package in a private scope, you need to be connected specifically to the scope registry with these commands :

- `npm login --scope=@<scope-name> --registry=https://registry.npmjs.org/@<scope-name>`
- _enter credentials_
- see if it works : `npm whoami`

Then you can make your first publication with: `npm publish`

In order to update the package in registry, use `npm version [patch | minor | major]` and then use `npm publish`

If you remove it from registry, to republish it right after, you'll have to wait 24h...

Make sure to also have a clean git repository when you update, otherwise you'll throw an error when you'll try to deploy.

> **NB:** even if the package was deleted, you need to update package version to republish it.

## Gitlab - Publish new version through gitlab-ci

In order to add a private package to the project, you need to have the right access to the npm registry which allow you to have a token.

In the gitlab dashboard of your project, go to _Settings -> CI/CD -> Variables_
And add a variable name and the npm token will take place in the value field.

To directly update a package when you merge your changes into the main branch, you'll have to make a small config in `gitlab-ci.yml` file.

Your script must contain these 4 lines to have access to the registry and push the new version.

```
    - npm config set //registry.npmjs.org/:_authToken ${<token_variable_name>}
    - npm install
    - npm version patch --no-git-tag-version
    - npm publish
```

The first line will add your npm token to the `~/.npmrc` file and allow you to access to the private registry.
The third line will upgrade your `package.json` with the new version number according to the current update between patch, minor or major.
The fourth line will try to publish into the registry, and it will throw an error if you didn't set the authToken in the first line.

> **NB: make sure your test branch have access to the gitlab CI/CD variable**

_Next: [use a private npm package in your project (local & gitlab-ci)](https://midayex.github.io/dev/use-private-npm-package.html)_
