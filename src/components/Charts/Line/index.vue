<template>
  <v-chart :options="options"></v-chart>
</template>

<script>
import VChart from 'components/Charts/lib/BaseChart'

const TRAFFIC = [360, 321, 322, 317, 295, 268, 211, 154, 127, 99, 101, 109, 138, 127, 100, 114, 120, 178, 177, 214, 241, 252, 262, 286]
const TOTAL = 400

export default {
  name: 'line-chart',
  components: {
    VChart
  },
  data () {
    const data = [{
      name: '已占用',
      // data: TRAFFIC.slice(0, new Date().getHours() + 1)
      data: TRAFFIC.slice(0, 24)
    }, {
      name: '可使用',
      // data: TRAFFIC.slice(0, new Date().getHours() + 1).map(e => TOTAL - e)
      data: TRAFFIC.slice(0, 24).map(e => TOTAL - e)
    }]
    return {
      options: {
        // color: colors || [
        color: ['#0095F0', '#71DAEE', '#9FE86D', '#C3C3C3'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          top: '15%',
          left: '3%',
          right: '12%',
          bottom: '15%',
          containLabel: true
        },
        legend: {
          data: data.map(e => ({ name: e.name, icon: 'circle' })),
          // left: '50%',
          bottom: 10,
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: Array.apply(null, Array(24)).map((e, i) => i < 10 ? `0${i}:00` : `${i}:00`),
            axisLabel: {
              textStyle: {
                fontSize: 10,
                color: '#CCC'
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            name: '时间',
            nameLocation: 'end',
            nameTextStyle: {
              color: '#CCC',
              fontSize: '10px'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            interval: 100,
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(61, 62, 95, 1)',
                type: 'dashed'
              }
            },
            axisLabel: {
              textStyle: {
                fontSize: 10,
                color: '#CCC'
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            name: '数量           ',
            nameLocation: 'end',
            nameGap: 15,
            nameTextStyle: {
              color: '#CCC',
              align: 'left',
              fontSize: '10px'
            }
          }
        ],
        series: data.map(e => ({
          smooth: true,
          showSymbol: false,
          type: 'line',
          ...e
        }))
      }
    }
  }
}
</script>
