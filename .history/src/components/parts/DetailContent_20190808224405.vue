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
      <!-- <pre>{{JSON.stringify(params, null, 2)}}</pre> -->
      <div class="usage_container">
        <form class="methods_form"
              action="javascript:void(0)">
          <div class="form_item"
               v-for="(value, key) in params"
               :key="key">
            <label :for="key">{{value.label}}
              <!-- <pre style="display: inline;">&#9;</pre> -->
            </label>
            <input type="text"
                   class="custom_input"
                   :id="key"
                   :value="value.default"
                   :placeholder="'请输入' + value.label"
                   :name="key" />
          </div>
          <div class="form_footer">
            <code>{{$route.params.methods}}({{Object.keys(params).length > 0 ? 'args' : ''}});</code>
            <button class="btn_run"
                    @click="run">
              <svg>
                <use xlink:href="#play"></use>
              </svg>
              运行
            </button>
          </div>
        </form>
        <div class="result_container"></div>
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

  .usage_container {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    background-color: #f6f8fa;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  .result_container {
  }
  .methods_form {
    width: 350px;
    display: flex;
    flex-direction: column;
  }
  .methods_form .form_item {
    width: 100%;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .custom_input {
    display: inline-block;
    width: 250px;
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
  .form_footer {
    width: 350px;
    height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .form_footer .btn_run {
    border: 1px solid #e0e0e0;
    background-color: #fefefe;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .form_footer .btn_run:focus {
    outline: none;
  }
  .form_footer .btn_run:active {
    opacity: 0.4;
  }
  .form_footer .btn_run svg {
    fill: #42b983;
    width: 18px;
    height: 18px;
  }
</style>

<script>
  import * as Job from '../../../../plugins-3d/lib/domains/job/service'
  import * as User from '../../../../plugins-3d/lib/domains/user/service'
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
      return {
        result: {
          status: '0',
          data: {}
        }
      }
    },
    methods: {
      async run () {
        let args = {}
        for (let p in this.params) {
          if (this.params.hasOwnProperty(p)) {
            if (!args.hasOwnProperty(p)) {
              args[p] = document.querySelector('[name=' + p + ']').value
            }
          }
        }
        let response = {}
        switch (this.$route.params.domain) {
          case 'job':
            response = await Job[this.$route.params.methods](args)
            break
          case 'user':
            response = await User[this.$route.params.methods](args)
            break
          default:
            break
        }
        console.log(JSON.stringify(response, null, 2))
        if (response.code !== 200) {
          this.result.success = false
        }
      }
    }
  }
</script>
