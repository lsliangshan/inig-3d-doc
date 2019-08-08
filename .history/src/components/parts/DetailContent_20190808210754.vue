<template>
  <div class="detail_container">
    <div class="highlight">
      <p>导入模块</p>
      <div class="highlight_code">
        <pre>import { {{$route.params.methods}} } from "plugins-3d/lib/domains/{{$route.params.domain}}/service"</pre>
        <svg>
          <use xlink:href="#copy"></use>
        </svg>
      </div>
    </div>
    <div class="highlight">
      <p>使用</p>
      <div class="highlight_code">
        <pre>{{JSON.stringify(params)}}</pre>
      </div>
    </div>
    <div class="detail_content"
         style="height: 2000px;"></div>
  </div>
</template>
<style scoped>
  .detail_container {
    width: 100%;
    height: 100%;
    color: #444;
    overflow: auto;
  }
  .import_text {
    position: sticky;
    left: 0;
    top: 0;
    width: 100%;
    height: 48px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: #ffffff;
  }
  .highlight {
    padding: 0 20px;
    margin-top: 20px;
    box-sizing: border-box;
  }
  .highlight_code {
    position: relative;
  }
  .highlight_code pre {
    background-color: #f6f8fa;
    border-radius: 3px;
    font-size: 14px;
    line-height: 1.45;
    overflow: auto;
    padding: 16px;
  }
  .highlight_code svg {
    fill: #444;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
  .highlight_code:hover svg {
    opacity: 1;
  }
</style>

<script>
  export default {
    name: 'DetailContent',
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
    }
  }
</script>
