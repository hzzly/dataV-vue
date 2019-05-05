<template>
  <v-chart :options="finalOption" ref="baseChart"></v-chart>
</template>

<script>
import 'echarts/extension/bmap/bmap'
import VChart from 'components/Charts/lib/BaseChart'
import option from './option'
import getOption from './getOption'
export default {
  name: 'word-map-chart',
  components: {
    VChart
  },
  props: [ 'data' ],
  computed: {
    finalOption () {
      return getOption(option, this.data)
    }
  },
  mounted () {
    const chart = this.$refs.baseChart.getChart()
    const bmap = chart.getModel().getComponent('bmap').getBMap() // 百度地图实例
    bmap.setMinZoom(4) // 缩放最小级别
    bmap.setMaxZoom(18) // 缩放最大级别
  }
}
</script>
