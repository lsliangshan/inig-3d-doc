<template>
  <div class="list_container">
    <headers></headers>
    <div class="list_content">
      <div class="list_item"
           v-for="(item, index) in currentDomain.children"
           :key="index">
        <div class="list_item_inner">
          <router-link :to="'/' + $route.params.domain + '/' + item.name">{{item.label}}</router-link>
          <div class="list_item_inner_content">
            <pre v-if="Object.keys(item.params).length > 0">{{item.name}}({{formatParams(item.params)}});</pre>
            <pre v-else>{{item.name}}();</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.list_content {
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.list_item {
  padding: 5px 15px 15px 5px;
  box-sizing: border-box;
  text-decoration: none;
  color: #333;
  height: 180px;
}
.list_item_inner {
  height: 100%;
  /* padding: 8px; */
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #f8f8f8;
  box-shadow: 0 0 8px #ccc;
}
.list_item_inner_content {
  height: 108px;
  padding: 0 10px 10px 10px;
  box-sizing: border-box;
  overflow-y: auto;
  margin-top: 10px;
}
.list_item_inner pre {
  max-width: 250px;
  color: #888;
  margin-bottom: 0;
  margin-top: 0;
  white-space: pre-wrap;
  word-break: break-all;
}
.list_item_inner a {
  text-decoration: none;
  color: #555;
  height: 32px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 14px;
  display: block;
  line-height: 48px;
}
@media screen and (max-width: 1000px) {
  .list_item {
    width: 50%;
  }
}
@media screen and (min-width: 1000px) and (max-width: 1200px) {
  .list_item {
    width: 33%;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1400px) {
  .list_item {
    width: 25%;
  }
}
@media screen and (min-width: 1400px) {
  .list_item {
    width: 20%;
  }
}
</style>

<script>
export default {
  name: 'DomainList',
  components: {
    Headers: () => import('./parts/Headers')
  },
  data () {
    return {}
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
    }
  },
  methods: {
    formatParams (params) {
      let outParams = {}
      for (let p in params) {
        if (params.hasOwnProperty(p) && !outParams.hasOwnProperty(p)) {
          outParams[p] = params[p].default
        }
      }
      return outParams
    }
  }
}
</script>
