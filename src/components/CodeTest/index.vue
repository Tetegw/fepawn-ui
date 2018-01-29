<template>
  <div class="codemirror-wrap">
    <codemirror v-model="code" :options="cmOption"></codemirror>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
export default {
  name: 'codeTest',
  data () {
    return {
      code: `import someResource from 'codemirror/some-resource'
export default {
  data () {
    // 这是一个包含、代码提示、折叠、选中、sublime模式...的编辑器
    // 按下Ctrl键可以体验代码提示
    // 可以尝试sublime下的快捷键操作
    return {
      exampleCode: 'const a = 10',
      cmOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: 'text/javascript',
        lineWrapping: true,
        theme: 'default'
      }
    }
  },
  components: examples
}`,
      cmOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        autoCloseTags: true,
        line: true,
        lineWrapping: 'wrap',
        mode: 'text/javascript',
        theme: 'monokai'
      }
    }
  },
  components: {
    codemirror
  }
}
</script>

<style>
@import url("../../assets/style/index.css");
.codemirror-wrap{
  text-align: left;
}
</style>
