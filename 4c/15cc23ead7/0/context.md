# Session Context

## User Prompts

### Prompt 1

I'm trying to setup automatic deploys to github pages of the flatland example. It has two requirements:

### Prompt 2

[Request interrupted by user]

### Prompt 3

I'm trying to setup automatic deploys to github pages of the flatland example. It has two requirements:
1. Merging to main, deploys to github pages
2. An open PR, should also deploy to github pages, but in a directory scoped to the PR
3. When the PR is closed, the scoped directory on github pages should get removed

### Prompt 4

Now I see it's running the GH action, but I see this error: `Error: Unable to resolve action rossjrw/pr-preview-deploy-action, repository not found`

### Prompt 5

Now I see this error in the action workflow:
```
  Error: Multiple versions of pnpm specified:
    - version 9 in the GitHub Action config with the key "version"
    - version pnpm@8.12.0 in the package.json with the key "packageManager"
  Remove one of these versions to avoid version mismatch errors like ERR_PNPM_BAD_PM_VERSION
      at readTarget (/home/runner/work/_actions/pnpm/action-setup/v4/dist/index.js:1:4977)
      at runSelfInstaller (/home/runner/work/_actions/pnpm/action-setup/v4/dis...

