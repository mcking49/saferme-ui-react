# SaferMe UI - React
A UI Library of React components for SaferMe

## Deploying

Before deploying, ensure git history is pure clean.

Then, run:
```sh
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
```

This will run the `preversion` script in the `package.json` file, run the version command, then finally run the `postversion` script.
