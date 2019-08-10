<template>
  <div class="detail_header">
    <div v-if="$route.name.toLowerCase() === 'detail'">
      <router-link :to="'/' + $route.params.domain">{{$route.params.domain}}</router-link>
      <span class="current_method">&nbsp;/ {{$route.params.methods}}</span>
    </div>
    <div class="domain_items"
         v-else-if="$route.name.toLowerCase() === 'list'">
      <div class="domain_item"
           v-for="(item, index) in domains"
           :key="index"
           :class="[item.name.toLowerCase() === $route.params.domain.toLowerCase() ? 'active' : '']">
        <router-link :to="'/' + item.name">{{item.label}}</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.detail_header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 66px;
  background-color: #fff;
  box-shadow: 0 1px 10px #888;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.detail_header a {
  max-width: 320px;
  height: 66px;
  font-size: 18px;
  color: #888;
  line-height: 40px;
  text-decoration: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.detail_header .current_method {
  color: #aaa;
}

.domain_items {
  width: 100%;
  height: 66px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.domain_item {
  height: 66px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
}
.domain_item a {
  font-size: 15px;
  padding: 0 15px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
}
.domain_item:hover {
  background-color: #42b983;
}
.domain_item.active {
  background-color: #42b983;
  color: #fff;
}
.domain_item:hover a,
.domain_item.active a {
  font-weight: bold;
  color: #fff;
}
</style>

<script>
export default {
  name: 'DetailHeader',
  props: {},
  data () {
    return {
      miniScreen: true
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
  mounted () {
    window.addEventListener('resize', this.resetMiniScreen, false)
  },
  methods: {
    resetMiniScreen () {
      this.miniScreen = (document.documentElement.offsetWidth < 1200)
    }
  }
}
</script>
