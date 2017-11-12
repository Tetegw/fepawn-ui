<template>
  <div class="fullPage bgfbf9fe">
    <p>一般使用</p>
    <div class="check-list-wrap">
      <check-list
        :data="checkListData"
        :hasSep="true"
        :showAll="true"
        :showInvert="true"
        :iconColor="'#1e7e71'"
        @checked="checkListChecked"
      ></check-list>
    </div>
    <p>结果：</p>
    <div v-show="CheckedVal.length">{{CheckedVal}}</div>
  </div>
</template>

<script>
import CheckList from '@/components/CheckList'
export default {
  data () {
    return {
      checkListData: [
        {
          name: '北京',
          value: '北京'
        },
        {
          name: '上海',
          value: '上海'
        },
        {
          name: '深圳',
          value: '深圳'
        },
        {
          name: '苏州',
          value: '苏州'
        }
      ],
      CheckedVal: []
    }
  },
  components: {
    'check-list': CheckList
  },
  methods: {
    checkListChecked (val) {
      this.CheckedVal = val
    }
  }
}
</script>

<style>
.fullPage.bgfbf9fe{
  background-color:#fbf9fe;
}
.fullPage.bgfbf9fe p{
  text-align: left;
  padding-left: 10px;
  line-height: 40px;
}
.check-list-wrap {
  background-color: #fff;
}
</style>

