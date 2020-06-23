<template>
  <div class="history">
    <Log :collection="history" />
  </div>
</template>

<script>
import Log from '@/components/Log.vue'
import {getStorage} from '@/helpers.js'

export default {
  name: 'History',
  computed: {
    history () {
      return getStorage('history')
    }
  },
  components: {
    Log
  }
}
</script>