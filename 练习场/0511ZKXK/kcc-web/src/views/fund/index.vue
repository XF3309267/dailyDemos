<template>
  <div class="container flex flex-direction" :style="{...$common.setMinWdith()}">
    <el-row>
      <el-col :span="24" style="position: relative; height: 36rem; margin-left: -1rem;">
        <el-image :src="require('@/assets/img/fund/title_bg.png')" fit="cover" style="width: calc(100% + 1rem); height: 100%; z-index: 0;"></el-image>
        <div class="flex align-center justify-around header-nav">
          <span v-for="(item, index) in manageTypeList" :key="'typelist' + index" class="flex-sub" @click.stop="toJump(item)">{{ item }}</span>
        </div>
      </el-col>

      <el-col :xs="{ span: 24 }" :sm="{ span: 18, offset: 3 }" :md="{ span: 16, offset: 4 }">
        <div class="content">
          <div id="fund-introduction" class="flex flex-direction" style="margin: 5rem auto 0;">
            <div class="text-center flex flex-direction">
              <!-- <span class="content-title-span">Fund introduction</span> -->
              <span class="content-title">基金介绍</span>
            </div>
          </div>
          <div class="flex align-center justify-center" style="position: relative; margin-top: 2rem; width: 100%; height: 30rem;">
            <el-image
              :src="require('@/assets/img/fund/fund_introduction.png')"
              fit="cover"
              style="position: absolute; left: 6%; bottom: -8%; left: 0; width: 49%; height: 100%;"
            ></el-image>
            <div class="flex align-center" style="margin-left: 15%; width: 80%; height: 100%; border: 1px solid #F08519; overflow-y: auto;">
              <div style="margin-left: 40%; padding: 1rem; width: 100%; height: 100%; font-size: 0.95rem; line-height: 2;">
                <div style="text-indent: 2em;">
                  江西心客投资有限公司是中科心客旗下核心投资平台，是江西省率先获得中国基金业协会登记和备案的私募基金管理人（登记编号：P1066539），是江西省投资基金业协会常务副会长单位，发起设立了心客春之雨、心客筑享、心客预见基金、心客中基池州产业基金、江西省科技创新基金等多支基金，获得了众多政府引导基金的青睐和支持，凭借专业的募、投、管、退团队和丰富的项目经验及资源，投资了趣店、谷宝农业、FILL耳机、博迅汽车、华通新能源、码牛科技以及双天使生物科技等众多优质项目，成为江西省创投的名片。同时，中科心客与国内众多知名创投如红杉资本、IDG资本、真格基金、经纬中国、梅花创投、金沙江创投等建立了良好的合作关系。
                </div>
                <br />
                <div style="text-indent: 2em;">
                  目前江西心客投资有限公司管理数只基金，主要围绕价值投资+成长型投资展开长期股权投资业务，以企业的成长性为核心评价标准，以行业为先、团队为重，在优势行业中选择优势的团队，多维度综合评判企业投资价值，通过合理搭配投资组合，力争风险最小化和收益最大化。目前基金主要投资于TMT(科技、媒体和通讯）、先进制造、人工智能、大数据、医疗、消费娱乐、新能源、新材料等领域。
                </div>
              </div>
            </div>
          </div>

          <!-- <div id="development-history" class="flex flex-direction">
            <div class="text-center flex flex-direction">
              <span class="content-title-span">Development history</span>
              <span class="content-title">发展历程</span>
            </div>

            <div class="flex align-end" style="margin-top: 2rem;">
              <el-image :src="require('@/assets/img/fund/development_history.png')" fit="cover" style="width: 65%; height: 100%;"></el-image>
              <span class="flex-sub" style="font-size: 0.875rem; line-height: 1.75; text-indent: 2em;">
                江西心客投资有限公司创办于英雄城南昌，在国家“大众创业、万众创新”战略背景下，在省市政府及相关部门的大力支持下，江西心客迅速发展成为了江西省创投的名片。2016年12月，心客投资联合中科招商及当地政府成功发起百亿中科心客众创基金。2018年9月，心客投资联合江西省科技厅、南昌市两创办、市科技局、梅花创投等单位成功发起预见独角兽计划，力争三年内投资、孵化出3家以上独角兽企业、100家以上瞪羚企业。2019年2月成功协办江西省2018年度独角兽企业、瞪羚企业榜单发布会。2019年7月成功发起、承办首届滕王阁创投峰会。2020年9月成功发起、承办中国潜在独角兽发布会活动。
              </span>
            </div>
          </div> -->

          <div id="focus-area" class="flex flex-direction">
            <div class="text-center flex flex-direction">
              <!-- <span class="content-title-span">Focus area</span> -->
              <span class="content-title">投资领域</span>
            </div>

            <div class="grid justify-center align-center" style="margin-top: 2rem; grid-template-columns: repeat(3, 33%); grid-gap: 1rem;">
              <template v-for="(item, index) in 6">
                <el-image
                  :key="'focus_area' + index"
                  :src="require('@/assets/img/fund/focus_area' + (index + 1) + '.png')"
                  fit="cover"
                  style="width: 100%; height: 100%;"
                ></el-image>
              </template>
            </div>
          </div>

          <!-- <div id="business-segments">
            <div class="text-center flex flex-direction">
              <span class="content-title-span">Business segments</span>
              <span class="content-title">业务板块</span>
            </div>

            <div class="flex align-center justify-center business-segments-box">
              <el-image :src="require('@/assets/img/fund/business_segments.webp')" fit="cover" lazy class="business-segments-box-img"></el-image>
              <div class="text-bold flex flex-direction align-center business-segments-box-content">
                <div style="font-size: 1.75rem;">私募股权投资</div>
                <div style="margin-top: 1.5rem;">
                  中科心客投资基金主要集中投资于具有成长性的TMT，人工智能，生物医药，新能源，消费升级，大健康等领域的早中期项目，根据客户的项目，我们会秉着严谨的态度，凭借丰富的投资经验，帮助创业者找到真正属于自己的机会。
                </div>
              </div>
            </div>
          </div>

          <div id="enterprise-area-landing" class="flex flex-direction" style="height: 54rem;">
            <div class="text-center flex flex-direction">
              <span class="content-title-span">Enterprise area landing</span>
              <span class="content-title">企业区域落地</span>
            </div>

            <div class="flex-sub enterprise-area-landing-box">
              <el-image :src="require('@/assets/img/fund/enterprise_landing1.png')" fit="cover" lazy class="enterprise-area-landing-pic"></el-image>
              <div class="flex flex-direction justify-between enterprise-area-landing-card">
                <div class="flex flex-direction">
                  <div class="enterprise-area-landing-title">区域性规划布局</div>
                  <div class="enterprise-area-landing-content">
                    根据企业阶段性发展规划，助力企业从战略规划到市场拓展、产品研发、人才引进等方面综合规划及支持，择优进行区域布局合作。
                  </div>
                </div>

                <div class="flex flex-direction">
                  <div class="enterprise-area-landing-title">地方落地合作</div>
                  <div class="enterprise-area-landing-content">帮助企业对接当地相关政府部门洽谈落地合作，深入沟通、匹配当地优惠扶持政策。</div>
                </div>
              </div>
            </div>

            <div class="flex-sub enterprise-area-landing-box">
              <div class="flex flex-direction justify-between enterprise-area-landing-card enterprise-area-landing-card2">
                <div class="flex flex-direction">
                  <div class="enterprise-area-landing-title">金融与产业对接</div>
                  <div class="enterprise-area-landing-content">在企业开展业务过程中提供投融资对接、产业资源对接等多项服务，促进金融与产业的高度融合。</div>
                </div>

                <div class="flex flex-direction">
                  <div class="enterprise-area-landing-title">落地支持服务</div>
                  <div class="enterprise-area-landing-content">结合企业落地后的运营策略、发展阶段、产品研发等因素，长期为企业提供政策落实、产业扶持等服务。</div>
                </div>
              </div>
              <el-image :src="require('@/assets/img/fund/enterprise_landing2.png')" fit="cover" lazy class="enterprise-area-landing-pic enterprise-area-landing-pic2"></el-image>
            </div>
          </div> -->

          <div id="investment-case">
            <div class="text-center flex flex-direction">
              <span class="content-title-span">Investment Case</span>
              <span class="content-title">投资案例</span>
            </div>

            <div class="grid flex-direction align-center justify-between" style="margin-top: 2rem; grid-template-columns: repeat(3, 1fr); justify-content: center; grid-gap: 1rem">
              <el-image
                v-for="(item, index) in 6"
                :key="'investment-case' + index"
                :src="require('@/assets/img/fund/investmentCase' + (index + 1) + '.png')"
                fit="fill"
                style="width: 100%; height: 100%; border: 1px solid #f3f3f3;"
                lazy
              ></el-image>
            </div>
          </div>

          <!-- <div v-if="datas.length" id="company-dynamics">
            <div class="text-center flex flex-direction">
              <span class="content-title-span">Company dynamics</span>
              <span class="content-title">公司动态</span>
            </div>

            <div style="margin-top: 1rem;">
              <el-carousel :autoplay="false" type="card" indicator-position="none" @change="changeCarousel">
                <el-carousel-item v-for="(item, index) in datas" :key="'company-dynamics' + index">
                  <el-image :src="item.fundPicture" fit="fill" style="width: 40rem; height: 100%; border-radius: 0.25rem;"></el-image>
                </el-carousel-item>
              </el-carousel>

              <div
                class="grid justify-between"
                style="margin: auto; margin-top: 2.5rem; padding-left: 3rem; width: 100%; height: 100%; grid-template-columns: repeat(3, 30%); grid-gap: 0.75rem"
              >
                <div class="flex flex-direction" style="position: relative; color: #5b5e66;">
                  <span class="text-bold" style="font-size: 0.875rem;">{{ pre.title }}</span>
                  <span style="margin-top: 1rem; font-size: 0.75rem;">{{ pre.address }}</span>
                  <div style="position: relative;">
                    <div ref="contentPre" class="company-dynamics-content" :style="{ height: showMore ? 'auto' : showHeight + 'px' }" v-html="pre.content"></div>
                    <div v-if="!showMore && !isNone" class="company-dynamics-mask"></div>
                    <div v-if="!isNone" class="company-dynamics-more" @click.stop="showMore = !showMore">
                      <div v-if="!showMore">
                        展开
                        <i class="el-icon-arrow-down"></i>
                      </div>
                      <div v-else>
                        收起
                        <i class="el-icon-arrow-up"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex flex-direction" style="position: relative; color: #5b5e66;">
                  <span class="text-bold" style="font-size: 0.875rem;">{{ datas[currentCarousel].title }}</span>
                  <span style="margin-top: 1rem; font-size: 0.75rem;">{{ datas[currentCarousel].address }}</span>
                  <div style="position: relative;">
                    <div ref="content" class="company-dynamics-content" :style="{ height: showMore2 ? 'auto' : showHeight + 'px' }" v-html="datas[currentCarousel].content"></div>
                    <div v-if="!showMore2 && !isNone2" class="company-dynamics-mask"></div>
                    <div v-if="!isNone2" class="company-dynamics-more" @click.stop="showMore2 = !showMore2">
                      <div v-if="!showMore2">
                        展开
                        <i class="el-icon-arrow-down"></i>
                      </div>
                      <div v-else>
                        收起
                        <i class="el-icon-arrow-up"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex flex-direction" style=" color: #5b5e66;">
                  <span class="text-bold" style="font-size: 0.875rem;">{{ next.title }}</span>
                  <span style="margin-top: 1rem; font-size: 0.75rem;">{{ next.address }}</span>
                  <div style="position: relative;">
                    <div ref="contentNext" class="company-dynamics-content" :style="{ height: showMore3 ? 'auto' : showHeight + 'px' }" v-html="next.content"></div>
                    <div v-if="!showMore3 && !isNone3" class="company-dynamics-mask"></div>
                    <div v-if="!isNone3" class="company-dynamics-more" @click.stop="showMore3 = !showMore3">
                      <div v-if="!showMore3">
                        展开
                        <i class="el-icon-arrow-down"></i>
                      </div>
                      <div v-else>
                        收起
                        <i class="el-icon-arrow-up"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->

          <div id="partner">
            <div class="text-center flex flex-direction">
              <span class="content-title-span">Partner</span>
              <span class="content-title">合作伙伴</span>
            </div>

            <div class="partner_box" style="margin-top: 2rem;">
              <el-image :src="require('@/assets/img/index/partner.png')" fit="cover" lazy style="width: 100%; height: 100%;"></el-image>
            </div>
          </div>

          <div id="bp-delivery" style="margin-bottom: 10%;">
            <div class="text-center flex flex-direction">
              <span class="content-title-span">BP delivery</span>
              <span class="content-title">BP投递</span>
            </div>

            <div class="flex align-center justify-center" style="margin-top: 1rem;">
              <el-image :src="require('@/assets/img/fund/bp_delivery.png')" fit="cover" lazy style="width: 100%; height: 100%;"></el-image>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 打开对话框 -->
    <el-dialog title="" :visible.sync="centerDialogVisible" width="44.5rem" style="text-align: center;">
      <el-image :src="require('@/assets/img/qrcode/qrcode.png')" fit="cover" style="width: 44.5rem;height: 30rem;"></el-image>
    </el-dialog>
  </div>
</template>

<script>
import { requestCompanydynamicsList } from '@/api/index.js';

export default {
  name: 'Fund',
  components: {},
  data() {
    return {
      centerDialogVisible: false,

      // 获取独角兽计划标题列表
      manageTypeList: ['基金介绍', '投资领域', '投资案例', '合作伙伴', 'BP投递'],

      // 获取所需数据列表
      datas: {},
      // 当前走马灯选中的信息
      currentCarousel: 0,
      // 是否展示更多
      showMore: true,
      isNone: false,

      showMore2: true,
      isNone2: false,

      showMore3: true,
      isNone3: false,

      showHeight: 100
    };
  },
  computed: {
    pre: function() {
      return this.currentCarousel - 1 < 0 ? this.datas[this.datas.length - 1] : this.datas[this.currentCarousel - 1];
    },
    next: function() {
      return this.currentCarousel + 1 > this.datas.length - 1 ? this.datas[0] : this.datas[this.currentCarousel + 1];
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      requestCompanydynamicsList().then(res => {
        this.datas = res.data.data;

        this.$nextTick(() => {
          let contentHeight = this.$refs.contentPre.clientHeight;
          let contentHeight2 = this.$refs.content.clientHeight;
          let contentHeight3 = this.$refs.contentNext.clientHeight;

          if (contentHeight > this.showHeight) {
            this.showMore = false;
          } else {
            this.showMore = true;
            this.isNone = true;
          }

          if (contentHeight2 > this.showHeight) {
            this.showMore2 = false;
          } else {
            this.showMore2 = true;
            this.isNone2 = true;
          }

          if (contentHeight3 > this.showHeight) {
            this.showMore3 = false;
          } else {
            this.showMore3 = true;
            this.isNone3 = true;
          }
        });
      });
    },
    // 页面内锚点跳转
    toJump(name) {
      let idName = '';
      switch (name) {
        case '基金介绍':
          idName = 'fund-introduction';
          break;
        case '发展历程':
          idName = 'development-history';
          break;
        case '投资领域':
          idName = 'focus-area';
          break;
        case '业务板块':
          idName = 'business-segments';
          break;
        case '企业区域落地':
          idName = 'enterprise-area-landing';
          break;
        case '投资案例':
          idName = 'investment-case';
          break;
        case '公司动态':
          idName = 'company-dynamics';
          break;
        case '合作伙伴':
          idName = 'partner';
          break;
        case 'BP投递':
          idName = 'bp-delivery';
          break;
        default:
          break;
      }

      document.querySelector('#' + idName).scrollIntoView({
        behavior: 'smooth', // 平滑过渡
        block: 'center' // 上边框与视窗顶部平齐。默认值
      });
    },
    // 走马灯发生改变
    changeCarousel(currentIndex) {
      this.showMore = false;
      this.showMore2 = false;
      this.showMore3 = false;
      this.currentCarousel = currentIndex;
    },
    navigation(type, item) {
      switch (type) {
        case 'qrcode':
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

  /*  */
  .content {
    & > div {
      margin-top: 8rem;
    }

    /* 每个模块的标题 */
    .content-title-span {
      font-size: 1.25rem;
      color: #999;
    }

    .content-title {
      font-size: 1.5rem;
      font-weight: bold;
    }

    /* 业务板块 */
    .business-segments-box {
      position: relative;
      margin-top: 1rem;
      width: 100%;
      height: 30rem;

      .business-segments-box-img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 0;
      }

      .business-segments-box-content {
        padding: 4rem;
        padding-top: 3.5rem;
        width: 50%;
        height: 60%;
        border-radius: 0.25rem;

        font-size: 0.875rem;
        line-height: 1.75;
        color: #fff;

        background-color: rgba($color: #000000, $alpha: 0.25);
        z-index: 1;
      }
    }

    /* 企业区域落地 */
    .enterprise-area-landing-box {
      position: relative;
      margin-top: 1rem;
      width: 100%;

      .enterprise-area-landing-pic {
        width: 60%;
        height: 23.75rem;
        z-index: 0;
      }

      .enterprise-area-landing-pic2 {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      .enterprise-area-landing-card {
        position: absolute;
        padding: 2rem;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 45%;
        height: 20rem;
        background-color: #fff;
        box-shadow: 0 0 1rem 0 rgba($color: #000000, $alpha: 0.1);
        z-index: 1;

        .enterprise-area-landing-title {
          position: relative;
          padding-left: 0.75rem;
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

        .enterprise-area-landing-content {
          margin-top: 1rem;
          font-size: 0.875rem;
          line-height: 1.75;
        }
      }

      .enterprise-area-landing-card2 {
        left: 0;
      }
    }

    /* 合作伙伴 */
    .partner_box {
      width: 100%;
      height: auto;
    }

    /* 公司动态 */
    .company-dynamics-content {
      margin-top: 0.25rem;
      max-width: 100%;
      height: auto;
      font-size: 0.75rem;
      color: #999;

      overflow: hidden; // 超出隐藏
    }

    /* 产生覆盖效果 */
    .company-dynamics-mask {
      width: 100%;
      position: absolute;
      height: 100%;
      bottom: 16px;
      left: 0;
      background: -webkit-gradient(linear, left top, left bottom, from(hsla(0, 0%, 100%, 0)), to(#fff));
      background: linear-gradient(hsla(0, 0%, 100%, 0), #fff);

      // margin-top: -0.5rem;
      // width: 100%;
      // height: 1rem;
      // filter: blur(10px);
      // background-color: #f3f3f3;
      // z-index: 10;
    }

    .company-dynamics-more {
      margin-top: 0.25rem;
      width: 100%;
      text-align: right;
      font-size: 0.75rem;
      color: blue;
      cursor: pointer;
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
