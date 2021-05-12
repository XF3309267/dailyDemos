<template>
  <div class="container padding-lr flex-direction activity" :style="{...$common.setMinWdith()}">
    <bread-crumb :jumpType="jumpType">{{ jumpType == 'unicornProject-roadshow' ? '更多路演' : '更多活动' }}</bread-crumb>

    <div class="flex align-center search">
      <div class="self-end flex align-center search-input">
        <input placeholder="输入关键字" ref="keyword" value="" @keypress.enter="search" />
        <img style="cursor: pointer;" src="@/assets/img/header/search.png" @click.stop="search" />
      </div>
    </div>

    <div class="flex-sub flex flex-wrap justify-between activity_card_box" style="margin-top: 1rem;">
      <div class="flex flex-direction activity_card" v-for="(item, index) in mdata.list" :key="index" @click.stop="navigation(item.id)">
        <div style="position: relative; height: 15.125rem;">
          <el-image :src="item.picture" fit="fill" lazy style="width: 100%; height: 100%; border-radius: 0.25rem 0.25rem 0 0;"></el-image>
          <div v-if="item.activityStatus == 0" class="tag">报名中</div>
          <div v-if="item.activityStatus == 1" class="tag tag__start">即将开始</div>
          <div v-if="item.activityStatus == 2" class="tag tag__end">已结束</div>
        </div>

        <div class="flex-sub flex flex-direction" style="padding: 0.75rem 0.5rem;">
          <div class="flex-sub text-bold" style="margin-top: 0.375rem;font-size: 1rem; color: #333;">{{ item.name }}</div>

          <!-- <div style="margin-top: 0.5rem; line-height: 1.5; font-size: 0.875rem; color: #666;">{{ item.synopsis }}</div> -->

          <div class="flex flex-direction" style="margin-top: 0.75rem;">
            <div class="flex align-center" style="font-size: 0.875rem; color: #999;">
              <i class="el-icon-time"></i>
              <span style="margin-left: 0.25rem;">{{ item.publishTime }}</span>
            </div>
            <div class="flex align-center" style="margin-top: 2px; font-size: 0.875rem; color: #999;">
              <i class="el-icon-location-outline" style="margin-left: -1px; font-size: 1rem;"></i>
              <span style="margin-left: 0.2rem;">{{ item.address }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :page-size="mdata.limit"
      :page-count="mdata.total"
      prev-text="上一页"
      next-text="下一页"
      :hide-on-single-page="true"
      :current-page="mdata.page"
      @current-change="pageChange"
    ></el-pagination>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import { requestActivityList } from '@/api/index.js';

export default {
  name: 'ActivityMore',
  components: { BreadCrumb },
  data() {
    return {
      jumpType: '',

      mdata: {
        total: 0,
        page: 1,
        limit: 6,
        name: '',
        list: []
      }
    };
  },
  mounted() {
    // this.init();
  },
  activated() {
    this.init();
  },
  methods: {
    init() {
      // 排除掉某个对象
      let { list, ...obj } = this.mdata;
      if (this.jumpType === 'unicornProject-roadshow') {
        obj.isRoadshow = '1';
      }

      requestActivityList(obj).then(res => {
        if (res.code === 200) {
          this.mdata.total = res.data.total;
          this.mdata.list = res.data.data;
        }
      });
    },
    pageChange(nowpage) {
      this.mdata.page = nowpage;
      this.init();
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    search() {
      this.mdata.name = this.$refs.keyword.value;
      this.init();
    },
    navigation(id) {
      this.$router.push({ name: 'ActivityDetail', query: { id: id, jump: this.jumpType + '-more' } });
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
.search {
  margin-top: 1rem;

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

.activity {
  padding-bottom: 1rem;

  .activity_card_box::after {
    content: '';
    width: 33%;
  }

  .activity_card {
    margin-top: 0.5rem;
    width: 33%;
    height: auto;
    background-color: #fff;
    border: 1px solid #ebebeb;
    border-radius: 0.25rem;
    overflow: hidden;
    cursor: pointer;

    &:nth-child(3n) {
      margin-right: 0;
    }

    .tag {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0 1rem;
      width: auto;
      height: 1.75rem;
      line-height: 1.75rem;
      font-size: 0.875rem;
      color: #fff;
      background-color: #1985f0;
      border-radius: 0.25rem 0 0 0;
    }

    .tag__start {
      background-color: #f08519;
    }

    .tag__end {
      background-color: #b2b2b2;
    }
  }
}

::v-deep .el-pagination {
  display: inline-block;
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
</style>
