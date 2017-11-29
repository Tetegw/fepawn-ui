'use strict'  // 严格模式
const chalk = require('chalk')  // 粉笔 命令行彩色输出。 
const semver = require('semver')   // Semantic versioner 语义化版本号 https://www.npmjs.com.cn/misc/semver/
const packageConfig = require('../package.json')
const shell = require('shelljs')  // 方便的调用系统命令 https://www.w3cschool.cn/jhnpsm/1pbeqozt.html
function exec (cmd) {
  // 创建子进程 http://nodejs.cn/api/child_process.html
  return require('child_process').execSync(cmd).toString().trim()
}

const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),  // 查看版本 http://nodejs.cn/api/process.html#process_process_version
    versionRequirement: packageConfig.engines.node  // node版本需求文档说明
  }
]

if (shell.which('npm')) {
  // 判断环境变量存在npm与否
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),    // 查看版本
    versionRequirement: packageConfig.engines.npm   // npm版本需求文档说明
  })
}

module.exports = function () {
  // commonjs 暴露函数
  const warnings = []
  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      // satisfies(version, range): Return true if the version satisfies the range  
      // 满足后面条件，返回true
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      ) 
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()
    for (let i = 0; i < warnings.length; i++) {
      // 遍历打印需要模块的版本号node 和 npm
      const warning = warnings[i]
      console.log('  ' + warning)
    }
    console.log()
    process.exit(1) // 进程退出
  }
}
