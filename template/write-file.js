const fs = require('fs')
// const beautifyJs = require('js-beautify').js
// const beautifyCss = require('js-beautify').css
// const beautifyHtml = require('js-beautify').html

/*
  opts = {
    data: '',
    directory: '',
    fileName: '',
    codeFormat: {},
    codeType: '',
    err: err,
    succ: succ
  }

*/
module.exports = function (opts) {
  // let defaultFormat = {
  //   "brace_style": "none",                // 大括号换行
  //   "indent_size": 4,                     // 缩进2个单位
  //   "indent_with_tabs": false,            // 缩进方式
  //   "space_after_anon_function": true,    // 匿名函数function后空格
  //   "end_with_newline": false,            // 结束后插入新一行
  //   "space_in_paren": false,
  //   "space_in_empty_paren": false,        // 空括号不插入空格
  //   "break_chained_methods": false
  // }
  // opts.codeFormat = opts.codeFormat || defaultFormat
  // opts.codeType = opts.codeType || 'js'
  // initBeautify(opts)
  wirteFile(opts)
}

/* function initBeautify(opts) {
  let data = ''
  switch (opts.codeType) {
    case 'html':
      data = beautifyHtml(opts.data, Object.assign({}, opts.codeFormat))
      break;
    case 'css':
      data = beautifyCss(opts.data, Object.assign({}, opts.codeFormat))
      break;
    case 'js':
      data = beautifyJs(opts.data, Object.assign({}, opts.codeFormat))
      break;
    default:
      data = beautifyJs(opts.data, Object.assign({}, opts.codeFormat))
      break;
  }
  wirteFile(opts, data)
} */

function wirteFile(opts) {
  let data = opts.data
  if (!fs.existsSync(opts.directory)) {
    console.log('路径名不存在，正在创建...')
    fs.mkdirSync(opts.directory)
  }
  // 写文件
  fs.writeFile(`${opts.directory}/${opts.fileName}`, data, (err) => {
    if (err) {
      opts.err && opts.err(err)
      return
    }
    opts.succ && opts.succ()
  })

}
