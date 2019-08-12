/***
 **                                                          _ooOoo_
 **                                                         o8888888o
 **                                                         88" . "88
 **                                                         (| -_- |)
 **                                                          O\ = /O
 **                                                      ____/`---'\____
 **                                                    .   ' \\| |// `.
 **                                                     / \\||| : |||// \
 **                                                   / _||||| -:- |||||- \
 **                                                     | | \\\ - /// | |
 **                                                   | \_| ''\---/'' | |
 **                                                    \ .-\__ `-` ___/-. /
 **                                                 ___`. .' /--.--\ `. . __
 **                                              ."" '< `.___\_<|>_/___.' >'"".
 **                                             | | : `- \`.;`\ _ /`;.`/ - ` : | |
 **                                               \ \ `-. \_ __\ /__ _/ .-` / /
 **                                       ======`-.____`-.___\_____/___.-`____.-'======
 **                                                          `=---='
 **
 **                                       .............................................
 **                                              佛祖保佑             永无BUG
 **                                      佛曰:
 **                                              写字楼里写字间，写字间里程序员；
 **                                              程序人员写程序，又拿程序换酒钱。
 **                                              酒醒只在网上坐，酒醉还来网下眠；
 **                                              酒醉酒醒日复日，网上网下年复年。
 **                                              但愿老死电脑间，不愿鞠躬老板前；
 **                                              奔驰宝马贵者趣，公交自行程序员。
 **                                              别人笑我忒疯癫，我笑自己命太贱；
 **                                              不见满街漂亮妹，哪个归得程序员？
 */

/**
* Created by liangshan on 2017/7/13.
*/
import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import * as mutations from './mutations'

Vue.use(Vuex)

const DEFAULT_CONFIG = {
  jobNumber: 'CC875608890J00261530502',
  companyNumber: 'CZ875608890',
  companyName: '广州热招测试有限公司',
  rootCompanyId: '87560889',
  companyId: '87560889',
  resumeId: '312604895',
  resumeNumber: 'JL203611385R90500000000',
  resumeVersion: 1,
  resumeLanguage: 1,
  nodeName: 'WorkExperience',
  platform: '13',
  userId: '705788774',
  at: '39b7fa7e518f449487ac1e0cfdbb9d8e',
  rt: '0a0200e54dc145caadd9ffe8a67bc095'
}

const store = new Vuex.Store({
  // actions: actions.actions,
  // mutations: mutations.mutations,
  // getters: getters.getters,
  state: {
    domains: [
      {
        label: '用户信息&鉴权领域',
        name: 'user',
        children: [
          {
            label: '登录',
            name: 'login',
            params: {
              'username': {
                type: 'String',
                default: 'ls',
                label: '用户名'
              },
              'password': {
                type: 'String',
                default: '123123',
                label: '密码'
              }
            }
          },
          {
            label: '注册',
            name: 'register',
            params: {}
          },
          {
            label: '获取用户详情',
            name: 'getUserDetail',
            params: {}
          }
        ]
      },
      {
        label: '职位领域',
        name: 'job',
        children: [
          {
            label: '获取推荐职位',
            name: 'requestRecommendJobs',
            params: {
              'resumeVersion': {
                type: 'String',
                default: '1',
                label: '简历版本'
              },
              'resumeNumber': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeNumber,
                label: '简历编号'
              },
              'isCompus': {
                type: 'String',
                default: '0', // 0: 非学生； 1：学生
                label: '是否学生'
              },
              'eventScenario': {
                type: 'String',
                default: 'weexAppHome',
                label: '事件场景',
                options: [
                  {
                    label: 'Weex首页',
                    value: 'weexAppHome'
                  },
                  {
                    label: 'App搜索结果页',
                    value: 'searchListRecommend'
                  },
                  {
                    label: 'iOS原生首页',
                    value: 'nativeiOSHome'
                  },
                  {
                    label: 'Android原生首页',
                    value: 'nativeAndroidHome'
                  }
                ]
              }
            }
          },
          {
            label: '获取职位详情',
            name: 'requestJobDetail',
            params: {
              'number': {
                type: 'String',
                default: DEFAULT_CONFIG.jobNumber,
                label: '职位编号'
              },

              'channel': {
                type: 'String',
                default: 'pc',
                label: '渠道'
              },
              'feedback': {
                type: 'Boolean',
                default: true,
                label: '组装反馈数据'
              }
            }
          },
          {
            label: '获取相似职位',
            name: 'requestSimilarJobs',
            params: {
              'number': {
                type: 'String',
                default: DEFAULT_CONFIG.jobNumber,
                label: '职位编号'
              },
              'subJobType': {
                type: Number,
                default: 6,
                label: '职位类别'
              },
              'cityId': {
                type: 'String',
                default: '571',
                label: '城市ID'
              }
            }
          },
          {
            label: '获取在招职位',
            name: 'requestAreaJobs',
            params: {
              'companyId': {
                type: 'String',
                default: DEFAULT_CONFIG.companyNumber + ';CZ407312210', // 多个值用;号区分
                label: '公司编号'
              },
              'workCity': {
                type: 'String',
                default: '',
                label: '工作城市ID'
              }
            }
          },
          {
            label: '获取在招职位所在城市',
            name: 'requestAreaJobCity',
            params: {
              'companyNumber': {
                type: 'String',
                default: DEFAULT_CONFIG.jobNumber,
                label: '职位编号'
              }
            }
          },
          {
            label: '收藏职位',
            name: 'requestJobCollection',
            params: {
              'positionNumbers': {
                type: 'String',
                default: DEFAULT_CONFIG.jobNumber,
                label: '职位编号'
              },
              'cityIds': {
                type: 'String',
                default: '530',
                label: '城市ID'
              }
            }
          },
          {
            label: '投递职位',
            name: 'requestJobDeliver',
            params: {
              'positionNumbers': {
                type: 'String',
                default: DEFAULT_CONFIG.jobNumber,
                label: '职位编号'
              },
              'resumeNumber': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeNumber,
                label: '简历编号'
              },
              'deliveryWay': {
                type: 'String',
                default: '0',
                label: '是否批投'
              },
              'cityIds': {
                type: 'String',
                default: '565',
                label: '城市ID'
              },
              'inviteCode': {
                type: 'String',
                default: '',
                label: '内推码'
              },
              'channel': {
                type: 'String',
                default: 'pc',
                label: '渠道'
              },
              'st_action': {
                type: 'String',
                default: '701',
                label: '职位来源'
              }
            }
          },
          {
            label: '获取职位投递状态',
            name: 'requestJobDeliverStatus',
            params: {
              'number': {
                type: 'String',
                default: DEFAULT_CONFIG.jobNumber,
                label: '职位编号'
              }
            }
          },
          {
            label: '获取职位的小程序二维码',
            name: 'requestJobMpQrcode',
            params: {
              'number': {
                type: 'String',
                default: DEFAULT_CONFIG.jobNumber,
                label: '职位编号'
              },
              'width': {
                type: 'Number',
                default: 120,
                label: '宽度'
              },
              'hyaline': {
                type: 'Boolean',
                default: false,
                label: '是否透明背影'
              }
            }
          }
        ]
      },
      {
        label: '公司领域',
        name: 'company',
        children: [
          {
            label: '获取公司详情',
            name: 'requestCompanyDetail',
            params: {
              'number': {
                type: 'String',
                default: DEFAULT_CONFIG.companyNumber,
                label: '公司编号'
              },
              'platform': {
                type: 'String',
                default: DEFAULT_CONFIG.platform,
                label: '平台'
              }
            }
          },
          {
            label: '获取公司问答',
            name: 'requestCompanyQuestion',
            params: {
              'companyName': {
                type: 'String',
                default: DEFAULT_CONFIG.companyName,
                label: '公司名称'
              }
            }
          },
          {
            label: '获取公司面试邀请数量',
            name: 'requestCompanyInterviewCount',
            params: {
              'rootCompanyId': {
                type: 'String',
                default: DEFAULT_CONFIG.rootCompanyId,
                label: '公司RootID'
              },
              'companyId': {
                type: 'String',
                default: DEFAULT_CONFIG.companyId,
                label: '公司ID'
              }
            }
          },
          {
            label: '获取公司点评信息',
            name: 'requestCompanyComment',
            params: {
              'orgNumber': {
                type: 'String',
                default: DEFAULT_CONFIG.companyNumber,
                label: '公司编号'
              }
            }
          }
        ]
      },
      {
        label: '简历领域',
        name: 'resume',
        // requestResumeGetNode: '/capi/resume/getResumeNode', // 获取简历节点信息
        // requestResumeSetNode: '/capi/resume/saveResumeNode', // 添加或更新简历节点信息
        // requestResumeDeleteNode: '/capi/resume/deleteResumeNode', // 删除简历节点信息
        // requestResumePreview: '/capi/resume/preview', // 预览简历
        // requestResumeDelete: '/capi/resume/delete', // 删除简历
        children: [
          {
            label: '获取简历节点信息',
            name: 'requestResumeGetNode',
            params: {
              'resumeId': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeId,
                label: '简历ID'
              },
              'resumeNumber': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeNumber,
                label: '简历编号'
              },
              'resumeVersion': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeVersion,
                label: '简历版本号'
              },
              'resumeLanguage': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeLanguage,
                label: '简历语言'
              },
              'nodeName': {
                type: 'String',
                default: DEFAULT_CONFIG.nodeName,
                label: '简历节点'
              }
            }
          },
          {
            label: '添加或更新简历节点信息',
            name: 'requestResumeSetNode',
            params: {
              'resumeId': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeId,
                label: '简历ID'
              },
              'resumeNumber': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeNumber,
                label: '简历编号'
              },
              'resumeVersion': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeVersion,
                label: '简历版本号'
              },
              'resumeLanguage': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeLanguage,
                label: '简历语言'
              },
              'nodeName': {
                type: 'String',
                default: DEFAULT_CONFIG.nodeName,
                label: '简历节点'
              }
            }
          },
          {
            label: '删除简历节点信息',
            name: 'requestResumeDeleteNode',
            params: {
              'resumeId': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeId,
                label: '简历ID'
              },
              'resumeNumber': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeNumber,
                label: '简历编号'
              },
              'resumeVersion': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeVersion,
                label: '简历版本号'
              },
              'resumeLanguage': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeLanguage,
                label: '简历语言'
              },
              'nodeName': {
                type: 'String',
                default: DEFAULT_CONFIG.nodeName,
                label: '简历节点'
              }
            }
          },
          {
            label: '预览简历',
            name: 'requestResumePreview',
            params: {
              'resumeId': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeId,
                label: '简历ID'
              },
              'resumeNumber': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeNumber,
                label: '简历编号'
              },
              'resumeVersion': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeVersion,
                label: '简历版本号'
              },
              'resumeLanguage': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeLanguage,
                label: '简历语言'
              }
            }
          },
          {
            label: '删除简历',
            name: 'requestResumeDelete',
            params: {
              'resumeId': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeId,
                label: '简历ID'
              },
              'resumeNumber': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeNumber,
                label: '简历编号'
              },
              'resumeVersion': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeVersion,
                label: '简历版本号'
              },
              'resumeLanguage': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeLanguage,
                label: '简历语言'
              }
            }
          }
        ]
      },
      {
        label: '广告领域',
        name: 'ads',
        children: [

        ]
      },
      {
        label: '其它领域',
        name: 'other',
        children: [

        ]
      }
    ]
  }
})

export default store

global.store = store
