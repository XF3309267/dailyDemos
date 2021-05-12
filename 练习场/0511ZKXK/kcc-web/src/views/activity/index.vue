<template>
  <div class="container padding-lr flex-direction activity" :style="{...$common.setMinWdith()}">
    <bread-crumb :jump-type="jumpType">最新活动</bread-crumb>

    <el-carousel height="30rem" style="position: relative; margin-top: 1.5rem; background-color: #efefef; border-radius: 0.5rem; overflow: hidden;">
      <el-carousel-item v-for="(item, index) in bannerList" :key="'banner' + index" style="height: 100%;">
        <el-image :src="item.picture" fit="fill" style="width: 100%;height: 100%;cursor: pointer;" @click.stop="navigation('banner', item)"></el-image>
        <div class="tips">{{ item.title }}</div>
      </el-carousel-item>
    </el-carousel>

    <div id="newest-activity" class="flex flex-direction" style="margin-top: 2rem;">
      <div class="flex align-center justify-between">
        <span class="content-title">最新会议</span>
        <div class="content-title-more" style="cursor: pointer;" @click.stop="navigation('moreActivity')">
          更多活动
          <i class="el-icon-d-arrow-right"></i>
        </div>
      </div>

      <div v-if="activity.list" class="grid justify-between activity_card_box">
        <div v-for="(item, index) in activity.list" :key="index" class="flex flex-direction activity_card" @click.stop="navigation('activityDetail', item)">
          <div style="position: relative; width: 100%; height: 11.375rem;">
            <el-image :src="item.picture" fit="fill" lazy style="width: 100%; height: 100%; border-radius: 0.25rem 0.25rem 0 0;"></el-image>
            <div v-if="item.activityStatus == 0" class="tag">报名中</div>
            <div v-if="item.activityStatus == 1" class="tag tag__start">即将开始</div>
            <div v-if="item.activityStatus == 2" class="tag tag__end">已结束</div>
          </div>

          <div class="flex-sub flex flex-direction" style="padding: 0.75rem 0.5rem;">
            <div class="flex-sub text-bold" style="margin-top: 0.375rem;font-size: 1rem; color: #333;">{{ item.name }}</div>

            <div class="flex flex-direction" style="margin-top: 0.75rem;">
              <div class="flex align-center" style="font-size: 0.875rem; color: #999;">
                <i class="el-icon-time"></i>
                <span style="margin-left: 0.25rem;">{{ item.publishTime }}</span>
              </div>
              <div class="flex" style="margin-top: 2px; font-size: 0.875rem; color: #999;">
                <i class="el-icon-location-outline" style="margin-left: -1px; margin-top: 2px; font-size: 1rem;"></i>
                <span style="margin-left: 0.2rem;">{{ item.address }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="newest-activity" class="flex flex-direction" style="margin-top: 2rem;">
      <div class="flex align-center justify-between"><span class="content-title">最新活动</span></div>

      <div v-if="summit.list" class="grid justify-between activity_card_box summit_card_box">
        <div v-for="(item, index) in summit.list" :key="index" class="flex flex-direction activity_card" @click.stop="navigation('activityDetail', item)">
          <div style="position: relative; width: 100%; height: 17.5rem;">
            <el-image :src="item.picture" fit="fill" lazy style="width: 100%; height: 100%; border-radius: 0.25rem 0.25rem 0 0;"></el-image>
            <div v-if="item.activityStatus == 0" class="tag">报名中</div>
            <div v-if="item.activityStatus == 1" class="tag tag__start">即将开始</div>
            <div v-if="item.activityStatus == 2" class="tag tag__end">已结束</div>
          </div>

          <div class="flex-sub flex flex-direction" style="padding: 0.75rem 0.5rem;">
            <div class="flex-sub text-bold" style="margin-top: 0.375rem;font-size: 1rem; color: #333;">{{ item.name }}</div>

            <div class="flex flex-direction" style="margin-top: 0.75rem;">
              <div class="flex align-center" style="font-size: 0.875rem; color: #999;">
                <i class="el-icon-time"></i>
                <span style="margin-left: 0.25rem;">{{ item.publishTime }}</span>
              </div>
              <div class="flex align-center" style="margin-top: 2px; font-size: 0.875rem; color: #999;">
                <i class="el-icon-location-outline" style="margin-left: -1px; font-size: 1rem;"></i>
                <span style="margin-left: 0.2rem;">{{ item.address }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import { requestActivityBannerList, requestActivityList } from '@/api/index.js';

export default {
  name: 'Activity',
  components: { BreadCrumb },
  data() {
    return {
      jumpType: '',

      bannerList: [],

      activity: {
        total: 0,
        page: 1,
        limit: 8,
        isSummit: '0',
        name: '',
        list: []
      },

      summit: {
        total: 0,
        page: 1,
        limit: 3,
        isSummit: '1',
        name: '',
        list: []
      }
    };
  },
  mounted() {
    this.init();
  },
  activated() {
    // this.init();
  },
  methods: {
    init() {
      requestActivityBannerList().then(res => {
        this.bannerList = res.data;
      });
      this.requestActivityList();
      this.requestSummitList();
    },
    requestActivityList() {
      // 排除掉某个对象
      let { list, ...obj } = this.activity;

      requestActivityList(obj).then(res => {
        if (res.code === 200) {
          this.activity.total = res.data.total;
          this.activity.list = res.data.data;
        }
      });
    },
    requestSummitList() {
      // 排除掉某个对象
      let { list, ...obj } = this.summit;

      requestActivityList(obj).then(res => {
        if (res.code === 200) {
          this.summit.total = res.data.total;
          this.summit.list = res.data.data;
        }
      });
    },
    navigation(type, item) {
      switch (type) {
        case 'banner':
          if (Number(item.redirectType) === 0) {
            let url = item.redirectUrl.split('http://www.thinkerwork.com/#')[1];
            url = url.split('&')[0];
            this.$router.push(url + '&jump=activity');
          } else if (Number(item.redirectType) === 1) {
            this.$router.push('/activity' + item.redirectUrl.split('/pages')[1] + '&jump=activity');
          } else if (Number(item.redirectType) === 2) {
            window.open('http://' + item.redirectUrl);
          }
          break;
        case 'moreActivity':
          this.$router.push({ name: 'ActivityMore', query: { jump: 'activity' } });
          break;
        case 'activityDetail':
          this.$router.push({ name: 'ActivityDetail', query: { id: item.id, jump: 'activity' } });
          break;
        case 'qrcode':
          this.centerDialogVisible = true;
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
  }
};
</script>

<style lang="scss" scoped>
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

.activity {
  padding-bottom: 1rem;

  /* 每个模块的标题 */
  .content-title {
    position: relative;
    margin-left: 0.75rem;
    font-size: 1rem;
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

  .content-title-more {
    font-size: 0.875rem;
    color: #999;
  }

  .activity_card_box {
    margin-top: 1rem;
    grid-template-columns: repeat(4, 24%);
    grid-gap: 1rem;

    .activity_card {
      margin-top: 0.5rem;
      width: 100%;
      height: auto;
      background-color: #fff;
      // box-shadow: 0 0.3125rem 0.625rem 0 #eaecef;
      border-radius: 0.25rem;
      overflow: hidden;
      cursor: pointer;

      &:hover {
        box-shadow: 0 0.3125rem 0.625rem 0 #eaecef;
      }

      .tag {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0 1rem;
        width: auto;
        height: 1.75rem;
        line-height: 1.75rem;
        font-size: 0.875rem;
        color: #fff;
        background-color: #1985f0;
        border-radius: 0.25rem 0 0 0;
      }

      .tag__start {
        background-color: #f08519;
      }

      .tag__end {
        background-color: #b2b2b2;
      }
    }
  }

  .summit_card_box {
    grid-template-columns: repeat(3, 33%);
  }
}
</style>
