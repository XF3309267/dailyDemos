<template>
  <div class="container flex flex-direction" :style="{...$common.setMinWdith()}">
    <el-row>
      <el-col :span="24" style="position: relative; height: 36rem; margin-left: -1rem;">
        <el-image :src="require('@/assets/img/unicorn/academy_title.png')" fit="cover" style="width: calc(100% + 1rem); height: 100%; z-index: 0;"></el-image>
      </el-col>
    </el-row>

    <div class="padding-lr-20 content">
      <div v-if="textContent.synopsis" class="flex flex-direction" style="margin: 4rem auto 0;">
        <div class="text-center flex flex-direction title-box">
          <el-image :src="require('@/assets/img/unicorn/academy_banner_title1.png')" fit="fill" style="width: 100%; height: 100%; z-index: 0;"></el-image>
          <span class="content-title">预见独角兽学院简介</span>
        </div>

        <div class="brief-introduction-box" v-html="textContent.synopsis.content"></div>
      </div>

      <div v-if="starTutor.list.length" class="flex flex-direction">
        <div class="text-center flex flex-direction title-box">
          <el-image :src="require('@/assets/img/unicorn/academy_banner_title2.png')" fit="fill" style="width: 100%; height: 100%; z-index: 0;"></el-image>
          <span class="content-title content-title-color">明星导师</span>
        </div>

        <div class="grid align-center justify-between" style="margin-top: 2rem; grid-template-columns: repeat(2, 49.5%); grid-gap: 1rem 0.5rem;">
          <div v-for="(item, index) in starTutor.list" :key="'star-tutor' + index" class="flex align-center justify-between star-tutor-box">
            <el-image :src="item.picture" fit="fill" style="width: 18rem; height: 100%;"></el-image>
            <div class="flex-sub flex flex-direction justify-between" style="padding: 2rem 1rem; height: 100%; color: #333;">
              <span class="text-bold" style="font-size: 1.1rem;">{{ item.name }}</span>
              <span style="margin-top: 1rem; font-size: 0.95rem;">{{ item.post }}</span>
              <span class="flex-sub" style="margin-top: 1.25rem; font-size: 0.875rem;" v-html="item.content"></span>
            </div>
          </div>
        </div>

        <el-button
          v-if="starTutor.loading || starTutor.noMore || starTutor.hasNext"
          :loading="starTutor.loading"
          :disabled="starTutor.noMore"
          size="medium"
          :type="starTutor.noMore ? 'info' : 'warning'"
          class="flex align-center justify-center"
          style="margin: auto; margin-top: 2rem; width: 10rem; height: 2.8rem; font-size: 1rem; line-height: 1.2;"
          @click="loadingMore"
        >
          <p v-if="starTutor.loading">加载中...</p>
          <p v-else-if="starTutor.noMore">没有更多了</p>
          <p v-else-if="starTutor.hasNext">更多导师</p>
        </el-button>
      </div>

      <div id="focus-area" class="flex flex-direction">
        <div class="text-center flex flex-direction title-box">
          <el-image :src="require('@/assets/img/unicorn/academy_banner_title1.png')" fit="fill" style="width: 100%; height: 100%; z-index: 0;"></el-image>
          <span class="content-title">课程介绍</span>
        </div>

        <el-image :src="require('@/assets/img/unicorn/courseIntroduction.png')" fit="fill" style="width: 103%; height: 100%;"></el-image>
      </div>

      <div id="course-module">
        <div class="text-center flex flex-direction title-box">
          <el-image :src="require('@/assets/img/unicorn/academy_banner_title2.png')" fit="fill" style="width: 100%; height: 100%; z-index: 0;"></el-image>
          <span class="content-title content-title-color">课程模块</span>
        </div>

        <div class="flex align-center justify-center course-module-box">
          <el-timeline style="width: 100%;">
            <el-timeline-item
              v-for="(item, index) in courseModuleLists"
              :key="'course-module' + index"
              color="#f08519"
              placement="top"
              class="text-bold eltimelinefocus eltimelinefocus_tail_dot"
              style="padding-left: 1rem; height: 14rem;"
            >
              <div class="course-module-title">{{ item.title }}</div>
              <div class="course-module-tips" v-html="item.tips"></div>
            </el-timeline-item>
            <el-timeline-item color="#f08519" placement="top" class="eltimelinefocus__none"></el-timeline-item>
          </el-timeline>
        </div>
      </div>

      <div id="excellent-students" class="flex flex-direction">
        <div class="text-center flex flex-direction title-box">
          <el-image :src="require('@/assets/img/unicorn/academy_banner_title1.png')" fit="fill" style="width: 100%; height: 100%; z-index: 0;"></el-image>
          <span class="content-title">优秀学员</span>
        </div>

        <div class="flex-sub" style="margin-top: 2rem;">
          <el-tabs :value="currentTab" style="min-height: 1rem;" @tab-click="changeTabs">
            <el-tab-pane v-for="(item, index) in studentTypeList" :key="'tab-' + index" :name="item.id + ''" :label="item.name">
              <div class="flex-sub grid justify-between" style="grid-template-columns: repeat(4, 24%); grid-gap: 0.75rem">
                <div v-for="(item, index) in studentList.list" :key="index" class="flex flex-direction align-center justify-between excellent-students-card">
                  <el-image :src="item.picture" fit="fill" style="width: 10rem; height: 100%; border-radius: 0.25rem;"></el-image>
                  <span class="text-bold" style="margin-top: 1rem; font-size: 1.1rem;">{{ item.name }}</span>
                  <div class="text-center flex-sub flex flex-direction" style="margin-top: 1rem; line-height: 1.8; color: #333;">
                    <span>{{ item.companyName }}</span>
                    <span>{{ item.post }}</span>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>

          <el-button
            v-if="studentList.loading || studentList.noMore || studentList.hasNext"
            :loading="studentList.loading"
            :disabled="studentList.noMore"
            size="medium"
            :type="studentList.noMore ? 'info' : 'warning'"
            class="flex align-center justify-center"
            style="margin: auto; margin-top: 2rem; width: 10rem; height: 2.8rem; font-size: 1rem; line-height: 1.2;"
            @click="loadingMore2"
          >
            <p v-if="studentList.loading">加载中...</p>
            <p v-else-if="studentList.noMore">没有更多了</p>
            <p v-else-if="studentList.hasNext">更多学员</p>
          </el-button>
        </div>
      </div>

      <div id="course-benefits">
        <div class="text-center flex flex-direction title-box">
          <el-image :src="require('@/assets/img/unicorn/academy_banner_title2.png')" fit="fill" style="width: 100%; height: 100%; z-index: 0;"></el-image>
          <span class="content-title content-title-color">课程收益</span>
        </div>

        <div class="grid align-center justify-between" style="margin-top: 1.25rem; grid-template-columns: repeat(3, 32%); grid-gap: 0.75rem">
          <div v-for="(item, index) in courseBenefits" :key="'course-benefits' + index" class="flex flex-direction justify-around align-center course-benefits-box">
            <el-image :src="require('@/assets/img/unicorn/courseBenefits' + (index + 1) + '.png')" fit="fill" style="width: 4rem; height: 4rem;"></el-image>
            <div class="text-bold" style="font-size: 1.125rem;">{{ item.title }}</div>
            <div style="font-size: 0.875rem;">{{ item.content }}</div>
          </div>
        </div>
      </div>

      <div id="registration-news">
        <div class="text-center flex flex-direction title-box">
          <el-image :src="require('@/assets/img/unicorn/academy_banner_title1.png')" fit="fill" style="width: 100%; height: 100%; z-index: 0;"></el-image>
          <span class="content-title">报名动态</span>
        </div>

        <div v-if="textContent.dynamic" class="flex flex-direction" style="margin-top: 2rem;">
          <span class="text-bold" style="font-size: 1.25rem; color: #333;">报名须知</span>
          <div style="margin-top: 1rem; max-width: 100%;" v-html="textContent.dynamic.content"></div>
          <span class="text-bold" style="margin-top: 3rem; font-size: 1.25rem; color: #333;">报名流程</span>
          <el-image :src="require('@/assets/img/unicorn/registrationProcess.png')" fit="fill" style="margin-top: 1.5rem; width: 80%; height: 100%;"></el-image>
        </div>
      </div>

      <div id="registration-method" style="margin-bottom: 10%;">
        <div class="text-center flex flex-direction title-box">
          <el-image :src="require('@/assets/img/unicorn/academy_banner_title2.png')" fit="fill" style="width: 100%; height: 100%; z-index: 0;"></el-image>
          <span class="content-title content-title-color">报名方式</span>
        </div>

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
    </div>

    <!-- 打开对话框 -->
    <el-dialog title="" :visible.sync="centerDialogVisible" width="44.5rem" style="text-align: center;">
      <el-image :src="require('@/assets/img/qrcode/qrcode.png')" fit="fill" style="width: 44.5rem;height: 30rem;"></el-image>
    </el-dialog>
  </div>
</template>

<script>
import { request } from '@/utils/request';
import { requestUnicornCollegeApply, requestUnicornCollegeTypeList } from '@/api/index.js';

export default {
  name: 'UnicornAcademy',
  components: {},
  data() {
    return {
      centerDialogVisible: false,

      // 基金介绍
      textContent: {},
      // 明星导师
      starTutor: {
        // 加载按钮状态
        hasNext: false,
        loading: false,
        noMore: false,

        total: 0,
        limit: 4,
        page: 1,
        list: []
      },
      // 课程模块
      courseModuleLists: [
        {
          title: '模块一：开学《创业者征途》',
          tips: '通过设计一系列野外生存、拓展联谊等活动，让大家在应对现实考验中实现破冰。<br />获得亲密的社群感情。'
        },
        {
          title: '模块二: 战略与变革',
          tips:
            '创业所需要的4种战略能力以及MVP模型打造方法。从战略到客户需求，从客户需求到MVP。培训学员如何在激烈的竞争环境中脱颖而出，避免重大方向性错误。<br />获得创业能力训练，一对一项目诊断及项目优化的建议。'
        },
        {
          title: '模块三:慧眼禅心、知行合一',
          tips:
            '从阳明心学、斯多葛哲学以及《原则》当中提炼出改善认知力、提高心力的完整哲学理论，得出有方向、方法论、成验证机制的闭环，帮助创业者提升心理素质<br />获得创业心理素质训练，用心学应对现实中的挑战'
        },
        {
          title: '模块四:资本实战，豹变升级',
          tips:
            '从资本切入，帮助学员掌握融资、估值等资本运营方面的重点和技巧，提供与知名投资机构投资人深入交流和获得融资<br />获得掌握融资、估值等资本运营方面的重点和技巧，项目路演以及导师资源对接。'
        },
        {
          title: '模块五:优质企业游学、失败案例反思',
          tips: '组织学员到优质企业学习、参观，并分析其成功经验，同也注重失败教育，请知名企业家和教授分析企业失败案例、解读和传授经验。<br />获得学习成功、失败企业的经验。'
        },
        {
          title: '模块六:作业汇报，毕业',
          tips: '根据课堂所学，让每位学员重新认识自己的项目并对项目的发展模式进行一个思考，以作业汇报的方式提交导师;举办结业典礼<br />经过系统学习，升华对自己项目的认知。'
        }
      ],
      // 优秀学员
      currentTab: '1',
      studentTypeList: [],
      studentList: {
        hasNext: false,
        loading: false,
        noMore: false,

        total: 1,
        page: 1,
        limit: 8,
        typeId: 1, // 学员分类id
        list: []
      },
      // 课程收益
      courseBenefits: [
        {
          title: '1、解决创业难题',
          content: '得到导师多年产品思考经验传授，找到问题的解决方案和突破思路'
        },
        {
          title: '2、验证商业想法',
          content: '帮助创业者解决创业难题、验证商业创意、打造商业IP。'
        },
        {
          title: '3、 规避风险',
          content: '通过导师为他们对接资源、传授经验，寻找突破，绕过创业“坑”。'
        },
        {
          title: '4、获得投资机会',
          content: '有机会得到中科心客和导师的投资。'
        },
        {
          title: '5、成为准“独角兽”的潜在机会',
          content: '成为准“独角兽”的潜在机会，整合导师与成员的资源，开创新事业。'
        },
        {
          title: '6、拥有理想企业家人脉',
          content: '结识一批有同样理想抱负，面临同样瓶颈与困难的兄弟姐妹，共同成长。'
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
  computed: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      request('/visitor/unicornCollegeInfo/getUnicornCollegeInfoBytypeId?typeId=0').then(res => {
        this.textContent = res.data;
      });

      // 获取导师列表
      this.requestStarTutor();
      // 获取优秀学员头部列表
      requestUnicornCollegeTypeList().then(res => {
        this.studentTypeList = res.data;
      });
      // 获取初始优秀学员列表
      this.requestStudentList();
    },
    /* 导师分页 */
    requestStarTutor() {
      if (!this.starTutor.loading) {
        this.starTutor.loading = true;
        request('/visitor/unicornCollegeInfo/getUnicornCollegeMentorList?limit=' + this.starTutor.limit + '&page=' + this.starTutor.page)
          .then(res => {
            if (res.code === 200) {
              this.starTutor.total = res.data.total;
              if (this.starTutor.total > this.starTutor.page) {
                this.starTutor.page++;
                this.starTutor.hasNext = true;
              } else {
                this.starTutor.hasNext = false;
                this.starTutor.noMore = true;
              }

              const newData = res.data.data;
              newData.forEach((v, k) => {
                this.starTutor.list.push(v);
              });
            }
          })
          .finally(() => {
            this.starTutor.loading = false;
          });
      }
    },
    loadingMore() {
      this.requestStarTutor();
    },
    /* 优秀学员 */
    requestStudentList(init = true, clickType = 'firstLoad') {
      if (!this.studentList.loading) {
        this.studentList.loading = true;

        if (init) {
          this.studentList.page = 1;
          this.studentList.total = 1;
          this.studentList.noMore = false;
        }

        // 根据当前的currentTab来决定传输过去的类型
        this.studentList.typeId = Number(this.currentTab);

        request(
          '/visitor/unicornCollegeInfo/getUnicornCollegeStudentList?typeId=' + this.studentList.typeId + '&limit=' + this.studentList.limit + '&page=' + this.studentList.page
        )
          .then(res => {
            if (res.code === 200) {
              this.studentList.total = res.data.total;
              if (this.studentList.total > this.studentList.page) {
                this.studentList.page++;
                this.studentList.hasNext = true;
              } else {
                this.studentList.hasNext = false;
                this.studentList.noMore = true;
              }

              const newData = res.data.data;
              if (clickType === 'firstLoad') {
                this.studentList.list = newData;
              } else {
                newData.forEach((v, k) => {
                  this.studentList.list.push(v);
                });
              }
            }
          })
          .finally(() => {
            this.studentList.loading = false;
          });
      }
    },
    changeTabs(e) {
      this.currentTab = e.name + '';
      this.requestStudentList();
    },
    loadingMore2() {
      this.requestStudentList(false, 'load');
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
    /* 跳转 */
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
::v-deep .el-button--warning {
  background: #f08519;
  border-color: #f08519;
}

.padding-lr-20 {
  padding: 0 15vw;
}

.container {
  margin-top: -1rem;
  margin-bottom: -1rem;

  /* 具体内容 */
  .content {
    & > div {
      margin-top: 5rem;
    }

    /* 每个模块的标题 */
    .title-box {
      position: relative;
      margin: 0 auto;
      width: 20rem;
      height: 4.5rem;

      .content-title {
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-35%);

        font-size: 1.5rem;
        font-weight: bold;
        color: #fff;
      }

      .content-title-color {
        color: #f08519;
      }
    }

    /* 预见独角兽简介 */
    .brief-introduction-box {
      position: relative;
      margin-top: 1.5rem;
      padding: 1.5rem 8rem;
      width: 100%;
      min-height: 10vh;
      max-width: 100%;

      font-size: 1rem;
      font-family: 'MicrosoftYaHei';
      line-height: 1.8;
      color: #333;

      border-radius: 0.5rem;
      box-shadow: 0 0 1rem 0 #f3f3f3;
    }

    /* 明星导师 */
    .star-tutor-box {
      width: 100%;
      height: 23.75rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 1.75rem 0 #f3f3f3;
      overflow: hidden;
    }

    /* 课程模块 */
    .course-module-box {
      margin-top: 2rem;
      padding: 3rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 1.75rem 0 #f3f3f3;

      .course-module-title {
        margin-top: -0.5rem;
        padding: 0 2rem;
        width: 26.875rem;
        height: 3.75rem;
        line-height: 3.75rem;

        font-size: 1.25rem;
        color: #fff;

        border-radius: 1.875rem;
        background-image: linear-gradient(135deg, #feae5e, #f05b19);
      }

      .course-module-tips {
        padding: 1.5rem 1rem 0;
        line-height: 2;
        font-size: 1rem;
        color: #333;
      }

      /* 时间线样式 */
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
    }

    /* 优秀学员 */
    #excellent-students {
      ::v-deep .el-tabs__nav-wrap::after {
        content: none;
      }

      ::v-deep .el-tabs__active-bar {
        background-color: transparent;
      }

      ::v-deep .el-tabs__item {
        margin-right: 1.5rem;
        width: 6.875rem;
        font-weight: bold;
        color: #333;
        border: 1px solid #cfcece;
      }

      ::v-deep .el-tabs__item.is-active {
        color: #fff;
        background-color: #f08519;
        border: 1px solid #f08519;
      }

      ::v-deep .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
        padding: 0 20px;
      }
    }

    .excellent-students-card {
      margin: 1rem 0;
      padding: 1rem 1rem 0;
      width: 100%;
      height: 18rem;

      color: #333;
      border: 1px solid rgba(240, 133, 25, 0.2);
      border-radius: 0.5rem;
    }

    /* 课程收益 */
    .course-benefits-box {
      padding: 3rem;
      width: 100%;
      height: 16.5rem;
      line-height: 1.8;
      border-radius: 0.5rem;
      box-shadow: 0 0 1.75rem 0 #f3f3f3;
      color: #333;
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
