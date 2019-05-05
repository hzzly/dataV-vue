export default {
  color: '#00b0ff',
  // title: {
  //   text: '大数据可视化系统',
  //   subtext: 'Big-Data-Visualized System',
  //   textStyle: {
  //     color: '#00ffc7',
  //     fontSize: 16,
  //     fontWeight: 'bold',
  //     textBorderColor: '#282c53',
  //     textBorderWidth: 2,
  //   },
  //   padding: 0,
  //   left: 'center',
  //   top: 50,
  // },
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderColor: '#00ffc7',
    borderWidth: 1,
    textStyle: {
      color: '#00ffc7',
      fontSize: 12
    },
    formatter: '{b}<br/>{c}'
  },
  bmap: {
    center: [104.114129, 32.550339],
    zoom: 6,
    roam: true,
    mapStyle: {
      styleJson: [{
        'featureType': 'water',
        'elementType': 'all',
        'stylers': {
          'color': '#161930'
        }
      },
      {
        'featureType': 'highway',
        'elementType': 'geometry.fill',
        'stylers': {
          'color': '#000000',
          'visibility': 'off'
        }
      },
      {
        'featureType': 'highway',
        'elementType': 'geometry.stroke',
        'stylers': {
          'color': '#147a92',
          'visibility': 'off'
        }
      },
      {
        'featureType': 'arterial',
        'elementType': 'geometry.fill',
        'stylers': {
          'color': '#000000'
        }
      },
      {
        'featureType': 'arterial',
        'elementType': 'geometry.stroke',
        'stylers': {
          'color': '#0b3d51'
        }
      },
      {
        'featureType': 'local',
        'elementType': 'geometry',
        'stylers': {
          'color': '#000000'
        }
      },
      {
        'featureType': 'land',
        'elementType': 'all',
        'stylers': {
          'color': '#282c53'
        }
      },
      {
        'featureType': 'railway',
        'elementType': 'geometry.fill',
        'stylers': {
          'color': '#000000',
          'visibility': 'off'
        }
      },
      {
        'featureType': 'railway',
        'elementType': 'geometry.stroke',
        'stylers': {
          'color': '#08304b',
          'visibility': 'off'
        }
      },
      {
        'featureType': 'subway',
        'elementType': 'geometry',
        'stylers': {
          'lightness': -70
        }
      },
      {
        'featureType': 'building',
        'elementType': 'geometry.fill',
        'stylers': {
          'color': '#000000'
        }
      },
      {
        'featureType': 'all',
        'elementType': 'labels.text.fill',
        'stylers': {
          'color': '#857f7f'
        }
      },
      {
        'featureType': 'all',
        'elementType': 'labels.text.stroke',
        'stylers': {
          'color': '#161930'
        }
      },
      {
        'featureType': 'building',
        'elementType': 'geometry',
        'stylers': {
          'color': '#022338'
        }
      },
      {
        'featureType': 'green',
        'elementType': 'geometry',
        'stylers': {
          'color': '#062032'
        }
      },
      {
        'featureType': 'boundary',
        'elementType': 'all',
        'stylers': {
          'color': '#00b0ff'
        }
      },
      {
        'featureType': 'manmade',
        'elementType': 'geometry',
        'stylers': {
          'color': '#022338'
        }
      },
      {
        'featureType': 'poi',
        'elementType': 'all',
        'stylers': {
          'visibility': 'off'
        }
      },
      {
        'featureType': 'all',
        'elementType': 'labels.icon',
        'stylers': {
          'visibility': 'off'
        }
      },
      {
        'featureType': 'all',
        'elementType': 'labels.text.fill',
        'stylers': {
          'color': '#2da0c6',
          'visibility': 'on'
        }
      }]
    }
  }
}
