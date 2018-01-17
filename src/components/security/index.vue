<template>
  <div class="security-code-wrap">
    <label :for="`code-${uuid}`">
      <ul class="security-code-container">
        <li class="item" v-for="(item, index) in NoLength" :key="index" :style="styleObj">
          <i class="field">{{value[index] || placeholder}}</i>
        </li>
      </ul>
    </label>
    <input ref="input" type="tel" :id="`code-${uuid}`" class="code-input" @input="handleInput($event)" v-model="value" :maxlength="NoLength" autocorrect="off" autocomplete="off" autocapitalize="off">
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  props: {
    NoLength: {
      type: Number,
      default: 4
    },
    placeholder: {
      type: String,
      default: '-'
    },
    size: {
      type: Number,
      default: 40
    },
    margin: {
      type: Number,
      default: 2
    }
  },
  created () {
    this.styleObj = {width: `${this.size}px`, height: `${this.size}px`, lineHeight: `${this.size}px`, fontSize: `${this.size / 2.5}px`, margin: `${this.margin}px`}
    this.uuid = Math.random().toString(36).substring(3, 8)
  },
  methods: {
    handleInput (e) {
      if (e.target.value.length >= this.NoLength) {
        this.hideKeyboard()
      }
      this.$emit('input', this.value)
    },
    hideKeyboard () {
      document.activeElement.blur()   // ios隐藏键盘
      this.$refs.input.blur()   // android隐藏键盘
    }
  }
}
</script>

<style>
@import url("../../assets/style/index.css");
.security-code-wrap,.security-code-container{
  list-style: none;
  display: inline-block;
}
.security-code-wrap .item, .security-code-wrap label{
  display: inline-block;
}
.security-code-wrap .item{
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin: 2px;
  background: #fff;
  color: #999;
  font-size: 16px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1) inset;
}
.security-code-wrap .field{
  font-style: normal;
}
.security-code-wrap .code-input{
  position: absolute;
  left: -9999px;
  top: -9999px;
}
</style>
