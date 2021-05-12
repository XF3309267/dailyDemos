<template>
  <div class="container padding-lr flex-direction investment" :style="{...$common.setMinWdith()}">
    <bread-crumb :jumpType="jumpType">融资企业</bread-crumb>

    <div class="flex align-center search">
      <div class="self-end flex align-center search-input">
        <input placeholder="输入关键字" ref="keyword" value="" @keypress.enter="search" />
        <img style="cursor: pointer;" src="@/assets/img/header/search.png" @click.stop="search" />
      </div>
    </div>

    <div class="flex-sub" style="margin-top: 1rem;">
      <div class="flex flex-direction align-center investment_card" v-for="(item, index) in mdata.list" :key="index" @click.stop="navigation(item.id)">
        <div class="flex-sub flex justify-between align-center" style="width: 100%;">
          <el-image :src="item.picture" fit="fill" lazy style="width: 5.25rem; height: 5.25rem; border-radius: 50%; background-color: #BBBBBB;"></el-image>
          <div class="flex-sub flex flex-direction justify-between" style="margin-left: 1rem; height: 5.25rem;">
            <div style="font-size: 1rem; color: #333;">{{ item.title }}</div>
            <div class="flex-sub" style="margin-top: 0.625rem; line-height: 1.8; font-size: 0.875rem; color: #999;">{{ item.synopsis }}</div>
          </div>
        </div>

        <div class="flex justify-between align-center" style="width: 100%; margin-bottom: 2%;">
          <div style="width: 5.25rem; height: 1px;"></div>

          <div class="flex-sub flex align-center justify-between" style="margin-top: 0.5rem; margin-left: 1rem;">
            <div class="flex-sub flex align-center">
              <div class="flex align-center" style="font-size: 0.875rem; color: #999;">
                <i class="el-icon-price-tag" style="font-size: 1rem;"></i>
                <span style="margin-left: 0.375rem;">{{ item.label }}</span>
              </div>

              <div class="flex align-center" style="margin-left: 5%; font-size: 0.875rem; color: #999;">
                <i class="el-icon-location-outline" style="font-size: 1rem;"></i>
                <span style="margin-left: 0.375rem;">{{ item.address }}</span>
              </div>
            </div>

            <div class="align-center" style="font-size: 0.875rem; color: #f08519; cursor: pointer;" @click.stop="centerDialogVisible = true">
              <i class="el-icon-chat-dot-square" style="font-size: 1rem;"></i>
              <span style="margin-left: 0.375rem;">立即咨询</span>
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

    <!-- 打开对话框 -->
    <el-dialog title="" :visible.sync="centerDialogVisible" width="44.5rem" style="text-align: center;">
      <el-image :src="require('@/assets/img/qrcode/qrcode.png')" fit="fill" style="width: 44.5rem;height: 30rem;"></el-image>
    </el-dialog>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import { requestInvestList } from '@/api/index.js';

export default {
  name: 'Enterprise',
  components: { BreadCrumb },
  data() {
    return {
      centerDialogVisible: false,
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

      requestInvestList(obj).then(res => {
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
      this.$router.push({ name: 'EnterpriseDetail', query: { id: id, jump: 'enterprise' } });
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

.investment {
  padding-bottom: 1rem;

  .investment_card {
    padding: 0 2%;
    margin-top: 1rem;
    margin-right: 1rem;
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
