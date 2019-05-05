<template>
  <div ref="chartRef" class="chart"></div>
</template>

<script>
import echarts from 'echarts'
import { debounce } from 'common/js/utils'
export default {
  name: 'baseChart',
  props: {
    options: {
      type: Object
    },
    theme: {
      type: [String, Object]
    },
    group: {
      type: String
    },
    autoResize: {
      type: Boolean,
      default: () => true
    }
  },
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    if (this.options) {
      this.initChart()
    }
  },
  methods: {
    initChart () {
      if (this.chart) {
        return
      }
      let chart = echarts.init(this.$el, this.theme, this.options)
      if (this.group) {
        chart.group = this.group
      }
      chart.setOption(this.options || {}, true)
      if (this.autoResize) {
        this.lastArea = this.getArea()
        this.__resizeHandler = debounce(() => {
          if (this.lastArea === 0) {
            this.mergeOptions({}, true)
            this.resize()
            this.mergeOptions(this.options || {}, true)
          } else {
            this.resize()
          }
          this.lastArea = this.getArea()
        }, 100)
        window.addEventListener('resize', this.__resizeHandler)
      }
      this.chart = chart
    },
    mergeOptions (options, notMerge, lazyUpdate) {
      if (!this.chart) {
        this.initChart()
      } else {
        this.delegateMethod('setOption', options, notMerge, lazyUpdate)
      }
    },
    delegateMethod (name, ...args) {
      if (!this.chart) {
        this.initChart()
      }
      return this.chart[name](...args)
    },
    delegateGet (name, method) {
      if (!this.chart) {
        this.initChart()
      }
      return this.chart[method]()
    },
    resize (options) {
      this.delegateMethod('resize', options)
    },
    clear () {
      this.delegateMethod('clear')
    },
    dispose () {
      this.delegateMethod('dispose')
    },
    getArea () {
      return this.$el.offsetWidth * this.$el.offsetHeight
    },
    destroy () {
      if (this.autoResize) {
        window.removeEventListener('resize', this.__resizeHandler)
      }
      this.dispose()
      this.chart = null
    },
    refresh () {
      if (this.chart) {
        this.destroy()
        this.initChart()
      }
    },
    getChart () {
      return this.chart
    }
  },
  activated () {
    if (this.autoResize) {
      this.chart && this.chart.resize()
    }
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.destroy()
  },
  watch: {
    group (group) {
      this.chart.group = group
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
