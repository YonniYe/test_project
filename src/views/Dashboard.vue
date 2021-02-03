<template>
  <v-container
    id="dashboard-view"
    fluid
    tag="section"
  >
    <v-row>
      <!-- <v-col cols="12">
        <v-row> -->
      <v-col
        v-for="(chart, i) in charts"
        :key="`chart-${i}`"
        cols="12"
        md="6"
        lg="6"
      >
        <material-chart-card
          :color="chart.color"
          :data="chart.data"
          :options="chart.options"
          :responsive-options="chart.responsiveOptions"
          :title="chart.title"
          :type="chart.type"
        >
          <template #subtitle>
            <div class="font-weight-light text--secondary">
              <div v-html="chart.subtitle" />
            </div>
          </template>

          <template #actions>
            <v-icon
              class="mr-1"
              small
            >
              mdi-clock-outline
            </v-icon>

            <span
              class="text-caption grey--text font-weight-light"
              v-text="chart.time"
            />
          </template>
        </material-chart-card>
      </v-col>
        <!-- </v-row>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
  import { get } from 'vuex-pathify'
  import Vue from 'vue'

  const lineSmooth = Vue.chartist.Interpolation.cardinal({
    tension: 0,
  })

  export default {
    name: 'DashboardView',
    data: () => ({
      charts: [{
        type: 'Line',
        color: 'primary',
        title: '实时雨情',
        subtitle: '地点：江苏省南京市鼓楼区',
        time: '刚刚更新',
        data: {
          labels: ['24:00', '3:00', '6:00', '9:00', '12:00', '15:00', '18:00', '21:00'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434],
          ],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 8,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              },
            },
          }],
        ],
      }, 
      
      {
        type: 'Line',
        color: 'info',
        title: '洪水概率预测',
        subtitle: '目前发生洪水的可能性为：<i class="red--text"></i><span class="red--text">54%</span>&nbsp',
        time: '刚刚更新',
        data: {
          labels: ['24:00', '3:00', '6:00', '9:00', '12:00', '15:00', '18:00', '21:00'],
          series: [
            [12, 17, 7, 17, 15, 24, 39, 54],
          ],
        },
        options: {
          lineSmooth,
          low: 0,
          high: 60, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      }],
    }),

    computed: {
      sales: get('sales/sales'),
      totalSales () {
        return this.sales.reduce((acc, val) => acc + val.salesInM, 0)
      },
    },
  }
</script>
