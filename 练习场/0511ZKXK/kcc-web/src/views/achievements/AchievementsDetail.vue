<template>
  <div class="container padding-lr flex-direction" :style="{...$common.setMinWdith()}">
    <bread-crumb :jumpType="jumpType">科技成果详情</bread-crumb>

    <div class="flex align-center" style="margin-top: 2rem; width: 100%; height: 20rem;">
      <el-image :src="datas.picture" fit="fill" style="width: 30.625rem; height: 100%; border-radius: 0.25rem; border: 1px solid #e2e2e2;"></el-image>
      <div class="flex-sub flex flex-direction" style="margin-left: 1rem; height: 100%;">
        <span class="text-bold" style="font-size: 1.25rem; color: #333;">{{ datas.name }}</span>
        <div class="flex-sub flex flex-direction" style="margin-top: 0.75rem; padding: 1rem; font-size: 1rem; color: #999; border: 1px dashed #e2e2e2;">
          <div class="flex-sub flex flex-direction justify-between">
            <div class="flex justify-between">
              <span class="flex-sub">专利申请号：{{ datas.patentNo }}</span>
              <span class="flex-sub">技术成熟度：{{ datas.maturityName }}</span>
            </div>

            <div class="flex justify-between">
              <span class="flex-sub">专利类型：{{ datas.typeName }}</span>
              <span class="flex-sub">应用领域：{{ datas.field }}</span>
            </div>

            <div class="flex justify-between">
              <span class="flex-sub">所在地：{{ datas.address }}</span>
              <span class="flex-sub">来源：{{ datas.sourceName }}</span>
            </div>

            <div class="flex justify-between">
              <span class="flex-sub">行业：{{ datas.businessName }}</span>
              <span class="flex-sub">最近更新：{{ datas.newUpdate }}</span>
            </div>

            <div style="color: #333;">
              价格: {{ datas.wayDeal }}
              <span class="text-bold" style="font-size: 1.25rem; color: red;">
                <span>{{ datas.price }}</span>
                <span v-if="datas.price != '面议'">元</span>
              </span>
            </div>
          </div>

          <div style="height: 4rem; line-height: 6.5rem;">
            <el-button class="consult" @click.stop="navigation('qrcode')">
              <div class="flex align-center justify-center">
                <img src="@/assets/img/index/serve_message.png" style="width: 1.25rem;height: 1.25rem;object-fit: fill;" />
                <span style="margin-left: 0.375rem;">立即咨询</span>
              </div>
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <el-row :gutter="20" style="margin-top: 2rem;">
      <el-col :span="17" style="position: relative;">
        <div class="achievements-title">项目简介</div>
        <div class="flex flex-direction achievements-box" v-html="datas.content"></div>
      </el-col>

      <el-col :span="7">
        <!-- <div class="flex flex-direction" style="margin-top: 0.5rem;">
          <div class="other-box">
            <span class="box_title">相关推荐</span>
            <div class="flex flex-direction flex-wrap newest-message-box">
              <div class="flex flex-direction" v-for="(item, key) in dataNewestScienceResult.list" :key="'newest-message' + key" @click.stop="navigation('detail', item)">
                <span class="box-span">{{ item.name }}</span>
                <span class="box-span">{{ item.businessName }}</span>
              </div>
            </div>
          </div>
        </div> -->
        <Recommendations :value="dataNewestScienceResult.list" />
      </el-col>
    </el-row>

    <!-- 打开对话框 -->
    <el-dialog title="" :visible.sync="centerDialogVisible" width="44.5rem" style="text-align: center;">
      <el-image :src="require('@/assets/img/qrcode/qrcode.png')" fit="fill" style="width: 44.5rem;height: 30rem;"></el-image>
    </el-dialog>
  </div>
</template>

<script>
import { request } from '@/utils/request';
import { requestScienceResultList } from '@/api/index.js';
import BreadCrumb from '@/components/BreadCrumb.vue';
import Recommendations from '@/components/Recommendations.vue';

export default {
  name: 'NeedsDetail',
  components: { BreadCrumb, Recommendations },
  data() {
    return {
      jumpType: '',
      centerDialogVisible: false,

      // 获取最新发布列表
      dataNewestScienceResult: {
        page: 1,
        limit: 9,
        list: []
      },

      // 获取所需数据
      datas: {
        address: '',
        businessName: '',
        content: '',
        field: '',
        id: 0,
        maturityName: '',
        name: '',
        newUpdate: '',
        patentNo: '',
        picture: '',
        price: '',
        sourceName: '',
        typeName: '',
        wayDeal: ''
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 技术成果
      requestScienceResultList(this.datas.dataNewestScienceResult).then(res => {
        this.dataNewestScienceResult.list = res.data.data;
      });

      this.request();
    },
    request() {
      request('/visitor/scienceResultInfo/getScienceResultInfo?id=' + this.$route.query.id).then(res => {
        if (res.code === 200) {
          this.datas = res.data;
        }
      });
    },
    navigation(type, item) {
      switch (type) {
        case 'qrcode':
          this.centerDialogVisible = true;
          break;
        case 'detail':
          this.$router.push({ name: 'AchievementsDetail', query: { id: item.id, jump: 'achievements' } });
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
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: -1rem 0;
  padding-top: 1.2rem;
  padding-bottom: 1rem;
  min-height: 60vh;

  .achievements-title {
    position: relative;
    padding: 0.5rem 0;
    font-size: 1.125rem;
    font-weight: 700;
    color: #333;

    &::after {
      content: ' ';
      position: absolute;
      left: 0.75rem;
      bottom: 0;
      width: 2.75rem;
      height: 0.125rem;
      background-color: #f08519;
    }
  }

  .achievements-box {
    min-height: 10vh;
    padding: 1rem 0.75rem;
    border: 1px solid #ebebeb;

    ::v-deep img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  .consult {
    padding: 0;
    width: 8rem;
    height: 2.25rem;
    line-height: 2.125rem;
    background-image: linear-gradient(135deg, #f08519, #ffaa54);
    color: #fff;
    border: 0;
    border-radius: 0.125rem;
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

    .newest-message-box {
      margin-top: 1rem;
      padding: 0 0 1rem 1rem;
      min-height: 1px;
      width: 100%;
      border: 1px solid #ebebeb;

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
