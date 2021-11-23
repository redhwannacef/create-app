# create-app

A small tool to help easily download template repositories from github.

## Usage:

```shell
deno run --allow-all ./create_app.ts --repo "redhwannacef/create-app" {template} {app-name}
```

**Args**

**template**: Template to use. _This must be within a `templates` dir in the
root of the repository._

**app-name (optional)**: The output directory name. _Defaults to template name._

**Options**

**-repo**: The github path, which is usually "username/repo". _Defaults to "redhwannacef/create-app"._

## Example:

```shell
# default repo
deno run --allow-all https://raw.githubusercontent.com/redhwannacef/create-app/main/create_app.ts react-remix my-app

# custom repo
deno run --allow-all https://raw.githubusercontent.com/redhwannacef/create-app/main/create_app.ts -repo "redhwannacef/create-app" react-remix my-app

# install
deno install --allow-all https://raw.githubusercontent.com/redhwannacef/create-app/main/create_app.ts
create_app react-remix main
```
