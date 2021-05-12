<template>
  <div class="container padding-lr flex-direction search" :style="{...$common.setMinWdith()}">
    <div class="flex justify-between header">
      <div class="flex-sub flex align-center header_left text-bold">资讯的搜索结果</div>

      <div class="flex-sub text-right header_right">
        <div class="self-end flex align-center search-input">
          <input v-model="keyword" placeholder="输入关键字" ref="keyword" value="" @keyup.enter="search" />
          <img style="cursor: pointer;" src="../assets/img/header/search.png" @click.stop="search" />
        </div>
      </div>
    </div>

    <div class="flex-sub" style="margin-top: 1rem;">
      <div
        class="flex flex-direction align-center search_card"
        v-for="(item, index) in searchList.activity"
        :key="'activity' + index"
        @click.stop="navigation('activity', item.id)"
      >
        <div class="flex-sub flex justify-between align-center" style="width: 100%;">
          <el-image :src="item.picture" fit="fill" lazy style="width: 16.875rem; height: 11.25rem; border-radius: 0.25rem; background-color: #BBBBBB;"></el-image>
          <div class="flex-sub flex flex-direction justify-between" style="margin-left: 1rem; height: 11.25rem;">
            <div style="font-size: 1rem; color: #333;">{{ item.name }}</div>
            <div class="flex-sub" style="margin-top: 0.625rem; line-height: 1.8; font-size: 0.875rem; color: #999;">{{ item.synopsis }}</div>

            <div class="flex align-center justify-between" style="margin-top: 0.5rem;">
              <div class="flex align-center">
                <div class="flex align-center" style="font-size: 0.875rem; color: #999;">
                  <i class="el-icon-time" style="font-size: 1rem;"></i>
                  <span style="margin-left: 0.375rem;">{{ item.publishTime.split(' ')[0] }}</span>
                </div>
              </div>

              <div class="align-center" style="font-size: 0.875rem; color: #f08519; cursor: pointer;" @click.stop="navigation('qrcode')">
                <i class="el-icon-chat-dot-square" style="font-size: 1rem;"></i>
                <span style="margin-left: 0.375rem;">立即报名</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex flex-direction align-center search_card"
        v-for="(item, index) in searchList.message"
        :key="'message' + index"
        @click.stop="navigation('information', item.id)"
      >
        <div class="flex-sub flex justify-between align-center" style="width: 100%;">
          <el-image :src="item.picture" fit="fill" lazy style="width: 5.25rem; height: 5.25rem; border-radius: 50%; background-color: #BBBBBB;"></el-image>
          <div class="flex-sub flex flex-direction justify-between" style="margin-left: 1rem; height: 5.25rem;">
            <div style="font-size: 1rem; color: #333;">{{ item.name }}</div>
            <div class="flex-sub" style="margin-top: 0.625rem; line-height: 1.8; font-size: 0.875rem; color: #999;">{{ item.synopsis }}</div>
          </div>
        </div>

        <div class="flex justify-between align-center" style="width: 100%;">
          <div style="width: 5.25rem; height: 1px;"></div>

          <div class="flex-sub flex align-center justify-between" style="margin-top: 0.5rem; margin-left: 1rem;">
            <div class="flex align-center">
              <div class="flex align-center" style="font-size: 0.875rem; color: #999;">
                <i class="el-icon-time" style="font-size: 1rem;"></i>
                <span style="margin-left: 0.375rem;">{{ item.publishTime.split(' ')[0] }}</span>
              </div>
            </div>

            <div class="align-center" style="font-size: 0.875rem; color: #f08519; cursor: pointer;" @click.stop="navigation('qrcode')">
              <i class="el-icon-chat-dot-square" style="font-size: 1rem;"></i>
              <span style="margin-left: 0.375rem;">立即咨询</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 打开对话框 -->
    <el-dialog title="" :visible.sync="centerDialogVisible" width="44.5rem" style="text-align: center;">
      <el-image :src="require('@/assets/img/qrcode/qrcode.png')" fit="fill" style="width: 44.5rem;height: 30rem;"></el-image>
    </el-dialog>

    <!-- <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :page-size="10"
      :total="100"
      prev-text="上一页"
      next-text="下一页"
      :hide-on-single-page="true"
      :current-page="currentPage"
      @current-change="pageChange"
    ></el-pagination> -->
  </div>
</template>

<script>
import { request } from '@/utils/request';

export default {
  name: 'Search',
  data() {
    return {
      currentPage: 1,
      keyword: '',
      searchList: {},
      centerDialogVisible: false
    };
  },
  mounted() {},
  activated() {
    this.keyword = sessionStorage.getItem('keyword');
    this.init();
  },
  methods: {
    init() {
      request('/visitor/indexInfo/getSearchList?name=' + this.keyword).then(res => {
        if (res.code === 200) {
          this.searchList = res.data;
        }
      });
    },
    // pageChange(nowpage) {
    //   console.log(nowpage);
    // },
    search() {
      sessionStorage.setItem('keyword', this.keyword);
      this.init();
    },
    navigation(type, id) {
      switch (type) {
        case 'qrcode':
          this.centerDialogVisible = true;
          break;
        case 'activity':
          this.$router.push({ name: 'ActivityDetail', query: { id: id } });
          break;
        case 'information':
          this.$router.push({ name: 'InformationDetail', query: { id: id } });
          break;
        default:
          break;
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.keyword = sessionStorage.getItem('keyword');
    this.init();
  },
  components: {}
};
</script>

<style lang="scss" scoped>
::v-deep .el-breadcrumb__inner a,
::v-deep .el-breadcrumb__inner.is-link {
  color: #999;
}

.header {
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

.search {
  padding-bottom: 1rem;

  .search_card {
    padding: 1rem;
    padding-left: 0;
    width: 100%;
    height: auto;
    border-bottom: 1px solid #e8e8e8;
    overflow: hidden;
    cursor: pointer;
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
</style>
