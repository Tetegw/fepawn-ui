<template>
  <div class="codemirror-wrap">
    <codemirror v-model="code" :options="cmOption"></codemirror>
    <div class="btn-wrap">
      <button v-touch-active @click="runCode">运行</button>
    </div>
    <div class="result border-top-1px" :class="[resultType]">{{result}}</div>
  </div>
</template>

<script>
import TouchActive from '@/directives/touchActive'
import { codemirror } from 'vue-codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
export default {
  name: 'codeTest',
  data () {
    return {
      code: `var`,
      cmOption: {
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'monokai',
        styleActiveLine: true,
        autoCloseTags: true,
        lineNumbers: true,
        line: true,
        lineWrapping: 'wrap',
        lineWiseCopyCut: true
      },
      result: '结果显示...',
      resultType: 'string'
    }
  },
  methods: {
    runCode () {
      try {
        let result = eval(this.code)
        console.log(result)
        if (typeof result === 'number') {
          this.result = result
          this.resultType = 'number'
        } else if (result === undefined) {
          this.resultType = this.result = 'undefined'
        } else {
          this.result = JSON.stringify(result)
          this.resultType = 'string'
        }
      } catch (error) {
        this.result = `出错了：${JSON.stringify(error)}`
        console.log(this.result)
      }
    }
  },
  components: {
    codemirror
  },
  directives: {
    'touch-active': TouchActive
  }
}
</script>

<style>
@import url("../../assets/style/index.css");
.codemirror-wrap{
  text-align: left;
  font-size: 16px;
  overflow: hidden;
}
.codemirror-wrap .vue-codemirror{
  position: absolute;
  top: 0;
  bottom: 40%;
  left: 0;
  right: 0;
}
.codemirror-wrap .CodeMirror{
  height: 100%;
}
.codemirror-wrap .btn-wrap{
  position: absolute;
  top: 60%;
  bottom: 25%;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.codemirror-wrap button {
    font-size: 16px;
    font-weight: bold;
    height: 30px;
    width: 80%;
    background: #42b983;
    border-radius: 5px;
    border: none;
    color: #fff;
}
.codemirror-wrap .result{
  position: absolute;
  top: 75%;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background: #f9f9f9;
  word-wrap: break-word;
  overflow: auto;
}
.codemirror-wrap .result.string{
  color: #333;
}
.codemirror-wrap .result.number{
  color: #3f51b5;
  font-weight: bold;
}
.codemirror-wrap .result.undefined{
  color: #999;
}
.touch-active {
  background: #2f9a69 !important;
}
</style>
