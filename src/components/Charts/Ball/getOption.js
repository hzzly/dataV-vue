function globeCreator (worldMap) {
  return {
    environment: 'none',
    globeRadius: 70,
    left: 0,
    baseTexture: worldMap,
    shading: 'color',
    viewControl: {
      autoRotate: true,
      targetCoord: [100, 20]
    }
  }
}

function legendCreator (legendData, data) {
  return {
    selectedMode: 'single',
    orient: 'vertical',
    top: 'center',
    left: 15,
    padding: 0,
    itemGap: 10,
    itemWidth: 0,
    formatter: function (name) {
      return `●  ${name} ${data[name].length}`
    },
    data: legendData,
    inactiveColor: 'rgba(255,255,255,0.8)',
    textStyle: {
      color: '#fff',
      textBorderColor: 'rgb(22,25,48)',
      textBorderWidth: 2
    }
  }
}

export function getOption (option, result, worldMap) {
  const allData = []
  const series = []
  const legendData = []
  // 把所有数据保存到allData
  for (let key in result) {
    for (let i in result[key]) {
      allData.push(result[key][i])
    }
  }
  result.All = allData

  // 生成排序后的新数组,并且取前11名(All占了一个位置)
  var data = []
  for (let key in result) {
    data.push({
      country: key,
      value: result[key]
    })
  }
  data.sort((a, b) => {
    return b.value.length - a.value.length
  })
  data = data.slice(0, 11)

  // 添加点数据
  for (let i in data) {
    series.push({
      name: data[i].country,
      type: 'scatter3D',
      coordinateSystem: 'globe',
      blendMode: 'lighter',
      symbolSize: 2,
      itemStyle: {
        color: 'rgb(50, 50, 150)',
        opacity: 1
      },
      silent: true,
      data: data[i].value
    })
    legendData.push({
      name: data[i].country,
      icon: 'none',
      textStyle: {
        color: '#00ffc6'
      }
    })
  }

  // 把点数据转换为线
  function convertLine (data) {
    const lineData = []
    // data.sort(function (a,b){
    //     return a[0] - b[0] && a[1] - b[1];//按经纬度排序
    // });
    for (let i = 0; i < data.length - 1; i++) {
      const str = [data[i], data[i + 1]] // 获取临近的两点
      lineData.push(str)
    };
    return lineData
  }
  // 添加线数据
  for (let i in data) {
    series.push({
      type: 'lines3D',
      name: data[i].country,
      effect: {
        show: true,
        period: 5,
        trailWidth: 1,
        trailLength: 0.15,
        trailOpacity: 1,
        trailColor: 'rgb(30, 30, 60)'
      },
      lineStyle: {
        width: 1,
        color: 'rgb(50, 50, 150)',
        opacity: data[i].country === 'All' ? 0.3 : 0.8
      },
      blendMode: 'lighter',
      data: convertLine(data[i].value)
    })
  }

  return {
    ...option,
    legend: legendCreator(legendData, result),
    globe: globeCreator(worldMap),
    series: series || []
  }
}

export function worldMapCreator (echarts, world) {
  echarts.registerMap('map_world', world)
  const canvas = document.createElement('canvas')
  const worldMap = echarts.init(canvas, null, {
    width: 4096,
    height: 2048
  })
  worldMap.setOption({
    series: [{
      type: 'map',
      map: 'map_world',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      selectedMode: 'single',
      itemStyle: {
        areaColor: 'transparent',
        borderColor: '#00b0ff',
        borderWidth: '1'
      },
      emphasis: {
        itemStyle: {
          areaColor: 'transparent',
          borderColor: '#00ffc6',
          borderWidth: '2'
        },
        label: {
          show: true,
          color: '#00ffc6',
          fontSize: 14
        }
      }
    }]
  })
  return worldMap
}
