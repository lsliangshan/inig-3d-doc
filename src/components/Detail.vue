<template>
  <div class="detail_container">
    <headers></headers>
    <div class="detail_content_container">
      <detail-content></detail-content>
    </div>
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
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {}
    },
    mounted () {

    }
  }
</script>
