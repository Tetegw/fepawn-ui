<template>
  <div class="full-page">
    <div class="normal">
      <span>正常使用：</span>
      <v-switch  
        @switch-change="switchChange1"
      ></v-switch>
      <span>{{switchRes1}}</span>
    </div>
    <div class="normal">
      <span>禁止使用：</span>
      <v-switch  
        :disabled="true"
        @switch-change="switchChange2"
      ></v-switch>
      <span>{{switchRes2}}</span>
    </div>
    <div class="normal">
      <span>有默认值：</span>
      <v-switch 
        :default="true"
        @switch-change="switchChange3"
      ></v-switch>
      <span>{{switchRes3}}</span>
    </div>
    <div class="normal">
      <span>有默认值禁用：</span>
      <v-switch 
        color="#ffe26d" 
        :disabled="true"
        :default="true"
        @switch-change="switchChange4"
      ></v-switch>
      <span>{{switchRes4}}</span>
    </div>
     <div class="normal">
      <span>设置大小：</span>
      <v-switch 
        color="#ffe26d" 
        height="30px" 
        @switch-change="switchChange5"
      ></v-switch>
      <span>{{switchRes5}}</span>
    </div>
  </div>
</template>

<script>
import Switch from '@/components/Switch'
export default {
  data () {
    return {
      switchRes1: '',
      switchRes2: '',
      switchRes3: 'true',
      switchRes4: 'true',
      switchRes5: ''
    }
  },
  components: {
    'v-switch': Switch
  },
  methods: {
    switchChange1 (val) {
      this.switchRes1 = val
    },
    switchChange2 (val) {
      this.switchRes2 = val
    },
    switchChange3 (val) {
      this.switchRes3 = val
    },
    switchChange4 (val) {
      this.switchRes4 = val
    },
    switchChange5 (val) {
      this.switchRes5 = val
    }
  }
}
</script>

<style scoped>
.normal{
  margin-top: 20px;
}
.normal span{
  display: inline-block;
  line-height: 30px;
  min-width: 50px;
}
</style>
