[Back Home](https://midayex.github.io)

---

# Use private npm package

## Process

In order to add a private package to the project, you need to have the right access to the npm registry which allow you to have a token.

### Local process

When you run it in local, you have to be logged via npm cli.

- `npm login --scope=@<your_private_tag> --registry=https://registry.npmjs.org/@<your_private_tag>`
- Enter your npm account credentials
- `npm whoami [--registry <registry>]` will tell you if you're logged (with the registry you used just before).

Then you can `npm install @<scope>/<package_name>`

### Gitlab process

In order to make it work with Gitlab-ci, you need to add a new variable in your repository.

> Go to Settings -> CI/CD -> Variables
> And add a variable name and the npm token will take place in the value field.

Next you'll work with `gitlab-ci.yml` file in your project.

By default, the `.npmrc` file in the CI home directory will have the npm registry set to `https://registry.npmjs.org/`. To have access to private sub-registries, just set your access with the line :

`npm config set //registry.npmjs.org/:_authToken ${<variable_name_in_gitlab_ci>}`

You can install the private npm package in your project directly from the pipeline.
