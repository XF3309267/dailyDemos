<template>
  <div class="container padding-lr flex-direction" :style="{...$common.setMinWdith()}">
    <div style="margin: 0 -15vw;"><el-image :src="require('@/assets/img/footer/footer_bg.png')" fit="fill" style="width: 100%; height: 100%;"></el-image></div>

    <el-tabs :value="currentTab" type="border-card" :tab-position="tabPosition" :stretch="true" style="min-height: 80vh; margin-top: -2.5rem;" @tab-click="tabClick">
      <el-tab-pane name="1" label="企业介绍" class="flex flex-direction justify-center align-center">
        <el-image :src="require('@/assets/img/footer/company_title.png')" fit="contain" style="width: 74%; height: 100%;"></el-image>
        <div style="margin: 2rem 0 2rem;" v-html="companyContent"></div>
        <!-- <el-image :src="require('@/assets/img/footer/company_introduction.png')" fit="contain" style="width: 100%; height: 100%;"></el-image>s -->
      </el-tab-pane>

      <el-tab-pane name="2" label="核心团队" class="flex flex-direction justify-center align-center">
        <el-image :src="require('@/assets/img/footer/core_team.png')" fit="contain" style="width: 50%; height: 100%;"></el-image>
        <div class="flex justify-between" style="margin-top: 2rem; padding: 0 3vw; width: 100%;">
          <div class="flex-sub flex flex-direction" style="margin-top: 1rem; padding-right: 2rem;">
            <div class="text-bold" style="color: #f08519; font-size: 1.25rem;">{{ ceoInfo.name }}</div>
            <div style="margin-top: 0.5rem; color: #333; font-size: 1rem;">{{ ceoInfo.label }}</div>
            <div style="margin-top: 0.5rem; color: #333; font-size: 0.9rem;" v-html="ceoInfo.content"></div>
          </div>
          <el-image :src="ceoInfo.picture" fit="fill" style="width: 18.4375rem; height: 21.75rem;"></el-image>
        </div>
        <div class="grid align-center justify-between" style="margin-top: 4rem; width: 100%; grid-template-columns: repeat(3, 24%); grid-gap: 4.125rem;">
          <div v-for="(item, index) in coreteamList" :key="'coreteam' + index" class="flex flex-direction align-center" style="height: 21rem;">
            <el-image :src="item.picture" fit="fill" style="width: 10rem; height: 10rem; border-radius: 50%;"></el-image>
            <div class="text-bold" style="margin-top: 0.75rem; font-size: 1.1rem; color: #F08519;">{{ item.name }}</div>
            <div style="margin-top: 0.25rem; font-size: 0.95rem; color: #333;">{{ item.label }}</div>
            <div class="text-center" style="margin-top: 0.25rem; line-height: 2; font-size: 0.75rem; color: #333;" v-html="item.content">
              <!-- 江西财经大学工商管理硕士、兼职硕导,曾任纵捷科技CEO,从事软件技术开发工作18年 -->
            </div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane name="3" label="企业文化" class="flex flex-direction justify-center align-center">
        <el-image :src="require('@/assets/img/footer/company_culture.png')" fit="contain" style="width: 60%; height: 100%;"></el-image>
        <!-- <div class="text-bold" style="margin: 1rem 0 2rem; font-size: 1.2rem; color: #333;">
          不忘初心，预见创客
          <span style="margin-left: 2rem;">思想有多远就能走多远</span>
        </div> -->

        <el-image :src="require('@/assets/img/footer/company_culture_content.png')" fit="contain" style="margin-top: 3rem; width: 60%; height: 100%;"></el-image>
        <!-- <div class="grid align-center justify-between" style="margin: 1rem 0 2rem; width: 60%; grid-template-columns: repeat(2, 50%); grid-gap: 1rem">
          <el-timeline v-for="(item, index) in companyCultureList" :key="'companyCulture' + index" style="margin: 0 auto; margin-bottom: 2rem;">
            <el-timeline-item color="#f08519" placement="top" class="eltimelinefocus">
              <div class="culture_card_title">{{ item.name }}</div>
              <div class="culture_card_tip">{{ item.label }}</div>
            </el-timeline-item>
            <el-timeline-item color="#f08519" placement="top" class="eltimelinefocus__none"></el-timeline-item>
          </el-timeline> -->

        <!-- <el-timeline style="margin: 0 auto; margin-bottom: 2rem;">
            <el-timeline-item color="#f08519" placement="top" class="eltimelinefocus">
              <div class="culture_card_title">企业使命</div>
              <div class="culture_card_tip">预见未来创新领袖</div>
            </el-timeline-item>
            <el-timeline-item color="#f08519" placement="top" class="eltimelinefocus__none"></el-timeline-item>
          </el-timeline>

          <el-timeline style="margin: 0 auto; margin-bottom: 2rem;">
            <el-timeline-item color="#f08519" placement="top" class="eltimelinefocus">
              <div class="culture_card_title">企业价值观</div>
              <div class="culture_card_tip">极致、用心、创新、共赢</div>
            </el-timeline-item>
            <el-timeline-item color="#f08519" placement="top" class="eltimelinefocus__none"></el-timeline-item>
          </el-timeline>

          <el-timeline style="margin: 0 auto; margin-bottom: 2rem;">
            <el-timeline-item color="#f08519" placement="top" class="eltimelinefocus">
              <div class="culture_card_title">企业目标</div>
              <div class="culture_card_tip">以创投为核心，以科技维数据为引擎的科创生态服务商</div>
            </el-timeline-item>
            <el-timeline-item color="#f08519" placement="top" class="eltimelinefocus__none"></el-timeline-item>
          </el-timeline> -->
        <!-- </div> -->
      </el-tab-pane>

      <el-tab-pane name="4" label="品牌大事记" class="flex flex-direction justify-center align-center">
        <el-image :src="require('@/assets/img/footer/brand_events.png')" fit="contain" style="width: 54%; height: 100%;"></el-image>
        <el-timeline :reverse="reverse" style="margin: 2rem 0px 2rem 27rem;">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            class="eltimelinefocus eltimelinefocus_tail_dot"
            :class="brandEventsClass(activities.length, index)"
          >
            <div class="brand_events_content">
              <p class="text-bold" style="font-size: 0.9rem; color: #F08519;">{{ activity.name }}</p>
              <p style="margin-top: 0.15rem; width: 26rem; font-size: 0.85rem; color: #333;">{{ activity.label }}</p>
            </div>
          </el-timeline-item>
        </el-timeline>
      </el-tab-pane>

      <el-tab-pane name="5" label="企业荣誉" class="flex flex-direction justify-center align-center">
        <el-image :src="require('@/assets/img/footer/enterprise_honor.png')" fit="contain" style="width: 55%; height: 100%;"></el-image>
        <div class="grid justify-around align-center" style="margin: 3rem 0 1rem; width: 100%; grid-template-columns: repeat(3, 20%); grid-gap: 2rem 1rem;">
          <div v-for="(item, index) in enterpriseHonorPics" :key="'enterprise_honor' + index" class="flex flex-direction align-center justify-center" style="height: 16rem;">
            <el-image :src="item" :preview-src-list="enterpriseHonorPics" fit="fill" style="width: 15rem; height: 15rem;"></el-image>
            <el-image :src="require('@/assets/img/footer/enterprise_display.png')" fit="fill" style="width: 15rem; height: 11rem;"></el-image>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane name="6" label="旗下品牌" class="flex flex-direction justify-center align-center">
        <el-image :src="require('@/assets/img/footer/brands.png')" fit="contain" style="width: 50%; height: 100%;"></el-image>
        <div class="grid align-center brands" style="margin: 3rem 0 1rem; width: 100%; grid-template-columns: repeat(2, 34%); grid-gap: 4rem; justify-content: center;">
          <el-image
            v-for="(item, index) in 3"
            :key="'brand' + index"
            :src="require('@/assets/img/footer/brand-' + (index + 1) + '@1x.png')"
            fit="cover"
            style="width: 100%; height: auto;"
          ></el-image>
        </div>
      </el-tab-pane>

      <el-tab-pane name="7" label="诚聘英才" class="flex flex-direction justify-center align-center">
        <el-image :src="require('@/assets/img/footer/recruiting_talents.png')" fit="contain" style="width: 60%; height: 100%;"></el-image>
        <div style="padding: 0 2vw;">
          <el-image :src="require('@/assets/img/footer/recruiting_talents_banner.png')" fit="contain" style="margin-top: 2rem; width: 100%; height: 100%;"></el-image>
          <div v-for="(item, index) in recruitingTalentsList" :key="'recruitingTalents' + index" class="recruitingTalentsContent">
            <div class="text-center text-bold" style="margin-bottom: 1rem; font-size: 1.5rem;">{{ item.name }}</div>
            <div v-html="item.content"></div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane name="8" label="联系我们" class="flex flex-direction justify-center align-center">
        <el-image :src="require('@/assets/img/footer/contact_us.png')" fit="contain" style="width: 55%; height: 100%;"></el-image>
        <el-timeline style="margin: 2rem 0 2rem 25rem;">
          <el-timeline-item class="eltimelinefocus_tail_dot eltimelinefocus__none"></el-timeline-item>

          <el-timeline-item class="eltimelinefocus eltimelinefocus_tail_dot">
            <div class="brand_events_content">
              <div class="amap-page-container" style="width: 24rem; height: 12rem;">
                <el-amap vid="amap1" :amap-manager="amapManager" :center="markers1[0].position" :zoom="zoom">
                  <el-amap-marker
                    v-for="(marker, index) in markers1"
                    :key="'amap1' + index"
                    :position="marker.position"
                    :events="marker.events"
                    :visible="marker.visible"
                    :draggable="marker.draggable"
                    :vid="index"
                  ></el-amap-marker>
                </el-amap>
              </div>

              <div class="flex flex-direction " style="margin: -12rem 0 3rem -27rem; width: 24rem; text-align: right; color: #333;">
                <div style="font-size: 1.1rem;">
                  Bei Jing
                  <span class="text-bold" style="margin-left: 1rem; font-size: 1.5rem; color: #F08519;">北京</span>
                </div>
                <div style="margin-top: 1rem; font-size: 0.95rem;">Floor 23, Building B Jindi Center, No.91,Jianguo Road, Chaoyang District, Peking, China</div>
                <div style="margin-top: 0.5rem;">北京市朝阳区建国路91号金地中心B座23层</div>
                <div style="margin-top: 0.5rem;">电话 / Tel: 40004-99997（周一到周五 09:00-18:00）</div>
                <div style="margin-top: 0.5rem;">邮箱 / Mail: service@thinkerwork.com</div>
              </div>
            </div>
          </el-timeline-item>

          <el-timeline-item class="eltimelinefocus eltimelinefocus_tail_dot">
            <div class="brand_events_content">
              <div class="flex flex-direction " style="width: 24rem; color: #333;">
                <div style="font-size: 1.1rem;">
                  <span class="text-bold" style="font-size: 1.5rem; color: #F08519;">南昌</span>
                  <span style="margin-left: 1rem; ">Nan Chang</span>
                </div>
                <div style="margin-top: 1rem; font-size: 0.95rem;">
                  Nanchang Science and Technology Plaza, Junyan Road,High-tech Development Zone, Nanchang City,Jiangxi Province, China
                </div>
                <div style="margin-top: 0.5rem;">江西省南昌市高新技术开发区俊彦路南昌科技广场</div>
                <div style="margin-top: 0.5rem;">电话 / Tel: 40004-99997（周一到周五 09:00-18:00）</div>
                <div style="margin-top: 0.5rem;">邮箱 / Mail: service@thinkerwork.com</div>
              </div>
              <div class="amap-page-container" style="margin: -11rem 0 0 -27rem; width: 24rem; height: 12rem;">
                <el-amap vid="amap2" :amap-manager="amapManager" :center="markers2[0].position" :zoom="zoom">
                  <el-amap-marker
                    v-for="(marker, index) in markers2"
                    :key="'amap2' + index"
                    :position="marker.position"
                    :events="marker.events"
                    :visible="marker.visible"
                    :draggable="marker.draggable"
                    :vid="index"
                  ></el-amap-marker>
                </el-amap>
              </div>
            </div>
          </el-timeline-item>

          <el-timeline-item class="eltimelinefocus eltimelinefocus__none"></el-timeline-item>
        </el-timeline>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<!-- <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=654eac40370f242c5c87f13ad40efe18"></script> -->
<script>
import { amapManager } from 'vue-amap';
import { request } from '@/utils/request';

export default {
  name: 'Footer',
  data() {
    return {
      /* tab位置 */
      tabPosition: 'left',
      /* 当前所选tab */
      currentTab: '1',
      /* 公司介绍内容 */
      companyContent: '',
      /* 核心团队 */
      ceoInfo: {},
      coreteamList: [],
      /* 企业文化 */
      companyCultureList: [],
      /* 品牌大事记 */
      reverse: false,
      activities: [
        {
          label: '心客创业咖啡开业',
          name: '2015.01'
        },
        {
          label: '启动绿地心客众创平台',
          name: '2015.06'
        },
        {
          label: '完成A轮投资',
          name: '2016.08'
        },
        {
          label: '启动百亿“中科心客众创基金”',
          name: '2016.12'
        },
        {
          label: '发布中科心客众创生态战略',
          name: '2017.02'
        },
        {
          label: '启动Thinkerork高端共享办公孵化',
          name: '2017.06'
        },
        {
          label: '荣获"江西经济+件大事"功勋企业',
          name: '2017.07'
        },
        {
          label: '启动中科心客创投圈',
          name: '2017.12'
        },
        {
          label: '发起预见独角兽计划',
          name: '2018.09'
        },
        {
          label: '协办江西省独角兽企业、瞪羚企业榜单发布会',
          name: '2019.02'
        },
        {
          label: '启动预见独角兽学院',
          name: '2019.02'
        },
        {
          label: '发起、承办首届滕王阁创投峰会',
          name: '2019.07'
        },
        {
          label: '发起、承办中国潜在独角兽企业研究报告发布会',
          name: '2020.09'
        },
        {
          label: '发起、承办第二届滕王阁创投峰会',
          name: '2020.12'
        },
        {
          label: '',
          name: ''
        }
      ],
      /* 企业荣誉 */
      enterpriseHonorPics: [],
      /* 诚聘英才 */
      recruitingTalentsList: [],
      /* 联系我们 */
      amapManager,
      zoom: 14,
      markers1: [
        {
          position: [116.475065, 39.909468],
          events: {
            click: () => {},
            dragend: e => {
              console.log('---event---: dragend');
              this.markers1[0].position = [e.lnglat.lng, e.lnglat.lat];
            }
          },
          visible: true,
          draggable: false,
          template: '<span></span>'
        }
      ],
      markers2: [
        {
          position: [115.987683, 28.714903],
          events: {
            click: () => {},
            dragend: e => {
              console.log('---event---: dragend');
              this.markers2[0].position = [e.lnglat.lng, e.lnglat.lat];
            }
          },
          visible: true,
          draggable: false,
          template: '<span></span>'
        }
      ]
    };
  },
  computed: {
    brandEventsClass() {
      return (length, index) => {
        return {
          timeline_left: index % 2 === 0,
          eltimelinefocus__none: index === length - 1
        };
      };
    }
  },
  mounted() {
    this.requestCompanyManageInfoList();
  },
  activated() {},
  methods: {
    requestCompanyManageInfoList() {
      request('/visitor/companyManageInfo/getCompanyManageInfoList?typeId=' + this.currentTab).then(res => {
        switch (this.currentTab) {
          case '1':
            this.companyContent = res.data[0].content;
            break;
          case '2': {
            this.ceoInfo = res.data[0];
            let tempArr = res.data;
            tempArr.shift();
            this.coreteamList = tempArr;
            break;
          }
          case '3':
            this.companyCultureList = res.data;
            break;
          case '4':
            this.activities = res.data;
            this.activities.push({
              label: '',
              name: ''
            });
            break;
          case '5':
            this.enterpriseHonorPics = res.data.map(v => {
              return v.picture;
            });
            break;
          case '6':
            break;
          case '7':
            this.recruitingTalentsList = res.data;
            break;
          case '8':
            break;
          default:
            break;
        }
      });
    },
    tabClick(e) {
      this.currentTab = e.name;
      this.requestCompanyManageInfoList();
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.currentTab = to.query.tabs;
      vm.requestCompanyManageInfoList();
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.currentTab = to.query.tabs;
    this.requestCompanyManageInfoList();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #fff;
}
a:hover,
a:visited,
a:link,
a:active {
  color: #fff;
}

.container {
  margin: -1rem 0 1rem;
}

::v-deep .el-tabs--border-card {
  border: none;
  box-shadow: none;
}

::v-deep .el-tabs--left.el-tabs--border-card .el-tabs__header.is-left {
  border-right: 0;
}

::v-deep .el-tabs--left .el-tabs__nav.is-left {
  transform: translateY(18%) !important;
}

::v-deep .el-tabs--left .el-tabs__item.is-left {
  width: 8.75rem;
  height: 3.4375rem;
  text-align: center;
  line-height: 3.4375rem;
}

::v-deep .el-tabs--border-card > .el-tabs__header {
  height: 60vh;
  background-color: transparent;
  border-bottom: 0;
}

::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item:not(.is-disabled):hover {
  color: #f08519;
}

::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: #f08519;
  background: #f8f8f8;
}

::v-deep .el-tabs--left.el-tabs--border-card .el-tabs__item.is-left.is-active {
  border-color: transparent;
  border-left: 0.25rem solid #f08519;
}

::v-deep .el-tabs--border-card > .el-tabs__content {
  padding: 2rem;
  height: 100%;
  background-color: #fff;
}

.eltimelinefocus {
  ::v-deep .el-timeline-item__tail {
    border-left: 2px solid #f08519;
  }

  ::v-deep .el-timeline-item__node {
    border: 3px solid rgba(255, 255, 255, 0.7);
    background-clip: content-box;
    background: #f08519;
  }

  ::v-deep .el-timeline-item__node--normal {
    left: -0.3125rem;
    width: 1.25rem;
    height: 1.25rem;
  }
}

.eltimelinefocus_tail_dot {
  ::v-deep .el-timeline-item__tail {
    border-left: 2px dotted #f08519;
  }
}

.eltimelinefocus__none {
  ::v-deep .el-timeline-item__node--normal {
    width: 0;
    height: 0;
  }

  ::v-deep .el-timeline-item__node {
    border: 0;
  }
}

.culture_card_title {
  margin-top: -0.2rem;
  width: 13.125rem;
  height: 3.2rem;
  line-height: 3.2rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  background-color: #f08519;
  border-radius: 0 1.875rem 1.875rem 0;
}

.culture_card_tip {
  margin-top: 1rem;
  margin-left: 1rem;
  margin-bottom: 3rem;
  width: 12.5rem;
  font-size: 0.9rem;
  color: #333;
}

.timeline_left {
  ::v-deep .el-timeline-item__wrapper {
    margin-left: -115%;
    padding-left: 0;
  }

  .brand_events_content {
    width: 50%;
    text-align: right;

    p {
      margin-left: auto;
    }
  }
}

.brands {
  ::v-deep .el-image {
    display: block;
    min-height: 10rem;
  }
}

/* 诚聘英才 */
.recruitingTalentsContent {
  margin-bottom: 3rem;
}
</style>
