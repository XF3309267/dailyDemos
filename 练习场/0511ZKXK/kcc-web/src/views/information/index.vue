<template>
  <div class="container padding-0 flex-direction message" :style="{...$common.setMinWdith()}">
    <div class="container-fixed-width">
      <bread-crumb :jumpType="jumpType">创投圈</bread-crumb>

      <el-row :gutter="30" style="margin-top: 1.5rem; margin-right: 0;">
        <el-col :span="16">
          <el-carousel height="28.125rem" style="position: relative; background-color: #efefef; border-radius: 0.5rem; overflow: hidden;">
            <el-carousel-item style="height: 100%;" v-for="(item, index) in bannerList.index" :key="'bannerIndex' + index">
              <a
                :href="item.redirectUrl.indexOf('www.thinkerwork.com/') !== -1 ? 'http://' + item.redirectUrl : '/#' + item.redirectUrl + '&jump=information'"
                @click.prevent="navigation('banner', item)"
              >
                <!-- <el-image :src="item.picture" fit="fill" style="width: 100%;height: 100%;cursor: pointer;" @click.stop="navigation(item.id)"></el-image> -->
                <el-image :src="item.picture" fit="fill" style="width: 100%;height: 100%;cursor: pointer;"></el-image>
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
                :href="item.redirectUrl.indexOf('www.thinkerwork.com/') !== -1 ? 'http://' + item.redirectUrl : '/#' + item.redirectUrl + '&jump=information'"
                @click.prevent="navigation('banner', item)"
              >
                <el-image :src="item.picture" fit="fill" style="width: 100%;height: 100%;cursor: pointer;" @click.stop="navigation('banner', item)"></el-image>
              </a>
              <div class="tips">{{ item.title }}</div>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="30" style="margin-top: 2rem; margin-right: 0;">
        <el-col :span="16">
          <el-tabs :value="currentTab" @tab-click="changeTabs" style="min-height: 1rem;">
            <el-tab-pane :name="item.id + ''" :label="item.name" v-for="(item, index) in typeList" :key="'tab-' + index">
              <div class="flex-sub flex flex-direction">
                <div v-for="(item, index) in mdata.list" :key="index" @click.stop="navigation('InformationDetail', item.id)">
                  <router-link :to="{ name: 'InformationDetail', query: { id: item.id, jump: 'information' } }" class="flex align-center message_card">
                    <div class="message_card_left">
                      <el-image :src="item.picture" fit="fill" style="width: 16.875rem; height: 11.5rem;"></el-image>
                      <div class="tag">{{ item.typeName }}</div>
                    </div>
                    <div class="flex-sub flex flex-wrap flex-direction message_card_right">
                      <div class="text-bold" style="font-size: 1.125rem; color: #333;">{{ item.name }}</div>
                      <div class="flex-sub" style="margin-top: 1%;line-height: 1.8;font-size: 0.875rem; color: #999;">{{ item.synopsis }}</div>
                      <div class="flex justify-between" style="width: 100%; line-height: 2; font-size: 0.875rem; color: #999;">
                        <div class="flex-twice message_card_right_bottom_left">
                          <span style="margin-right: 3%;">{{ item.publisher }}</span>
                        </div>
                        <div class="flex-sub text-right" style="">
                          <i class="el-icon-time"></i>
                          <span style="padding: 0.375rem;">{{ item.publishTime }}</span>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>

          <el-button
            v-if="mdata.loading || mdata.noMore || mdata.hasNext"
            :loading="mdata.loading"
            :disabled="mdata.noMore"
            size="medium"
            :type="mdata.noMore ? 'info' : 'primary'"
            class="flex align-center justify-center"
            style="margin-top: 2rem; width: 100%;"
            @click="loadingMore"
          >
            <p v-if="mdata.loading">加载中...</p>
            <p v-else-if="mdata.noMore">没有更多了</p>
            <p v-else-if="mdata.hasNext">加载更多</p>
          </el-button>
        </el-col>

        <el-col :span="8" style="margin-top: 0.5rem;">
          <div class="flex align-center justify-between" style="position: relative; margin-left: 0.5rem;"><span class="hot">热门文章</span></div>
          <div class="flex flex-direction hot_box">
            <div class="hot_card" v-for="(item, index) in recommendList" :key="'recommendList' + index" @click.stop="navigation('InformationDetail', item.id)">
              <router-link :to="{ name: 'InformationDetail', query: { id: item.id, jump: 'information' } }" class="flex align-center">
                <el-image :src="item.picture" fit="fill" style="margin-left: 0.25rem; width: 3rem; height: 3rem; border-radius: 0.25rem; background-color: #333;"></el-image>
                <div class="flex-sub" style="margin-left: 1rem; font-size: 0.875rem; font-weight: bold; color: #333;">{{ item.name }}</div>
              </router-link>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import { requestMessageBannerList, requestMessageTypeList, requestMessageList } from '@/api/index.js';

export default {
  name: 'Information',
  components: { BreadCrumb },
  data() {
    return {
      jumpType: '',
      currentTab: 0,
      bannerList: [],
      typeList: [],
      recommendList: [],
      mdata: {
        hasNext: false,
        loading: false,
        noMore: false,
        isRecommend: '',
        total: 1,
        page: 1,
        limit: 12,
        typeId: '', // 资讯类型
        list: []
      }
    };
  },
  mounted() {
    // this.request();
  },
  activated() {
    this.init();
  },
  methods: {
    init() {
      requestMessageTypeList().then(res => {
        this.typeList = res.data;
      });

      requestMessageBannerList().then(res => {
        this.bannerList = res.data;
      });

      this.request();
      this.requestRecommend();
    },
    request(init = true, clickType = 'firstLoad') {
      if (!this.mdata.loading) {
        this.mdata.loading = true;

        if (init) {
          this.mdata.page = 1;
          this.mdata.total = 1;
          this.mdata.noMore = false;
        }

        // 根据当前的currentTab来决定传输过去的类型
        this.mdata.typeId = this.currentTab;
        // 排除掉某个对象
        const { list, loading, noMore, hasNext, total, ...obj } = this.mdata;

        requestMessageList(obj).then(res => {
          if (res.code === 200) {
            this.mdata.total = res.data.total;
            if (this.mdata.total > this.mdata.page) {
              this.mdata.page++;
              this.mdata.hasNext = true;
            } else {
              this.mdata.hasNext = false;
              this.mdata.noMore = true;
            }

            const newData = res.data.data;
            if (clickType === 'firstLoad') {
              this.mdata.list = newData;
            } else {
              newData.forEach((v, k) => {
                this.mdata.list.push(v);
              });
            }
            this.mdata.loading = false;
          }
        });
      }
    },
    requestRecommend() {
      // 排除掉某个对象
      const { list, loading, noMore, hasNext, total, ...obj } = this.mdata;
      obj.isRecommend = '1';
      obj.limit = 6;
      requestMessageList(obj).then(res => {
        this.recommendList = res.data.data;
      });
    },
    changeTabs(e) {
      this.currentTab = e.name + '';
      this.request();
    },
    loadingMore() {
      this.request(false, 'load');
    },
    navigation(type, item) {
      switch (type) {
        case 'banner':
          if (Number(item.redirectType) === 1) {
            this.$router.push({ path: item.redirectUrl, query: { jump: 'information' } });
          } else if (Number(item.redirectType) === 2) {
            window.open('http://' + item.redirectUrl);
          }
          break;
        case 'InformationDetail':
          this.$router.push({ name: 'InformationDetail', query: { id: item, jump: 'information' } });
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

.message {
  // padding-top: 1rem;
  padding-bottom: 1rem;

  span {
    position: relative;
    display: inline-block;
    height: 1.875rem;
  }

  .message_card {
    padding: 1rem;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;

    &:hover {
      border: 1px solid #f3f3f3;
      box-shadow: 0 0.3125rem 0.625rem 0 #f3f3f3;
    }

    &:not(:first-child):hover {
      border-top: 0;
    }

    .message_card_left {
      position: relative;
      border-radius: 0.5rem;
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
      margin-top: 0.25rem;
      padding-left: 0.625rem;
      height: 12.2rem;
    }
  }
}

/* tabs自定义 */
::v-deep .el-tabs__header {
  padding: 0 1.2rem;
  margin: 0 0 0;
}

::v-deep .el-tabs__nav-wrap::after {
  content: none;
}

::v-deep .el-tabs__active-bar {
  width: 0 !important;
}

::v-deep .el-tabs__item {
  font-size: 1rem;
}

::v-deep .el-tabs__item.is-active,
::v-deep .el-tabs__item:hover {
  font-weight: bold;
  color: #f08519;
}

.hot {
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

.hot_box {
  margin-top: 0.5rem;
  padding: 1rem;
  padding-right: 0;
  min-height: 1rem;
  border: 1px solid #ebebeb;

  .hot_card {
    padding: 1rem 0;
    padding-right: 1rem;
    border-bottom: 1px solid #e8e8e8;
    cursor: pointer;

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }
}
</style>
