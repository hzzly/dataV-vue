<template>
  <div class="header">
    <div class="title">{{title}}</div>
    <div class="detail">
      <div class="indexes" v-for="(item, index) in indexes" :key="index">
        <span>{{item.name}}: </span>
        <span class="num">{{item.value}}</span>
      </div>
      <div class="time">{{now}}</div>
    </div>
  </div>
</template>

<script>

import { moment } from 'common/js/utils'

const FORMAT = 'YYYY/MM/DD HH:mm:SS'

export default {
  props: {
    title: {
      type: String,
      default: 'Github数据分析平台'
    },
    indexes: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      time: new Date(),
      t: null
    }
  },
  computed: {
    now () {
      return moment(this.time).format(FORMAT)
    }
  },
  mounted () {
    this.t = setInterval(() => {
      this.time = new Date()
    }, 900)
  },
  beforeDestroy () {
    if (this.t) {
      clearInterval(this.t)
      this.t = null
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 14px;
  font-size: 12px;
  color: #d7daed;
  .title {
    font-size: 30px;
    color: #37d1ff;
  }
  .detail {
    display: flex;
    align-items: flex-end;
    margin-bottom: 5px;
    .indexes {
      margin-right: 20px;
      cursor: auto;
      .num {
        color: #37d1ff;
        font-size: 16px;
      }
    }
    .time {
      width: 130px;
    }
  }
}
</style>
