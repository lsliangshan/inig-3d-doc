<template>
  <div class="detail_header">
    <a href="javascript: void(0)">{{$route.params.domain}} / {{$route.params.methods}}</a>
    <!-- <div class="detail_header_right">
      <div class="import_text"
           :class="{show: !miniScreen}"
           title="点击复制">
        import { {{$route.params.methods}} } from "plugins-3d/lib/domains/{{$route.params.domain}}/service"
      </div>
      <svg>
        <use xlink:href="#copy"></use>
      </svg>
    </div> -->
  </div>
</template>
<style scoped>
  .detail_header {
    position: sticky;
    top: 0;
    width: 100%;
    height: 66px;
    background-color: #fff;
    box-shadow: 0 1px 10px #888;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .detail_header a {
    max-width: 320px;
    height: 66px;
    font-size: 18px;
    color: #888;
    line-height: 40px;
    text-decoration: none;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .detail_header_right {
    height: 66px;
    width: calc(100% - 320px);
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .import_text {
    max-width: 80%;
    margin-right: 15px;
    color: #888;
    text-align: right;
    transition: all 0.03s ease-in-out;
    opacity: 0;
  }
  .import_text.show {
    opacity: 1;
  }
  .detail_header_right svg {
    width: 24px;
    height: 24px;
    fill: #888;
    transition: all 0.2s linear;
    cursor: pointer;
  }
  .detail_header_right svg:hover {
    fill: #333;
  }
</style>

<script>
  export default {
    name: 'DetailHeader',
    props: {},
    data () {
      return {
        miniScreen: true
      }
    },
    mounted () {
      window.addEventListener('resize', this.resetMiniScreen, false)
    },
    methods: {
      resetMiniScreen () {
        this.miniScreen = (document.documentElement.offsetWidth < 1200)
      }
    }
  }
</script>
