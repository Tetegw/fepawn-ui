let writeFile = require('./write-file')
let path = require('path')

module.exports = function (opts) {
  createData(opts, function (data) {
    writeFile({
      data: data,
      directory: path.resolve(__dirname, '../src/components/_ModulePage/'),
      fileName: `${opts.moduleName}.vue`,
      codeFormat: {},
      codeType: 'html',
      err: function (err) {
        console.log(`${opts.moduleName}.vue写入错误：${err}`)
      },
      succ: function () {
        console.log(`${opts.moduleName}.vue写入成功！`)
      }
    })
  })
}

function createData(opts, cb) {
  let first = opts.moduleName.substring(0, 1).toLocaleUpperCase()
  let other = opts.moduleName.substring(1)
  let ModuleName = `${first}${other}`
  const data = `<template>
  <div class="full-page">
    <v-${opts.moduleName}></v-${opts.moduleName}>
  </div>
</template>

<script>
import ${ModuleName} from '@/components/${ModuleName}/index'
export default {
  components: {
    'v-${opts.moduleName}': ${ModuleName}
  }
}
</script>

<style>
@import url('../../assets/style/index.css');
</style>
  `
  cb && cb(data)
}

