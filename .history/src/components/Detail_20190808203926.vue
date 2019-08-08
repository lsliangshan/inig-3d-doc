<template>
  <div class="detail_container">
    <headers></headers>
    <div class="detail_content_container">
      <detail-content :params="params"></detail-content>
    </div>
    <!-- <p v-if="$route.params.domain">领域：{{$route.params.domain}}</p>
    <p v-if="$route.params.methods">方法：{{$route.params.methods}}</p> -->
  </div>
</template>
<style scoped>
  .detail_container {
    width: 100%;
    height: 100%;
  }
  .detail_content_container {
    width: 100%;
    height: calc(100% - 66px);
    box-sizing: border-box;
  }
</style>

<script>
  export default {
    name: 'Detail',
    components: {
      Headers: () => import('./parts/Headers.vue'),
      DetailContent: () => import('./parts/DetailContent.vue')
    },
    props: {
      params: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {}
    },
    mounted () {

    },
    watch: {
      '$route': {
        handler (val) {
          // console.log(val)
          console.log(this.params)
        }
      }
    }
  }
</script>
