<template>
  <div id="app">
    <div class="nav">
      <div class="head">领域分类</div>
      <ul>
        <li v-for="(domain, index) in domains"
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
                   :class="{active: $route.params.method === item.name}"
                   @click="navigateTo(domain.name, item.name, item.label)">{{item.label}}</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="inner">
        <router-view />
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
        activeSubMenu: ''
      }
    },
    computed: {
      store () {
        return this.$store
      },
      domains () {
        return this.store.state.domains
      }
    },
    created () {
      this.openedMenu = this.findOpenedMenuIndex()
    },
    methods: {
      toggleMenu (index) {
        this.openedMenu = (this.openedMenu === index ? -1 : index)
      },
      findOpenedMenuIndex () {
        let i = 0
        let outIndex = -1
        let domains = this.domains
        for (i; i < domains.length; i++) {
          if (this.$route.params.domain === domains[i].name) {
            outIndex = i
            i = domains.length
          }
        }
        return outIndex
      },
      navigateTo (domain, method, label) {
        document.title = label
        this.$router.replace({
          path: '/' + domain + '/' + method
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
  *:focus {
    outline: none;
    box-shadow: none;
  }
  #app {
    position: relative;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-width: 1000px;
    height: 100%;
    /* display: flex;
        flex-direction: row; */
  }
  .nav {
    position: absolute;
    left: 0;
    top: 0;
    width: 250px;
    height: 100%;
    background-color: #333;
    box-shadow: 0 0 10px 2px #111;
    z-index: 2;
  }
  .nav .head {
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 18px;
    height: 66px;
    color: #c8c8c8;
    border-bottom: 1px solid #444;
    display: flex;
    flex-direction: row;
    align-items: center;
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
    font-size: 14px;
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
    margin-right: 30px;
    box-sizing: border-box;
    background-color: #383838;
    border-radius: 5px;
    box-shadow: 0 0 10px #303030 inset;
  }
  .nav .sub_items .sub_item_inner .sub_item > a {
    display: flex;
    font-size: 13px;
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
    font-size: 14px;
  }

  .content {
    /* flex: 1; */
    height: 100%;
    /* min-width: 750px; */
    width: 100%;
    padding-left: 250px;
    overflow-x: auto;
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
