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
  rootCompanyId: '87560889',
  companyId: '87560889',
  resumeNumber: 'JL057887747R90500000000',
  userId: '705788774',
  at: 'ec1e3ffbd54e4af384c108692459b4e8',
  rt: '8a5ec8cf79914f318760fea26a263d70'
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
            label: '获取职位详情',
            name: 'requestJobDetail',
            params: {
              'number': {
                type: 'String',
                default: DEFAULT_CONFIG.jobNumber,
                label: '职位编号'
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
                default: DEFAULT_CONFIG.companyId,
                label: '公司ID'
              },
              'cityId': {
                type: 'String',
                default: '',
                label: '城市ID'
              }
            }
          },
          {
            label: '获取在招职位所在城市',
            name: 'requestAreaJobCity',
            params: {
              'number': {
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
              'jobNumbers': {
                type: 'Array',
                default: [DEFAULT_CONFIG.jobNumber],
                label: '职位编号'
              },
              'resumeNumber': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeNumber,
                label: '简历编号'
              },
              'batched': {
                type: 'Boolean',
                default: false,
                label: '是否批投'
              },
              'cityIds': {
                type: 'Array',
                default: ['565'],
                label: '城市ID'
              },
              'inviteCode': {
                type: 'String',
                default: '',
                label: '内推码'
              },
              'jobSource': {
                type: 'String',
                default: 'RECOMMENDATION',
                label: '职位来源'
              },
              'pageCode': {
                type: 'String',
                default: 4020,
                label: 'PageCode'
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
              'companyNumber': {
                type: 'String',
                default: '',
                label: '公司编号'
              }
            }
          },
          {
            label: '获取公司问答',
            name: 'requestCompanyQuestion',
            params: {}
          },
          {
            label: '获取公司面试邀请',
            name: 'requestCompanyInterview',
            params: {
              'rootCompanyId': {
                type: 'String',
                default: '',
                label: '公司RootId'
              },
              'companyId': {
                type: 'String',
                default: '',
                label: '公司Id'
              }
            }
          },
          {
            label: '获取公司点评信息',
            name: 'requestCompanyComment',
            params: {
              'companyNumber': {
                type: 'String',
                default: '',
                label: '公司编号'
              }
            }
          }
        ]
      },
      {
        label: '简历领域',
        name: 'resume',
        children: [

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
