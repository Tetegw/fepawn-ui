<template>
  <div class="fullPage bgfbf9fe">
    <p>一般使用</p>
    <div class="border-top-1px border-bot-1px">
      <check-list></check-list>
    </div>
    
  </div>
</template>

<script>
import CheckList from '@/components/CheckList'
export default {
  components: {
    'check-list': CheckList
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
</style>

