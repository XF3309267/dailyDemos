<template>
  <div class="container flex flex-direction">
    <el-row>
      <el-col :xs="{ span: 16, pull: 2 }" :sm="18" :md="24" :lg="24" style="position: relative; height: 36rem;">
        <el-image :src="require('@/assets/img/services/government_title_bg.png')" fit="cover" style="width: 100%; height: 100%; z-index: 0;"></el-image>
        <div class="flex align-center justify-around header-nav">
          <span v-for="(item, index) in typeList" :key="'typelist' + index" class="flex-sub" @click.stop="toJump(item)">{{ item }}</span>
        </div>
      </el-col>

      <el-col :xs="{ span: 10, offset: 1 }" :sm="{ span: 12, offset: 3 }" :md="{ span: 16, offset: 4 }">
        <div class="content">
          <div id="market-operation" class="flex align-center" style="position: relative; height: 23.125rem;">
            <div class="flex flex-direction justify-between" style="margin-right: 1rem; height: 68%; color: #333;">
              <div class="flex flex-direction">
                <span class="content-title">科技市场运营</span>
                <div style="margin-top: 1rem; font-size: 1rem; line-height: 2;">
                  统筹利用科技资源，助推科技产业发展
                  <br />
                  打造区域创新生态，加速科技成果转化
                </div>
                <div class="text-bold" style="margin-top: 1rem; font-size: 0.95rem; color: #F08519;">
                  <span>开展企业科技服务</span>
                  <span style="padding-left: 2rem;">发布技术成果难题</span>
                  <span style="padding-left: 2rem;">培养专业人才队伍</span>
                </div>
              </div>
              <div class="flex align-center common-btn" @click.stop="navigation('qrcode', '_market')">
                <i class="el-icon-chat-dot-square" style="font-size: 1rem;"></i>
                <span style="margin-left: 0.375rem;">立即咨询</span>
              </div>
            </div>

            <el-image
              :src="require('@/assets/img/services/government_banner1.png')"
              fit="cover"
              style="position: absolute; top: 0; bottom: 0; right: 0; width: 45.625rem; height: 23.125rem; z-index: 0;"
            ></el-image>
          </div>

          <el-image :src="require('@/assets/img/services/government_market.png')" fit="cover" style="width: 100%; height: 16.875rem;"></el-image>

          <div id="activities-events" class="flex align-center" style="position: relative; height: 28.75rem;">
            <div class="flex flex-direction justify-between" style="margin-right: 1rem; height: 68%; color: #333;">
              <div class="flex flex-direction">
                <span class="content-title">活动与赛事</span>
                <div style="margin-top: 1rem; width: 74%; font-size: 1rem; line-height: 2;">承办各类赛事、峰会、论坛、项目路演、讲座沙龙、线上分享会等</div>
                <div
                  class="text-bold grid justify-between"
                  style="margin-top: 1rem; width: 70%; grid-template-columns: repeat(4, 25%); grid-gap: 0.5rem; font-size: 0.95rem; color: #F08519;"
                >
                  <span v-for="(item, index) in activitiesEvents" :key="'activities-events' + index">{{ item }}</span>
                </div>
              </div>
              <div class="flex align-center common-btn" @click.stop="navigation('qrcode', '_activity')">
                <i class="el-icon-chat-dot-square" style="font-size: 1rem;"></i>
                <span style="margin-left: 0.375rem;">立即咨询</span>
              </div>
            </div>

            <el-image
              :src="require('@/assets/img/services/government_banner2.png')"
              fit="cover"
              style="position: absolute; top: 0; bottom: 0; right: 0; width: 41.625rem; height: 28.75rem; z-index: 0;"
            ></el-image>
          </div>

          <div v-if="competitionList.length" id="entrepreneurship-competition" class="flex align-center" style="height: 33.5rem;">
            <div class="entrepreneurship-competition-box" @click.stop="navigation('banner', competitionList[0])">
              <el-image class="entrepreneurship-competition-img" :src="competitionList[0].picture" fit="fill"></el-image>
              <div class="text-bold entrepreneurship-competition-title">{{ competitionList[0].title }}</div>
              <div class="entrepreneurship-competition-mask"></div>
            </div>

            <div class="flex-sub grid justify-between align-center" style="margin-left: 1rem; width: 66%; height: 100%; grid-template-columns: repeat(2, 50%); grid-gap: 1rem;">
              <template v-for="(item, index) in competitionList">
                <div
                  v-if="index !== 0"
                  :key="'entrepreneurship-competition' + index"
                  class="entrepreneurship-competition-box"
                  style="width: 100%;"
                  @click.stop="navigation('banner', item)"
                >
                  <el-image class="entrepreneurship-competition-img" :src="item.picture" fit="cover"></el-image>
                  <div class="text-bold entrepreneurship-competition-title">{{ item.title }}</div>
                  <div class="entrepreneurship-competition-mask"></div>
                </div>
              </template>
              <template v-if="competitionList.length !== 5">
                <div
                  v-for="item in 5 - competitionList.length"
                  :key="'entrepreneurship-competition-empty' + item"
                  class="entrepreneurship-competition-box"
                  style="width: 100%; height: 16rem;"
                ></div>
              </template>
            </div>
          </div>

          <div id="innovation-platform" class="flex align-center" style="position: relative; height: 23.875rem;">
            <div class="flex flex-direction justify-between" style="margin-right: 1rem; height: 68%; color: #333;">
              <div class="flex flex-direction">
                <span class="content-title">区域创新平台</span>
                <div style="margin-top: 1rem; width: 60%; font-size: 1rem; line-height: 2;">应用大数据、人工智能技术，洞悉区域产业情况、精准配置资源，未来趋势，让数据“说”。</div>
                <div class="text-bold" style="margin-top: 1rem; font-size: 0.95rem; color: #F08519;">
                  <span>技术资源汇聚积累</span>
                  <span style="padding-left: 2rem;">技术交易数据报告</span>
                  <span style="padding-left: 2rem;">技术发展趋势分析</span>
                </div>
              </div>
              <div class="flex align-center common-btn" @click.stop="navigation('qrcode', '_region')">
                <i class="el-icon-chat-dot-square" style="font-size: 1rem;"></i>
                <span style="margin-left: 0.375rem;">立即咨询</span>
              </div>
            </div>

            <el-image
              :src="require('@/assets/img/services/government_banner3.png')"
              fit="cover"
              style="position: absolute; top: 0; bottom: 0; right: 0; width: 41.625rem; height: 23.875rem; z-index: 0;"
            ></el-image>
          </div>

          <div class="grid align-center justify-between" style="grid-template-columns: repeat(2, 49.5%); grid-gap: 1rem 0.25rem;">
            <el-image
              v-for="item in 4"
              :key="'innovation-platform' + item"
              :src="require('@/assets/img/services/government_innovation_platform' + item + '.png')"
              fit="cover"
              style="width: 100%; height: 22.5rem;"
            ></el-image>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 打开对话框 -->
    <el-dialog title="" :visible.sync="centerDialogVisible" width="44.5rem" style="text-align: center;">
      <el-image :src="require('@/assets/img/qrcode/qrcode' + qrcodeType + '.png')" fit="cover" style="width: 44.5rem;height: 30rem;"></el-image>
    </el-dialog>
  </div>
</template>

<script>
import { requestGovernmentBannerList } from '@/api/index.js';

export default {
  name: 'GovernmentServices',
  components: {},
  data() {
    return {
      qrcodeType: '',
      centerDialogVisible: false,

      // 顶部导航条
      typeList: ['科技市场运营', '活动与赛事', '创业大赛', '区域创新平台'],

      // 活动赛事
      activitiesEvents: ['策划主题', '征集需求', '邀约专家', '征集项目', '连线机构', '统计反馈', '常态运营', '组建社群', '对接合作', '跟进回访'],

      // 创业大赛
      competitionList: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      requestGovernmentBannerList().then(res => {
        this.competitionList = res.data;
      });
    },
    // 页面内锚点跳转
    toJump(name) {
      let idName = '';
      switch (name) {
        case '科技市场运营':
          idName = 'market-operation';
          break;
        case '活动与赛事':
          idName = 'activities-events';
          break;
        case '创业大赛':
          idName = 'entrepreneurship-competition';
          break;
        case '区域创新平台':
          idName = 'innovation-platform';
          break;
        default:
          break;
      }

      document.querySelector('#' + idName).scrollIntoView({
        behavior: 'smooth', // 平滑过渡
        block: 'center' // 上边框与视窗顶部平齐。默认值
      });
    },
    navigation(type, item) {
      switch (type) {
        case 'banner':
          if (Number(item.redirectType) === 1) {
            this.$router.push(item.redirectUrl + '&jump=government');
          } else if (Number(item.redirectType) === 2) {
            window.open('http://' + item.redirectUrl);
          }
          break;
        case 'qrcode':
          this.qrcodeType = item || '';
          this.centerDialogVisible = true;
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: -1rem;
  margin-bottom: -1rem;

  .header-nav {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);

    width: 60%;
    height: 4.5rem;
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 1;

    span {
      padding: 1rem;
      width: 100%;
      height: 100%;
      line-height: 2;
      text-align: center;
      font-size: 1.25rem;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
    }
  }

  .content {
    & > div {
      margin-top: 4rem;
    }

    & > div:last-child {
      margin-bottom: 10%;
    }

    /* 每个模块的标题 */
    .content-title {
      font-size: 1.5rem;
      font-weight: bold;
    }

    /* 通用按钮 */
    .common-btn {
      padding: 1rem;
      padding-left: 1.5rem;
      width: 8rem;
      height: 2.25rem;
      line-height: 2.125rem;
      font-size: 0.875rem;
      background-image: linear-gradient(135deg, #f08519, #ffaa54);
      color: #fff;
      border: 0;
      border-radius: 0.125rem;
      cursor: pointer;
    }

    /* 创业大赛 */
    .entrepreneurship-competition-box {
      position: relative;
      width: 33%;
      height: 100%;
      cursor: pointer;

      &:hover {
        & > .entrepreneurship-competition-title {
          background-color: rgba($color: #000000, $alpha: 0.15);
        }
      }

      .entrepreneurship-competition-img {
        width: 100%;
        height: 100%;
        z-index: 0;
      }

      .entrepreneurship-competition-title {
        position: absolute;
        left: 0;
        bottom: 0;
        padding-left: 5%;
        width: 100%;
        height: 3rem;
        line-height: 2.8rem;
        font-size: 1.25rem;
        color: #fff;
        z-index: 2;
        transition: all 0.5s;

        &:hover {
          background-color: rgba($color: #000000, $alpha: 0.15);

          & + .entrepreneurship-competition-mask {
            background-color: rgba($color: #000000, $alpha: 0);
          }
        }
      }

      .entrepreneurship-competition-mask {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba($color: #000000, $alpha: 0.25);
        z-index: 1;
        transition: all 0.5s;

        &:hover {
          background-color: rgba($color: #000000, $alpha: 0);
        }
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
