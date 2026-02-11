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

### Prompt 6

What's causing this error when running `pnpm build`:
```

### Prompt 7

[Request interrupted by user]

### Prompt 8

What's causing this error when running `pnpm build`:
```
DTS Build start
src/runtime/client.ts(3,24): error TS2307: Cannot find module '@pressy/components' or its corresponding type declarations.
src/runtime/client.ts(4,34): error TS2307: Cannot find module '@pressy/components/content' or its corresponding type declarations.

Error: error occurred in dts build
    at Worker.<anonymous> (/Users/blittle/dev/pressy/node_modules/.pnpm/tsup@8.5.1_typescript@5.9.3_yaml@2.8.2/node_modules/tsup/dist/ind...

### Prompt 9

Should line 37 of @.github/workflows/deploy-pages.yml just do a `pnpm build`, so it's using the same script as me when I test?

### Prompt 10

I don't think that line 42 of @.github/workflows/deploy-pages.yml is the right command to build the example

### Prompt 11

Running that command gives this error:
```
 pnpm --filter flatland-example build                                                                              1 ↵

> flatland-example@0.1.0 build /Users/blittle/dev/pressy/examples/flatland
> pressy build

sh: pressy: command not found
/Users/blittle/dev/pressy/examples/flatland:
 ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL  flatland-example@0.1.0 build: `pressy build`
spawn ENOENT
```

### Prompt 12

[Request interrupted by user for tool use]

### Prompt 13

But this also needs to be done in the gh action script?

