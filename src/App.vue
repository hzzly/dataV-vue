<template>
  <div id="app">
    <vue-particle-line>
      <router-view />
    </vue-particle-line>
  </div>
</template>

<script>
import api from 'api/request'
export default {
  name: 'app',
  mounted () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      api.getUserInfo().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
html, body {
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", SimSun, sans-serif;
  font-size: 14px;
  // background: rgba(7, 17, 27, 0.7);
}
html,
body,
#app {
  position: relative;
  width: 100%;
  height: 100%;
  background: #283644;
  min-width: 1200px;
  min-height: 700px;
  .canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

// ::-webkit-scrollbar-track-piece {
//   width: 6px;
//   background: #424f63;
//   border: 0;
//   border-radius: 3px;
// }
// ::-webkit-scrollbar {
//   width: 6px;
//   height: 6px;
//   border: 0;
//   background: #424f63;
//   border-radius: 3px;
// }
// ::-webkit-scrollbar-thumb {
//   background-color: #243847;
//   border: 0;
//   border-radius: 3px;
// }
// ::-webkit-scrollbar-thumb:hover {
//   background-color: #243847;
// }
</style>
