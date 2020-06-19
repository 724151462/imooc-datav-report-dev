<template>
  <common-card title="累计用户数" value="1,087,503">
    <template>
      <div id="total-users-chart" :style="{ width: '100%', height: '100%' }">
        
      </div>
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">8.73%</span>
        <div class="increase"></div>
        <span class="month">月同比</span>
        <span class="emphasis">35.91%</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>
<script>
  import commonCardMixin from '../../mixin/commonCardMixin'
  export default {
    mixins: [commonCardMixin],
    mounted() {
      const chartDom = document.getElementById('total-users-chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
        xAxis: {
          type: 'value',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [{
          type: 'bar',
          stack: '总量',
          data: [200],
          barWidth: 10,
          itemStyle: {
            color: '#45c946'
          }
        },
        {
          type: 'bar',
          stack: '总量',
          data: [250],
          itemStyle: {
            color: '#eee'
          }
        },
        {
          type: 'custom',
          stack: '总量',
          data: [200],
          renderItem: (params, api) => {
            const value = api.value(0)
            const endPoint = api.coord([value, 0])
            console.log(endPoint)
            return {
              type: 'group',
              position: endPoint,
              children: [
                {
                  type: 'path',
                  shape: {
                    d: 'M71.675 893.33l440.325-762.683 440.325 762.683z',
                    x: -6,
                    y: 5,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                },
                {
                  type: 'path',
                  shape: {
                    d: 'M535.466667 812.8l450.133333-563.2c14.933333-19.2 2.133333-49.066667-23.466667-49.066667H61.866667c-25.6 0-38.4 29.866667-23.466667 49.066667l450.133333 563.2c12.8 14.933333 34.133333 14.933333 46.933334 0z',
                    x: -6,
                    y: -15,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                }
              ]
              
            }
          }
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      })
    }
  }
</script>
<style lang="scss" scoped>
  .total-users-footer{
    display: flex;
    align-items: center;
    .month {
      margin-left: 10px;
    }
  }
</style>
<svg t="1592560709258" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2656" width="200" height="200"><path d="M71.675 893.33l440.325-762.683 440.325 762.683z" p-id="2657"></path></svg>