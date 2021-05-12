<template>
  <div class="container flex flex-direction" :style="{...$common.setMinWdith()}">
    <el-row>
      <el-col :span="24" style="position: relative; height: 36rem; margin-left: -1rem;">
        <el-image :src="require('@/assets/img/services/government_title_bg.png')" fit="cover" style="width: calc(100% + 1rem); height: 100%; z-index: 0;"></el-image>
        <div class="flex align-center justify-around header-nav">
          <span v-for="(item, index) in typeList" :key="'typelist' + index" class="flex-sub" @click.stop="toJump(item)">{{ item }}</span>
        </div>
      </el-col>

      <el-col :xs="{ span: 24 }" :sm="{ span: 18, offset: 3 }" :md="{ span: 16, offset: 4 }">
        <div class="content">
          <div id="market-operation" class="flex align-center justify-around display-card">
            <div class="flex-sub flex flex-direction display-card-left">
              <span class="display-card-title">科技大市场运营</span>
              <div class="flex-sub display-card-content">
                从技术转移规划设计、线上平台建设与运营、线下服务体系建设、供需资源挖掘集聚、要素资源导入与运营、服务机构引入与管理等方面为科技市场运营提供全面的支撑与服务。统筹利用科技资源，助推科技产业发展，加速科技成果转化，打造集“展示、交易、共享、服务、交流、孵化”六位一体，资源集聚共享，与区域创新生态平台对接融合的现代科技大市场。
                <span style="font-weight: bold;">成功运营案例：南昌科技广场、江西技术交易市场</span>
              </div>
              <!-- <div class="display-card-tag" style="color: #333;">成功运营案例：南昌科技广场、江西技术交易市场</div> -->
              <div class="flex align-center justify-between display-card-tag display-card-tag-market">
                <span>技术转移规划设计</span>
                <span>线上平台建设运营</span>
                <span>线下服务体系建设</span>
                <span>供需资源挖掘集聚</span>
                <span>要素资源导入运营</span>
              </div>
              <div class="flex align-center common-btn" @click.stop="navigation('qrcode', '_market')">
                <i class="el-icon-chat-dot-square" style="font-size: 1rem;"></i>
                <span style="margin-left: 0.375rem;">立即咨询</span>
              </div>
            </div>
            <div class="flex-sub flex flex-direction display-card-right">
              <el-image :src="require('@/assets/img/services/government_pic1.png')" fit="cover" style="width: 100%; height: 100%;"></el-image>
            </div>
          </div>

          <div id="regional-innovation" class="flex align-center justify-around display-card">
            <div class="flex-sub flex flex-direction display-card-right">
              <el-image :src="require('@/assets/img/services/government_pic2.png')" fit="cover" style="width: 100%; height: 100%;"></el-image>
            </div>
            <div class="flex-sub flex flex-direction display-card-left">
              <span class="display-card-title">区域创新整体解决方案</span>
              <div class="flex-sub display-card-content">
                构建区域内企业、园区、产业等创新要素数据平台，应用大数据、人工智能等技术，洞悉区域产业情况，精准配置资源，为地方政府产业培育及升级服务，为政府部门高效管理赋能，为园区招商引智赋能，为企业创新转型赋能。
              </div>
              <div class="flex flex-direction display-card-tag">
                <div class="flex align-center">
                  <div style="width: 7.5rem;">培育及升级服务</div>
                  <div style="margin-left: 2rem;">高效管理赋能</div>
                </div>
                <div class="flex align-center" style="margin-top: 0.75%;">
                  <div style="width: 7.5rem;">招商引智赋能</div>
                  <div style="margin-left: 2rem;">创新转型赋能</div>
                </div>
              </div>
              <div class="flex align-center common-btn" @click.stop="navigation('qrcode', '_region')">
                <i class="el-icon-chat-dot-square" style="font-size: 1rem;"></i>
                <span style="margin-left: 0.375rem;">立即咨询</span>
              </div>
            </div>
          </div>

          <div id="enterprise-cooperation" class="flex align-center justify-around display-card">
            <div class="flex-sub flex flex-direction display-card-left">
              <span class="display-card-title">企业合作</span>
              <div class="flex-sub display-card-content">
                深耕江西市场，根据企业类型、成长阶段、运营状态等情况精准匹配江西区域政府、投资机构、产业园区、龙头企业开展对接，为企业提供落户选址、政策谈判、政策申报、政策咨询、融资对接等符合企业刚需的高价值服务。
              </div>
              <div class="flex align-center justify-between display-card-tag display-card-tag-enterprise">
                <span>落户选址</span>
                <span>政策谈判</span>
                <span>政策申报</span>
                <span>政策咨询</span>
                <span>融资对接</span>
              </div>
              <div class="flex align-center common-btn" @click.stop="navigation('qrcode', '')">
                <i class="el-icon-chat-dot-square" style="font-size: 1rem;"></i>
                <span style="margin-left: 0.375rem;">立即咨询</span>
              </div>
            </div>
            <div class="flex-sub flex flex-direction display-card-right">
              <el-image :src="require('@/assets/img/services/government_pic3.png')" fit="cover" style="width: 100%; height: 100%;"></el-image>
            </div>
          </div>

          <div id="competition-cooperation" class="flex align-center justify-around display-card">
            <div class="flex-sub flex flex-direction display-card-right">
              <el-image :src="require('@/assets/img/services/government_pic4.png')" fit="cover" style="width: 100%; height: 100%;"></el-image>
            </div>
            <div class="flex-sub flex flex-direction display-card-left">
              <span class="display-card-title">赛事合作</span>
              <div class="flex-sub display-card-content">
                依托“预见独角兽计划”丰富的项目资源及投资机构资源，对接政府各类赛事活动，通过赛事活动挖掘优秀的创业项目，通过培育、投融资对接等方式助推企业成长。
                共开展各类创业大赛、创业论坛、各类政策宣讲、公益讲堂、创业训练营、投融资对接会等活动400余场。
              </div>
              <div class="display-card-tag display-card-tag-activities">
                <span>策划主题</span>
                <span>征集需求</span>
                <span>邀约专家</span>
                <span>征集项目</span>
                <span>连线机构</span>
                <span>统计反馈</span>
                <span>组建社群</span>
                <span>对接合作</span>
                <span>跟进回访</span>
              </div>
              <div class="flex align-center common-btn" @click.stop="navigation('qrcode', '_activity')">
                <i class="el-icon-chat-dot-square" style="font-size: 1rem;"></i>
                <span style="margin-left: 0.375rem;">立即咨询</span>
              </div>
            </div>
          </div>

          <div v-if="competition.list && competition.list.length" class="flex flex-direction align-center" style="width: 100%; height: auto;">
            <div class="display-card" style="border: 0; box-shadow: none;"><span class="display-card-title">赛事合作案例</span></div>

            <div class="flex-sub grid justify-between align-center" style="margin-top: 1rem; width: 100%; height: 100%; grid-template-columns: repeat(3, 32.9%); grid-gap: 1rem;">
              <template v-for="(item, index) in competition.list">
                <div :key="'competition-list' + index" class="entrepreneurship-competition-box" style="width: 100%;" @click.stop="navigation('banner', item)">
                  <el-image class="entrepreneurship-competition-img" :src="item.picture" fit="cover"></el-image>
                  <div class="text-bold entrepreneurship-competition-title">{{ item.title }}</div>
                  <div class="entrepreneurship-competition-mask"></div>
                </div>
              </template>
            </div>

            <el-button
              v-if="competition.loading || competition.noMore || competition.hasNext"
              :loading="competition.loading"
              :disabled="competition.noMore"
              size="medium"
              :type="competition.noMore ? 'info' : 'warning'"
              class="flex align-center justify-center"
              style="margin: auto; margin-top: 2rem; width: 10rem; height: 2.8rem; font-size: 1rem; line-height: 1.2;"
              @click="loadingMore"
            >
              <p v-if="competition.loading">加载中...</p>
              <p v-else-if="competition.noMore">没有更多了</p>
              <p v-else-if="competition.hasNext">查看更多</p>
            </el-button>
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
import { request } from '@/utils/request';
// import { requestGovernmentBannerList } from '@/api/index.js';

export default {
  name: 'GovernmentServices',
  components: {},
  data() {
    return {
      qrcodeType: '',
      centerDialogVisible: false,

      // 顶部导航条
      typeList: ['科技大市场运营', '区域创新整体解决方案', '企业合作', '赛事合作'],

      // 创业大赛
      competition: {
        // 加载按钮状态
        hasNext: true,
        loading: false,
        noMore: false,

        total: 0,
        limit: 6,
        page: 1,
        list: []
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // request('/visitor/governmentInfo/getBannerList_V1?pageSize=5&pageNum=1').then(res => {
      //   this.competitionList = res.rows;
      // });
      this.requestCompetition();
    },
    loadingMore() {
      this.requestCompetition();
    },
    // 加载更多活动
    requestCompetition() {
      if (!this.competition.loading) {
        this.competition.loading = true;
        request('/visitor/governmentInfo/getBannerList_V1?pageSize=' + this.competition.limit + '&pageNum=' + this.competition.page)
          .then(res => {
            if (res.code === 200) {
              this.competition.total = res.total;
              if (this.competition.total > this.competition.page) {
                this.competition.page++;
                this.competition.hasNext = true;
              } else {
                this.competition.hasNext = false;
                this.competition.noMore = true;
              }

              const newData = res.rows;
              newData.forEach((v, k) => {
                this.competition.list.push(v);
              });
            }
          })
          .finally(() => {
            this.competition.loading = false;
          });
      }
    },
    // 页面内锚点跳转
    toJump(name) {
      let idName = '';
      switch (name) {
        case '科技大市场运营':
          idName = 'market-operation';
          break;
        case '区域创新整体解决方案':
          idName = 'regional-innovation';
          break;
        case '企业合作':
          idName = 'enterprise-cooperation';
          break;
        case '赛事合作':
          idName = 'competition-cooperation';
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

    width: 66.666%;
    height: auto;
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
      margin-bottom: 5%;
    }

    /* 通用按钮 */
    .common-btn {
      margin-top: 2rem;
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

    /* 通用展示卡片 */
    .display-card {
      position: relative;
      width: 100%;
      height: auto;
      border-radius: 0.5rem;
      background-color: #fff;
      border: 1px dotted whitesmoke;
      box-shadow: 0 0 1.25rem 0 rgba(255, 255, 194, 0.43);
      overflow: hidden;
      color: #333;

      /* 标题通用样式 */
      .display-card-title {
        font-size: 1.5rem;
        font-weight: bold;
      }

      /* 内容通用样式 */
      .display-card-content {
        margin-top: 1rem;
        padding-right: 2rem;
        font-size: 1rem;
        line-height: 2rem;
        overflow: auto;
      }

      /* tag通用样式 */
      .display-card-tag {
        margin-top: 1rem;
        font-size: 1rem;
        font-weight: bold;
        color: #f08519;
        width: 88%;
        display: grid;
        grid-gap: 0.75rem 0;
      }

      /* 科技大市场运营tag */
      .display-card-tag-market {
        grid-template-columns: repeat(3, 130px);
      }

      /* 企业合作/赛事合作 tag */
      .display-card-tag-enterprise,
      .display-card-tag-activities {
        grid-template-columns: repeat(5, 100px);
      }

      .display-card-left {
        width: 100%;
        height: 100%;
        padding: 1.5rem;
      }

      .display-card-right {
        width: 100%;
        height: auto;
        background-color: green;
      }
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
        overflow: hidden;
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
