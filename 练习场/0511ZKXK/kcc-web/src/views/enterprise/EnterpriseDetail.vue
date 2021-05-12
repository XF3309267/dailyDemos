<template>
  <div class="container padding-lr flex-direction enterprise" :style="{...$common.setMinWdith()}">
    <bread-crumb :jumpType="jumpType">企业详情</bread-crumb>

    <div class="flex align-center enterprise_card">
      <el-image :src="data.picture" fit="fill" style="width: 8.75rem; height: 8.75rem; border-radius: 50%; background-color: #EBEBEB;"></el-image>

      <div class="flex-sub flex flex-direction justify-center" style="margin-left: 1rem; height: 8.75rem;">
        <span class="text-bold" style="font-size: 1.125rem; color: #333;">{{ data.title }}</span>

        <div class="flex align-center" style="margin-top: 1rem; font-size: 0.875rem; color: #333;">
          <div class="flex align-center">
            <i class="el-icon-price-tag" style="font-size: 1rem;"></i>
            <span style="margin-left: 0.375rem;">{{ data.label }}</span>
          </div>

          <div class="flex align-center" style="margin-left: 5%;">
            <i class="el-icon-location-outline" style="font-size: 1rem;"></i>
            <span style="margin-left: 0.375rem;">{{ data.address }}</span>
          </div>
        </div>
      </div>

      <el-button class="consult" icon="el-icon-chat-dot-square" @click.stop="centerDialogVisible = true">立即咨询</el-button>
    </div>

    <div class="flex flex-direction" style="margin-top: 3.5rem;">
      <div class="detail_header">企业简介</div>
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
  name: 'EnterpriseDetail',
  components: { BreadCrumb },
  data() {
    return {
      jumpType: '',
      centerDialogVisible: false,
      data: {
        address: 'string',
        content: 'string',
        id: 0,
        label: 'string',
        picture: 'string',
        title: 'string'
      }
    };
  },
  mounted() {
    this.request();
  },
  methods: {
    request() {
      request('/visitor/investInfo/getInvestInfo?id=' + this.$route.query.id).then(res => {
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
.enterprise {
  padding-bottom: 1rem;

  .enterprise_card {
    margin-top: 1rem;
    padding: 1rem 3rem 1rem 1rem;
    background-color: #f8f8f8;

    .consult {
      padding: 0 1.25rem;
      width: auto;
      height: 2.25rem;
      line-height: 2.125rem;
      background-image: linear-gradient(135deg, #f08519, #ffaa54);
      color: #fff;
      border: 0;
      border-radius: 0;

      ::v-bind i {
        font-size: 1rem !important;
      }
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
