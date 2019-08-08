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
      <pre>{{JSON.stringify(params, null, 2)}}</pre>
      <div class="">
        <form class="methods_form"
              action="">
          <div class="form_item"
               v-for="(value, key) in params"
               :key="key">
            <label :for="key">{{value.label}}
              <pre style="display: inline;">&#9;</pre>
            </label>
            <input type="text"
                   class="custom_input"
                   :id="key"
                   :value="value.default"
                   :placeholder="'请输入' + value.label"
                   :name="key" />
          </div>
        </form>
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

  .methods_form {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    background-color: #f6f8fa;
    display: flex;
    flex-direction: column;
  }
  .methods_form .form_item {
    width: 100%;
    margin: 10px 0;
  }
  .custom_input {
    display: inline-block;
    width: 200px;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    box-sizing: border-box;
    font-size: 14px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    transition: border 0.2s ease-in-out, background 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;
  }
</style>

<script>
  export default {
    name: 'DetailContent',
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
    }
  }
</script>
