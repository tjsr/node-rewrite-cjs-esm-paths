#!/usr/bin/env node
import path from 'path'
import { recursiveFileOperation, renameFileExtension, replaceAllImportExtensions } from "../index.js"

const dirpath = path.resolve(process.cwd(), process.argv[2])

recursiveFileOperation(dirpath, (filepath) => {
  if (/\.js\.map$/.test(filepath)) {
    renameFileExtension(filepath, "js.map", "mjs.map")
  } else if (/\.js$/.test(filepath)) {
    const newFilepath = renameFileExtension(filepath, "js", "mjs")

    replaceAllImportExtensions(newFilepath, "js", "mjs")
  }
})
