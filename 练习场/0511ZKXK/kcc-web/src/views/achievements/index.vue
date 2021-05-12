<template>
  <div class="container padding-lr flex-direction" :style="{...$common.setMinWdith()}">
    <bread-crumb :jumpType="jumpType">科技成果</bread-crumb>

    <div class="flex flex-direction search_box">
      <div class="flex align-center search">
        <div class="self-end flex align-center search-input">
          <input placeholder="请输入你需要的需求技术" ref="keyword" value="" @keypress.enter="search" />
          <img style="cursor: pointer;" src="@/assets/img/header/search.png" @click.stop="search" />
        </div>
      </div>

      <div class="flex flex-wrap" v-for="(item, index) in scienceTypeList" :key="'scienceTypeList' + index">
        <div class="search-label">{{ item.name }}:</div>

        <div class="flex-sub flex align-center flex-wrap">
          <el-radio-group class="scienceType-select" v-for="(ite, ind) in item.children" :key="'scienceType' + ind" v-model="radioCheckList[index]" @change="radioChange">
            <el-radio-button :label="ite.id">{{ ite.name }}</el-radio-button>
          </el-radio-group>
        </div>
      </div>
    </div>

    <el-row :gutter="20" style="margin-top: 1rem;">
      <el-col :span="17">
        <div class="flex flex-direction achievements-box">
          <div class="achievements-card" v-for="(item, key) in datas.mdata.list" :key="'achievements-card' + key" @click.stop="navigation('detail', item)">
            <router-link :to="{ name: 'AchievementsDetail', query: { id: item.id, jump: 'achievements' } }" class="flex flex-direction">
              <div class="flex justify-between">
                <span class="text-bold">{{ item.name }}</span>
                <div class="text-bold" style="color: red; font-size: 0.875rem;">
                  <span v-if="item.price != '面议'">￥</span>
                  <span style="font-size: 1.25rem;">
                    <span>{{ item.price }}</span>
                    <span v-if="item.price != '面议'">元</span>
                  </span>
                </div>
              </div>

              <div class="flex align-center" style="margin-top: 0.75rem;font-size: 0.875rem;color: #999;">
                <div class="flex align-center">
                  <i class="el-icon-time" style="font-size: 0.875rem; margin-right: 0.25rem;"></i>
                  {{ item.createTime.split(' ')[0] }}
                </div>
                <div class="flex align-center" style="margin-left: 3%;">
                  <i class="el-icon-location-outline" style="font-size: 0.875rem; margin-right: 0.25rem;"></i>
                  {{ item.address }}
                </div>
              </div>

              <span style="margin-top: 1rem; font-size: 0.875rem; line-height: 1.8; color: #666;">
                {{ item.synopsis.length > 120 ? item.synopsis.substring(0, 120) + '......' : item.synopsis }}
              </span>

              <div class="flex align-center justify-between" style="margin-top: 1.5rem; width: 80%; font-size: 0.875rem; color: #666;">
                <span>类型：{{ item.typeName }}</span>
                <span>交易方式：{{ item.wayDeal }}</span>
                <span>应用领域：{{ item.field }}</span>
                <span>成熟度：{{ item.maturityName }}</span>
              </div>
            </router-link>
          </div>
        </div>

        <el-pagination
          class="pagination"
          background
          layout="prev, pager, next"
          :page-size="datas.mdata.limit"
          :page-count="datas.mdata.total"
          prev-text="上一页"
          next-text="下一页"
          :hide-on-single-page="true"
          :current-page="datas.mdata.page"
          @current-change="pageChange"
        ></el-pagination>
      </el-col>

      <el-col :span="7">
        <div class="flex flex-direction">
          <div class="other-box">
            <span class="box_title">最新发布</span>
            <div class="flex flex-direction flex-wrap newest-message-box">
              <div v-for="(item, key) in datas.dataNewestScienceResult.list" :key="'newest-message' + key" @click.stop="navigation('detail', item)">
                <router-link :to="{ name: 'AchievementsDetail', query: { id: item.id, jump: 'achievements' } }" class="flex flex-direction">
                  <span class="box-span">{{ item.name }}</span>
                  <span class="box-span">{{ item.businessName }}</span>
                </router-link>
              </div>
            </div>
          </div>
          <div class="other-box">
            <span class="box_title">最新技术专家</span>
            <div class="flex flex-direction newest-technician-box">
              <div v-for="(item, key) in datas.dataNewestTechnician.list" :key="'newest-technician' + key" @click.stop="navigation('technician', item)">
                <!-- <el-avatar :size="50" src=""></el-avatar> -->
                <router-link :to="{ name: 'TechnicianDetail', query: { id: item.id, jump: 'achievements' } }" class="flex align-center">
                  <div class="flex-sub flex flex-direction justify-between" style="margin-left: 0.25rem; height: 2.6rem;">
                    <span class="box-span">{{ item.name }}</span>
                    <span class="box-span">{{ item.level }}</span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="other-box">
            <span class="box_title">热门文章</span>
            <div class="flex flex-direction hotArticles-box">
              <div v-for="(item, key) in datas.dataMessageList.list" :key="'hotArticles' + key" @click.stop="navigation('hotArticles', item)">
                <router-link :to="{ name: 'InformationDetail', query: { id: item.id, jump: 'achievements' } }" class="flex align-center">
                  <el-avatar :size="50" :src="item.picture"></el-avatar>
                  <span class="flex-sub box-span">{{ item.name }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 打开对话框 -->
    <el-dialog title="" :visible.sync="centerDialogVisible" width="44.5rem" style="text-align: center;">
      <el-image :src="require('@/assets/img/qrcode/qrcode.png')" fit="fill" style="width: 44.5rem;height: 30rem;"></el-image>
    </el-dialog>
  </div>
</template>

<script>
// import { request } from '@/utils/request';
import BreadCrumb from '@/components/BreadCrumb.vue';
import { requestScienceResultTypeList, requestScienceResultList, requestScienceExpertList, requestMessageList } from '@/api/index.js';

export default {
  name: 'NeedsDetail',
  components: { BreadCrumb },
  data() {
    return {
      jumpType: '',
      centerDialogVisible: false,

      // 搜索分类
      scienceTypeList: [],
      // 选项分类
      radioCheckList: [],

      // 获取所需数据列表
      datas: {
        // 获取左侧筛选列表
        mdata: {
          businessId: '', // 行业
          maturityId: '', // 成熟度
          sourceId: '', // 技术来源
          typeId: '', // 技术类型
          total: 0,
          page: 1,
          limit: 12,
          name: '',
          list: []
        },
        // 获取最新发布列表
        dataNewestScienceResult: {
          page: 1,
          limit: 9,
          list: []
        },
        // 获取最新专家列表
        dataNewestTechnician: {
          limit: 7,
          page: 1,
          list: []
        },
        // 获取热门文章列表
        dataMessageList: {
          limit: 7,
          page: 1,
          list: []
        }
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 获取搜索选项列表
      requestScienceResultTypeList().then(res => {
        this.scienceTypeList = res.data;
        this.scienceTypeList.forEach((value, key) => {
          value.children.forEach((v, k) => {
            if (k === 0) {
              this.radioCheckList[key] = v.id;
            }
          });
        });
      });

      // 技术成果
      requestScienceResultList(this.datas.dataNewestScienceResult).then(res => {
        this.datas.dataNewestScienceResult.list = res.data.data;
      });

      // 最新专家
      requestScienceExpertList(this.datas.dataNewestTechnician).then(res => {
        this.datas.dataNewestTechnician.list = res.data.data;
      });

      // 热门文章
      requestMessageList(this.datas.dataMessageList).then(res => {
        this.datas.dataMessageList.list = res.data.data;
      });

      this.request();
    },
    request() {
      // 排除掉某个对象
      let { list, ...obj } = this.datas.mdata;

      requestScienceResultList(obj).then(res => {
        this.datas.mdata.total = res.data.total;
        this.datas.mdata.list = res.data.data;
      });
    },
    radioChange() {
      this.radioCheckList.forEach((value, key) => {
        switch (key) {
          case 0:
            this.datas.mdata.typeId = value;
            break;
          case 1:
            this.datas.mdata.businessId = value;
            break;
          case 2:
            this.datas.mdata.maturityId = value;
            break;
          case 3:
            this.datas.mdata.sourceId = value;
            break;
          default:
            break;
        }
      });
      this.request();
    },
    pageChange(nowpage) {
      this.datas.mdata.page = nowpage;
      this.request();
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    search() {
      this.datas.mdata.name = this.$refs.keyword.value;
      this.request();
    },
    navigation(type, item) {
      switch (type) {
        case 'detail':
          this.$router.push({ name: 'AchievementsDetail', query: { id: item.id, jump: 'achievements' } });
          break;
        case 'technician':
          this.$router.push({ name: 'TechnicianDetail', query: { id: item.id, jump: 'achievements' } });
          break;
        case 'hotArticles':
          this.$router.push({ name: 'InformationDetail', query: { id: item.id, jump: 'achievements' } });
          break;
        default:
          break;
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.jumpType = to.query.jump;
    });
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

.container {
  margin: -1rem 0;
  padding-top: 1.2rem;
  padding-bottom: 1rem;
  min-height: 60vh;
  background-color: #f8f8f8;

  .search_box {
    margin-top: 1.5rem;
    width: 100%;
    height: auto;
    background-color: #fff;

    & > div {
      margin-top: 1rem;
      padding: 0 1.5rem 1rem;
      border-bottom: 1px solid #ebebeb;
    }

    & > div:last-child {
      border-bottom: 0;
    }

    .search {
      .search-input {
        display: inline-block;
        position: relative;

        input {
          padding: 0 2.375rem 0 0.625rem;
          width: 22.75rem;
          height: 1.875rem;
          background-color: #fff;
          border: 1px solid #f08519;
        }

        img {
          position: absolute;
          top: 50%;
          right: 0.625rem;
          transform: translateY(-50%);
          width: 1.375rem;
          height: 1.375rem;
        }
      }
    }

    .search-label {
      margin-top: 0.55rem;
      width: 3.75rem;
      font-size: 0.875rem;
      color: #999;
    }

    .scienceType-select {
      margin-left: 1.25rem;

      ::v-deep .el-radio-button__inner {
        color: #333;
        border: 0;
        background-color: #fff;
      }

      ::v-deep .el-radio-button__inner:hover,
      ::v-deep .el-radio-button__orig-radio:checked + .el-radio-button__inner {
        color: #f08519;
      }
    }
  }

  .achievements-box {
    min-height: 1px;
    background-color: #fff;

    .achievements-card {
      padding: 1.5rem;
      border-bottom: 1px solid #ebebeb;
      cursor: pointer;
    }

    .achievements-card:last-child {
      border-bottom: 0;
    }
  }

  .other-box {
    position: relative;
    margin-bottom: 2rem;
    min-height: 10vh;

    .box_title {
      margin-left: 0.75rem;
      font-weight: bold;

      &::before {
        content: ' ';
        position: absolute;
        left: 0;
        top: 0;
        width: 0.25rem;
        height: 1.35rem;
        background-color: #f08519;
      }
    }

    .newest-message-box,
    .newest-technician-box,
    .hotArticles-box {
      margin-top: 1rem;
      padding: 0 0 1rem 1rem;
      min-height: 1px;
      width: 100%;
      background-color: #fff;

      & > div {
        margin-top: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #e8e8e8;
        cursor: pointer;

        .box-span {
          margin-left: 0.5rem;
          font-size: 0.875rem;
          font-weight: bold;
          color: #333;
        }

        .box-span:last-child {
          font-size: 0.75rem;
          color: #666;
          font-weight: 400;
        }
      }

      & > div:last-child {
        border-bottom: 0;
        padding-bottom: 0;
      }
    }

    .hotArticles-box {
      .box-span {
        margin: 0 1rem 0 0.25rem;
        font-size: 0.875rem;
        line-height: 1.5;
        color: #333;
      }
    }
  }

  ::v-deep .el-pagination {
    display: inline-block;
    width: 100%;
    padding: 3rem 0 5rem;
    text-align: center;

    .btn-next,
    .btn-prev,
    .el-pager li {
      background-color: #fff !important;
      color: #666 !important;
      border: 1px solid #ebebeb;
    }

    .btn-next,
    .btn-prev {
      width: 4.375rem;
    }

    .el-pager li:not(.disabled).active {
      color: #fff !important;
      background-color: #f08519 !important;
    }

    .btn-next.disabled,
    .btn-next:disabled,
    .btn-prev.disabled,
    .btn-prev:disabled,
    .el-pager li.disabled {
      background-color: #ededed !important;
    }

    .el-pager li.active + li {
      border-left: auto;
    }
  }

  /* 修改弹窗样式 */
  ::v-deep .el-dialog {
    height: 30rem;

    .el-dialog__header {
      padding: 0;
    }

    .el-dialog__body {
      padding: 0;
    }
  }
}
</style>
