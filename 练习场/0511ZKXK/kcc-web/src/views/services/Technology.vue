<template>
  <div class="container padding-0 flex-direction message" :style="{...$common.setMinWdith()}">
    <div class="container-fixed-width">
      <bread-crumb :jumpType="jumpType">科技服务</bread-crumb>

      <el-row :gutter="30" style="margin-top: 1.5rem; margin-right: 0;">
        <el-col :span="16">
          <el-carousel height="28.125rem" style="position: relative; background-color: #efefef; border-radius: 0.5rem; overflow: hidden;">
            <el-carousel-item style="height: 100%;" v-for="(item, index) in bannerList.index" :key="'bannerIndex' + index">
              <a
                :href="item.redirectUrl && item.redirectUrl.indexOf('www.') !== -1 ? 'http://' + item.redirectUrl : '/#' + item.redirectUrl + '&jump=services'"
                @click.prevent="navigation('banner', item)"
              >
                <el-image :src="item.picture" fit="fill" style="width: 100%;height: 100%;cursor: pointer;" @click.stop="navigation('banner', item)"></el-image>
              </a>
              <div class="tips">{{ item.title }}</div>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="8" style="padding: 0; height: 28.125rem; border-radius: 0.5rem; overflow: hidden;">
          <div class="flex flex-direction align-center justify-between" style="height: 100%;">
            <div
              style="position: relative; width: 100%; height: 13.75rem; border-radius: 0.5rem; overflow: hidden;"
              v-for="(item, index) in bannerList.other"
              :key="'bannerOther' + index"
            >
              <a
                :href="item.redirectUrl && item.redirectUrl.indexOf('www.') !== -1 ? 'http://' + item.redirectUrl : '/#' + item.redirectUrl + '&jump=services'"
                @click.prevent="navigation('banner', item)"
              >
                <el-image :src="item.picture" fit="fill" style="width: 100%;height: 100%;cursor: pointer;" @click.stop="navigation('banner', item)"></el-image>
              </a>
              <div class="tips">{{ item.title }}</div>
            </div>
          </div>
        </el-col>
      </el-row>

      <div class="flex flex-direction">
        <div class="flex align-center" style="position: relative; margin: 2.5rem 0.5rem 1rem;">
          <span class="technical_service_title">技术需求服务</span>
          <span style="margin-left: 1rem; font-size: 0.75rem; color: #666;">精确对接需求企业</span>
        </div>

        <div
          class="grid align-center justify-between technical_service_box"
          style="margin-top: 0.25rem; width: 100%; height: 28.2rem; overflow: hidden; grid-template-columns: repeat(3, 32.5%); grid-gap: 1rem;"
        >
          <div class="flex flex-direction" style="height: 100%;">
            <div class="flex align-center justify-between" style="padding: 1rem; height: 3.4rem; color: #fff; background-image: linear-gradient(133deg, #1985f0, #1927f0);">
              <div style="font-size: 1rem; font-weight: bold;">技术需求展示</div>
              <div style="font-size: 0.75rem; cursor: pointer;" @click.stop="navigation('more', 1)">
                <router-link :to="{ name: 'Needs', query: { jump: 'services' } }">更多技术需求 >></router-link>
              </div>
            </div>

            <div class="flex-sub" style="margin-left: 0.5rem;">
              <div class="technical_service_card" v-for="(item, index) in scienceNeedList" :key="'scienceNeedList' + index" @click.stop="navigation('NeedsDetail', item.id)">
                <router-link :to="{ name: 'NeedsDetail', query: { id: item.id, jump: 'services' } }" class="flex align-center justify-between">
                  <span class="text-bold" style="width: 5rem; font-size: 0.75rem; color: #ff3400;">{{ item.budget === 0 ? '面议' : '￥' + item.budget + '元' }}</span>
                  <span class="flex-twice text-bold" style="font-size: 0.875rem; color: #333;">{{ item.name }}</span>
                  <span class="flex-sub text-right" style="padding-left: 0.25rem; font-size: 0.75rem; color: #999;">{{ item.address }}</span>
                </router-link>
              </div>
            </div>
          </div>

          <div class="flex flex-direction" style="height: 100%;">
            <div class="flex align-center justify-between" style="padding: 1rem; height: 3.4rem; color: #fff; background-image: linear-gradient(133deg, #f0b719, #f08519);">
              <div style="font-size: 1rem; font-weight: bold;">技术专家</div>
              <div style="font-size: 0.75rem; cursor: pointer;" @click.stop="navigation('more', 2)">
                <router-link :to="{ name: 'Technician', query: { jump: 'services' } }">更多专家 >></router-link>
              </div>
            </div>
            <div class="flex-sub" style="margin-left: 1rem;">
              <div class="technical_service_card" v-for="(item, index) in scienceExpertList" :key="'scienceExpertList' + index" @click.stop="navigation('ExpertDetail', item.id)">
                <!-- <el-avatar :size="50" :src="require('@/assets/img/headIcon.png')"></el-avatar> -->
                <router-link :to="{ name: 'TechnicianDetail', query: { id: item.id, jump: 'services' } }" class="flex align-center justify-between">
                  <div class="flex-sub flex flex-direction justify-between" style="width: 100%; height: 2.5rem;">
                    <div class="flex align-center text-bold" style="font-size: 0.875rem; color: #333">
                      {{ item.name }}
                      <div style="padding-left: 0.75rem; font-weight: 400; color: #999; ">
                        <i class="el-icon-location-outline" style="padding-right: 0.25rem;"></i>
                        <span style="font-size: 0.8rem;">{{ item.address }}</span>
                      </div>
                    </div>
                    <div style="font-size: 0.75rem; color: #666; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">{{ item.synopsis }}</div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>

          <div class="flex flex-direction" style="height: 100%;">
            <div class="flex align-center justify-between" style="padding: 1rem; height: 3.4rem; color: #fff; background-image: linear-gradient(133deg, #5e99fe, #07a5eb);">
              <div style="font-size: 1rem; font-weight: bold;">科技成果</div>
              <div style="font-size: 0.75rem; cursor: pointer;" @click.stop="navigation('more', 3)">
                <router-link :to="{ name: 'Achievements', query: { jump: 'services' } }">更多科技成果 >></router-link>
              </div>
            </div>

            <div class="flex-sub" style="margin-left: 0.5rem;">
              <div class="technical_service_card" v-for="(item, index) in scienceResultList" :key="'scienceResultList' + index" @click.stop="navigation('ResultDetail', item.id)">
                <router-link :to="{ name: 'AchievementsDetail', query: { id: item.id, jump: 'services' } }" class="flex align-center justify-between">
                  <span class="text-bold" style="width: 5rem; font-size: 0.75rem; color: #ff3400;">
                    {{ item.price === 0 || item.price === '面议' ? '面议' : '￥' + item.price + '元' }}
                  </span>
                  <span class="flex-sub text-bold" style="font-size: 0.875rem; color: #333;">{{ item.name }}</span>
                  <span class="text-right" style="padding-left: 0.25rem; font-size: 0.75rem; color: #999;">
                    {{ item.maturityName.length > 4 ? item.maturityName.substring(0, 4) : item.maturityName }}
                  </span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="serve serve2">
        <div class="flex align-center" style="border: 1px solid #f3f3f3;">
          <div class="flex flex-direction align-center serve-left">
            <el-image :src="require('@/assets/img/index/serve_light.png')" fit="fill" lazy style="margin-top: 30%;width: 3.75rem;height: 3.75rem;"></el-image>
            <div class="text-bold" style="margin-top: 3%; font-size: 1.25rem; color: #fff;">技术转移服务</div>
          </div>
          <div class="flex-sub flex flex-wrap serve-right">
            <div class="col-3 flex flex-wrap card" v-for="(item, index) in transferServeList" :key="index">
              <span class="text-bold" style="width: 100%; font-size: 1rem; color: #333;">{{ item.title }}</span>
              <span v-if="item.price" class="text-bold" style="font-size: 0.875rem; color: red;">{{ item.price }}</span>
              <span style="font-size: 0.875rem; color: #333;">{{ item.desc }}</span>
              <div class="self-end flex-sub" style="margin-top: 6%;">
                <el-button class="consult" @click.stop="navigation('qrcode', '_technology')">
                  <div class="flex align-center justify-center">
                    <img src="@/assets/img/index/serve_message.png" style="width: 1.25rem;height: 1.25rem;object-fit: fill;" />
                    <span style="margin-left: 0.375rem;">立即咨询</span>
                  </div>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="serve">
        <div class="flex align-center" style="border: 1px solid #f3f3f3;">
          <div class="flex flex-direction align-center serve-left">
            <el-image :src="require('@/assets/img/index/serve_light.png')" fit="fill" lazy style="margin-top: 30%;width: 3.75rem;height: 3.75rem;"></el-image>
            <div class="text-bold" style="margin-top: 3%; font-size: 1.25rem; color: #fff;">科技服务创新</div>
          </div>
          <div class="flex-sub flex flex-wrap serve-right">
            <div class="col-3 flex flex-wrap card" v-for="(item, index) in innovationServeList" :key="index">
              <span class="text-bold" style="font-size: 1rem; color: #333;">{{ item.title }}</span>
              <span style="font-size: 0.875rem; color: #333;">{{ item.desc }}</span>
              <div class="self-end flex-sub" style="margin-top: 6%;">
                <el-button class="consult" @click.stop="navigation('qrcode', '_innovate')">
                  <div class="flex align-center justify-center">
                    <img src="@/assets/img/index/serve_message.png" style="width: 1.25rem;height: 1.25rem;object-fit: fill;" />
                    <span style="margin-left: 0.375rem;">立即咨询</span>
                  </div>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="serve serve3">
        <div class="flex align-center" style="border: 1px solid #f3f3f3;">
          <div class="flex flex-direction align-center serve-left">
            <el-image :src="require('@/assets/img/index/serve_light.png')" fit="fill" lazy style="margin-top: 30%;width: 3.75rem;height: 3.75rem;"></el-image>
            <div class="text-bold" style="margin-top: 3%; font-size: 1.25rem; color: #fff;">科技金融服务</div>
          </div>
          <div class="flex-sub flex flex-wrap serve-right">
            <div class="col-3 flex flex-wrap card" v-for="(item, index) in financeServeList" :key="index">
              <span class="text-bold" style="width: 100%; font-size: 1rem; color: #333;">{{ item.title }}</span>
              <span v-if="item.price" class="text-bold" style="font-size: 0.875rem; color: red;">{{ item.price }}</span>
              <span style="font-size: 0.875rem; color: #333;">{{ item.desc }}</span>
              <div class="self-end flex-sub" style="margin-top: 6%;">
                <el-button class="consult" @click.stop="navigation('qrcode', '_finance')">
                  <div class="flex align-center justify-center">
                    <img src="@/assets/img/index/serve_message.png" style="width: 1.25rem;height: 1.25rem;object-fit: fill;" />
                    <span style="margin-left: 0.375rem;">立即咨询</span>
                  </div>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-direction">
        <div class="flex align-center" style="position: relative; margin: 2.5rem 0.5rem 1rem;"><span class="technical_service_title">其他科技服务</span></div>

        <div
          class="grid align-center justify-between technical_service_box"
          style="margin-top: 0.25rem; width: 100%; height: auto; overflow: hidden; grid-template-columns: repeat(3, 32%);"
        >
          <div class="other_service_card">
            <div style="position: relative;">
              <el-image :src="require('@/assets/img/services/technology_other_service_pic1.png')" fit="fill" style="width: 100%; height: 7.5rem;"></el-image>
              <span style="position: absolute; top: 50%; left: 16%; transform: translateY(-50%); color: #fff; font-size: 1.25rem; font-weight: bold;">软件开发</span>
            </div>
            <div
              class="grid align-center justify-between"
              style="padding: 1rem; width: 100%; height: auto; overflow: hidden; grid-template-columns: repeat(2, 48%); grid-gap: 1rem;"
            >
              <el-button plain @click.stop="navigation('qrcode')">APP开发</el-button>
              <el-button plain @click.stop="navigation('qrcode')">小程序开发</el-button>
              <el-button plain @click.stop="navigation('qrcode')">微信开发</el-button>
              <el-button plain @click.stop="navigation('qrcode')">定制开发</el-button>
              <el-button plain @click.stop="navigation('qrcode')">UI设计</el-button>
              <el-button plain @click.stop="navigation('qrcode')">VI设计</el-button>
            </div>
          </div>
          <div class="other_service_card">
            <div style="position: relative;">
              <el-image :src="require('@/assets/img/services/technology_other_service_pic2.png')" fit="fill" style="width: 100%; height: 7.5rem;"></el-image>
              <span style="position: absolute; top: 50%; left: 16%; transform: translateY(-50%); color: #fff; font-size: 1.25rem; font-weight: bold;">知识产权</span>
            </div>
            <div
              class="grid align-center justify-between"
              style="padding: 1rem; width: 100%; height: auto; overflow: hidden; grid-template-columns: repeat(2, 48%); grid-gap: 1rem;"
            >
              <el-button plain @click.stop="navigation('qrcode')">商标注册</el-button>
              <el-button plain @click.stop="navigation('qrcode')">软件著作权</el-button>
              <el-button plain @click.stop="navigation('qrcode')">发明专利</el-button>
              <el-button plain @click.stop="navigation('qrcode')">商标转让</el-button>
              <el-button plain @click.stop="navigation('qrcode')">版权登记</el-button>
              <el-button plain @click.stop="navigation('qrcode')">实用新型专利</el-button>
            </div>
          </div>
          <div class="other_service_card">
            <div style="position: relative;">
              <el-image :src="require('@/assets/img/services/technology_other_service_pic3.png')" fit="fill" style="width: 100%; height: 7.5rem;"></el-image>
              <span style="position: absolute; top: 50%; left: 16%; transform: translateY(-50%); color: #fff; font-size: 1.25rem; font-weight: bold;">其他服务</span>
            </div>
            <div
              class="grid align-center justify-between"
              style="padding: 1rem; width: 100%; height: auto; overflow: hidden; grid-template-columns: repeat(2, 48%); grid-gap: 1rem;"
            >
              <el-button plain @click.stop="navigation('qrcode')">法律服务</el-button>
              <el-button plain @click.stop="navigation('qrcode')">工商服务</el-button>
              <el-button plain @click.stop="navigation('qrcode')">财税服务</el-button>
              <el-button plain @click.stop="navigation('qrcode')">金融服务</el-button>
              <el-button plain @click.stop="navigation('qrcode')">媒体宣传</el-button>
              <el-button plain @click.stop="navigation('qrcode')">人力资源</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 打开对话框 -->
    <el-dialog title="" :visible.sync="centerDialogVisible" width="44.5rem" style="text-align: center;">
      <el-image :src="require('@/assets/img/qrcode/qrcode' + qrcodeType + '.png')" fit="fill" style="width: 44.5rem;height: 30rem;"></el-image>
    </el-dialog>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import { requestScienceBannerList, requestScienceNeedList, requestScienceResultList, requestScienceExpertList } from '@/api/index.js';

export default {
  name: 'Information',
  components: { BreadCrumb },
  data() {
    return {
      qrcodeType: '',
      centerDialogVisible: false,
      currentTab: 0,
      bannerList: [],
      // 技术需求列表
      scienceNeedList: [],
      // 技术专家列表
      scienceExpertList: [],
      // 科技成果列表
      scienceResultList: [],
      // 技术转移服务
      transferServeList: [
        {
          title: '技术诊断',
          // price: '300000元起 年费制／高端vip',
          desc: '根据企业客户所在行业及企业自身技术问题，协调行业技术专家，深入企业现场，为企业提供专业化技术诊断与需求分析，帮助企业找到技术问题，提供解决建议。'
        },
        {
          title: '网上技术市场',
          // price: '100000元起 年费制／高端vip',
          desc: '鼓励科技成果转让方、受让方、技术转移服务机构等各类主体，以实名制的方式，参与“江西省网上常设技术市场”的科技成果在线对接和技术交易等活动。'
        },
        {
          title: '产学研合作 ',
          // price: '50000元起 年费制／高端vip',
          desc: '产学研合作是针对企业发展过程中需要与高校院所进行产学研合作的需求，提供与高校一级行政单位产学研合作渠道，帮助企业建立技术背书。'
        },
        {
          title: '技术转移培训',
          // price: '100000元起 年费制／高端vip',
          desc: '组织开展技术经理人培训，进行技术转移体制机制解读，技术转让、技术许可、联合研发等的方法路径疏通，实务操作演练案例分享。'
        },
        {
          title: '企业技术创新',
          // price: '300000元起 年费制／高端vip',
          desc: '为科技型企业提供个性化的综合性融资解决方案'
        },
        {
          title: '科技人才',
          // price: '50000元起 年费制／高端vip',
          desc: '帮助企业技术创新而打造的服务矩阵，以技术转移为核心，配套知识产权、政策应用等服务，定制化组合，为企业落实创新发展提供全方位支持。'
        }
      ],
      // 科技创新服务
      innovationServeList: [
        {
          title: '科技型中小企业',
          desc: '享受税收减免优惠, 获得政府政策扶持, 推动企业快速发展'
        },
        {
          title: '高新技术企业',
          desc: '享受税收减免优惠, 获得政府政策扶持, 推动企业快速发展'
        },
        {
          title: '瞪羚企业',
          desc: '享受税收减免优惠, 获得政府政策扶持, 推动企业快速发展'
        },
        {
          title: '独角兽企业',
          desc: '帮助江西创业者积极对接国内外优质投资，加快企业培育'
        },
        {
          title: '科技金融',
          desc: '为科技型企业提供个性化的综合性融资解决方案'
        },
        {
          title: '科技人才',
          desc: '围绕人才创业所需要的场地、人员、资金等要素进行资源对接，同时为人才企业注入企业创新服务体系，帮助人才项目孵化。'
        }
      ],
      // 科技金融服务
      financeServeList: [
        {
          title: '企业VIP咨询',
          // price: '300000元起 年费制／高端vip',
          desc:
            '主要从顶层架构设计、股权结构设计、股权运营方案设计、股权激励方案设计、商业模式重塑、财税规划、信用体系建设、资本市场进展规划、价值运动体系设立、知识产权规划、无形资产的挖掘和塑造、法律风险防范等辅导。'
        },
        {
          title: '商业计划书打磨',
          // price: '100000元起 年费制／高端vip',
          desc: '从投资机构角度为企业打磨商业计划书——（1）囊括投资机构关注的各项基本信息；（2）为企业提取投资亮点；（3）展示发展潜力。为企业更好地吸引投资机构。'
        },
        {
          title: '股权框架设计',
          // price: '50000元起 年费制／高端vip',
          desc: '根据客户的设立地点、目前组织架构、未来发展规划等设计合理的股权架构、员工激励平台等，以达到优化管理、合理避税、有效激励员工等目的，并为后续的企业扩张提供合理基础。'
        },
        {
          title: '科技融资筹划',
          // price: '100000元起 年费制／高端vip',
          desc: '对有融资需求的科技型企业，根据其财务状况、发展阶段、项目推荐等特点，提供个性化融资解决方案。'
        },
        {
          title: '创赛辅导',
          // price: '50000元起 年费制／高端vip',
          desc: '全方位为客户提供创业比赛需要的BP打磨、路演辅导、赛后提升、项目落地、对接资本等服务。'
        },
        {
          title: '企业区域落地',
          // price: '100000元起 年费制／高端vip',
          desc: '根据企业阶段性发展规划，助力企业从战略规划到市场拓展、产品研发、人才引进等方面综合规划及支持，择优进行区域布局合作。'
        }
      ]
    };
  },
  mounted() {},
  activated() {
    this.init();
  },
  methods: {
    init() {
      requestScienceBannerList().then(res => {
        this.bannerList = res.data;
      });

      requestScienceNeedList({ isIndex: 1, page: 1, limit: 9 }).then(res => {
        if (res.code === 200) {
          this.scienceNeedList = res.data.data;
        }
      });

      requestScienceExpertList({ isIndex: 1, page: 1, limit: 5 }).then(res => {
        if (res.code === 200) {
          this.scienceExpertList = res.data.data;
        }
      });

      requestScienceResultList({ isIndex: 1, page: 1, limit: 9 }).then(res => {
        if (res.code === 200) {
          this.scienceResultList = res.data.data;
        }
      });
    },
    navigation(type, id = 0) {
      switch (type) {
        case 'banner':
          if (Number(id.redirectType) === 1) {
            this.$router.push(id.redirectUrl + '&jump=services');
          } else if (Number(id.redirectType) === 2) {
            window.open('http://' + id.redirectUrl);
          }
          break;
        case 'more':
          if (id === 1) {
            this.$router.push({ name: 'Needs', query: { jump: 'services' } });
          } else if (id === 2) {
            this.$router.push({ name: 'Technician', query: { jump: 'services' } });
          } else if (id === 3) {
            this.$router.push({ name: 'Achievements', query: { jump: 'services' } });
          }
          break;
        case 'qrcode':
          this.qrcodeType = id === 0 ? '' : id;
          this.centerDialogVisible = true;
          break;
        case 'NeedsDetail':
          this.$router.push({ name: 'NeedsDetail', query: { id: id, jump: 'services' } });
          break;
        case 'ExpertDetail':
          this.$router.push({ name: 'TechnicianDetail', query: { id: id, jump: 'services' } });
          break;
        case 'ResultDetail':
          this.$router.push({ name: 'AchievementsDetail', query: { id: id, jump: 'services' } });
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/* 去除默认样式 */
a {
  text-decoration: none;
  color: #fff;
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}

::v-deep .el-carousel__indicators--horizontal {
  left: auto !important;
  bottom: 1% !important;
  right: 2% !important;
  transform: translateX(0) !important;
}

::v-deep .el-row {
  margin-right: 0;
}

.tips {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 2.25rem;
  line-height: 2.25rem;
  padding-left: 0.625rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}

.technical_service_title {
  margin-left: 0.25rem;
  font-weight: bold;

  &::before {
    content: ' ';
    position: absolute;
    left: -0.5rem;
    top: 0;
    width: 0.25rem;
    height: 1.35rem;
    background-color: #f08519;
  }
}

.technical_service_box {
  & > div {
    border: 1px solid #f3f3f3;
    border-radius: 0 0 0.25rem 0.25rem;
  }

  .technical_service_card {
    padding: 0.75rem;
    border-bottom: 1px solid #e8e8e8;
    cursor: pointer;

    &:last-child {
      border-bottom: 0;
    }

    span {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}

.serve {
  padding-top: 1rem;
  padding-bottom: 1rem;

  .serve-left {
    position: relative;
    width: 18rem;
    height: 27rem;
    background-image: linear-gradient(135deg, #feae5e, #f05b19);
    z-index: 0;

    &::after {
      content: ' ';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: url('../../assets/img/index/serve_pic.png') no-repeat;
      background-size: 100%;
      z-index: -1;
    }
  }

  .serve-right {
    padding-left: 0.5rem;
    height: 27rem;

    .card {
      padding: 1rem;
      border-right: 1px solid #fff3e6;

      &:nth-child(3n) {
        border-right: 0;
      }

      &:nth-child(n + 4) {
        border-top: 1px solid #fff3e6;
      }

      .consult {
        padding: 0;
        width: 8rem;
        height: 2.25rem;
        line-height: 2.125rem;
        background-image: linear-gradient(135deg, #f08519, #ffaa54);
        color: #fff;
        border: 0;
      }
    }
  }
}

.serve2 .serve-left {
  background-image: linear-gradient(135deg, #5e89fe, #8519f0);

  &::after {
    background: url('../../assets/img/services/technology_serve_pic1.png') no-repeat;
  }
}

.serve3 .serve-left {
  background-image: linear-gradient(135deg, #5e99fe, #19aef0);

  &::after {
    background: url('../../assets/img/services/technology_serve_pic2.png') no-repeat;
  }
}

::v-deep .el-button + .el-button {
  margin-left: 0;
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
