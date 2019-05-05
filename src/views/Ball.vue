<template>
  <div class="ball">
    <v-ball :data="data"></v-ball>
  </div>
</template>

<script>
import VBall from 'components/Charts/Ball'
import flights from 'common/json/flights.json'

export default {
  name: 'cmap',
  components: {
    VBall
  },
  data () {
    return {
      data: flights
    }
  }
}
</script>

<style lang="scss" scoped>
.ball {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 99;
}
</style>
