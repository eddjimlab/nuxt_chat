<template>
  <div>
    <h1>CHAT PAGE {{ user.name }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  middleware: ['chat'],
  head () {
    return {
      title: `Комната ${this.user.room}`
    }
  },
  computed: mapState(['user'])
}
</script>
