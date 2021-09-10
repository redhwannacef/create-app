# create-app

A small tool to help easily download template repositories from github.

## Usage:

```shell
deno run --allow-all ./create_app.ts {template-repo-path} {template} {app-name}
```
**Args**

**template-repo-path**: The github path, which is usually "username/repo"

**template**: Template to use. This must be a directory within the above repo

**app-name**: The output directory name

## Example:

```shell
deno run --allow-all ./create_app.ts redhwannacef/create-app react-app-template my-app
```

