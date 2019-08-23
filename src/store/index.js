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
  resumeName: '测试简历',
  resumeId: '312604895',
  resumeNumber: 'JL203611385R90500000000',
  resumeVersion: 1,
  resumeLanguage: 1,
  nodeName: 'WorkExperience',
  resumeSid: '16608a08e69b475e886f1ac22db0d8cc',
  resumeBusinessInfo: 'JL203611385R90500000000_1',
  resumeAvatarUrl: 'http://mypics.zhaopin.cn/attachment/2019/08/07/c12ad23a-cbf5-4300-bf63-36ab28176a80.png',
  platform: '13',
  userId: '705788774',
  at: '2e80b0e4dbad4b55abd5fea6f7349d58',
  rt: 'c8d08a37e2b34df196980126c1178989'
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
              'resumeNumber': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeNumber,
                label: '简历编号'
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
            },
            dynamicParams: {
              'resumeVersion': {
                type: 'String',
                default: '1',
                label: '简历版本'
              },
              'isCompus': {
                type: 'Number',
                default: 0, // 0: 非学生； 1：学生
                label: '是否学生',
                options: [
                  {
                    label: '非学生',
                    value: 0
                  },
                  {
                    label: '学生',
                    value: 1
                  }
                ]
              }
            }
          },
          {
            label: '搜索职位',
            name: 'requestJobSearch',
            params: {
              'kw': {
                type: 'String',
                default: '',
                label: '全文关键词'
              }
            },
            dynamicParams: {
              'sort': {
                type: 'Number',
                default: 0,
                label: '排序方式',
                options: [
                  {
                    label: '默认',
                    value: 0
                  },
                  {
                    label: '智能排序',
                    value: 11
                  },
                  {
                    label: '反馈',
                    value: 1
                  },
                  {
                    label: '薪资',
                    value: 2
                  },
                  {
                    label: '距离',
                    value: 3
                  },
                  {
                    label: '发布时间',
                    value: 4
                  },
                  {
                    label: '高薪职位',
                    value: 5
                  }
                ]
              },
              'salary': {
                type: 'String',
                default: '',
                label: '薪资'
              },
              'coordinate': {
                type: 'String',
                default: '',
                label: '经纬度范围'
              },
              'jobType': {
                type: 'String',
                default: '',
                label: '职位类型'
              },
              'industry': {
                type: 'String',
                default: '',
                label: '行业类别'
              },
              'welfareTag': {
                type: 'String',
                default: '',
                label: '福利标签ID'
              },
              'publishDate': {
                type: 'String',
                default: '',
                label: '发布时间'
              },
              'companyName': {
                type: 'String',
                default: '',
                label: '公司名称'
              },
              'jobName': {
                type: 'String',
                default: '',
                label: '职位名称'
              },
              'workCity': {
                type: 'String',
                default: '530',
                label: '工作城市'
              },
              'experience': {
                type: 'String',
                default: '',
                label: '工作经验要求ID'
              },
              'education': {
                type: 'String',
                default: '',
                label: '学历要求ID'
              },
              'companyType': {
                type: 'String',
                default: '',
                label: '公司性质ID'
              },
              'companyScale': {
                type: 'String',
                default: '',
                label: '公司规模ID'
              },
              'jobId': {
                type: 'String',
                default: '',
                label: '职位ID'
              },
              'companyId': {
                type: 'String',
                default: '',
                label: '公司ID'
              },
              'resumeNumber': {
                type: 'String',
                default: '',
                label: '简历编号'
              },
              'pageIndex': {
                type: 'Number',
                default: 1,
                label: '页码'
              },
              'pageSize': {
                type: 'Number',
                default: 20,
                label: '每页条数'
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
              }
            },
            dynamicParams: {
              'feedback': {
                type: 'Boolean',
                default: false,
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
              'cityId': {
                type: 'String',
                default: '530',
                label: '城市ID'
              }
            },
            dynamicParams: {
              'pageIndex': {
                type: 'Number',
                default: 1,
                label: '页码'
              }
            }
          },
          {
            label: '获取在招职位',
            name: 'requestAreaJobs',
            params: {
              'companyNumber': {
                type: 'String',
                default: DEFAULT_CONFIG.companyNumber + ';CZ407312210', // 多个值用;号区分
                label: '公司编号'
              },
              'cityId': {
                type: 'String',
                default: '530',
                label: '工作城市ID'
              }
            },
            dynamicParams: {
              'pageIndex': {
                type: 'Number',
                default: 1,
                label: '页码'
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
            },
            dynamicParams: {
              'pageIndex': {
                type: 'Number',
                default: 1,
                label: '页码'
              }
            }
          },
          {
            label: '收藏、取消收藏职位',
            name: 'requestJobCollection',
            params: {
              'number': {
                type: 'String',
                default: DEFAULT_CONFIG.jobNumber,
                label: '职位编号'
              },
              'cityId': {
                type: 'String',
                default: '530',
                label: '城市ID'
              }
            },
            dynamicParams: {
              'operateType': {
                type: 'Number',
                default: 3,
                label: '操作类型',
                options: [
                  {
                    label: '收藏职位',
                    value: 3
                  },
                  {
                    label: '取消收藏职位',
                    value: 7
                  }
                ]
              }
            }
          },
          {
            label: '投递职位',
            name: 'requestJobDeliver',
            params: {
              'number': {
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
                type: 'Number',
                default: 0,
                label: '投递类型',
                options: [
                  {
                    label: '单投',
                    value: 0
                  },
                  {
                    label: '批投',
                    value: 1
                  }
                ]
              },
              'cityId': {
                type: 'String',
                default: '530',
                label: '城市ID'
              },
              'inviteCode': {
                type: 'String',
                default: '',
                label: '内推码'
              },
              'stAction': {
                type: 'Number',
                default: 601,
                label: '来源的用户行为'
              },
              'stPage': {
                type: 'Number',
                default: 50,
                label: '来源页'
              },
              'askPageCode': {
                type: 'Number',
                default: '',
                label: '请求页pagecode'
              }
            },
            dynamicParams: {
              'cycleType': {
                type: 'Number',
                default: 0,
                label: '闭环类型',
                options: [
                  {
                    label: '默认',
                    value: 0
                  },
                  {
                    label: '公司-职位',
                    value: 1
                  },
                  {
                    label: '职位-职位',
                    value: 2
                  },
                  {
                    label: '职位-投递完成',
                    value: 3
                  }
                ]
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
                type: 'Number',
                default: DEFAULT_CONFIG.resumeLanguage,
                label: '简历语言',
                options: [
                  {
                    label: '中文',
                    value: 1
                  },
                  {
                    label: '英文',
                    value: 2
                  },
                  {
                    label: '中英文',
                    value: 3
                  }
                ]
              },
              'nodeName': {
                type: 'String',
                default: DEFAULT_CONFIG.nodeName,
                label: '简历节点',
                options: [
                  {
                    label: '个人信息',
                    value: 'Profile'
                  },
                  {
                    label: '不验证邮箱的个人信息',
                    value: 'ProfileMobileOutEmail'
                  },
                  {
                    label: '求职意向',
                    value: 'JobTarget'
                  },
                  {
                    label: '工作经验',
                    value: 'WorkExperience'
                  },
                  {
                    label: '教育背景',
                    value: 'EducationExperience'
                  },
                  {
                    label: '项目经验',
                    value: 'ProjectExperience'
                  },
                  {
                    label: '自我评价',
                    value: 'SelfEvaluation'
                  },
                  {
                    label: '语言能力',
                    value: 'LanguageSkill'
                  },
                  {
                    label: '培训经历',
                    value: 'TrainExperience'
                  },
                  {
                    label: '专业技能',
                    value: 'ProfessionalSkill'
                  },
                  {
                    label: '证书',
                    value: 'Certificate'
                  },
                  {
                    label: '图片附件',
                    value: 'Attach'
                  }
                ]
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
                type: 'Number',
                default: DEFAULT_CONFIG.resumeLanguage,
                label: '简历语言',
                options: [
                  {
                    label: '中文',
                    value: 1
                  },
                  {
                    label: '英文',
                    value: 2
                  },
                  {
                    label: '中英文',
                    value: 3
                  }
                ]
              },
              'nodeName': {
                type: 'String',
                default: DEFAULT_CONFIG.nodeName,
                label: '简历节点',
                options: [
                  {
                    label: '个人信息',
                    value: 'Profile'
                  },
                  {
                    label: '不验证邮箱的个人信息',
                    value: 'ProfileMobileOutEmail'
                  },
                  {
                    label: '求职意向',
                    value: 'JobTarget'
                  },
                  {
                    label: '工作经验',
                    value: 'WorkExperience'
                  },
                  {
                    label: '教育背景',
                    value: 'EducationExperience'
                  },
                  {
                    label: '项目经验',
                    value: 'ProjectExperience'
                  },
                  {
                    label: '自我评价',
                    value: 'SelfEvaluation'
                  },
                  {
                    label: '语言能力',
                    value: 'LanguageSkill'
                  },
                  {
                    label: '培训经历',
                    value: 'TrainExperience'
                  },
                  {
                    label: '专业技能',
                    value: 'ProfessionalSkill'
                  },
                  {
                    label: '证书',
                    value: 'Certificate'
                  },
                  {
                    label: '图片附件',
                    value: 'Attach'
                  }
                ]
              },
              'values': {
                type: 'Object',
                default: {},
                label: '节点详细内容',
              },
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
                type: 'Number',
                default: DEFAULT_CONFIG.resumeLanguage,
                label: '简历语言',
                options: [
                  {
                    label: '中文',
                    value: 1
                  },
                  {
                    label: '英文',
                    value: 2
                  },
                  {
                    label: '中英文',
                    value: 3
                  }
                ]
              },
              'nodeName': {
                type: 'String',
                default: DEFAULT_CONFIG.nodeName,
                label: '简历节点',
                options: [
                  {
                    label: '个人信息',
                    value: 'Profile'
                  },
                  {
                    label: '不验证邮箱的个人信息',
                    value: 'ProfileMobileOutEmail'
                  },
                  {
                    label: '求职意向',
                    value: 'JobTarget'
                  },
                  {
                    label: '工作经验',
                    value: 'WorkExperience'
                  },
                  {
                    label: '教育背景',
                    value: 'EducationExperience'
                  },
                  {
                    label: '项目经验',
                    value: 'ProjectExperience'
                  },
                  {
                    label: '自我评价',
                    value: 'SelfEvaluation'
                  },
                  {
                    label: '语言能力',
                    value: 'LanguageSkill'
                  },
                  {
                    label: '培训经历',
                    value: 'TrainExperience'
                  },
                  {
                    label: '专业技能',
                    value: 'ProfessionalSkill'
                  },
                  {
                    label: '证书',
                    value: 'Certificate'
                  },
                  {
                    label: '图片附件',
                    value: 'Attach'
                  }
                ]
              }
            },
            dynamicParams: {
              'markId': {
                type: 'String',
                default: '',
                label: '简历节点markId'
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
                type: 'Number',
                default: DEFAULT_CONFIG.resumeLanguage,
                label: '简历语言',
                options: [
                  {
                    label: '中文',
                    value: 1
                  },
                  {
                    label: '英文',
                    value: 2
                  },
                  {
                    label: '中英文',
                    value: 3
                  }
                ]
              },
              'ignoreEmpty': {
                type: 'Number',
                default: 0,
                label: '忽略空节点',
                options: [
                  {
                    label: '不忽略',
                    value: 0
                  },
                  {
                    label: '忽略',
                    value: 1
                  }
                ]
              },
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
                type: 'Number',
                default: DEFAULT_CONFIG.resumeLanguage,
                label: '简历语言',
                options: [
                  {
                    label: '中文',
                    value: 1
                  },
                  {
                    label: '英文',
                    value: 2
                  },
                  {
                    label: '中英文',
                    value: 3
                  }
                ]
              },
            }
          },
          {
            // 操作简历-刷新、设置或取消默认简历、设置或取消公开简历
            label: '操作简历',
            name: 'requestResumeOperate',
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
                type: 'Number',
                default: DEFAULT_CONFIG.resumeLanguage,
                label: '简历语言',
                options: [
                  {
                    label: '中文',
                    value: 1
                  },
                  {
                    label: '英文',
                    value: 2
                  },
                  {
                    label: '中英文',
                    value: 3
                  }
                ]
              },
              'operateType': {
                type: 'Number',
                default: 0,
                label: '简历语言',
                options: [
                  {
                    label: '刷新简历',
                    value: 0
                  },
                  {
                    label: '设置默认简历',
                    value: 1
                  },
                  {
                    label: '取消默认简历',
                    value: 8
                  },
                  {
                    label: '设置公开简历',
                    value: 4
                  },
                  {
                    label: '取消公开简历',
                    value: 6
                  }
                ]
              }
            }
          },
          {
            label: '修改简历名称',
            name: 'requestResumeModifyName',
            params: {
              'resumeName': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeName,
                label: '简历名称'
              },
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
                type: 'Number',
                default: DEFAULT_CONFIG.resumeLanguage,
                label: '简历语言',
                options: [
                  {
                    label: '中文',
                    value: 1
                  },
                  {
                    label: '英文',
                    value: 2
                  },
                  {
                    label: '中英文',
                    value: 3
                  }
                ]
              }
            }
          },
          {
            label: '获取简历置顶服务',
            name: 'requestResumeTopService',
            params: {
              'sid': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeSid,
                label: '简历服务id'
              },
              // 服务标识，比如ResumeNumber_1(简历编号_简历版本号)
              'businessInfo': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeBusinessInfo,
                label: '服务标识'
              }
            }
          },
          {
            label: '获取简历列表PC',
            name: 'requestResumeListPC',
            params: {}
          },
          {
            label: '简历头像图片鉴定PC',
            name: 'requestResumeGreenScanPC',
            params: {
              'url': {
                type: 'String',
                default: DEFAULT_CONFIG.resumeAvatarUrl,
                label: '简历头像Url'
              }
            }
          },
          {
            label: '获取完善到简历的第几步',
            name: 'requestResumeStatus',
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
                type: 'Number',
                default: DEFAULT_CONFIG.resumeLanguage,
                label: '简历语言',
                options: [
                  {
                    label: '中文',
                    value: 1
                  },
                  {
                    label: '英文',
                    value: 2
                  },
                  {
                    label: '中英文',
                    value: 3
                  }
                ]
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
