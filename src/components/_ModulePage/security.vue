<template>
    <div class="full-page bgf2f2f3">
      <v-security
        :size="40"
        :margin="2"
        v-model="value"
      ></v-security>
      <p>{{value}}</p>
      <br><br><br>
      <v-security
        :size="60"
        :margin="6"
        v-model="value2"
      ></v-security>
      <p>{{value2}}</p>
    </div>
</template>

<script>
import Security from '@/components/security'
export default {
  data () {
    return {
      value: '',
      value2: ''
    }
  },
  components: {
    'v-security': Security
  }
}
</script>

<style>
@import url('../../assets/style/index.css');
.full-page.bgf2f2f3{
  background-color:#f2f2f3;
  padding: 80px 20px;
}

</style>
