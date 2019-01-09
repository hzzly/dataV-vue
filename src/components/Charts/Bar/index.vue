<template>
  <v-chart :options="options"></v-chart>
</template>

<script>
import VChart from 'components/Charts/lib/BaseChart'
export default {
  name: 'bar-chart',
  components: {
    VChart
  },
  data () {
    return {
      options: {
        legend: {
          show: false
        },
        title: {
          text: 57,
          subtext: '可用房源',
          textStyle: {
            fontSize: 16,
            fontWeight: 500,
            color: '#37D1FF'
          },
          subtextStyle: {
            fontSize: 10,
            fontWeight: 300,
            color: '#D7DAED'
          },
          x: 'center',
          top: '40%'
        },
        color: ['#0095F0', '#71DAEE', '#9FE86D', '#C3C3C3'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [{
          name: '房源',
          type: 'pie',
          radius: ['50%', '55%'],
          label: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 10
              },
              formatter: '{d}%({c})\n\n{b}'
            }
          },
          data: [{
            name: '待租',
            value: 36
          }, {
            name: '待售',
            value: 12
          }, {
            name: '闲置',
            value: 9
          }]
        }]
      }
    }
  }
}
</script>
