<template>
  <div class="index">
    <div class="header">dataV</div>
    <div class="top-left"></div>
    <div class="top-center"></div>
    <div class="top-right"></div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
/* autoprefixer grid: autoplace */
.index {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 50px repeat(4, 1fr);
  // grid-template-rows: 50px repeat(3, 1fr) 100px repeat(3, 1fr);
  grid-gap: 6px;
  padding: 6px;
  color: #37d1ff;
  // background:rgba(30, 35, 52, 0.8);
  z-index: 99;
  .header {
    grid-area: 1 / 1 / span 1 / span 8; // grid-row-start,grid-column-start,grid-row-end,grid-column-end
  }
  .top-left {
    grid-area: 2 / 1 / span 2 / span 3;
    background: rgba(40, 47, 56, .7);
  }
  .top-center {
    grid-area: 2 / 4 / span 2 / span 2;
    background: rgba(40, 47, 56, .7);
  }
  .top-right {
    grid-area: 2 / 6 / span 2 / span 3;
    background: rgba(40, 47, 56, .7);
  }
}
</style>
