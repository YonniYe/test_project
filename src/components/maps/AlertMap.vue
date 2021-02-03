<template>
  <div ref="map-root"
       style="height: 100%; width: 100%">
    <div ref="mouse-position"
         class="mouse-position-wrapper">
      <div class="custom-mouse-position"></div>
    </div>
  </div>
</template>

<script>
  import View from 'ol/View'
  import Map from 'ol/Map'
  import TileLayer from 'ol/layer/Tile'
  import OSM from 'ol/source/OSM'
  import {defaults, FullScreen, ScaleLine, ZoomSlider, MousePosition, Attribution} from 'ol/control'
  import {createStringXY} from 'ol/coordinate'
  import 'ol/ol.css'

  export default {
    name: 'MapContainer',
    components: {},
    props: {},
    mounted() {
      new Map({
        target: this.$refs['map-root'],
        layers: [
          new TileLayer({
            source: new OSM()
          }),
        ],
        view: new View({
          zoom: 0,
          center: [0, 0],
          constrainResolution: true
        }),
        controls: defaults({attribution: false}),
        controls: defaults().extend([
          new FullScreen(),
          new ZoomSlider(),
          new ScaleLine(),
          new MousePosition({
            className: 'custom-mouse-position',  // CSS类名
            target: this.$refs['mouse-position'],  // 元素名
            coordinateFormat: createStringXY(4), // 坐标格式
            projection: 'EPSG:4326',  // 投影坐标系
          }),
          new Attribution({
            collapsible: false
          })
        ])    
      })
    },
  }
</script>

<style scoped>
  .mouse-position-wrapper{
    width: 200px;
    color: black;
    position: relative;
    height: 0px;
    left: 86%;
    top: 94%; 
    z-index: 999;
  }
  .ol-attribution{
    display: none;
    visibility: hidden;
  }
</style>