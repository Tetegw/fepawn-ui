let createModulePage = require('./template/module-page')
let createModule = require('./template/module')

let arguments = process.argv[2]
let opts = {
  moduleName: arguments
}

createModulePage(opts)
createModule(opts)
