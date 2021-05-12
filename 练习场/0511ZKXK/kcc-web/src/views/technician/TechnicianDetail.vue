<template>
  <div class="container padding-lr flex-direction" :style="{...$common.setMinWdith()}">
    <bread-crumb :jumpType="jumpType">技术专家详情</bread-crumb>

    <el-row :gutter="20" style="margin-top: 1rem;">
      <el-col :span="17">
        <div class="flex flex-direction technician-box">
          <div class="flex flex-direction technician-card">
            <span class="text-bold" style="font-size: 1.125rem;">{{ datas.name }}</span>
            <div class="flex align-center" style="margin-top: 1rem; font-size: 0.875rem;">
              <i class="el-icon-location-outline"></i>
              <span style="margin-left: 0.25rem; margin-right: 1rem;">{{ datas.address }}</span>
              <span style="width: 1px; height: 0.875rem; background-color: #333;"></span>
              <span style="margin-left: 1rem;">{{ datas.level }}</span>
            </div>
            <div style="margin-top: 0.5rem; font-size: 1rem; line-height: 1.8;">{{ datas.synopsis }}</div>
            <div class="flex align-center" style="margin-top: 0.5rem; font-size: 0.875rem;">
              <div style="width: 6.5rem;">
                产品经验
                <span style="margin-left: 0.5rem; color: #F08519;">{{ datas.experienceLevel }}</span>
              </div>
              <el-progress :text-inside="true" :stroke-width="22" :percentage="Number(datas.experiencePercent)" status="warning" style="width: 9.375rem;"></el-progress>
            </div>
            <div class="flex align-center" style="margin-top: 0.5rem; font-size: 0.875rem;">
              <div style="width: 6.5rem;">
                研发能力
                <span style="margin-left: 0.5rem; color: #F08519;">{{ datas.abilityLevel }}</span>
              </div>
              <el-progress :text-inside="true" :stroke-width="22" :percentage="Number(datas.abilityPercent)" status="warning" style="width: 9.375rem;"></el-progress>
            </div>

            <div style="height: 4rem; line-height: 6.5rem;">
              <el-button class="consult" @click.stop="navigation('qrcode')">
                <div class="flex align-center justify-center">
                  <img src="@/assets/img/index/serve_message.png" style="width: 1.25rem;height: 1.25rem;object-fit: fill;" />
                  <span style="margin-left: 0.375rem;">立即预约</span>
                </div>
              </el-button>
            </div>
          </div>
        </div>

        <div class="flex flex-direction technician-box" style="margin-top: 1rem;">
          <div class="flex flex-direction technician-card">
            <div class="technician-card-title">履历背景</div>
            <div class="content" v-html="datas.content"></div>
          </div>
        </div>
      </el-col>

      <el-col :span="7">
        <div class="other-box">
          <div class="flex flex-direction customer-service-box">
            <div class="box-title">联系专属客服，免费帮您找专家</div>
            <div class="box-content">
              <el-form ref="form" :rules="rules" :model="form" hide-required-asterisk>
                <el-form-item prop="content">
                  <el-input type="textarea" :rows="4" v-model="form.content" placeholder="您的问题反馈将帮组我们为您提供更好的产品和服务"></el-input>
                </el-form-item>
                <el-form-item label="我们如何称呼您" prop="name" class="flex flex-direction"><el-input v-model="form.name" placeholder="请填写您的姓名"></el-input></el-form-item>
                <el-form-item label="您来自哪家企业/机构" prop="company" class="flex flex-direction">
                  <el-input v-model="form.company" placeholder="请填写您所在的企业或机构的名称"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" prop="phone" class="flex flex-direction"><el-input v-model="form.phone" placeholder="请输入您的电话"></el-input></el-form-item>
                <el-form-item>
                  <el-button type="warning" style="width: 100%; height: 2.375rem; border-radius: 0.125rem;" :loading="formLoading" @click="onSubmit">发送</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 打开对话框 -->
    <el-dialog title="" :visible.sync="centerDialogVisible" width="44.5rem" style="text-align: center;">
      <el-image :src="require('@/assets/img/qrcode/qrcode.png')" fit="fill" style="width: 44.5rem;height: 30rem;"></el-image>
    </el-dialog>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import { request } from '@/utils/request';
import { requestAddUserRequestInfo } from '@/api/index.js';

export default {
  name: 'NeedsDetail',
  components: { BreadCrumb },
  data() {
    return {
      jumpType: '',
      centerDialogVisible: false,

      // 搜索分类
      scienceTypeList: [],
      // 选项分类
      radioCheckList: [],

      // 获取所需数据列表
      datas: {
        abilityLevel: '',
        abilityPercent: '',
        address: '',
        content: '',
        experienceLevel: '',
        experiencePercent: '',
        id: 0,
        level: '',
        name: ''
      },

      // 表单是否在提交
      formLoading: false,

      // 表单内容
      form: {
        content: '',
        name: '',
        company: '',
        phone: ''
      },

      // 表单验证规则
      rules: {
        name: [{ required: true, message: '请输入您的姓名', trigger: 'blur' }, { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }],
        content: [{ required: true, message: '请输入您想反馈的问题', trigger: 'blur' }],
        company: [{ required: true, message: '请输入您所在的企业或机构', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入您的手机号', trigger: 'blur' }, { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的号码格式', trigger: 'blur' }]
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.request();
    },
    request() {
      request('/visitor/scienceExpert/getScienceExpertInfo?id=' + this.$route.query.id).then(res => {
        if (res.code === 200) {
          this.datas = res.data;
        }
      });
    },
    onSubmit() {
      this.formLoading = true;
      requestAddUserRequestInfo(this.form)
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
    },
    navigation(type, datas) {
      switch (type) {
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
  margin: -1rem 0;
  padding-top: 1.2rem;
  padding-bottom: 1rem;
  min-height: 60vh;
  background-color: #f8f8f8;

  .technician-box {
    min-height: 1px;
    background-color: #fff;

    .technician-card {
      padding: 1.5rem;
      color: #333;
      // cursor: pointer;

      ::v-deep .el-progress-bar__outer,
      ::v-deep .el-progress-bar__inner {
        border-radius: 0.125rem;
      }

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

      .technician-card-title {
        position: relative;
        margin-left: 0.75rem;
        font-weight: bold;

        &::before {
          content: ' ';
          position: absolute;
          left: -1rem;
          top: 0;
          width: 0.25rem;
          height: 1.35rem;
          background-color: #f08519;
        }
      }

      .content {
        padding: 1rem 0;
        width: 100%;
        min-height: 20vh;

        ::v-deep img {
          max-width: 100% !important;
          height: auto !important;
          object-fit: contain !important;
        }
      }
    }
  }

  .other-box {
    position: relative;
    min-height: 10vh;

    .customer-service-box {
      min-height: 1px;
      width: 100%;
      background-color: #fff;

      .box-title {
        padding: 1rem;
        font-size: 1.125rem;
        font-weight: bold;
        color: #333;
        border-bottom: 1px solid #e8e8e8;
      }

      .box-content {
        padding: 1rem;

        ::v-deep .el-form-item__label {
          width: 100% !important;
          text-align: left;
          font-size: 1.125rem;
          font-weight: bold;
          color: #333;
        }

        ::v-deep .el-form-item__content {
          margin-left: 0 !important;
        }

        ::v-deep .el-textarea__inner,
        ::v-deep .el-input__inner {
          font-size: 0.8125rem;
          color: black;
          border-radius: 0.125rem;
          border: 1px solid #f9f9f9;
          background-color: #f8f8f8;
        }

        ::v-deep .el-form-item.is-error .el-input__inner,
        ::v-deep .el-form-item.is-error .el-input__inner:focus,
        ::v-deep .el-form-item.is-error .el-textarea__inner,
        ::v-deep .el-form-item.is-error .el-textarea__inner:focus,
        ::v-deep .el-message-box__input input.invalid,
        ::v-deep .el-message-box__input input.invalid:focus {
          border-color: #f56c6c;
        }
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
