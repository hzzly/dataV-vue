<template>
  <div class="index">
    <div class="header">
      <v-header :indexes="indexes"></v-header>
    </div>
    <div class="top-left"></div>
    <div class="top-center">
      <v-bar></v-bar>
    </div>
    <div class="top-right">
      <v-line />
    </div>
    <div class="bottom-left"></div>
    <div class="bottom-right"></div>
  </div>
</template>

<script>
import VHeader from 'components/Header'
import VBar from 'components/Charts/Bar'
import VLine from 'components/Charts/Line'
export default {
  name: 'index',
  components: {
    VHeader,
    VBar,
    VLine
  },
  data () {
    return {
      indexes: [
        { name: 'Repositories', value: 64 },
        { name: 'Followers', value: 153 },
        { name: 'Following', value: 20 }
      ]
    }
  },
  mounted () {
  },
  methods: {
    runAction (aaa) {
      console.log(aaa)
    }
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
  grid-gap: 6px;
  padding: 6px;
  color: #37d1ff;
  z-index: 99;
  .header {
    grid-area: 1 / 1 / span 1 / span 8; // grid-row-start,grid-column-start,grid-row-end,grid-column-end
  }
  .top-left,
  .top-center,
  .top-right,
  .bottom-left,
  .bottom-right {
    background: rgba(40, 47, 56, .8);
  }
  .top-left {
    grid-area: 2 / 1 / span 2 / span 3;
  }
  .top-center {
    grid-area: 2 / 4 / span 2 / span 2;
  }
  .top-right {
    grid-area: 2 / 6 / span 2 / span 3;
  }
  .bottom-left {
    grid-area: 4 / 1 / span 2 / span 5;
  }
  .bottom-right {
    grid-area: 4 / 6 / span 2 / span 3;
  }
}
</style>
