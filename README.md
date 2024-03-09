# node-rewrite-cjs-esm-paths
cli to rename file extensions and rewrite imports after typescript build

# Installation
```bash
npm i --save-dev rewrite-cjs-esm-paths
```

# Usage
Use commandline
```bash

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
