<template>
  <div class="container">
    <MyBackTop :bottom="200"></MyBackTop>

    <el-row>
      <el-col :span="24" :xl="{ span: 22, offset: 1 }" class="padding-lr">
        <el-menu
          mode="horizontal"
          text-color="#333"
          active-text-color="#F08519"
          :default-active="activeIndex"
          style="position: relative; margin-left: 0.5rem; width: 100%;"
          @select="handleSelect"
        >
          <el-menu-item index="1" style="padding-left: 0;border: 0;">
            <img src="../assets/img/header/TW_logo.png" alt="中科心客——创投基金—预见独角兽计划—科技成果转移转化" style="width: 7.3125rem;height: 2.5rem;" />
          </el-menu-item>

          <el-menu-item index="1"><router-link :to="{ name: 'Home', query: {} }">首页</router-link></el-menu-item>

          <!-- <el-submenu index="2">
          <template slot="title">
            传媒
          </template>
          <el-menu-item index="2-1"><router-link :to="{ name: 'Information', query: {} }">创投圈</router-link></el-menu-item>
        </el-submenu> -->
          <el-menu-item index="6"><router-link :to="{ name: 'Fund', query: {} }">创投基金</router-link></el-menu-item>

          <el-submenu index="4">
            <template slot="title">
              预见独角兽
            </template>
            <el-menu-item index="4-1"><router-link :to="{ name: 'UnicornProject', query: {} }">独角兽计划</router-link></el-menu-item>
            <el-menu-item index="4-2"><router-link :to="{ name: 'UnicornAcademy', query: {} }">独角兽学院</router-link></el-menu-item>
          </el-submenu>

          <!-- <el-submenu index="3">
          <template slot="title">
            数据
          </template>
          <el-menu-item index="3-1"><router-link :to="{ name: 'Needs', query: {} }">技术需求</router-link></el-menu-item>
          <el-menu-item index="3-2"><router-link :to="{ name: 'Mechanism', query: {} }">投资机构</router-link></el-menu-item>
          <el-menu-item index="3-3"><router-link :to="{ name: 'Enterprise', query: {} }">融资企业</router-link></el-menu-item>
          </el-submenu> -->

          <el-submenu index="5">
            <template slot="title">
              科技成果转化
            </template>
            <el-menu-item index="5-1"><router-link :to="{ name: 'Services', query: {} }">科技服务</router-link></el-menu-item>
            <!-- <el-menu-item index="5-2"><router-link :to="{ name: 'Government', query: {} }">政府服务</router-link></el-menu-item> -->
            <!-- <el-menu-item index="5-3"><router-link :to="{ name: 'Activity', query: {} }">最新活动</router-link></el-menu-item> -->
          </el-submenu>

          <!-- <el-menu-item index="7"><router-link :to="{ name: 'Summit', query: {} }">滕王阁峰会</router-link></el-menu-item> -->
          <!-- 峰会/会议(活动) -->
          <el-submenu index="7">
            <template slot="title">
              滕王阁峰会
            </template>
            <el-menu-item index="7-1"><router-link :to="{ name: 'Summit', query: {} }">滕王阁峰会</router-link></el-menu-item>
            <el-menu-item index="7-2"><router-link :to="{ name: 'Activity', query: {} }">会议</router-link></el-menu-item>
          </el-submenu>

          <!-- <el-submenu index="8">
            <template slot="title">
              政企合作
            </template>
            <el-menu-item index="5-2"><router-link :to="{ name: 'Government', query: {} }">政府服务</router-link></el-menu-item>
            <el-menu-item index="8-2"><router-link to="">企业合作</router-link></el-menu-item>
          </el-submenu> -->
          <el-menu-item index="8"><router-link :to="{ name: 'Government', query: {} }">政企合作</router-link></el-menu-item>

          <el-menu-item class="search">
            <div class="flex align-center search-input">
              <input v-model="keyword" placeholder="输入关键字" value="" @keyup.enter="search" />
              <img src="../assets/img/header/search.png" @click.stop="search" />
            </div>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyBackTop from '@/components/SideBar.vue';

export default {
  name: '',
  components: {
    MyBackTop
  },
  data() {
    return {
      activeIndex: '1',
      keyword: ''
    };
  },
  mounted() {
    let selectIndex = sessionStorage.getItem('activeIndex');
    this.activeIndex = selectIndex || '1';
    this.keyword = sessionStorage.getItem('keyword');
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
      switch (key) {
        case '1':
          this.$router.push({ name: 'Home', query: {} });
          break;
        // case '2-1':
        //   this.$router.push({ name: 'Information', query: {} });
        //   break;
        case '3-1':
          this.$router.push({ name: 'Needs', query: {} });
          break;
        case '3-2':
          this.$router.push({ name: 'Mechanism', query: {} });
          break;
        case '3-3':
          this.$router.push({ name: 'Enterprise', query: {} });
          break;
        case '4-1':
          this.$router.push({ name: 'UnicornProject', query: {} });
          break;
        case '4-2':
          this.$router.push({ name: 'UnicornAcademy', query: {} });
          break;
        case '5-1':
          this.$router.push({ name: 'Services', query: {} });
          break;
        case '5-2':
          this.$router.push({ name: 'Government', query: {} });
          break;
        case '5-3':
          this.$router.push({ name: 'Activity', query: {} });
          break;
        case '6':
          this.$router.push({ name: 'Fund', query: {} });
          break;
        default:
          break;
      }
      if (key) {
        sessionStorage.setItem('activeIndex', key);
      }
    },
    search(e) {
      sessionStorage.setItem('keyword', this.keyword);
      this.$router.push({ name: 'Search', query: { timestamp: new Date().getTime() } });
    }
  }
};
</script>

<style lang="scss" scoped>
/* 去除默认样式 */
a {
  text-decoration: none;
  color: #333;
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  color: #f08519;
  text-decoration: none;
}
a:active {
  text-decoration: none;
}

.padding-lr {
  padding: 0 10vw;
}

.search {
  position: absolute;
  right: -3%;
  width: 16.625rem;

  .search-input {
    display: inline-block;

    input {
      margin-left: -1rem;
      padding: 0 2.375rem 0 0.625rem;
      width: 16.25rem;
      height: 1.875rem;
      background-color: #f8f8f8;
      border: 0;
    }

    img {
      position: absolute;
      top: 50%;
      right: 0.625rem;
      transform: translateY(-45%);
      width: 1.375rem;
      height: 1.375rem;
    }
  }
}

@media screen and (min-width: 1918px) {
  .search {
    right: 1.5%;
  }
}

@media screen and (max-width: 1601px) {
  .padding-lr {
    padding: 0 3vw;
  }

  .search {
    right: 1.5%;
  }
}
</style>
