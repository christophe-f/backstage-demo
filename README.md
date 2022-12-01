# [Backstage](https://backstage.io)

This repository contains the latest (v1.8.3) Backstage version.
This project is to be used for demos only and comes with preconfigured plugins and workflows.

Prerequisite:
* GitHub account

Before starting the project, you need to generate a GitHub Personal Token. This is the only thing you need. 

Login to GitHub and go to the `Settings` page available from your avatar located to the top right corner.
On the left side navigation, scroll down to `Developer settings` page. Click on `Personal access token` / `Tokens (classic)`

When you create the token, make sure to select `repo`, `workflow` and `admin:org`. Once the token is generated, copy it.

## Start the app

You can set the `GITHUB_TOKEN` environment variable with the token generated previously.

Then run:
```sh
yarn install
yarn dev
```

