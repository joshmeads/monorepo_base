# @joshmeads/base


## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Misc Info](#misc-info)
- [License](#license)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
## About <a name = "about"></a>

A base monorepo setup for faster development

The monorepo workspaces consist of three sections:
  - `apps/*` - Contains `frontend` by default
  - `packages/*` - Contains `ui` by default
  - `config/*` - A space for configuration files to be extended from.
    - `config-typescript`
    - `config-eslint`: (Typescript is automatically injected if tsconfig.json is present)
      - `config-eslint/react`
      - `config-eslint/node`
      - `config-eslint/cypress`
      - `config-eslint/ava`
      - `config-eslint/jest`
    - `config-prettier`
    - `config-snowpack`:
      - `config-snowpack/react`
    - `config-browserslist`

### Built with
- [Snowpack](https://www.snowpack.dev/)
- [Typescript](https://www.typescriptlang.org/)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
## Getting Started <a name = "getting_started"></a>

## Prerequisites

- node: `>=16.0.0`
- yarn: `npm i -g yarn`

### Install Dev Environment:

#### Clone and set upstream for later base updates
  ```bash
  # Shallow Clone
  git clone -–depth 1 https://github.com/joshmeads/base-monorepo.git

  # Add original upstream
  git remote add upstream https://github.com/joshmeads/base-monorepo.git

  # Set your local Main branch to be in sync
  git pull upstream main
  # or
  git rebase upstream/main

  # Update the main branch on origin
  git push origin main # you may need -f if you rebased
  ```

#### Update against the upstream base
```bash
# Fetch new commits
git fetch upstream

# Checkout main
git checkout main

# Rebase against upstream
git rebase upstream/main

# Set your local Main branch to be in sync
git push origin main # you may need -f if you rebased
```

#### Install dependencies
1. `yarn` to link all packages / dependencies
2. (if using VSCode) Install Yarn Tools: `yarn dlx @yarnpkg/pnpify --sdk vscode`

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
## Usage <a name = "usage"></a>

Application:
- Start: `yarn workspace <name> start`
- Build: `yarn workspace <name> build`

Components:
- Start Storybook: `yarn workspace <name> start`

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
## Misc info <a name = "misc-info"></a>
- Yarn PNP (via `yarn dlx @yarnpkg/pnpify --sdk vscode`) requires the packages to be installed in the root package.json in order to fix the tooling
- `.vscode/settings.json` contains `files.exclude` to hide items in the vscode sidebar. Remove/comment these if you need access to those files.



![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
## License <a name = "license"></a>
[MIT](https://choosealicense.com/licenses/mit/)
