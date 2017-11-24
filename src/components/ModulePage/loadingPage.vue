<template>
  <div class="full-page">
      <fepawn-loading
				:show="loadingShow"
				:info="loadingInfo"
			></fepawn-loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
export default {
  data () {
    return {
      loadingShow: true,
      loadingInfo: 'loading'
    }
  },
  components: {
    'fepawn-loading': Loading
  }
}
</script>
