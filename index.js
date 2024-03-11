import fs from 'fs'
import path from 'path'

export function recursiveFileOperation(dir, operation) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filepath = path.join(dir, file)
    const stats = fs.statSync(filepath)

    if (stats.isDirectory()) {
      recursiveFileOperation(filepath, operation)
      return
    }
    if (!stats.isFile()) return

    operation(filepath)
  })
}

export function renameFileExtension(filepath, oldExtension, newExtension) {
  const newFilepath = filepath.replace(new RegExp(`${oldExtension}$`), newExtension)

  if (filepath == newFilepath) return

  fs.renameSync(filepath, newFilepath)

  return newFilepath
}

export function replaceFileContent(filepath, search, replace) {
  const content = fs.readFileSync(filepath, 'utf8')
  const hasReplacements = search.test(content)

  if (!hasReplacements) return

  const newContent = content.replace(search, replace)

  fs.writeFileSync(filepath, newContent, 'utf8')
}

export function replaceAllRequireExtensions(filepath, oldExtension, newExtension) {
  const search = new RegExp(`(require\\(['"]\\..*)(\\.${oldExtension})?(['"]\\))`, 'g')
  const replace = `$1.${newExtension}$3`

  replaceFileContent(filepath, search, replace)
}

function _replaceAllAsyncImportExtensions(filepath, oldExtension, newExtension) {
  const search = new RegExp(`(import\\(['"]\\..*)(\\.${oldExtension})?(['"]\\))`, 'g')
  const replace = `$1.${newExtension}$3`

  replaceFileContent(filepath, search, replace)
}

function _replaceAllImportFromExtensions(filepath, oldExtension, newExtension) {
  const search = new RegExp(`(from\\s+['"]\\..*)(\\.${oldExtension})?(['"])`, 'g')
  const replace = `$1.${newExtension}$3`

  replaceFileContent(filepath, search, replace)
}

export function replaceAllImportExtensions(filepath, oldExtension, newExtension) {
  _replaceAllAsyncImportExtensions(filepath, oldExtension, newExtension)
  _replaceAllImportFromExtensions(filepath, oldExtension, newExtension)
}
