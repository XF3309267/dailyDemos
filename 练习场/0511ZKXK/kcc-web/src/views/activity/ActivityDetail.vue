<template>
  <div class="container padding-lr flex-direction activity" :style="{...$common.setMinWdith()}">
    <bread-crumb :jump-type="jumpType">活动详情</bread-crumb>

    <div class="flex align-center activity_card">
      <el-image :src="data.pictures" fit="fill" style="width: 30.5625rem; height: 22rem; border-radius: 0.5rem; background-color: #dcdcdc;"></el-image>

      <div class="flex flex-direction" style="margin-left: 1rem; height: 22rem;">
        <span class="text-bold" style="font-size: 1.5rem; color: #333;">{{ data.name }}</span>
        <span style="margin-top: 1rem; color: #333;">活动地点：{{ data.address }}</span>
        <span style="margin-top: 1rem; color: #333;">活动时间：{{ data.startTime }}</span>
        <span style="margin-top: 1rem; color: #333;">
          <span style="letter-spacing: 1.75rem;">价</span>
          格：<span
            style="color: red;"
          >{{ data.price === 0 ? '免费' : data.price / 100 + '元' }}</span>
        </span>
        <span class="flex-sub" style="margin-top: 1rem; color: #333;">浏览人数：{{ data.browse }}/人</span>

        <el-button
          style="padding: 0 1.25rem; width: auto; height: 2.25rem; line-height: 2.25rem; border: 0; background-image: linear-gradient(135deg, #f08519, #ffaa54); color: #fff; border-radius: 0.125rem;"
          @click.stop="centerDialogVisible = true"
        >
          我要报名
        </el-button>
      </div>
    </div>

    <div class="flex flex-direction" style="margin-top: 3.5rem;">
      <div class="detail_header">活动详情</div>
      <div class="detail_content" v-html="data.details"></div>
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
  name: 'ActivityDetail',
  components: { BreadCrumb },
  data() {
    return {
      jumpType: '',
      centerDialogVisible: false,
      data: {
        activityStatus: '',
        address: '',
        browse: 0,
        details: '',
        name: '',
        pictures: '',
        price: 0,
        startTime: ''
      }
    };
  },
  mounted() {
    this.request();
  },
  methods: {
    request() {
      request('/visitor/activityInfo/getActivityInfo?id=' + this.$route.query.id).then(res => {
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
.activity {
  padding-bottom: 1rem;

  .activity_card {
    margin-top: 1rem;
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
    border: 1px solid #ebebeb;

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
