<template>
  <v-container
    id="water-alert"
    fluid
    tag="section"
    class="map"
  >
    <Map/>
  </v-container>
</template>

<script>
import Map from '../components/maps/AlertMap'

export default {
  name: 'WaterAlert',
  components:{
    Map,
  },
  data: () => ({
  }),
}
</script>

<style scoped>
  .map {
    height: 800px;
    padding: 1rem;
  }
</style>
