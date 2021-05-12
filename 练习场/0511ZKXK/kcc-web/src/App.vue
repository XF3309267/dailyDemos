<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-main :style="{'minWidth': clientWidth}">
      <keep-alive :include="['Home', 'ActivityMore', 'Enterprise', 'Information', 'Mechanism', 'Needs', 'Search']"><router-view /></keep-alive>
    </el-main>
    <el-footer><Footer></Footer></el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Index',
  components: {
    Header,
    Footer
  },
  // 使用watch 监听$router的变化,
  watch: {
    $route: function(to, from) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  mounted() {
    this.setBodyWidth()
  },
  data() {
    return {
      clientWidth: '0px'
    }
  },
  methods: {
    setBodyWidth() {
      console.log('mounted')
      let ww = window.screen.availWidth
      let body = document.body
      body.style = `width:${ww}px`
      this.clientWidth = `${ww}px`
    }
  }
};
</script>

<style lang="scss" scoped>
// .container{
//   min-width: 1200px;
// }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-container {
  // width: 1200px;
  min-width: 1200px;
  margin: auto;
  .el-header,
  .el-main,
  .el-footer {
    margin: 0;
    padding: 0;
    // max-width: 100vw;
  }

  .el-header {
    box-shadow: 0 0.125rem 0.375rem #f3f3f3;
  }

  .el-main {
    padding: 1rem 0;
    min-height: 60vh;
    overflow: unset;
  }

  .el-footer {
    height: auto !important;
  }
}
</style>
