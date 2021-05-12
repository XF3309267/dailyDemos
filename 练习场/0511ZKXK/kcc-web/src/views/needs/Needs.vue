<template>
  <div class="container padding-lr flex-direction needs" :style="{...$common.setMinWdith()}">
    <bread-crumb :jumpType="jumpType">技术需求</bread-crumb>

    <div class="flex align-center search">
      <div class="self-end flex align-center search-input">
        <input placeholder="输入关键字" ref="keyword" value="" @keypress.enter="search" />
        <img style="cursor: pointer;" src="@/assets/img/header/search.png" @click.stop="search" />
      </div>
    </div>

    <div class="flex-sub flex flex-direction">
      <div class="needs_card" v-for="(item, index) in mdata.list" :key="index" @click.stop="navigation(item.id)">
        <router-link :to="{ name: 'NeedsDetail', query: { id: item.id, jump: jumpType === 'services' ? 'needs2' : 'needs' } }" class="flex flex-direction">
          <div class="text-bold" style="font-size: 1rem; color: #333;">{{ item.name }}</div>
          <div class="flex align-center" style="margin-top: 0.25rem; font-size: 0.75rem; color: #999;">
            <i class="el-icon-price-tag" style="margin-right: 0.25rem;"></i>
            {{ item.label }}
          </div>
          <div class="flex-sub" style="margin-top: 2%; font-size: 0.875rem; color: #666;">{{ item.synopsis }}</div>
          <div class="flex align-center justify-between" style="margin-top: 1%;">
            <div class="flex-sub flex align-center" style="font-size: 0.75rem; color: #999;">
              <div class="flex align-center">
                <i class="el-icon-coin" style="font-size: 0.875rem; margin-right: 0.25rem;"></i>
                预算：
                <span style="color: red;">{{ item.budget == 0 ? '面议' : item.budget }}</span>
              </div>
              <div class="flex align-center" style="margin-left: 3%;">
                <i class="el-icon-location-outline" style="font-size: 0.875rem; margin-right: 0.25rem;"></i>
                {{ item.address }}
              </div>
              <div class="flex align-center" style="margin-left: 3%;">
                <i class="el-icon-time" style="font-size: 0.875rem; margin-right: 0.25rem;"></i>
                {{ item.endTime }}
              </div>
            </div>

            <div class="flex align-center">
              <el-button class="consult" @click.stop="centerDialogVisible = true">
                <div class="flex align-center justify-center">
                  <img src="@/assets/img/index/serve_message.png" style="width: 1.25rem;height: 1.25rem;object-fit: fill;" />
                  <span style="margin-left: 0.375rem;">立即咨询</span>
                </div>
              </el-button>
            </div>
          </div>
        </router-link>
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
import { requestScienceNeedList } from '@/api/index.js';

export default {
  name: 'Needs',
  components: { BreadCrumb },
  data() {
    return {
      jumpType: '',
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

      requestScienceNeedList(obj).then(res => {
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
      if (this.jumpType === 'services') {
        this.$router.push({ name: 'NeedsDetail', query: { id: id, jump: 'needs2' } });
      } else {
        this.$router.push({ name: 'NeedsDetail', query: { id: id, jump: 'needs' } });
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

.needs {
  padding-bottom: 1rem;

  .needs_card {
    padding: 1rem 0;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;
  }

  .consult {
    padding: 0;
    width: 8rem;
    height: 2.25rem;
    line-height: 2.125rem;
    background-image: linear-gradient(135deg, #f08519, #ffaa54);
    color: #fff;
    border: 0;
    border-radius: 0;
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
