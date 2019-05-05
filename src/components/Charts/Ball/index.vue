<template>
  <v-chart :options="finalOption" ref="baseChart"></v-chart>
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'
import world from 'echarts/map/json/world.json'
import VChart from 'components/Charts/lib/BaseChart'
import option from './option'
import { getOption, worldMapCreator } from './getOption'
import countryCoord from 'common/json/country_coord.json'

export default {
  name: 'ball-chart',
  components: {
    VChart
  },
  props: [ 'data' ],
  data () {
    return {
      worldMap: null
    }
  },
  computed: {
    finalOption () {
      if (!this.worldMap) {
        this.creatorWorldMap()
      }
      return getOption(option, this.data, this.worldMap)
    }
  },
  mounted () {
    const chart = this.$refs.baseChart.getChart()
    chart.on('legendselectchanged', params => {
      const country = params.name
      const coord = country === 'All' ? [100, 20] : countryCoord[country]
      chart.setOption({
        globe: {
          viewControl: {
            autoRotate: country === 'All',
            targetCoord: coord,
            distance: country === 'All' ? 150 : 100
          }
        }
      })
      this.worldMap.dispatchAction({
        type: 'mapSelect',
        name: country
      })
    })
  },
  methods: {
    creatorWorldMap () {
      this.worldMap = worldMapCreator(echarts, world)
    }
  }
}
</script>
