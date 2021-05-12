/* eslint-disable */
<template>
  <div class="container flex flex-direction" :style="{...$common.setMinWdith()}">
    <div class="header-pic">
      <el-image :src="require('@/assets/img/unicorn/project_title.png')" fit="cover" style="width: calc(100% + 1rem); height: 100%; z-index: 0;"></el-image>

      <div class="flex align-center justify-around header-nav">
        <span v-for="(item, index) in manageTypeList" :key="'typelist' + index" class="flex-sub" @click.stop="toJump(item)">{{ item }}</span>
      </div>
    </div>

    <div id="unicorn-project" class="box-content">
      <div class="flex">
        <div class="flex-sub flex flex-direction" style="margin-right: 1rem;">
          <span class="content-title">预见独角兽计划</span>
          <div style="margin-top: 1rem;" v-html="datas['预见独角兽计划'][0].content"></div>
        </div>

        <div class="flex flex-direction align-center justify-center video-box">
          <!-- <div class="video_overlays"><el-image :src="require('@/assets/img/unicorn/video_title.png')" fit="cover" style="width: 98px; height: 40px;"></el-image></div> -->
          <video :src="datas['预见独角兽计划'][0].file" controls="controls" style="width: 100%; height: 100%;"></video>
        </div>
      </div>
    </div>

    <el-row id="radio-roadshow" class="box-content" style="padding-top: 4rem; padding-bottom: 4rem; background-color: #f5f5f5;">
      <el-col :span="24" class="flex align-center">
        <el-image :src="require('@/assets/img/unicorn/project_banner1.png')" fit="cover" style="width: 50%; height: auto; z-index: 0;"></el-image>
        <div class="flex-sub flex flex-direction" style="margin-left: 4rem;">
          <div class="flex-sub flex flex-direction" style="margin-right: 1rem;">
            <span class="content-title">广播路演</span>
            <div style="margin-top: 1rem; width: 26.625rem; line-height: 2rem;">
              每周一至周五20:00播出，每天一个创业项目路演，播出平台为江西都市广播（FM106.5）、蜻蜓FM、喜马拉雅、“预见独角兽”微信公众号等。
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row id="radio-roadshow" class="box-content" style="padding-bottom: 4rem;">
      <el-col :span="24" class="flex align-center">
        <div class="flex-sub flex flex-direction" style="margin-left: 4rem;">
          <div class="flex-sub flex flex-direction" style="margin-right: 1rem;">
            <span class="content-title">线下路演</span>
            <div style="margin-top: 1rem; width: 26.625rem; line-height: 2rem;">
              每周一至周五20:00播出，每天一个创业项目路演，播出平台为江西都市广播（FM106.5）、蜻蜓FM、喜马拉雅、“预见独角兽”微信公众号等。
            </div>
          </div>
        </div>
        <el-image :src="require('@/assets/img/unicorn/project_banner1.png')" fit="cover" style="width: 50%; height: auto; z-index: 0;"></el-image>
      </el-col>
    </el-row>

    <div id="roadshow-project" class="flex flex-direction">
      <div class="flex align-center justify-between">
        <span class="content-title">项目路演</span>
        <div class="content-title-more" style="cursor: pointer;" @click.stop="navigation('moreRoadshow')">
          更多
          <i class="el-icon-d-arrow-right"></i>
        </div>
      </div>

      <div v-if="roadshowProject" class="grid justify-between activity_card_box">
        <div v-for="(item, index) in roadshowProject" :key="index" class="flex flex-direction activity_card" @click.stop="navigation('activityDetail', item)">
          <div style="position: relative; width: 100%; height: 11.375rem;">
            <el-image :src="item.picture" fit="cover" lazy style="width: 100%; height: 100%; border-radius: 0.25rem 0.25rem 0 0;"></el-image>
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

    <div v-if="datas['独角兽流程']" id="unicorn-process">
      <div class="content-title text-center">成为未来的独角兽流程</div>
      <div class="grid justify-between unicorn-process-content">
        <div
          v-for="(item, index) in datas['独角兽流程']"
          :key="'unicorn-process' + index"
          class="flex flex-direction align-center unicorn-process-card"
          :class="[(index + 1) % 2 === 0 ? 'unicorn-process-card__even' : '']"
        >
          <template v-if="(index + 1) % 2 === 0">
            <div class="flex flex-direction card-content card-content__even">
              <span class="text-center">{{ item.name }}</span>
              <span style="margin-top: 0.5rem; font-size: 0.75rem;" v-html="item.content"></span>
            </div>
            <div class="card-title card-title__even">{{ index + 1 }}</div>
          </template>
          <template v-else>
            <div class="card-title">{{ index + 1 }}</div>
            <div class="flex flex-direction card-content">
              <span class="text-center">{{ item.name }}</span>
              <span style="margin-top: 0.5rem; font-size: 0.75rem;" v-html="item.content"></span>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div v-if="datas['参与项目']" id="participation-project">
      <div class="content-title text-center">参与项目（部分）</div>
      <div class="grid flex-direction align-center justify-between" style="margin-top: 1.25rem; grid-template-columns: repeat(auto-fill, 24%); grid-gap: 0.75rem">
        <el-image
          v-for="(item, index) in datas['参与项目']"
          :key="'participation-project' + index"
          :src="item.file"
          fit="cover"
          style="width: 18rem; height: auto; border: 1px solid #f3f3f3;"
        ></el-image>
      </div>
    </div>

    <div v-if="datas['联合投资机构']" id="investment-institutions">
      <div class="content-title text-center">联合投资机构（部分）</div>
      <div class="grid flex-direction align-center justify-between" style="margin-top: 1.25rem; grid-template-columns: repeat(auto-fill, 186px); grid-gap: 1rem 0.75rem">
        <el-image
          v-for="(item, index) in datas['联合投资机构']"
          :key="'participation-project' + index"
          :src="item.file"
          fit="cover"
          style="width: 11.625rem; height: auto; border: 1px solid #f3f3f3;"
          lazy
        ></el-image>
      </div>
    </div>

    <div v-if="datas['预见独角兽社群']" id="unicorn-community">
      <div class="content-title text-center">预见独角兽社群</div>
      <div class="text-center" style="margin-top: 1.25rem; font-size: 1rem; color: #333;" v-html="datas['预见独角兽社群'][0].synopsis"></div>
      <div class="flex align-center justify-between" style="margin-top: 1rem;">
        <span style="margin-right: 1rem; font-size: 1rem; color: #333;" v-html="datas['预见独角兽社群'][0].content"></span>
        <el-image :src="datas['预见独角兽社群'][0].file" fit="cover" style="width: 40rem; height: 20.625rem;"></el-image>
      </div>
    </div>

    <div v-if="datas['独角兽会员']" id="unicorn-vip" class="flex flex-direction" style="margin-top: 0;">
      <div class="grid justify-between" style="grid-template-columns: 34% 32% 34%; height: auto;">
        <el-image :src="datas['独角兽会员'][0].file" fit="cover" style="width: 100%; height: 100%;"></el-image>
        <div class="flex flex-direction justify-between" style="padding: 2rem 1rem; width: 100%; height: 100%; color: #333; background-color: #f8f8f8;">
          <span class="text-bold" style="font-size: 1.1rem;">{{ datas['独角兽会员'][0].name }}</span>
          <div class="flex-sub" style="margin-top: 1.5rem; line-height: 1.8; font-size: 0.95rem;" v-html="datas['独角兽会员'][0].content"></div>
          <el-button class="consult" @click.stop="navigation('qrcode')">立即购买</el-button>
        </div>
        <el-image :src="datas['独角兽会员'][2].file" fit="cover" style="width: 100%; height: 100%;"></el-image>
      </div>

      <div class="grid justify-between" style="grid-template-columns: 32% 36% 32%; height: auto;">
        <div class="flex flex-direction justify-between" style="padding: 2rem 1rem; width: 100%; height: 100%; color: #333; background-color: #f8f8f8;">
          <span class="text-bold" style="font-size: 1.1rem;">{{ datas['独角兽会员'][1].name }}</span>
          <div class="flex-sub" style="margin-top: 1.5rem; line-height: 1.8; font-size: 0.95rem;" v-html="datas['独角兽会员'][1].content"></div>
          <el-button class="consult" @click.stop="navigation('qrcode')">立即购买</el-button>
        </div>
        <el-image :src="datas['独角兽会员'][1].file" fit="cover" style="width: 100%; height: 100%;"></el-image>
        <div class="flex flex-direction justify-between" style="padding: 2rem 1rem; width: 100%; height: 100%; color: #333; background-color: #f8f8f8;">
          <span class="text-bold" style="font-size: 1.1rem;">{{ datas['独角兽会员'][2].name }}</span>
          <div class="flex-sub" style="margin-top: 1.5rem; line-height: 1.8; font-size: 0.95rem;" v-html="datas['独角兽会员'][2].content"></div>
          <el-button class="consult" @click.stop="navigation('qrcode')">立即购买</el-button>
        </div>
      </div>
    </div>

    <el-row>
      <el-col :span="24">
        <div id="footer" class="flex justify-center align-center footer">
          <el-image
            :src="require('@/assets/img/unicorn/project_footer.png')"
            fit="cover"
            style="position: absolute; left: 50%; bottom: 0; transform: translateX(-50%); width: 100%; height: 100%; z-index: 0;"
          ></el-image>

          <div class="flex flex-direction" style="padding: 1.5rem 0; width: 34%; height: 100%; text-align: center; color: #fff; z-index: 1;">
            <span style="font-size: 1.75rem;">联系我们</span>
            <div v-if="datas['联系我们']" class="flex-sub flex align-center justify-between" style="margin-top: 2rem;">
              <div style="margin-right: 1rem;" v-html="datas['联系我们'][0].content"></div>
              <div style="position: relative; width: 100%; height: auto;">
                <el-image :src="datas['联系我们'][0].file" fit="cover" style="width: 10rem; height: auto;"></el-image>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 打开对话框 -->
    <el-dialog title="" :visible.sync="centerDialogVisible" width="44.5rem" style="text-align: center;">
      <el-image :src="require('@/assets/img/qrcode/qrcode_community.png')" fit="cover" style="width: 44.5rem;height: 30rem;"></el-image>
    </el-dialog>
  </div>
</template>

<script>
import { requestUnicornManageInfoList, requestActivityList } from '@/api/index.js';

export default {
  name: 'UnicornProject',
  components: {},
  data() {
    return {
      jumpType: '',
      centerDialogVisible: false,

      // 获取独角兽计划标题列表
      manageTypeList: ['广播路演', '线下路演', '电视路演', '独角兽学院', '独角兽社群', 'TOP10价值榜单'],

      // 获取所需数据列表
      datas: {},

      // 获取项目路演列表
      roadshowProject: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      requestUnicornManageInfoList().then(res => {
        this.datas = res.data;
      });

      requestActivityList({ isRoadshow: 1 }).then(res => {
        this.roadshowProject = res.data.data;
      });
    },
    // 页面内锚点跳转
    toJump(name) {
      let idName = '';
      switch (name) {
        case '预见独角兽计划':
          idName = 'unicorn-project';
          break;
        case '独角兽流程':
          idName = 'unicorn-process';
          break;
        case '参与项目':
          idName = 'participation-project';
          break;
        case '联合投资机构':
          idName = 'investment-institutions';
          break;
        case '预见独角兽社群':
          idName = 'unicorn-community';
          break;
        case '独角兽会员':
          idName = 'unicorn-vip';
          break;
        case '联系我们':
          idName = 'footer';
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
        case 'moreActivity':
          this.$router.push({ name: 'ActivityMore', query: { jump: 'unicornProject' } });
          break;
        case 'moreRoadshow':
          this.$router.push({ name: 'ActivityMore', query: { jump: 'unicornProject-roadshow' } });
          break;
        case 'activityDetail':
          this.$router.push({ name: 'ActivityDetail', query: { id: item.id, jump: 'unicornProject' } });
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
.container {
  margin-top: -1rem;
  margin-bottom: -1rem;
  width: 100%;
  box-sizing: content-box;

  .header-pic {
    position: relative;
    height: 36rem;
  }

  .header-nav {
    margin-left: 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);

    width: 80%;
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

  /* 容器 */
  .box-content {
    padding: 0 15vw;
    margin-top: 4rem;
  }

  /* 视频 */
  .video-box {
    position: relative;
    width: 45%;
    height: 20.5625rem;

    .video_overlays {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0.25rem 0 0 1rem;
      width: 100%;
      height: 3rem;
      line-height: 1;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.45);
    }
  }

  /* 每个模块的标题 */
  .content-title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .content-title-more {
    font-size: 1rem;
    color: #999;
  }

  /* 最新活动/项目路演 */
  .activity_card_box {
    width: 100%;
    height: auto;
    margin-top: 1rem;
    grid-template-columns: repeat(4, 24%);
    grid-gap: 1rem;

    .activity_card {
      margin-top: 0.5rem;
      width: 100%;
      height: auto;
      background-color: #fff;
      box-shadow: 0 0.3125rem 0.625rem 0 #eaecef;
      border-radius: 0.25rem;
      overflow: hidden;
      cursor: pointer;

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

  /* 成为独角兽 */
  .unicorn-process-content {
    position: relative;
    padding: 1.75rem 9.5%;
    width: 100%;
    height: 50vh;

    grid-template-columns: repeat(5, 20%);

    background: url(../../assets/img/unicorn/project_banner.png) no-repeat center center;
    background-size: 100%;

    .unicorn-process-card {
      width: 100%;
      height: auto;

      .card-title {
        width: 100%;
        height: 3.125rem;

        line-height: 3.125rem;
        text-align: center;
        font-weight: bold;
        font-size: 1.5rem;
        color: #ed7f11;

        background-color: #fff;
        border-radius: 1rem 1rem 0 0;
        box-shadow: 0.375rem -0.25rem 0.375rem 0 #fef8f1;
      }

      .card-content {
        position: relative;
        padding: 0.75rem;
        height: 7rem;

        font-size: 1rem;
        color: #fff;

        background-color: #ed7f11;
        border-radius: 0 0 1rem 1rem;
        box-shadow: 0.375rem 0.25rem 0.375rem 0 #fef8f1;

        &::after {
          content: '';
          display: block;
          width: 0;
          height: 0;
          border-top: 1.5rem solid #ed7f11;
          border-bottom: 1.5rem solid transparent;
          border-left: 1rem solid transparent;
          border-right: 1rem solid transparent;
          // background-color: #ed7f11;
          position: absolute;
          left: 50%;
          bottom: -3rem;
          transform: translateX(-50%);
        }
      }
    }

    .unicorn-process-card__even {
      margin-top: 110%;

      .card-title__even {
        color: #21269b;
        border-radius: 0 0 1rem 1rem;
        box-shadow: 0.375rem 0.25rem 0.375rem 0 #ececf7;
      }

      .card-content__even {
        background-color: #21269b;
        border-radius: 1rem 1rem 0 0;
        box-shadow: 0.375rem -0.25rem 0.375rem 0 #ececf7;

        &::after {
          content: '';
          display: block;
          width: 0;
          height: 0;
          border-top: 1.5rem solid transparent;
          border-bottom: 1.5rem solid #21269b;
          border-left: 1rem solid transparent;
          border-right: 1rem solid transparent;
          // background-color: #21269b;
          position: absolute;
          left: 50%;
          top: -3rem;
          transform: translateX(-50%);
        }
      }
    }
  }

  /* 会员购买按钮 */
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

  .footer {
    position: relative;
    margin-top: 3rem;
    width: 100%;
    height: 18.125rem;

    text-align: center;
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

@media screen and (max-width: 768px) {
  .container {
    margin-left: -1rem;
  }
}
</style>
