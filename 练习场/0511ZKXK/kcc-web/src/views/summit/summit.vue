/* eslint-disable */
<template>
  <div class="container flex flex-direction" :style="{...$common.setMinWdith()}">
    <el-row>
      <el-col :span="24" class="header-pic">
        <el-image :src="require('@/assets/img/summit/title_bg.png')" fit="cover" style="width: 100%; height: 100%; z-index: 0;"></el-image>
      </el-col>
    </el-row>

    <div class="box-content" style="padding-top: 4rem; padding-bottom: 4rem; background-color: #f5f5f5;">
      <div class="flex justify-center align-center">
        <el-image :src="require('@/assets/img/summit/gan.png')" fit="cover" style="width: 150px; height: 150px; z-index: 0;"></el-image>

        <div class="flex-sub flex flex-direction self-start" style="margin: 0 1.5rem;">
          <span class="content-title">滕王阁峰会</span>
          <div style="margin-top: 1rem; font-size: 1rem; color: #040000; line-height: 1.5rem;">
            当今世界，国际科技竞争日趋激烈，科技制高点向“深空、深海、深地、深蓝”拓进，知识资源成为科技创新第一要素，前沿科技成为创新竞争主要焦点，推动科技创新已经成为我国实施创新驱动发展战略的核心载体和重要抓手。在此背景下，为顺应新一轮信息技术和科技革命发展浪潮，深入实施创新驱动发展战略，优化产业结构，推动创新要素聚集，滕王阁创投峰会盛邀创投头部力量，解析政策趋势，聚焦投资策略、探索价值发现、前瞻市场未来。滕阁之畔，赣江之滨，大咖云集，齐话赣鄱崛起！
          </div>
        </div>

        <div class="flex flex-direction align-center justify-center video-box">
          <!-- <div class="video_overlays"><el-image :src="require('@/assets/img/unicorn/video_title.png')" fit="cover" style="width: 98px; height: 40px;"></el-image></div> -->
          <video
            src="http://file.thinkervc.cn/7nx4fxs7j7anlgv6ck8lrn97o19es3s6tpm3xrhric3g4mus96zgpvvc28g5ocjblq48ww8awfk3qy2f.mp4"
            controls="controls"
            style="width: 100%; height: 100%;"
          ></video>
        </div>
      </div>
    </div>

    <div class="box-content" style="padding-top: 4rem; padding-bottom: 4rem;">
      <div class="flex flex-direction">
        <span class="content-title">活动亮点</span>
        <div class="grid flex-direction align-center highlights-box">
          <el-image
            v-for="(item, index) in 6"
            :key="'highlights' + index"
            :src="require('@/assets/img/summit/highlights' + (index + 1) + '.png')"
            fit="cover"
            style="width: auto; height: 100%;"
          ></el-image>
        </div>
      </div>
    </div>

    <div class="box-content"><div style="border: 1px solid #d9d9d9;"></div></div>

    <div class="box-content" style="padding-top: 4rem; padding-bottom: 4rem;">
      <div class="flex flex-direction">
        <span class="content-title">企业嘉宾阵容</span>
        <div class="grid flex-direction align-center lineup-box">
          <el-image
            v-for="(item, index) in elineup"
            :key="'elineup' + index"
            :src="require('@/assets/img/summit/elineup' + item + '.png')"
            fit="cover"
            style="width: auto; height: 100%;"
          ></el-image>
        </div>
        <el-button
          v-if="elineup.length < 24"
          style="margin: 0 auto; margin-top: 2rem; width: 12rem; height: 3.25rem; font-size: 1.25rem; color: #fff; background-color: #303f97; border-radius: 0.25rem;"
          @click.stop="more()"
        >
          查看更多
        </el-button>
      </div>
    </div>

    <div class="box-content" style="padding-top: 4rem; padding-bottom: 4rem;">
      <div class="flex flex-direction">
        <span class="content-title">投资机构嘉宾阵容</span>
        <div class="grid flex-direction align-center lineup-box">
          <el-image
            v-for="(item, index) in ilineup"
            :key="'ilineup' + index"
            :src="require('@/assets/img/summit/ilineup' + item + '.png')"
            fit="cover"
            style="width: auto; height: 100%;"
          ></el-image>
        </div>
        <el-button
          v-if="ilineup.length < 29"
          style="margin: 0 auto; margin-top: 2rem; width: 12rem; height: 3.25rem; font-size: 1.25rem; color: #fff; background-color: #F08519; border-radius: 0.25rem;"
          @click.stop="more2()"
        >
          查看更多
        </el-button>
      </div>
    </div>

    <div class="box-content" style="padding-top: 4rem; padding-bottom: 4rem; text-align: center; background-color: #f5f5f5;">
      <el-image :src="require('@/assets/img/summit/company.png')" fit="cover" style="width: 37.0625rem; height: 100%; z-index: 0;"></el-image>
    </div>

    <div class="box-content" style="padding-top: 4rem; padding-bottom: 4rem;">
      <div class="flex flex-direction">
        <span class="content-title">往届峰会</span>
        <div class="grid" style="grid-template-columns: repeat(2, 48%); grid-gap: 1rem;">
          <!-- <div v-for="(item, index) in summitItem" :key="index" class="flex flex-direction activity_card" @click.stop="navigation('activityDetail', item)">
            <div style="position: relative; width: 100%; height: 11.375rem;">
              <el-image :src="item.picture" fit="cover" lazy style="width: 100%; height: 100%; border-radius: 0.25rem 0.25rem 0 0;"></el-image>
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
          </div> -->
          <a href="http://www.twgfh.cn" target="_blank">
            <el-image :src="require('@/assets/img/summit/summit2.png')" fit="cover" style="width: 100%; height: 100%; z-index: 0;"></el-image>
          </a>

          <router-link :to="{ name: 'Summitone', query: {} }">
            <el-image :src="require('@/assets/img/summit/summit1.png')" fit="cover" style="width: 100%; height: 100%; z-index: 0;"></el-image>
          </router-link>
        </div>
      </div>
    </div>

    <div class="flex flex-direction align-center box-content" style="padding-top: 4rem; padding-bottom: 4rem; text-align: center; background-color: #f5f5f5;">
      <div class="flex flex-direction align-center">
        <span class="content-title" style="font-size: 1.75rem;">新媒体矩阵</span>
        <span style="margin-top: 1rem; width: 8.25rem; border: 1px solid #bbbcbc;"></span>
      </div>

      <el-image :src="require('@/assets/img/summit/newMedia.png')" fit="cover" style="margin-top: 3rem; width: 74.75rem; height: 100%; z-index: 0;"></el-image>
    </div>

    <div class="box-content" style="background-color: #f5f5f5;"><div style="border: 1px dashed #999;"></div></div>

    <div class="flex flex-direction align-center box-content" style="padding-top: 4rem; padding-bottom: 4rem; text-align: center; background-color: #f5f5f5;">
      <div class="flex flex-direction align-center">
        <span class="content-title" style="font-size: 1.75rem;">联系方式</span>
        <span style="margin-top: 1rem; width: 8.25rem; border: 1px solid #bbbcbc;"></span>
      </div>
      <div class="flex flex-direction align-center business-card">
        <div style="width: 100%; height: 3.125rem; font-size: 1.25rem; line-height: 2.5; color: #fff; background-color: #F08519;">参会报名及合作咨询</div>
        <div style="width: 100%; height: 10rem; text-align: left; background-color: #303539;">
          <div class="flex flex-direction align-center justify-center text-left" style="margin: 0 auto; width: 14rem; height: 100%; color: #fff;">
            <div class="text-left" style="width: 100%; font-size: 1.25rem;">雷川</div>
            <div class="text-left" style="margin-top: 1rem; width: 100%; font-size: 0.875rem;">电话：+86 158 7066 1107</div>
            <div class="text-left" style="margin-top: 1rem; width: 100%; font-size: 0.875rem;">邮件：1318185891@qq.com</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 打开对话框 -->
    <el-dialog title="" :visible.sync="centerDialogVisible" width="44.5rem" style="text-align: center;">
      <el-image :src="require('@/assets/img/qrcode/qrcode_community.png')" fit="cover" style="width: 44.5rem;height: 30rem;"></el-image>
    </el-dialog>
  </div>
</template>

<script>
import { requestUnicornCollegeApply } from '@/api/index.js';

export default {
  name: 'UnicornProject',
  components: {},
  data() {
    return {
      jumpType: '',
      centerDialogVisible: false,

      // 企业阵容
      elineupNum: 1,
      elineup: [],

      // 投资阵容
      ilineupNum: 1,
      ilineup: [],

      // 往届峰会
      summitItem: [
        {
          picture: '',
          publishTime: '',
          address: ''
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.more();
      this.more2();
    },
    /* 伪加载算法 */
    more() {
      // if (24 - this.elineupNum < 4) {
      //   for (let i = this.elineupNum; i <= 24; i++) {
      //     this.elineup.push(i);
      //   }
      //   return;
      // }
      if (this.elineupNum >= 24) {
        return;
      }
      for (let i = this.elineupNum; i < this.elineupNum + 4; i++) {
        this.elineup.push(i);
      }
      this.elineupNum = this.elineupNum + 4;
    },
    /* 伪加载算法 */
    more2() {
      if (29 - this.ilineupNum < 4) {
        for (let i = this.ilineupNum; i <= 29; i++) {
          this.ilineup.push(i);
        }
        return;
      }
      for (let i = this.ilineupNum; i < this.ilineupNum + 4; i++) {
        this.ilineup.push(i);
      }
      this.ilineupNum = this.ilineupNum + 4;
    },
    /* 报名 */
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.formLoading = true;
          requestUnicornCollegeApply(this.form)
            .then(res => {
              let type = '';
              if (res.code === 200) {
                type = 'success';
                this.$refs.form.resetFields();
              } else if (res.code === 201) {
                type = 'error';
              } else {
                type = 'warning';
              }
              this.$message({
                message: res.msg,
                type
              });
            })
            .finally(() => {
              this.formLoading = false;
            });
        } else {
          return false;
        }
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

  .header-pic {
    position: relative;
    width: 100%;
    height: 36rem;
  }

  .header-nav {
    margin-left: 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);

    width: 90%;
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
    padding: 0 16vw;
    width: 100%;
  }

  /* 视频 */
  .video-box {
    position: relative;
    width: 40%;
    height: auto;

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
    font-size: 1.875rem;
    font-weight: bold;
  }

  .content-title-more {
    font-size: 1rem;
    color: #999;
  }

  /** 活动亮点 */
  .highlights-box {
    width: 100%;
    height: auto;
    margin-top: 1rem;
    grid-template-columns: repeat(3, 32.5%);
    grid-gap: 1rem;
  }

  /* 企业嘉宾/投资嘉宾 */
  .lineup-box {
    width: 100%;
    height: auto;
    margin-top: 1rem;
    grid-template-columns: repeat(4, 24.5%);
    grid-gap: 1rem;
  }

  /* 最新活动/项目路演 */
  // .activity_card_box {
  //   width: 100%;
  //   height: auto;
  //   margin-top: 1rem;
  //   grid-template-columns: repeat(4, 24%);
  //   grid-gap: 1rem;

  //   .activity_card {
  //     margin-top: 0.5rem;
  //     width: 100%;
  //     height: auto;
  //     background-color: #fff;
  //     box-shadow: 0 0.3125rem 0.625rem 0 #eaecef;
  //     border-radius: 0.25rem;
  //     overflow: hidden;
  //     cursor: pointer;

  //     .tag {
  //       position: absolute;
  //       bottom: 0;
  //       right: 0;
  //       padding: 0 1rem;
  //       width: auto;
  //       height: 1.75rem;
  //       line-height: 1.75rem;
  //       font-size: 0.875rem;
  //       color: #fff;
  //       background-color: #1985f0;
  //       border-radius: 0.25rem 0 0 0;
  //     }

  //     .tag__start {
  //       background-color: #f08519;
  //     }

  //     .tag__end {
  //       background-color: #b2b2b2;
  //     }
  //   }
  // }

  /* 联系方式 */
  .business-card {
    margin-top: 3rem;
    width: 29rem;
    height: 13.125rem;
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
