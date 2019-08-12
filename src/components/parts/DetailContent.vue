<template>
  <div class="detail_container">
    <div class="highlight">
      <p class="highlight_title">导入模块</p>
      <div class="highlight_code">
        <pre class="import_target">import { {{$route.params.method}} } from "plugins-3d/lib/domains/{{$route.params.domain}}/service"</pre>
        <Tooltip content="复制导入语句"
                 placement="left"
                 class="import_copy_wrapper">
          <svg class="import_copy_ref">
            <use xlink:href="#copy"></use>
          </svg>
        </Tooltip>
      </div>
    </div>
    <div class="highlight">
      <p class="highlight_title">使用</p>
      <div class="usage_container">
        <Form :label-width="90"
              class="methods_form">
          <FormItem v-for="(value, key) in currentParams"
                    :key="key"
                    :label="value.label">
            <Input type="text"
                   :placeholder="'请输入' + value.label"
                   v-model="requestArgs[key]" />
          </FormItem>
          <FormItem v-for="(value, key) in renderDynamicParams"
                    :key="key"
                    :label="value.label"
                    class="dynamic_item">
            <Input type="text"
                   :placeholder="'请输入' + value.label"
                   v-model="requestArgs[key]"
                   style="width: calc(100% - 40px);" />
            <div class="dynamic_item_remove"
                 @click="removeDynamicParams(key)">
              <Tooltip content="删除参数"
                       placement="left">
                <Icon type="md-trash"
                      size="20"
                      color="#d9534f" />
              </Tooltip>
            </div>
          </FormItem>
          <FormItem class="form_item_operation"
                    :label-width="0"
                    v-if="Object.keys(remainsDynamicParams).length > 0">
            <svg @click="showDynamicParamsModal">
              <use xlink:href="#plus-circle"></use>
            </svg>
          </FormItem>
          <FormItem :label-width="0">
            <div class="form_footer"
                 :style="{borderTop: Object.keys(currentParams).length > 0 ? '1px solid #eeeeee' : '1px solid transparent'}">
              <pre v-if="Object.keys(currentParams).length > 0">{{$route.params.method}}({{requestArgs}});</pre>
              <pre v-else>{{$route.params.method}}();</pre>
              <Button type="primary"
                      :loading="isRequesting"
                      icon="md-play"
                      @click="run">
                <span v-if="!isRequesting">运行</span>
                <span v-else>运行中...</span>
              </Button>
              <Tooltip content="复制调用方法"
                       placement="right"
                       class="method_copy_wrapper">
                <svg class="method_copy_ref">
                  <use xlink:href="#copy"></use>
                </svg>
              </Tooltip>
            </div>
          </FormItem>
        </Form>

        <!-- <form class="methods_form"
              action="javascript:void(0)">
          <div class="form_item"
               v-for="(value, key) in currentParams"
               :key="key">
            <label :for="key">{{value.label}}
            </label>
            <input type="text"
                   class="custom_input"
                   :id="key"
                   :placeholder="'请输入' + value.label"
                   :name="key"
                   v-model="requestArgs[key]" />
          </div>
          <div class="form_item operation"
               v-if="Object.keys(remainsDynamicParams).length > 0">
            <svg @click="showDynamicParamsModal">
              <use xlink:href="#plus-circle"></use>
            </svg>
          </div>
          <div class="form_footer"
               :style="{borderTop: Object.keys(currentParams).length > 0 ? '1px solid #eeeeee' : '1px solid transparent'}">
            <pre v-if="Object.keys(currentParams).length > 0">{{$route.params.method}}({{requestArgs}});</pre>
            <pre v-else>{{$route.params.method}}();</pre>
            <button class="btn_run"
                    :class="[isRequesting ? 'running' : '']"
                    @click="run">
              <svg>
                <use :xlink:href="isRequesting ? '#loading' : '#play'"></use>
              </svg>
              <span v-if="isRequesting">运行中...</span>
              <span v-else>运行</span>
            </button>
            <Tooltip content="复制调用方法"
                     placement="right"
                     class="method_copy_wrapper">
              <svg class="method_copy_ref">
                <use xlink:href="#copy"></use>
              </svg>
            </Tooltip>
          </div>
        </form> -->
        <div class="result_container"
             :class="[(result.hasOwnProperty('data') && result.data) ? 'allow_copy' : '']">
          <div class="result_status_container"
               v-if="!isRequesting && (result.status == '0')"></div>
          <div class="result_status_container success"
               v-else-if="!isRequesting && (result.status == '1')">请求成功</div>
          <div class="result_status_container error"
               v-else-if="!isRequesting && (result.status == '-1')">请求失败</div>
          <div class="result_status_container info"
               v-else-if="isRequesting">
            请求中
            <svg class="loading_dots">
              <use xlink:href="#loading-dots"></use>
            </svg>
          </div>
          <json-view class="result_data_container"
                     v-if="!isRequesting && (result.hasOwnProperty('data')) && (typeof result.data !== 'string')"
                     :data="result.data"></json-view>
          <pre class="result_data_container result_data_container_error"
               v-else-if="!isRequesting && (typeof result.data === 'string')">{{result.data}}</pre>
          <pre class="result_data_container result_data_container_error"
               v-else-if="!isRequesting">{{JSON.stringify(result.data, null, 2)}}</pre>
          <div class="result_data_container_blank"
               v-else-if="isRequesting">
            <svg>
              <use xlink:href="#loading"></use>
            </svg>
          </div>
          <Tooltip content="复制返回结果"
                   placement="left"
                   class="result_copy_wrapper">
            <svg class="result_copy_ref">
              <use xlink:href="#copy"></use>
            </svg>
          </Tooltip>
        </div>
      </div>
    </div>

    <Modal v-model="remainsDynamicParamsModalShown"
           title="添加参数"
           :width="300"
           @on-ok="addDynamicParams"
           @on-cancel="resetDynamicParams">
      <div class="remains_item"
           style="width: 100%; height: 32px; display: flex; flex-direction: row; align-items: center;"
           v-for="(value, key) in currentDynamicParams"
           :key="key">
        <div class="remains_item_ck">
          <Checkbox :value="renderDynamicParams.hasOwnProperty(key)"
                    @on-change="toggleRemainsItem($event, key)">
            <span style="font-size: 13px; margin-left: 5px;">{{value.label}}</span>
            <span style="margin-left: 5px;">{{key}}</span>
          </Checkbox>
        </div>
      </div>
      <div slot="footer"
           class="remains_footer">
        <Checkbox :indeterminate="indeterminate"
                  :value="checkedAll">全选</Checkbox>
        <div class="remains_footer_btns">
          <Button type="text">取消</Button>
          <Button type="primary">确定</Button>
        </div>
      </div>
    </Modal>
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
  .highlight .highlight_title {
    font-size: 15px;
    font-weight: bold;
    color: #888;
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
  .highlight_code .import_copy_wrapper {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  .highlight_code svg {
    fill: #444;
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
  .dynamic_item:hover .dynamic_item_remove {
    opacity: 1;
  }
  .dynamic_item_remove {
    width: 40px;
    height: 32px;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .usage_container {
    width: 100%;
    /* min-height: 225px; */
    margin-top: 15px;
    height: 600px;
    padding: 0;
    box-sizing: border-box;
    background-color: #f6f8fa;
    border: 1px solid #eee;
    transition: all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform-origin: 50% 0;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }
  .result_container {
    position: relative;
    width: calc(100% - 380px);
    min-height: 100%;
    border-left: 1px solid #eee;
    padding: 0;
    box-sizing: border-box;
    font-size: 13px;
    background-color: #1e1e1e;
  }
  .result_container .result_copy_wrapper {
    position: absolute;
    top: 50px;
    right: 15px;
  }
  .result_container .result_copy_ref {
    fill: #eee;
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
  .result_container.allow_copy:hover .result_copy_ref {
    opacity: 1;
  }
  .methods_form {
    width: 380px;
    padding: 15px;
    overflow-y: auto;
  }
  .methods_form .form_item {
    font-size: 14px;
    width: 100%;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .methods_form .form_item_operation {
    margin-bottom: 5px;
    padding-right: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .methods_form .form_item_operation svg {
    fill: #42b983;
    width: 28px;
    height: 28px;
    cursor: pointer;
  }
  .methods_form .form_item_operation svg:hover {
    opacity: 0.7;
  }
  .custom_input {
    display: inline-block;
    width: 220px;
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
    position: relative;
    width: 350px;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .form_footer .method_copy_wrapper {
    position: absolute;
    top: 5px;
    left: 0;
  }
  .form_footer .method_copy_ref {
    fill: #444;
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
  .form_footer:hover .method_copy_ref {
    opacity: 1;
  }
  .form_footer pre {
    max-width: 250px;
    line-height: 1.5;
    white-space: pre-wrap;
    word-break: break-all;
  }
  .form_footer button {
    border: 1px solid #e0e0e0;
    background-color: #fefefe;
    color: #555;
    transition: all 0.3s ease-in-out;
    /* padding: 4px 15px 4px 10px; */
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .form_footer button:focus {
    outline: none;
  }
  .form_footer button:active,
  .form_footer button:hover {
    background-color: #42b983;
    color: #fff;
  }
  .form_footer button svg {
    fill: #42b983;
    stroke: #42b983;
    margin-right: 8px;
    margin-top: 2px;
    width: 18px;
    height: 18px;
  }
  .form_footer button:active svg,
  .form_footer button:hover svg {
    fill: #ffffff !important;
  }
  .form_footer button.running {
    background-color: #fefefe !important;
    color: #aaa !important;
    border: 1px solid #eee !important;
    cursor: not-allowed !important;
  }
  .form_footer button.running:active {
    background-color: #fefefe !important;
    color: #aaa !important;
  }
  .form_footer button.running:active svg,
  .form_footer button.running:hover svg {
    fill: #42b983 !important;
    stroke: #42b983 !important;
  }

  .result_status_container.success {
    background-color: #42b983;
    color: #ffffff;
    padding: 8px;
  }
  .result_status_container.error {
    background-color: #d9534f;
    color: #ffffff;
    padding: 8px;
  }
  .result_status_container.info {
    background-color: #5bc0de;
    color: #ffffff;
    padding: 8px;
  }
  .result_status_container .loading_dots {
    fill: #fff;
    width: 12px;
    height: 3px;
  }
  .result_data_container {
    padding: 15px 15px 15px 0;
    /* min-height: 190px; */
    /* height: 600px; */
    height: calc(100% - 50px);
    overflow: auto;
    box-sizing: border-box;
    white-space: pre-wrap;
  }
  .result_data_container_error {
    padding-left: 15px;
    color: #ccc;
  }
  .result_data_container_blank {
    /* min-height: 190px; */
    height: 600px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);
  }
  .result_data_container_blank svg {
    width: 32px;
    height: 32px;
    fill: #42b983;
    stroke: #42b983;
  }

  .remains_footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .remains_footer_btns {
    height: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .remains_footer_btns button {
    outline: none;
    box-shadow: none;
  }
</style>

<script>
  import * as Job from '../../../../plugins-3d/lib/domains/job/service'
  import * as User from '../../../../plugins-3d/lib/domains/user/service'
  import * as Company from '../../../../plugins-3d/lib/domains/company/service'
  import jsonView from '../third/json-view'
  import Clipboard from 'clipboard'
  import { Tooltip, Modal, Form, FormItem, Input, Button, Checkbox, Icon } from 'iview'
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
    components: {
      jsonView,
      Tooltip,
      Modal, Form, FormItem, Input, Button, Checkbox, Icon
    },
    data () {
      return {
        DOMAIN: {
          job: Job,
          user: User,
          company: Company
        },
        requestArgs: {},
        result: {
        },
        isRequesting: false, // 正在请求
        remainsDynamicParams: {}, // 剩余的动态参数
        selectedDynamicParams: {}, // 选中的动态参数
        renderDynamicParams: {},
        remainsDynamicParamsModalShown: true
      }
    },
    computed: {
      store () {
        return this.$store
      },
      domains () {
        return this.store.state.domains
      },
      currentDomain () {
        return this.domains.filter(item => {
          return item.name.toLowerCase() === this.$route.params.domain.toLowerCase()
        })[0]
      },
      currentMethod () {
        return this.currentDomain.children.filter(item => {
          return item.name.toLowerCase() === this.$route.params.method.toLowerCase()
        })[0]
      },
      currentParams () {
        return this.currentMethod.params
      },
      currentDynamicParams () {
        return this.currentMethod.dynamicParams || {}
      },
      indeterminate () {
        return (Object.keys(this.selectedDynamicParams).length !== Object.keys(this.currentDynamicParams).length) && (Object.keys(this.selectedDynamicParams).length > 0)
      },
      checkedAll () {
        return (Object.keys(this.selectedDynamicParams).length === Object.keys(this.currentDynamicParams).length)
      }
    },
    mounted () {
      this.initClipboardBtns()
    },
    methods: {
      initClipboardBtns () {
        let importCopyRef = new Clipboard('.import_copy_ref', {
          text: () => {
            return 'import { ' + this.$route.params.method + ' } from "plugins-3d/lib/domains/' + this.$route.params.domain + '/service"'
          }
        })
        importCopyRef.on('success', (e) => {
          this.$toast.success({
            message: '复制成功',
            displayMode: 2
          })
        })
        let resultCopyRef = new Clipboard('.result_copy_ref', {
          text: () => {
            return JSON.stringify(this.result.data)
          }
        })
        resultCopyRef.on('success', (e) => {
          this.$toast.success({
            message: '复制成功',
            displayMode: 2
          })
        })
        let methodCopyRef = new Clipboard('.method_copy_ref', {
          text: () => {
            let text = ''
            if (Object.keys(this.currentParams).length > 0) {
              text = `${this.$route.params.method}(${JSON.stringify(this.requestArgs, null, 2)});`
            } else {
              text = `${this.$route.params.method}();`
            }
            return text
          }
        })
        methodCopyRef.on('success', (e) => {
          this.$toast.success({
            message: '复制成功',
            displayMode: 2
          })
        })
      },
      setArg (evt, argName) {
        this.requestArgs[argName] = evt.target.value
      },
      formatArgs () {
        let args = {}
        let allParams = Object.assign({}, this.currentParams, this.renderDynamicParams)
        for (let p in allParams) {
          if (allParams.hasOwnProperty(p)) {
            if (!args.hasOwnProperty(p)) {
              args[p] = allParams[p].default
            }
          }
        }
        return args
      },
      async run () {
        if (this.isRequesting) {
          return
        }
        this.isRequesting = true
        let args = this.requestArgs
        let response = {}
        await this.DOMAIN[this.$route.params.domain][this.$route.params.method](args).then(response => {
          if (response.statusCode !== 200) {
            this.result.status = '-1'
          } else {
            this.result.status = '1'
          }
          this.result.data = response || {}
        }).catch(err => {
          this.result.status = '-1'
          this.result.data = err.message
        })
        setTimeout(() => {
          this.isRequesting = false
        }, 1000)
      },
      showDynamicParamsModal () {
        this.remainsDynamicParamsModalShown = true
        this.selectedDynamicParams = Object.assign({}, this.renderDynamicParams)
      },
      toggleRemainsItem (flag, key) {
        if (flag) {
          if (this.remainsDynamicParams.hasOwnProperty(key)) {
            this.remainsDynamicParams[key] = null
            delete this.remainsDynamicParams[key]
          }
          if (!this.selectedDynamicParams.hasOwnProperty(key)) {
            this.selectedDynamicParams[key] = this.currentDynamicParams[key]
          }
        } else {
          if (!this.remainsDynamicParams.hasOwnProperty(key)) {
            this.remainsDynamicParams[key] = this.currentDynamicParams[key]
          }
          if (this.selectedDynamicParams.hasOwnProperty(key)) {
            this.selectedDynamicParams[key] = null
            delete this.selectedDynamicParams[key]
          }
        }
      },
      addDynamicParams () {
        this.renderDynamicParams = Object.assign({}, this.selectedDynamicParams)
        this.requestArgs = this.formatArgs()
        this.selectedDynamicParams = {}
      },
      removeDynamicParams (key) {
        if (this.renderDynamicParams.hasOwnProperty(key)) {
          this.renderDynamicParams[key] = null
          delete this.renderDynamicParams[key]
          if (!this.remainsDynamicParams.hasOwnProperty(key)) {
            this.remainsDynamicParams[key] = this.currentDynamicParams[key]
          }
          this.requestArgs = this.formatArgs()
        }
      },
      resetDynamicParams () {
        if (Object.keys(this.selectedDynamicParams).length > 0) {
          this.remainsDynamicParams = Object.assign({}, this.remainsDynamicParams, this.selectedDynamicParams)
          // this.selectedDynamicParams = {}
        }
      }
    },
    watch: {
      '$route': {
        immediate: true,
        handler (val) {
          this.requestArgs = this.formatArgs()
        }
      },
      'currentDynamicParams': {
        immediate: true,
        handler (val) {
          this.remainsDynamicParams = JSON.parse(JSON.stringify(val))
        }
      }
    }
  }
</script>
