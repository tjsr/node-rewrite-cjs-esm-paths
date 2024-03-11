# node-rewrite-cjs-esm-paths
cli to rename file extensions and rewrite imports after typescript build

# Installation
```bash
npm i --save-dev rewrite-cjs-esm-paths
```

# Usage
Use commandline
```bash
# recursively renames all *.js files in 'dist/cjs' to *.cjs in 'dist/cjs', and rewrites `require` statements to include .cjs
rewrite-cjs dist/cjs
# recursively renames all *.js files in 'dist/mjs' to *.mjs, and rewrites `import` statements to include .mjs
rewrite-cjs dist/mjs
```

Use in package.json
```json
{
  //...
  "scripts": {
    "build-cjs": "tsc -p tsconfig-cjs.json rewrite-cjs dist/cjs",
    "build-esm": "tsc -p tsconfig-esm.json rewrite-esm dist/cjs",
    //...
  }
}
```

# License
MIT
