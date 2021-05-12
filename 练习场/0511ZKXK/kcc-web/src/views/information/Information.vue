<template>
  <div class="container padding-lr flex-direction message" :style="{...$common.setMinWdith()}">
    <bread-crumb :jumpType="jumpType">更多资讯</bread-crumb>

    <div class="flex align-center search">
      <div class="self-end flex align-center search-input">
        <input placeholder="输入关键字" ref="keyword" value="" @keypress.enter="search" />
        <img style="cursor: pointer;" src="@/assets/img/header/search.png" @click.stop="search" />
      </div>
    </div>

    <div class="flex-sub flex flex-direction">
      <div class="flex align-center message_card" v-for="(item, index) in mdata.list" :key="index" @click.stop="navigation(item.id)">
        <div class="message_card_left">
          <el-image :src="item.picture" fit="fill" lazy style="width: 24.25rem; height: 11.5rem;"></el-image>
          <div class="tag">{{ item.typeName }}</div>
        </div>
        <div class="flex-sub flex flex-wrap flex-direction message_card_right">
          <div class="text-bold" style="font-size: 1.125rem; color: #333;">{{ item.name }}</div>
          <div class="flex-sub" style="margin-top: 1%;line-height: 1.8;font-size: 0.875rem; color: #999;">{{ item.synopsis }}</div>
          <div class="flex justify-between" style="width: 100%; line-height: 2; font-size: 0.875rem; color: #999;">
            <div class="flex-twice message_card_right_bottom_left">
              <span style="margin-right: 8%;">{{ item.publisher }}</span>
              <i class="el-icon-time"></i>
              <span style="padding: 0.375rem;">{{ item.publishTime }}</span>
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
import { requestMessageList } from '@/api/index.js';

export default {
  name: 'Information',
  components: { BreadCrumb },
  data() {
    return {
      mdata: {
        total: 0,
        page: 1,
        limit: 12,
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
      const { list, ...obj } = this.mdata;

      requestMessageList(obj).then(res => {
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
      this.$router.push({ name: 'InformationDetail', query: { id: id, jump: 'more' } });
    }
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

.message {
  // padding-top: 1rem;
  padding-bottom: 1rem;

  span {
    position: relative;
    display: inline-block;
    height: 1.875rem;
  }

  .message_card {
    padding: 1rem 0;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;

    .message_card_left {
      position: relative;

      .tag {
        padding: 0 0.5rem;
        position: absolute;
        top: 0;
        left: 0;
        width: auto;
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.875rem;
        color: #fff;
        background-color: #f08519;
        border-radius: 0.25rem 0 0.25rem 0;
      }
    }

    .message_card_right {
      padding-left: 0.625rem;
      height: 11.2rem;
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
