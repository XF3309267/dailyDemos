<template>
  <div class="container padding-lr flex-direction needs" :style="{...$common.setMinWdith()}">
    <bread-crumb :jumpType="jumpType">需求详情</bread-crumb>

    <div class="flex flex-direction needs_card">
      <span class="text-bold" style="font-size: 1.5rem; color: #333;">{{ data.name }}</span>

      <div class="flex align-center" style="margin-top: 0.75rem;">
        <div class="flex flex-direction" style="font-size: 0.8125rem; color: #999;">
          <div class="flex align-center">
            <i class="el-icon-location-outline" style="font-size: 1rem; margin-left: -1px; margin-right: 0.2rem;"></i>
            {{ data.address }}
          </div>
          <div class="flex align-center" style="margin-top: 0.65rem;">
            <i class="el-icon-time" style="font-size: 0.875rem; margin-right: 0.25rem;"></i>
            截止时间: {{ data.endTime }}
          </div>
        </div>

        <div class="flex-sub flex flex-direction" style="margin-left: 11%; font-size: 0.8125rem; color: #999;">
          <div class="flex align-center">
            <i class="el-icon-price-tag" style="font-size: 0.875rem; margin-right: 0.25rem;"></i>
            {{ data.label }}
          </div>
          <div class="flex align-center" style="margin-top: 0.65rem;">
            <i class="el-icon-coin" style="font-size: 0.875rem; margin-right: 0.25rem;"></i>
            预算：
            <span style="color: red;">{{ data.budget === 0 ? '面议' : data.budget + '元' }}</span>
          </div>
        </div>

        <el-button class="consult" @click.stop="centerDialogVisible = true">
          <div class="flex align-center justify-center">
            <img src="@/assets/img/index/serve_message.png" style="width: 1.25rem;height: 1.25rem;object-fit: fill;" />
            <span style="margin-left: 0.375rem;">立即咨询</span>
          </div>
        </el-button>
      </div>
    </div>

    <div class="flex flex-direction" style="margin-top: 3.5rem;">
      <div class="detail_header">需求详情</div>
      <div class="detail_content" v-html="data.content"></div>
    </div>

    <!-- 打开对话框 -->
    <el-dialog title="" :visible.sync="centerDialogVisible" width="44.5rem" style="text-align: center;">
      <el-image :src="require('@/assets/img/qrcode/qrcode.png')" fit="fill" style="width: 44.5rem;height: 30rem;"></el-image>
    </el-dialog>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import { request } from '@/utils/request';

export default {
  name: 'NeedsDetail',
  components: { BreadCrumb },
  data() {
    return {
      jumpType: '',
      centerDialogVisible: false,
      data: {
        address: 'string',
        budget: 0,
        content: 'string',
        endTime: '2020-12-26T12:12:21.954Z',
        id: 0,
        label: 'string',
        name: 'string'
      }
    };
  },
  mounted() {
    this.request();
    this.getBreadcrumb();
  },
  methods: {
    request() {
      request('/visitor/scienceNeed/getScienceNeedInfo?id=' + this.$route.query.id).then(res => {
        if (res.code === 200) {
          this.data = res.data;
        }
      });
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
.needs {
  padding-bottom: 1rem;

  .needs_card {
    margin-top: 1rem;
    padding: 1rem 3rem 1rem 1rem;
    background-color: #f8f8f8;

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

  .detail_header {
    position: relative;
    padding-left: 1rem;
    font-size: 1.125rem;
    font-weight: bold;
    color: #333;

    &::after {
      content: ' ';
      position: absolute;
      top: 0.125rem;
      left: 0;
      width: 0.25rem;
      height: 1.25rem;
      background-color: #f08519;
    }
  }

  .detail_content {
    margin-top: 1rem;
    padding: 1rem;
    width: 100%;
    min-height: 20vh;

    ::v-deep img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
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
