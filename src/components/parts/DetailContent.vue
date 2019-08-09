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
                   :placeholder="'请输入' + value.label"
                   :name="key"
                   v-model="requestArgs[key]" />
          </div>
          <div class="form_footer"
               :style="{borderTop: Object.keys(params).length > 0 ? '1px solid #eeeeee' : '1px solid transparent'}">
            <pre v-if="Object.keys(params).length > 0">{{$route.params.methods}}({{requestArgs}});</pre>
            <pre v-else>{{$route.params.methods}}();</pre>
            <button class="btn_run"
                    :class="[isRequesting ? 'running' : '']"
                    @click="run">
              <svg>
                <use :xlink:href="isRequesting ? '#loading' : '#play'"></use>
              </svg>
              <span v-if="isRequesting">运行中...</span>
              <span v-else>运行</span>
            </button>
          </div>
        </form>
        <div class="result_container">
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
          <pre class="result_data_container"
               v-if="!isRequesting && (result.status != '0')">{{JSON.stringify(result.data, null, 2)}}</pre>
          <div class="result_data_container_blank"
               v-else-if="isRequesting">
            <svg>
              <use xlink:href="#loading"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
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
    min-height: 225px;
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
    width: calc(100% - 380px);
    min-height: 100%;
    border-left: 1px solid #eee;
    padding: 0;
    box-sizing: border-box;
    font-size: 13px;
    background-color: #f5f5f5;
  }
  .methods_form {
    width: 350px;
    padding: 15px;
    display: flex;
    flex-direction: column;
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .form_footer pre {
    max-width: 250px;
    white-space: pre-wrap;
    word-break: break-all;
  }
  .form_footer button {
    border: 1px solid #e0e0e0;
    background-color: #fefefe;
    color: #555;
    transition: all 0.3s ease-in-out;
    padding: 4px 15px 4px 10px;
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
    padding: 15px;
    min-height: 185px;
    max-height: 500px;
    overflow: auto;
    box-sizing: border-box;
    white-space: pre-wrap;
  }
  .result_data_container_blank {
    min-height: 185px;
    max-height: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.3);
  }
  .result_data_container_blank svg {
    width: 32px;
    height: 32px;
    fill: #42b983;
    stroke: #42b983;
  }
</style>

<script>
  import * as Job from '../../../../plugins-3d/lib/domains/job/service'
  import * as User from '../../../../plugins-3d/lib/domains/user/service'
  import * as Company from '../../../../plugins-3d/lib/domains/company/service'
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
        requestArgs: {},
        result: {
          status: '0',
          data: {}
        },
        mockData: { "code": 200, "data": { "positionFeedback": { "display": false, "averageTime": null, "lastSignInTime": null }, "detailedCompany": { "companyLogo": "https://zhaopin-rd5-pub.oss-cn-beijing.aliyuncs.com/imgs/company/9d91b8da2e72ab747b91ffb56fd35d96.png", "videoUrl": "", "industry": "互联网/电子商务,互联网/电子商务,零售/批发", "companySize": "20-99人", "companyDescription": "本公司是在“互联网+”经济迅猛发展的大背景下成立的。公司名称中的“龙梦”两字源于习总书记提出的“中国梦”，强调“龙梦”就是“中国梦”。公司秉承“承载希望、自强不息、交流交融、天下为公”的企业文化精神，创造新的行业发展生态，实现“互联网+”平台型企业深度发展战略目标。成就新国货，赋能新零售，服务新消费。从产品和品牌策划，到销售策略，为渠道赋能，为渠道客户服务！", "companyUrl": "http://company.zhaopin.com/CZ407312210.htm", "companyName": "石家庄龙梦电子商务有限公司", "companyNumber": "CZ407312210", "menVipUrl": "", "menVipLevel": 0, "industryCode": "210500,210500,170000", "url": "http://company.zhaopin.com/CZ407312210.htm", "bestEmployerType": 0 }, "detailedPosition": { "companyName": "石家庄龙梦电子商务有限公司", "companyNumber": "CZ407312210", "menVipUrl": "", "menVipLevel": 0, "industryCode": "210500,210500,170000", "bestEmployerType": 0, "bestEmployerLabel": [], "welfareLabel": [{ "state": 0, "value": "全勤奖" }, { "state": 0, "value": "不加班" }, { "state": 0, "value": "节日福利" }, { "state": 0, "value": "绩效奖金" }, { "state": 0, "value": "试用期全额" }, { "state": 0, "value": "带薪年假" }, { "state": 0, "value": "每年多次调薪" }, { "state": 0, "value": "公司重点项目" }], "subJobType": "6", "jobStatus": 3, "skillLabel": [{ "state": 0, "value": "市场拓展" }, { "state": 0, "value": "市场" }, { "state": 0, "value": "﻿销售" }, { "state": 0, "value": "客户代表" }], "jobDescPC": "<div>岗位职责</div><div>1、利用公司提供的优质客户资源通过与客户沟通，寻找销售机会并完成销售业绩。</div><div>2、开发新客户，维护老客户的业务，挖掘客户的最大潜力；</div><div>3、配合公司完成各项计划及销售业绩目标。</div><div>4、定期与合作客户进行沟通，建立良好的长期合作关系。</div><div><br></div><div>任职资格</div><div>1、口齿清晰，普通话流利，语音富有感染力；</div><div>2、热爱销售工作，抗压能力强，工作主动，有团队合作精神；</div><div>3、具备较强的学习能力和优秀的沟通能力；</div><div>4、有相关电话客服，销售工作经验者优先。</div><div>5、服从公司安排与管理，优秀的毕业生放宽要求。</div>", "workAddress": "桥西区清河桥邮电大楼", "latitude": "40.817125", "longitude": "114.882702", "publishTime": "2019-08-08 14:28:56", "education": "不限", "emailListPc": "2404773725@qq.com", "applyType": "1", "futureJob": false, "salary60": "5千-8千", "workingExp": "不限", "cityId": "571", "workCity": "张家口", "recruitNumber": 10, "number": "CC407312210J00139254515", "name": "市场开发", "cityDistrict": "", "chatWindow": 0, "url": "//www.zhaopin.com/zhangjiakou/", "jobDesc": "<div>岗位职责</div><div>1、利用公司提供的优质客户资源通过与客户沟通，寻找销售机会并完成销售业绩。</div><div>2、开发新客户，维护老客户的业务，挖掘客户的最大潜力；</div><div>3、配合公司完成各项计划及销售业绩目标。</div><div>4、定期与合作客户进行沟通，建立良好的长期合作关系。</div><div><br></div><div>任职资格</div><div>1、口齿清晰，普通话流利，语音富有感染力；</div><div>2、热爱销售工作，抗压能力强，工作主动，有团队合作精神；</div><div>3、具备较强的学习能力和优秀的沟通能力；</div><div>4、有相关电话客服，销售工作经验者优先。</div><div>5、服从公司安排与管理，优秀的毕业生放宽要求。</div>" } } },
        mockData2: { "code": 200, "data": { "FeedBackUnReadCount": "", "Id": 680921371, "Invitation": "", "Name": "hulk", "PhotoUrl": "/avatar/2019/1/10/bb30b10c-b44a-4e85-ae44-84455345c573.jpg", "ViewCount": "", "userType": 1, "userId": 680921371 } },
        isRequesting: false // 正在请求
      }
    },
    created () {

    },
    methods: {
      setArg (evt, argName) {
        this.requestArgs[argName] = evt.target.value
      },
      formatArgs () {
        let args = {}
        for (let p in this.params) {
          if (this.params.hasOwnProperty(p)) {
            if (!args.hasOwnProperty(p)) {
              args[p] = this.params[p].default
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
        // let ran = (Math.random() < 0.5)
        // this.result.status = ran ? '-1' : '1'
        // this.result.data = ran ? this.mockData2 : this.mockData
        let args = this.requestArgs
        let response = {}
        switch (this.$route.params.domain) {
          case 'job':
            await Job[this.$route.params.methods](args).then(response => {
              if (response.code !== 200) {
                this.result.status = '-1'
              } else {
                this.result.status = '1'
              }
              this.result.data = response || {}
            }).catch(err => {
              this.result.status = '-1'
              this.result.data = err.message
            })
            break
          case 'user':
            response = await User[this.$route.params.methods](args)
            break
          case 'company':
            await Company[this.$route.params.methods](args).then(response => {
              if (response.code !== 200) {
                this.result.status = '-1'
              } else {
                this.result.status = '1'
              }
              this.result.data = response || {}
            }).catch(err => {
              this.result.status = '-1'
              this.result.data = err.message
            })
            break
          default:
            break
        }
        setTimeout(() => {
          this.isRequesting = false
        }, 1000)
      }
    },
    watch: {
      '$route': {
        immediate: true,
        handler (val) {
          this.requestArgs = this.formatArgs()
        }
      }
    }
  }
</script>
