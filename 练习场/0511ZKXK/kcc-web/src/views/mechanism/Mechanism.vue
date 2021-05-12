<template>
  <div class="container padding-lr flex-direction financing" :style="{...$common.setMinWdith()}">
    <bread-crumb :jumpType="jumpType">投资机构</bread-crumb>

    <div class="flex align-center search">
      <div class="self-end flex align-center search-input">
        <input placeholder="输入关键字" ref="keyword" value="" @keypress.enter="search" />
        <img style="cursor: pointer;" src="@/assets/img/header/search.png" @click.stop="search" />
      </div>
    </div>

    <div class="financing_card_box" style="margin-top: 1rem;">
      <div class="flex flex-direction align-center financing_card" v-for="(item, index) in mdata.list" :key="index" @click.stop="navigation(item.id)">
        <el-image :src="item.picture" fit="fill" lazy style="margin-top: 5%; width: 6.875rem; height: 6.875rem; border-radius: 50%;"></el-image>
        <div class="text-bold" style="margin-top: 0.375rem;font-size: 1rem; color: #333;">{{ item.title }}</div>

        <div class="flex justify-between align-center" style="margin-top: 5%; width: 70%;">
          <div class="flex align-center justify-center" style="font-size: 0.875rem; color: #666;">
            <i class="el-icon-location-outline" style="font-size: 1rem;"></i>
            <span style="margin-left: 0.25rem;">{{ item.address }}</span>
          </div>
          <div class="flex align-center justify-center" style="font-size: 0.875rem; color: #666;">
            <i class="el-icon-document-checked" style="font-size: 1rem;"></i>
            <span style="margin-left: 0.25rem;">{{ item.institutionName }}</span>
          </div>
        </div>

        <div class="flex justify-between align-center" style="margin-top: 5%; width: 60%;">
          <div class="flex align-center tag">投资人(0)</div>
          <div class="flex align-center tag">案例(0)</div>
        </div>

        <div class="flex-sub synopsis">
          <span>{{ item.synopsis }}</span>
        </div>

        <div class="self-end flex align-center justify-around" style="margin-top: 8%; width: 100%; height: auto;">
          <el-button style="padding: 0 1.25rem; width: auto; height: 1.75rem; line-height: 1.75rem; border: 1px solid #1985F0; color: #1985F0; border-radius: 0.125rem;" plain>
            <div class="flex align-center justify-center">
              <i class="el-icon-document-copy" style="font-size: 1rem;"></i>
              <span style="margin-left: 0.375rem;">项目需求</span>
            </div>
          </el-button>

          <el-button style="padding: 0 1.25rem; width: auto; height: 1.75rem; line-height: 1.75rem; border: 1px solid #f08519; color: #f08519; border-radius: 0.125rem;" plain>
            <div class="flex align-center justify-center">
              <i class="el-icon-upload" style="font-size: 1rem; background-color: #fff;"></i>
              <span style="margin-left: 0.375rem;">投递商业计划书</span>
            </div>
          </el-button>
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
import { requestFinancingList } from '@/api/index.js';

export default {
  name: 'Mechanism',
  components: { BreadCrumb },
  data() {
    return {
      centerDialogVisible: false,
      mdata: {
        total: 0,
        page: 1,
        limit: 12,
        name: '',
        list: [
          {
            address: '',
            buildTime: '',
            id: 0,
            institutionName: '',
            picture: '',
            synopsis: '',
            title: ''
          }
        ]
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
      requestFinancingList(obj).then(res => {
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
      this.$router.push({ name: 'MechanismDetail', query: { id: id, jump: 'mechanism' } });
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

.financing {
  padding-bottom: 1rem;

  .financing_card_box {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 24%);
    grid-gap: 0.5rem;

    .financing_card {
      margin-top: 0.5rem;
      padding: 1rem;
      width: 100%;
      height: 28rem;
      background-color: #fff;
      border: 1px solid #ebebeb;
      border-radius: 0.25rem;
      overflow: hidden;
      cursor: pointer;

      &:nth-child(4n) {
        margin-right: 0;
      }

      .tag {
        padding: 0 1rem;
        width: auto;
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.75rem;
        color: #f08519;
        background-color: rgba($color: #f08519, $alpha: 0.11);
      }

      .synopsis {
        margin-top: 1rem;
        font-size: 0.875rem;
        color: #999;

        span {
          overflow: hidden;
          display: -webkit-box; // 将元素设为盒子伸缩模型显示
          -webkit-box-orient: vertical; // 伸缩方向设为垂直方向
          -webkit-line-clamp: 7; // 超出3行隐藏，并显示省略号
        }
      }
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
