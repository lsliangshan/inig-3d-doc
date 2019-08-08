<template>
  <div id="app">
    <div class="nav">
      <h3>领域分类</h3>
      <hr>
      <ul>
        <li v-for="(domain, index) in menus"
            :key="index">
          <a href="javascript: void(0)"
             :class="{active: $route.params && (domain.name === $route.params.domain) }"
             @click="toggleMenu(index)">{{domain.label}}</a>
          <div class="sub_items"
               :style="{height: index === openedMenu ? (domain.children.length * 40 + (domain.children.length > 0 ? 20 : 0) + 'px') : 0}">
            <div class="sub_item_inner"
                 :style="{padding: domain.children.length > 0 ? '5px 15px' : '0'}">
              <div class="sub_item"
                   v-for="(item, index) in domain.children"
                   :key="index">
                <a href="javascript: void(0)"
                   :class="{active: $route.params.methods === item.name}"
                   @click="navigateTo(domain.name, item.name, item.params, item.label)">{{item.label}}</a>
                <!-- <router-link :to="{path: '/' + domain.name + '/' + item.name}"
                             :class="{active: $route.params.methods === item.name}">{{item.label}}</router-link> -->
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="inner">
        <router-view :params="currentParems" />
      </div>
    </div>
    <all-svgs></all-svgs>
  </div>
</template>
<script>
  export default {
    name: 'App',
    components: {
      AllSvgs: () => import('./Svgs')
    },
    data () {
      return {
        openedMenu: -1,
        activeSubMenu: '',
        currentParems: [],
        menus: [
          {
            label: '用户信息&鉴权领域',
            name: 'user',
            children: [
              {
                label: '登录',
                name: 'login',
                params: [
                  {
                    'username': {
                      type: 'String',
                      default: ''
                    },
                    'password': {
                      type: 'String',
                      default: ''
                    }
                  }
                ]
              },
              {
                label: '注册',
                name: 'register',
                params: []
              },
              {
                label: '获取用户详情',
                name: 'getUserDetail',
                params: []
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
                params: [
                  {
                    'number': {
                      type: 'String',
                      default: ''
                    }
                  }
                ]
              },
              {
                label: '获取相似职位',
                name: 'requestSimilarJobs',
                params: [
                  {
                    'number': {
                      type: 'String',
                      default: ''
                    }
                  }
                ]
              },
              {
                label: '获取在招职位',
                name: 'requestAreaJobs',
                params: [
                  {
                    'number': {
                      type: 'String',
                      default: ''
                    }
                  }
                ]
              },
              {
                label: '获取在招职位所在城市',
                name: 'requestAreaJobCity',
                params: [
                  {
                    'number': {
                      type: 'String',
                      default: ''
                    }
                  }
                ]
              },
              {
                label: '收藏职位',
                name: 'requestJobCollection',
                params: [
                  {
                    'number': {
                      type: 'String',
                      default: ''
                    }
                  }
                ]
              },
              {
                label: '投递职位',
                name: 'requestJobDeliver',
                params: [
                  {
                    'number': {
                      type: 'String',
                      default: ''
                    }
                  }
                ]
              },
              {
                label: '获取职位投递状态',
                name: 'requestJobDeliverStatus',
                params: [
                  {
                    'number': {
                      type: 'String',
                      default: ''
                    }
                  }
                ]
              },
              {
                label: '获取最佳雇主',
                name: 'requestBestEmployer',
                params: [
                  {
                    'number': {
                      type: 'String',
                      default: ''
                    }
                  }
                ]
              },
              {
                label: '获取最佳雇主评论',
                name: 'requestBestEmployerComment',
                params: [
                  {
                    'number': {
                      type: 'String',
                      default: ''
                    }
                  }
                ]
              },
              {
                label: '获取职位的小程序二维码',
                name: 'requestJobMpQrcode',
                params: [
                  {
                    'number': {
                      type: 'String',
                      default: ''
                    }
                  }
                ]
              }
            ]
          },
          {
            label: '公司领域',
            name: 'company',
            children: [

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
    },
    created () {
      this.openedMenu = this.findOpenedMenuIndex()
      this.currentParems = this.findCurrentParams()
    },
    methods: {
      toggleMenu (index) {
        this.openedMenu = (this.openedMenu === index ? -1 : index)
      },
      findCurrentParams () {
        this.menus.reduce((previousValue, currentValue, index, array) => {
          console.log(previousValue, currentValue, index, array)
        })
      },
      findOpenedMenuIndex () {
        let i = 0
        let outIndex = -1
        let menus = this.menus
        for (i; i < menus.length; i++) {
          if (this.$route.params.domain === menus[i].name) {
            outIndex = i
            i = menus.length
          }
        }
        return outIndex
      },
      navigateTo (domain, methods, params, label) {
        this.currentParems = params
        document.title = label
        this.$router.replace({
          path: '/' + domain + '/' + methods
        })
      }
    }
  }
</script>

<style>
  body,
  html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .nav {
    width: 250px;
    height: 100%;
    background-color: #333;
    box-shadow: 0 0 10px 2px #111;
    z-index: 2;
  }
  .nav h3 {
    padding: 0 15px;
    box-sizing: border-box;
    color: #c8c8c8;
  }
  .nav ul {
    height: calc(100% - 100px);
    overflow-y: auto;
  }
  .nav ul li {
    list-style: none;
  }
  .nav ul li {
    position: relative;
    /* height: 48px; */
    display: flex;
    flex-direction: column;
  }
  .nav ul li > a {
    line-height: 40px;
    color: #ccc;
    text-decoration: none;
    transition: color 0.1s ease-in-out;
  }
  .nav ul li > a:hover {
    color: #aaa;
  }
  .nav ul li > a.active {
    color: #42b983 !important;
  }
  .nav ul {
    padding-left: 30px;
  }
  .nav .sub_items {
    width: 100%;
    transition: all 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform-origin: 50% 0;
    overflow: hidden;
  }
  .nav .sub_items .sub_item_inner {
    box-sizing: border-box;
    background-color: #383838;
    border-radius: 5px;
    box-shadow: 0 0 10px #303030 inset;
  }
  .nav .sub_items .sub_item_inner .sub_item > a {
    display: flex;
    font-size: 14px;
    color: #888;
    line-height: 40px;
    text-decoration: none;
    transition: all 0.1s linear;
  }
  .nav .sub_items .sub_item_inner .sub_item > a:hover {
    color: #ccc;
  }
  .nav .sub_items .sub_item_inner .sub_item > a.active {
    color: #42b983 !important;
    font-size: 15px;
  }

  .content {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    /* padding: 15px; */
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .content .inner {
    width: 100%;
    height: 100%;
  }
</style>
