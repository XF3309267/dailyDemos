/* eslint-disable */
<template>
  <div class="container flex flex-direction" :style="{...$common.setMinWdith()}">
    <el-row>
      <el-col :span="24" class="header-pic">
        <el-image :src="require('@/assets/img/unicorn/project_title.png')" fit="cover" style="width: 100%; height: 100%; z-index: 0;"></el-image>

        <div class="flex align-center justify-around header-nav">
          <span v-for="(item, index) in manageTypeList" :key="'typelist' + index" class="flex-sub" @click.stop="toJump(item)">{{ item }}</span>
        </div>
      </el-col>
    </el-row>

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

    <div id="radio-roadshow" class="box-content" style="padding-top: 4rem; padding-bottom: 4rem; background-color: #f5f5f5;">
      <div class="flex align-center">
        <el-image :src="require('@/assets/img/unicorn/project_banner1.png')" fit="cover" style="width: 50%; height: auto; z-index: 0;"></el-image>
        <div class="flex-sub flex flex-direction" style="margin-left: 4rem;">
          <div class="flex-sub flex flex-direction" style="margin-right: 1rem;">
            <span class="content-title">广播路演</span>
            <div style="margin-top: 1rem; width: auto; line-height: 2rem; text-indent: 2em;">
              每周一至周五20:00播出，每天一个创业项目路演，播出平台为江西都市广播（FM106.5）、蜻蜓FM、喜马拉雅、“预见独角兽”微信公众号等。
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="offline-roadshow" class="box-content" style="padding-bottom: 4rem;">
      <div class="flex align-center">
        <div class="flex-sub flex flex-direction">
          <div class="flex-sub flex flex-direction" style="margin-right: 1rem;">
            <span class="content-title">线下路演</span>
            <div style="margin-top: 1rem; width: auto; line-height: 2rem; text-indent: 2em;">
              每月在“北京、上海、深圳、杭州”等地举办，每期邀请30家以上投资机构代表参加，帮助企业一次性高效对接众多投资机构。
            </div>
          </div>
        </div>
        <el-image :src="require('@/assets/img/unicorn/project_banner2.png')" fit="cover" style="width: 50%; height: auto; z-index: 0;"></el-image>
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

    <div id="tv-column" class="box-content" style="padding-top: 4rem; padding-bottom: 4rem; background-color: #f5f5f5;">
      <div class="flex align-center">
        <el-image :src="require('@/assets/img/unicorn/project_banner3.png')" fit="cover" style="width: 50%; height: auto; z-index: 0;"></el-image>
        <div class="flex-sub flex flex-direction" style="margin-left: 4rem;">
          <div class="flex-sub flex flex-direction" style="margin-right: 1rem;">
            <span class="content-title">电视栏目</span>
            <div style="margin-top: 1rem; width: auto; line-height: 2rem; text-indent: 2em;">
              每期筛选4个全国优质项目搬上江西卫视舞台，邀请梅花创投吴世春、红杉资本周逵、猎户星空傅盛、中科心客缪金生等全国知名投资人担任导师，通过现场路演、投资问答、现场投资等多个环节，发掘、培育优质的科技型企业，栏目计划2021年7月开播第一季。
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="unicorn-academy" class="box-content" style="padding-bottom: 4rem;">
      <div class="flex align-center">
        <div class="flex-sub flex flex-direction">
          <div class="flex-sub flex flex-direction" style="margin-right: 1rem;">
            <span class="content-title">独角兽学院</span>
            <div style="margin-top: 1rem; width: auto; line-height: 2rem;">
              <div style="text-indent: 2em;">
                预见独角兽学院由中科心客、梅花创投联合众多知名企业家、知名投资机构联合推出的帮助创始人及高管的提升认知及创业技能的课程，目前导师团队已有投资人吴世春、傅盛等。
              </div>
              <div style="margin-top: 1.5rem; text-indent: 2em;">2020年12月，预见独角兽学院第一季吴世春导师班已开班，学员项目已有一半获得导师投资。</div>
            </div>
          </div>
        </div>
        <el-image :src="require('@/assets/img/unicorn/project_banner4.png')" fit="cover" style="width: 50%; height: auto; z-index: 0;"></el-image>
      </div>
    </div>

    <div id="unicorn-community" class="box-content" style="padding-top: 4rem; padding-bottom: 4rem; background-color: #f5f5f5;">
      <div class="text-center flex flex-direction">
        <span class="content-title">预见独角兽社群</span>
        <span style="margin-top: 1rem;">本着“共同成长，乐于分享”的宗旨，预见独角兽社群为加入预见独角兽的创业者打造一个高质量family。</span>
      </div>

      <div class="grid align-center justify-between" style="margin-top: 3rem; grid-template-columns: repeat(3, 33%); grid-gap: 1.5rem 1rem">
        <div class="flex flex-direction justify-around align-center unicorn-community-box unicorn-community-box-sp">
          <div class="text-bold" style="font-size: 2rem;">
            365元
            <span style="font-size: 1.25rem;">/年</span>
          </div>
          <div class="text-center" style="font-size: 1.15rem;">
            加入社群会员
            <br />
            每天离独角兽近一点
          </div>
        </div>

        <div v-for="(item, index) in unicornCommunity" :key="'unicorn-community' + index" class="flex flex-direction justify-around align-center unicorn-community-box">
          <el-image :src="require('@/assets/img/unicorn/community' + (index + 1) + '.png')" fit="fill" style="width: 4rem; height: 4rem;"></el-image>
          <div class="text-bold" style="font-size: 1.125rem;">{{ item.title }}</div>
        </div>
      </div>
    </div>

    <div id="top10" class="box-content">
      <div class="flex align-center">
        <div class="flex-sub flex flex-direction">
          <div class="flex-sub flex flex-direction" style="margin-right: 1rem;">
            <span class="content-title">TOP10价值榜单</span>
            <div style="margin-top: 1rem; width: auto; line-height: 2rem; text-indent: 2em;">
              “预见独角兽计划”最具投资价值TOP10榜单是针对加入预见独角兽计划项目评选出的优质项目榜单，该奖项由中科心客、梅花创投联合众多投资机构筛选评选，于2020年推出第一期，每年在滕王阁创投峰会公布，博迅汽车、悦安新材料、斐耳科技、威视佰科、谷宝农业、讯飞幻境、好朋友科技、易智时代、玉米好车、攀藤科技10家上榜。
            </div>
          </div>
        </div>
        <div style="position: relative; width: 50%; height: 22rem;">
          <div style="position: absolute; top: 10%; right: 5%; width: 90%; height: 21.25rem; z-index: -1; border: 1px solid #F08519; border-radius: 0.3125rem;"></div>
          <el-image
            :src="require('@/assets/img/unicorn/project_banner5.png')"
            fit="cover"
            style="position: absolute; right: 0; width: 84%; height: 21.75rem; z-index: 0;"
          ></el-image>
        </div>
      </div>
    </div>

    <div id="registration-method" class="box-content" style="padding-top: 4rem; padding-bottom: 4rem; background-color: #f5f5f5;">
      <div class="text-center flex flex-direction title-box"><span class="content-title content-title-color">报名方式</span></div>

      <el-form ref="form" :model="form" :rules="rules" label-width="0">
        <div class="flex flex-direction align-center registration-method-box">
          <div class="flex align-center justify-between" style="width: 100%; height: auto;">
            <el-form-item label="" prop="name" style="width: 48%;">
              <el-input v-model="form.name" placeholder="请输入姓名" clearable style="width: 100%; height: 3.75rem;"></el-input>
            </el-form-item>
            <el-form-item label="" prop="phone" style="width: 48%;">
              <el-input v-model="form.phone" placeholder="请输入电话" clearable style="width: 100%; height: 3.75rem;"></el-input>
            </el-form-item>
          </div>
          <div class="flex-sub flex justify-between" style="width: 100%; height: auto;">
            <el-form-item label="" prop="dept" style="width: 48%;">
              <el-input v-model="form.dept" placeholder="请输入单位" clearable style="width: 100%; height: 3.75rem;"></el-input>
            </el-form-item>
            <el-form-item label="" prop="position" style="width: 48%;">
              <el-input v-model="form.position" placeholder="请输入职务" clearable style="width: 100%; height: 3.75rem;"></el-input>
            </el-form-item>
          </div>
          <el-button style="width: 100%; height: 3rem; font-size: 1.25rem; color: #F08519;" :loading="formLoading" @click.stop="onSubmit">立即报名</el-button>
        </div>
      </el-form>
    </div>

    <!-- 打开对话框 -->
    <el-dialog title="" :visible.sync="centerDialogVisible" width="44.5rem" style="text-align: center;">
      <el-image :src="require('@/assets/img/qrcode/qrcode_community.png')" fit="cover" style="width: 44.5rem;height: 30rem;"></el-image>
    </el-dialog>
  </div>
</template>

<script>
import { requestUnicornManageInfoList, requestActivityList, requestUnicornCollegeApply } from '@/api/index.js';

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
      roadshowProject: [],

      // 预见独角兽社群
      unicornCommunity: [
        {
          title: '1.精准对接、相互赋能',
          content: '得到导师多年产品思考经验传授，找到问题的解决方案和突破思路'
        },
        {
          title: '2.直通融资快车道',
          content: '帮助创业者解决创业难题、验证商业创意、打造商业IP。'
        },
        {
          title: '3.链接外部资源帮助孵化， 促进成长',
          content: '通过导师为他们对接资源、传授经验，寻找突破，绕过创业“坑”。'
        },
        {
          title: '4.升级认知、捕捉大小风口',
          content: '有机会得到中科心客和导师的投资。'
        },
        {
          title: '5.展现公司或个人IP， 精英社群曝光',
          content: '成为准“独角兽”的潜在机会，整合导师与成员的资源，开创新事业。'
        }
      ],

      /* 表单 */
      // 表单是否在提交
      formLoading: false,

      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }, { min: 2, max: 20, message: '长度需要在 2 到 20 个字符之间', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入电话', trigger: 'blur' }, { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的号码格式', trigger: 'blur' }],
        dept: [{ required: true, message: '请输入单位', trigger: 'blur' }],
        position: [{ required: true, message: '请输入职务', trigger: 'blur' }]
      },

      form: {
        name: '',
        phone: '',
        dept: '',
        position: ''
      }
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
        case '广播路演':
          idName = 'radio-roadshow';
          break;
        case '线下路演':
          idName = 'offline-roadshow';
          break;
        case '电视路演':
          idName = 'tv-column';
          break;
        case '独角兽学院':
          idName = 'unicorn-academy';
          break;
        case '独角兽社群':
          idName = 'unicorn-community';
          break;
        case 'TOP10价值榜单':
          idName = 'top10';
          break;
        default:
          break;
      }

      document.querySelector('#' + idName).scrollIntoView({
        behavior: 'smooth', // 平滑过渡
        block: 'center' // 上边框与视窗顶部平齐。默认值
      });
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
    margin-top: 4rem;
    width: 100%;
  }

  /* 视频 */
  .video-box {
    position: relative;
    width: 45%;
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

  /* 独角兽社群 */
  .unicorn-community-box {
    padding: 3rem;
    width: 100%;
    height: 16.5rem;
    line-height: 1.8;
    border-radius: 0.5rem;
    background-color: #fff;
    color: #333;
  }

  .unicorn-community-box-sp {
    color: #fff;
    background-color: #f08519;
  }

  /* 报名方式 */
  .registration-method-box {
    margin-top: 2rem;
    padding: 4rem 5.375rem 2rem;
    width: 100%;
    height: 20rem;
    background-color: #f08519;
    border-radius: 0.5rem;

    ::v-deep .el-input__icon {
      margin-top: -0.45rem;
    }

    ::v-deep .el-form-item__error {
      margin-top: -1rem;
      color: #fff;
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

@media screen and (max-width: 768px) {
  .container {
    margin-left: -1rem;
  }
}
</style>
