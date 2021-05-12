<template>
  <div class="container flex-direction justify-center">
    <div class="container-fixed-width">
      <el-row :gutter="30" style="margin-right: 0;">
        <el-col :span="19">
          <el-carousel height="22.5rem" style="position: relative; background-color: #efefef; border-radius: 0.5rem; overflow: hidden;">
            <el-carousel-item style="height: 100%;" v-for="item in bannerList.index" :key="item.id">
              <a
                :href="item.redirectUrl && item.redirectUrl.indexOf('www.') !== -1 ? 'http://' + item.redirectUrl : '/#' + item.redirectUrl"
                @click.prevent="navigation('banner', item)"
              >
                <!-- <el-image :src="item.picture" fit="fill" style="width: 100%;height: 100%;cursor: pointer;" @click.stop="navigation('banner', item)"></el-image> -->
                <el-image :src="item.picture" fit="fill" style="width: 100%;height: 100%;cursor: pointer;"></el-image>
              </a>
              <div class="tips">{{ item.title }}</div>
            </el-carousel-item>
          </el-carousel>
        </el-col>

        <el-col :span="5" class="flex flex-direction justify-between" style="padding: 1rem; height: 22.5rem; border: 1px solid #e4e4e4; border-radius: 0.5rem;">
          <div class="flex flex-direction banner-right-box">
            <div class="banner-right-title">我是创业者</div>
            <div class="grid align-center justify-between banner-right-content">
              <div class="flex flex-direction align-center justify-center">
                <el-image :src="require('@/assets/img/index/banner_right1.png')" fit="fill" style="width: 4rem;height: 4rem;"></el-image>
                <span>上传项目</span>
              </div>

              <div class="flex flex-direction align-center justify-center">
                <el-image :src="require('@/assets/img/index/banner_right2.png')" fit="fill" style="width: 4rem;height: 4rem;"></el-image>
                <span>寻求报道</span>
              </div>

              <div class="flex flex-direction align-center justify-center">
                <el-image :src="require('@/assets/img/index/banner_right3.png')" fit="fill" style="width: 4rem;height: 4rem;"></el-image>
                <span>投资人</span>
              </div>
            </div>
          </div>

          <div class="flex flex-direction banner-right-box">
            <div class="banner-right-title">我是投资人</div>
            <div class="grid align-center justify-between banner-right-content">
              <div class="flex flex-direction align-center justify-center">
                <el-image :src="require('@/assets/img/index/banner_right4.png')" fit="fill" style="width: 4rem;height: 4rem;"></el-image>
                <span>看融资</span>
              </div>

              <div class="flex flex-direction align-center justify-center">
                <el-image :src="require('@/assets/img/index/banner_right5.png')" fit="fill" style="width: 4rem;height: 4rem;"></el-image>
                <span>近期活动</span>
              </div>

              <div class="flex flex-direction align-center justify-center">
                <el-image :src="require('@/assets/img/index/banner_right6.png')" fit="fill" style="width: 4rem;height: 4rem;"></el-image>
                <span>我要投稿</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="30" style="margin-top: 1rem; margin-right: 0;">
        <el-col :span="19" style="height: 10.125rem;">
          <div class="flex align-center justify-between" style="height: 100%;">
            <div
              style="position: relative; width: 32%; height: 100%; background-color: #efefef;  border-radius: 0.25rem; overflow: hidden; cursor: pointer;"
              v-for="item in bannerList.other"
              :key="'other' + item.id"
              @click.stop="navigation('banner', item)"
            >
              <a
                :href="item.redirectUrl && item.redirectUrl.indexOf('www.') !== -1 ? 'http://' + item.redirectUrl : '/#' + item.redirectUrl"
                @click.prevent="navigation('banner', item)"
              >
                <el-image :src="item.picture" fit="fill" style="width: 100%; height: 100%;" lazy></el-image>
                <div class="tips">{{ item.title }}</div>
              </a>
            </div>
          </div>
        </el-col>

        <el-col :span="5" style="padding: 1rem; height: 10.125rem; border: 1px solid #e4e4e4; border-radius: 0.5rem;">
          <div class="flex justify-between banner-right-box" style="padding: 0 0.5rem;">
            <div class="flex flex-direction align-center justify-center" style="color: #333;">
              <span style="margin-bottom: 1rem; font-size: 1.25rem;">明星项目</span>
              <el-image :src="require('@/assets/img/index/banner_right7.png')" fit="fill" style="width: 4rem;height: 4rem;"></el-image>
              <span style="margin-top: 0.25rem; font-size: 0.875rem;">谷宝</span>
            </div>

            <div class="flex flex-direction align-center justify-center">
              <span style="margin-bottom: 1rem; font-size: 1.25rem;">明星投资人</span>
              <el-image :src="require('@/assets/img/index/banner_right8.png')" fit="fill" style="width: 4rem;height: 4rem;"></el-image>
              <span style="margin-top: 0.25rem; font-size: 0.875rem;">高瓴资本-张磊</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="tabs">
      <div class="container-fixed-width">
        <div class="padding-0 tabs-header">
          <el-tabs type="border-card" style="margin-top: 1rem; box-shadow: none; font-size: 0.75rem; color: #999;" @tab-click="changeTabs">
            <el-tab-pane label="我要技术">
              <div class="flex align-center">
                <span>技术需求：</span>
                <div :style="{ 'margin-left': index !== 0 ? '1rem' : 0 }" v-for="(item, index) in scienceInfo.science_need.children" :key="index">
                  <span>{{ item.name }}</span>
                  <span style="color: red;">（{{ item.value }}）</span>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="我要融资">融资服务：{{ scienceInfo.financing_service.value }}</el-tab-pane>
            <el-tab-pane label="我要投资">投资服务：{{ scienceInfo.invest_service.value }}</el-tab-pane>
          </el-tabs>

          <!-- <el-collapse-transition> -->
          <div v-if="currentTab == 0">
            <el-row style="margin-top: 1rem;height: auto;overflow: hidden;">
              <el-col :span="12" style="padding: 0.5rem 2rem; height: 100%; border-right: 1px solid #e8e8e8; background-color: #fff;">
                <div class="science-need-card" v-for="(item, index) in scienceNeedLeftList" :key="'scienceNeedLeftList' + index" @click.stop="navigation('NeedsDetail', item.id)">
                  <router-link :to="{ name: 'NeedsDetail', query: { id: item.id, jump: 'index' } }" class="flex align-center justify-between">
                    <span class="flex-sub text-bold" style="font-size: 0.75rem; color: #ff3400;">{{ item.budget === 0 ? '面议' : item.budget + '元' }}</span>
                    <span class="flex-twice text-bold" style="font-size: 0.875rem; color: #333; overflow: hidden; text-overflow:ellipsis; white-space: nowrap;">
                      {{ item.name }}
                    </span>
                    <span class="flex-sub text-right" style="font-size: 0.75rem; color: #999;">{{ item.address }}</span>
                  </router-link>
                </div>
              </el-col>
              <el-col :span="12" style="padding: 0.5rem 2rem; height: 100%; background-color: #fff;">
                <div class="science-need-card" v-for="(item, index) in scienceNeedRightList" :key="'scienceNeedRightList' + index" @click.stop="navigation('NeedsDetail', item.id)">
                  <router-link :to="{ name: 'NeedsDetail', query: { id: item.id, jump: 'index' } }" class="flex align-center justify-between">
                    <span class="flex-sub text-bold" style="font-size: 0.75rem; color: #ff3400;">{{ item.budget === 0 ? '面议' : item.budget + '元' }}</span>
                    <span class="flex-twice text-bold" style="font-size: 0.875rem; color: #333; overflow: hidden; text-overflow:ellipsis; white-space: nowrap;">
                      {{ item.name }}
                    </span>
                    <span class="flex-sub text-right" style="font-size: 0.75rem; color: #999;">{{ item.address }}</span>
                  </router-link>
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- </el-collapse-transition> -->

          <!-- <el-collapse-transition> -->
          <div class="financing_card_box" v-if="currentTab == 1">
            <div v-for="item in financingList" :key="'financing' + item.id" @click.stop="navigation('FinancingDetail', item.id)">
              <router-link :to="{ name: 'MechanismDetail', query: { id: item.id, jump: 'index' } }" class="flex flex-direction align-center financing_card">
                <el-image :src="item.picture" fit="fill" lazy style="margin-top: 15%; width: 6.875rem; height: 6.875rem; border-radius: 50%;"></el-image>
                <div class="text-bold" style="margin-top: 0.375rem;font-size: 1rem; color: #333;">{{ item.title }}</div>
                <div class="flex justify-between align-center" style="margin-top: 8%; width: 60%;">
                  <div class="flex align-center justify-center" style="font-size: 0.875rem; color: #999;">
                    <i class="el-icon-location-outline"></i>
                    <span style="margin-top: -0.125rem; margin-left: 0.25rem;">{{ item.address }}</span>
                  </div>
                  <div class="flex align-center justify-center" style="font-size: 0.875rem; color: #999;">
                    <i class="el-icon-document-checked"></i>
                    <span style="margin-top: -0.125rem; margin-left: 0.25rem;">{{ item.institutionName }}</span>
                  </div>
                </div>
                <div class="flex-sub col-1 text-center">
                  <el-button style="margin-top: 10%; padding: 0; width: 65%; height: 2.25rem; line-height: 2.25rem; border: 1px solid #f08519; color: #f08519;" plain>
                    <div class="flex align-center justify-center">
                      <i class="el-icon-upload" style="font-size: 1.5rem; background-color: #fff;"></i>
                      <span style="margin-left: 0.375rem;">投递商业计划书</span>
                    </div>
                  </el-button>
                </div>
                <div class="self-end flex align-center justify-around" style="width: 100%; height: 2.25rem; background-color: #e8e8e8;">
                  <div class="flex align-center" style="font-size: 0.875rem; color: #1985f0; cursor: pointer;" @click.stop="navigation('demand')">
                    <i class="el-icon-document-copy" style="margin-top: 0.125rem; font-size: 1rem;"></i>
                    <span style="margin-left: 0.375rem;">项目需求</span>
                  </div>

                  <div class="flex align-center" style="font-size: 0.875rem; color: #1985f0; cursor: pointer;" @click.stop="navigation('introduction')">
                    <i class="el-icon-office-building" style="margin-top: 0.125rem; font-size: 1rem;"></i>
                    <span style="margin-left: 0.375rem;">机构简介</span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <!-- </el-collapse-transition> -->

          <!-- <el-collapse-transition> -->
          <div class="flex align-center justify-between flex-wrap investment_card_box" v-if="currentTab == 2">
            <div class="investment_card" v-for="item in investList" :key="'investment' + item.id" @click.stop="navigation('MechanismDetail', item.id)">
              <router-link :to="{ name: 'EnterpriseDetail', query: { id: item.id, jump: 'index' } }" class="flex flex-direction align-center" style="height: 100%;">
                <div class="flex-sub flex justify-between align-center" style="padding: 0 4%; width: 100%;">
                  <el-image :src="item.picture" fit="fill" lazy style="width: 5.25rem; height: 5.25rem; border-radius: 50%;"></el-image>
                  <div class="flex-sub flex flex-direction" style="margin-left: 1rem;">
                    <div style="font-size: 1rem; color: #333;">{{ item.title }}</div>
                    <div style="margin-top: 0.375rem; font-size: 0.875rem; color: #666;">所属行业：{{ item.label }}</div>
                    <div style="margin-top: 0.375rem; font-size: 0.875rem; color: #999;">{{ item.synopsis }}</div>
                  </div>
                </div>

                <div class="self-end flex align-center justify-between" style="padding: 0 4%; width: 100%; height: 2.25rem; background-color: #e8e8e8;">
                  <div class="flex align-center" style="font-size: 0.875rem; color: #999;">
                    <i class="el-icon-location-outline" style="margin-top: 0.125rem; font-size: 1rem;"></i>
                    <span style="margin-left: 0.375rem;">{{ item.address }}</span>
                  </div>

                  <div class="flex align-center" style="font-size: 0.875rem; color: #f08519; cursor: pointer;" @click.stop="navigation('qrcode')">
                    <i class="el-icon-chat-dot-square" style="margin-top: 0.125rem; font-size: 1rem;"></i>
                    <span style="margin-left: 0.375rem;">立即咨询</span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <!-- </el-collapse-transition> -->

          <div class="flex justify-center align-center more" @click="navigation('more')">
            <router-link :to="{ name: 'Needs', query: {} }" v-if="currentTab == 0">更多技术 >></router-link>
            <router-link :to="{ name: 'Mechanism', query: {} }" v-else-if="currentTab == 1">更多投资机构 >></router-link>
            <router-link :to="{ name: 'Enterprise', query: {} }" v-else-if="currentTab == 2">更多融资企业 >></router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fixed-width">
      <div class="serve">
        <div class="flex align-center">
          <div class="flex flex-direction align-center serve-left">
            <el-image :src="require('../assets/img/index/serve_light.png')" fit="fill" lazy style="margin-top: 20%;width: 3.75rem;height: 3.75rem;"></el-image>
            <div class="text-bold" style="margin-top: 3%; font-size: 1.25rem; color: #fff;">科技服务创新</div>
            <!-- <el-button id="serve_enter" style="margin-top: 10%;border: 0;color: #f08519;" @click.stop="navigation('serve')">进入服务专区 >></el-button> -->
          </div>
          <div class="flex-sub flex flex-wrap serve-right">
            <div class="col-3 flex flex-wrap card" v-for="(item, index) in serveList" :key="index">
              <span class="text-bold" style="font-size: 1rem; color: #333;">{{ item.title }}</span>
              <span style="font-size: 0.875rem; color: #333;">{{ item.desc }}</span>
              <div class="self-end flex-sub" style="margin-top: 6%;">
                <el-button class="consult" @click.stop="navigation('qrcode', '_innovate')">
                  <div class="flex align-center justify-center">
                    <img src="../assets/img/index/serve_message.png" style="width: 1.25rem;height: 1.25rem;object-fit: fill;" />
                    <span style="margin-left: 0.375rem;">立即咨询</span>
                  </div>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="message_activity">
      <div class="container-fixed-width">
        <!-- <div class="padding-0 flex justify-between"> -->
        <el-row class="padding-0 flex justify-between">
          <el-col :span="17" class="flex-sub flex flex-direction" style="padding: 1rem; background-color: #fff;">
            <!-- <div class="flex-sub flex flex-direction" style="padding: 1rem; background-color: #fff;"> -->
            <div class="flex align-center justify-between" style="position: relative;">
              <span class="newest">最新资讯</span>
              <span style="line-height: 1.75rem; color: #999; font-size: 0.75rem; cursor: pointer;" @click.stop="navigation('newest')">
                <router-link :to="{ name: 'Information', query: {} }">更多资讯 >></router-link>
              </span>
            </div>
            <div style="margin: 0 -1rem; border-bottom: 1px solid #ebebeb;"></div>
            <div v-for="item in messageList" :key="'message_card' + item.id" @click.stop="navigation('InformationDetail', item.id)">
              <router-link :to="{ name: 'InformationDetail', query: { id: item.id, jump: 'index' } }" class="flex align-center message_card">
                <div class="message_card_left">
                  <el-image :src="item.picture" fit="fill" lazy style="width: 17rem; height: 11.5rem;border-radius: 0.25rem;overflow: hidden;"></el-image>
                  <div class="tag">{{ item.typeName }}</div>
                </div>
                <div class="flex-sub flex flex-wrap flex-direction message_card_right">
                  <div class="text-bold" style="font-size: 1.125rem; color: #333;">{{ item.name }}</div>
                  <div class="flex-sub" style="margin: 1% 0;font-size: 0.875rem; color: #999;">{{ item.synopsis }}</div>
                  <div class="col-1 flex justify-between" style="font-size: 0.875rem; color: #999;">
                    <div class="col-1 flex align-end justify-between">
                      <!-- <div class="flex-twice message_card_right_bottom_left"> -->
                      <span style="margin-right: 8%;">{{ item.publisher }}</span>
                      <div>
                        <i class="el-icon-time"></i>
                        <span style="padding: 0.375rem;">{{ item.publishTime }}</span>
                      </div>
                    </div>
                    <!-- <div class="flex-sub text-right message_card_right_bottom_right">
                  <span>昌力科技</span>
                  <span style="margin-left: 5%;">防震</span>
                  <span style="margin-left: 5%;">故宫</span>
                </div> -->
                  </div>
                </div>
              </router-link>
            </div>
            <!-- </div> -->
          </el-col>

          <el-col :span="7" class="flex flex-direction" style="margin-left: 1rem; padding: 1rem; height: 100%; background-color: #fff;">
            <!-- <div class="flex flex-direction" style="margin-left: 1rem; padding: 1rem; width: 24.25rem; background-color: #fff;"> -->
            <div class="flex align-center justify-between" style="position: relative;">
              <span class="activity">最新活动</span>
              <span style="line-height: 1.45rem; color: #999; font-size: 0.75rem; cursor: pointer;" @click.stop="navigation('activity')">
                <router-link :to="{ name: 'Activity', query: {} }">更多活动 >></router-link>
              </span>
            </div>
            <div v-for="item in activityList" :key="'activity_card' + item.id" @click.stop="navigation('ActivityDetail', item.id)">
              <router-link :to="{ name: 'ActivityDetail', query: { id: item.id, jump: 'index' } }" class="flex flex-direction activity_card">
                <el-image :src="item.picture" fit="fill" lazy style="width: 100%; height: 14rem;"></el-image>
                <div class="text-bold" style="padding: 0.5rem 0.5rem 0; font-size: 1rem; color: #333;">{{ item.name }}</div>
                <div style="padding: 0 0.5rem; font-size: 0.875rem; color: #999;">
                  <i class="el-icon-time"></i>
                  <span style="padding: 0.375rem;">{{ item.publishTime }}</span>
                </div>
                <div style="margin-top: -0.35rem; padding: 0 0.5rem 0.35rem; font-size: 0.875rem; color: #999;">
                  <i class="el-icon-location-outline"></i>
                  <span style="padding: 0.375rem;">{{ item.address }}</span>
                </div>
              </router-link>
            </div>
            <!-- </div> -->
          </el-col>
        </el-row>
        <!-- </div> -->
      </div>
    </div>

    <div class="partner">
      <div class="container-fixed-width">
        <div class="padding-0 flex flex-direction">
          <span>合作伙伴</span>
          <div class="partner_box" style="margin-top: 0.5rem;">
            <div v-for="(item, index) in 18" :key="'partner' + index" style="margin-top: 0.5rem; margin-right: 0.625rem; width: 12rem;height: 5.6rem;border: 1px solid #f3f3f3;">
              <el-image :src="require('../assets/img/index/partner' + item + '.png')" fit="fill" lazy style="width: 100%; height: 100%;"></el-image>
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
import { requestBannerList, requestScienceInfo, requestMessageList, requestActivityList, requestScienceNeedList, requestFinancingList, requestInvestList } from '@/api/index.js';

export default {
  name: 'Home',
  data() {
    return {
      qrcodeType: '',
      centerDialogVisible: false,
      currentTab: 0,
      bannerList: [],
      // tabs内容
      scienceInfo: {
        financing_service: {
          id: 18,
          name: '融资服务',
          value: '基础服务（免费）  助推服务（增值）  展示服务（专业）'
        },
        science_need: {
          id: 12,
          name: '技术需求',
          value: null,
          children: [
            {
              id: 13,
              name: '成交总额',
              value: '701858.99万元',
              children: null
            }
          ]
        },
        invest_service: {
          id: 19,
          name: '融资服务',
          value: '基础服务（免费） 助推服务（增值）'
        }
      },
      serveList: [
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
      messageList: [],
      activityList: [],
      scienceNeedLeftList: [],
      scienceNeedRightList: [],
      financingList: [],
      investList: [
        {
          address: 'string',
          id: 0,
          label: 'string',
          picture: 'string',
          synopsis: 'string',
          title: 'string'
        },
        {
          address: 'string',
          id: 0,
          label: 'string',
          picture: 'string',
          synopsis: 'string',
          title: 'string'
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
      requestBannerList({ type: 0 }).then(res => {
        if (res.code === 200) {
          this.bannerList = res.data;
        }
      });

      requestScienceInfo().then(res => {
        if (res.code === 200) {
          this.scienceInfo = res.data;
        }
      });

      requestMessageList({ isIndex: 1, limit: 10 }).then(res => {
        if (res.code === 200) {
          this.messageList = res.data.data;
        }
      });

      requestActivityList({ isIndex: 1, limit: 4 }).then(res => {
        if (res.code === 200) {
          this.activityList = res.data.data;
        }
      });

      requestScienceNeedList({ isIndex: 1, page: 1, limit: 10 }).then(res => {
        if (res.code === 200) {
          const scienceNeedList = res.data.data;
          this.scienceNeedLeftList = scienceNeedList.filter((_item, index) => index % 2 === 0);
          this.scienceNeedRightList = scienceNeedList.filter((_item, index) => index % 2 !== 0);
        }
      });

      requestFinancingList({ isIndex: 1 }).then(res => {
        if (res.code === 200) {
          this.financingList = res.data.data;
        }
      });

      requestInvestList({ isIndex: 1 }).then(res => {
        if (res.code === 200) {
          this.investList = res.data.data;
        }
      });
    },
    changeTabs(e) {
      this.currentTab = Number(e.index);
    },
    navigation(type, id) {
      switch (type) {
        case 'banner':
          if (Number(id.redirectType) === 1) {
            this.$router.push(id.redirectUrl);
          } else if (Number(id.redirectType) === 2) {
            window.open('http://' + id.redirectUrl);
          }
          break;
        case 'more':
          if (this.currentTab === 0) {
            this.$router.push({ name: 'Needs', query: {} });
          } else if (this.currentTab === 1) {
            this.$router.push({ name: 'Mechanism', query: {} });
          } else if (this.currentTab === 2) {
            this.$router.push({ name: 'Enterprise', query: {} });
          }
          break;
        case 'serve':
          document.getElementById('serve_enter').blur();
          break;
        case 'qrcode':
          this.qrcodeType = !id || id === 0 ? '' : id;
          this.centerDialogVisible = true;
          break;
        case 'newest':
          this.$router.push({ name: 'Information', query: {} });
          break;
        case 'activity':
          this.$router.push({ name: 'Activity', query: {} });
          break;
        case 'demand':
          break;
        case 'introduction':
          break;
        case 'NeedsDetail':
          this.$router.push({ name: 'NeedsDetail', query: { id: id, jump: 'index' } });
          break;
        case 'ActivityDetail':
          this.$router.push({ name: 'ActivityDetail', query: { id: id, jump: 'index' } });
          break;
        case 'InformationDetail':
          this.$router.push({ name: 'InformationDetail', query: { id: id, jump: 'index' } });
          break;
        case 'FinancingDetail':
          this.$router.push({ name: 'MechanismDetail', query: { id: id, jump: 'index' } });
          break;
        case 'MechanismDetail':
          this.$router.push({ name: 'EnterpriseDetail', query: { id: id, jump: 'index' } });
          break;
        default:
          break;
      }
    }
  },
  components: {}
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

.banner-right-box {
  .banner-right-title {
    position: relative;
    padding-left: 0.75rem;
    font-weight: bold;

    &::before {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0.1rem;
      width: 0.25rem;
      height: 1.2rem;
      background-color: #f08519;
    }
    &::after {
      content: ' ';
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      width: 6rem;
      height: 0.25rem;
      background-color: #ffdfbe;
    }
  }

  .banner-right-content {
    margin-top: 1.25rem;
    grid-template-columns: repeat(3, 30%);
    grid-gap: 0.75rem;
    & span {
      margin-top: 0.5rem;
      font-size: 0.75rem;
      color: #333;
    }
  }
}

.tabs {
  margin-top: 1rem;
  padding-bottom: 1rem;
  background-color: #f8f8f8;

  .tabs-header {
    ::v-deep .el-tabs__nav {
      width: 100% !important;

      .el-tabs__item {
        width: 34%;
        height: 3.75rem;
        line-height: 3.75rem;
        font-size: 1.125rem;
        font-weight: bold;
        text-align: center;
      }

      .el-tabs__item.is-active,
      .el-tabs__item:not(.is-disabled):hover {
        color: #f08519 !important;
      }
    }
  }

  /* 需求 */
  .science-need-card {
    padding: 0.75rem 0;
    border-bottom: 1px solid #e8e8e8;
    cursor: pointer;

    &:last-child {
      border-bottom: 0;
    }
  }

  /* 融资 */
  .financing_card_box {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 24%);
    grid-gap: 0.5rem;

    .financing_card {
      margin-top: 1rem;
      margin-right: 1rem;
      width: 100%;
      height: 22.5rem;
      background-color: #fff;
      box-shadow: 0 0.375rem 0.9375rem rgba($color: #000000, $alpha: 0.1);
      border-radius: 0.25rem;
      overflow: hidden;
      cursor: pointer;

      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }

  /* 投资 */
  .investment_card_box {
    width: 100%;

    &::after {
      content: '';
      width: 33%;
    }

    .investment_card {
      margin-top: 1rem;
      margin-right: 1rem;
      width: 32%;
      height: 13.25rem;
      background-color: #fff;
      box-shadow: 0 0.375rem 0.9375rem rgba($color: #000000, $alpha: 0.1);
      border-radius: 0.25rem;
      overflow: hidden;
      cursor: pointer;

      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }

  .more {
    margin-top: 1rem;
    width: 100%;
    height: 3.25rem;
    background-color: #fff;
    text-align: center;
    cursor: pointer;

    a {
      font-size: 0.875rem;
      color: #666;
    }

    &:hover > a {
      color: #f08519;
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
      background: url('../assets/img/index/serve_pic.png') no-repeat;
      background-size: 100%;
      z-index: -1;
    }
  }

  .serve-right {
    padding-left: 1rem;
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

.message_activity {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #f8f8f8;

  span {
    position: relative;
    display: inline-block;
    height: 1.875rem;
  }

  .newest {
    color: #f08519;
    font-weight: bold;

    &::after {
      content: ' ';
      position: absolute;
      left: 0.75rem;
      bottom: 0;
      width: 2.5rem;
      height: 0.125rem;
      background-color: #f08519;
    }
  }

  .message_card {
    margin: 0 -1rem;
    padding: 1rem;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;

    &:last-child {
      border-bottom: 0;
    }

    .message_card_left {
      position: relative;
      border-radius: 0.25rem;
      overflow: hidden;

      .tag {
        padding: 0 0.5rem;
        position: absolute;
        top: 0;
        left: 0;
        width: auto;
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.875rem;
        color: #fff;
        background-color: #f08519;
        border-radius: 0.25rem 0 0.25rem 0;
      }
    }

    .message_card_right {
      padding-left: 0.625rem;
      height: 11.5rem;
    }
  }

  .activity {
    margin-left: 0.5rem;
    font-weight: bold;

    &::before {
      content: ' ';
      position: absolute;
      left: -0.75rem;
      top: 0;
      width: 0.25rem;
      height: 1.35rem;
      background-color: #f08519;
    }
  }

  .activity_card {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ebebeb;
    border-radius: 0.25rem;
    overflow: hidden;
    cursor: pointer;
  }
}

.partner {
  padding-top: 1rem;

  .partner_box {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 11.75rem);
    grid-gap: 0.5rem;
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
