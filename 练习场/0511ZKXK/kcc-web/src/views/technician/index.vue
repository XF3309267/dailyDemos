<template>
  <div class="container padding-lr flex-direction" :style="{...$common.setMinWdith()}">
    <bread-crumb :jumpType="jumpType">技术专家</bread-crumb>

    <div class="flex flex-direction search_box">
      <div class="flex align-center search">
        <div class="self-end flex align-center search-input">
          <input placeholder="请输入机构名称搜索" ref="keyword" value="" @keypress.enter="search" />
          <img style="cursor: pointer;" src="@/assets/img/header/search.png" @click.stop="search" />
        </div>
      </div>

      <div v-show="false" class="flex flex-wrap" v-for="(item, index) in scienceTypeList" :key="'scienceTypeList' + index">
        <div class="search-label">{{ item.name }}:</div>

        <div class="flex-sub flex flex-wrap type-list" :class="[item.toggle ? 'type-list__open' : '']">
          <el-radio-group class="scienceType-select" v-for="(ite, ind) in item.children" :key="'scienceType' + ind" v-model="radioCheckList[index]" @change="radioChange">
            <el-radio-button :label="ite.id">{{ ite.name }}</el-radio-button>
          </el-radio-group>
        </div>
        <div v-if="item.children.length > 10" style="margin-top: 0.45rem; font-size: 0.875rem; color: #333; cursor: pointer;" @click.stop="toggleMore(item)">
          更多
          <i :class="[item.toggle ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
        </div>
      </div>
    </div>

    <el-row :gutter="20" style="margin-top: 1rem;">
      <el-col :span="17">
        <div class="flex flex-direction technician-box">
          <div class="technician-card" v-for="(item, key) in datas.mdata.list" :key="'technician-card' + key" @click.stop="navigation('detail', item)">
            <router-link :to="{ name: 'TechnicianDetail', query: { id: item.id, jump: 'technician' } }" class="flex flex-direction">
              <span class="text-bold" style="font-size: 1.125rem;">{{ item.name }}</span>
              <div class="flex align-center" style="margin-top: 1rem; font-size: 0.875rem;">
                <i class="el-icon-location-outline"></i>
                <span style="margin-left: 0.25rem; margin-right: 1rem;">{{ item.address }}</span>
                <span style="width: 1px; height: 0.875rem; background-color: #333;"></span>
                <span style="margin-left: 1rem;">{{ item.level }}</span>
              </div>
              <div style="margin-top: 0.5rem; font-size: 1rem; line-height: 1.8;">{{ item.synopsis }}</div>
              <div class="flex align-center" style="margin-top: 0.5rem; font-size: 0.875rem;">
                <div style="width: 6.5rem;">
                  产品经验
                  <span style="margin-left: 0.5rem; color: #F08519;">{{ item.experienceLevel }}</span>
                </div>
                <el-progress :text-inside="true" :stroke-width="22" :percentage="Number(item.experiencePercent)" status="warning" style="width: 9.375rem;"></el-progress>
              </div>
              <div class="flex align-center" style="margin-top: 0.5rem; font-size: 0.875rem;">
                <div style="width: 6.5rem;">
                  研发能力
                  <span style="margin-left: 0.5rem; color: #F08519;">{{ item.abilityLevel }}</span>
                </div>
                <el-progress :text-inside="true" :stroke-width="22" :percentage="Number(item.abilityPercent)" status="warning" style="width: 9.375rem;"></el-progress>
              </div>
            </router-link>
          </div>
        </div>

        <el-pagination
          class="pagination"
          background
          layout="prev, pager, next"
          :page-size="datas.mdata.limit"
          :page-count="datas.mdata.total"
          prev-text="上一页"
          next-text="下一页"
          :hide-on-single-page="true"
          :current-page="datas.mdata.page"
          @current-change="pageChange"
        ></el-pagination>
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
// import { request } from '@/utils/request';
import BreadCrumb from '@/components/BreadCrumb.vue';
import { requestScienceResultTypeList, requestScienceExpertList, requestAddUserRequestInfo } from '@/api/index.js';

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
        mdata: {
          businessId: '', // 行业
          maturityId: '', // 成熟度
          sourceId: '', // 技术来源
          typeId: '', // 技术类型
          total: 0,
          page: 1,
          limit: 12,
          name: '',
          list: []
        }
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
      // 获取搜索选项列表
      requestScienceResultTypeList().then(res => {
        this.scienceTypeList = res.data;
        this.scienceTypeList.forEach((value, key) => {
          // 需要改变的数据需要在赋值的时候就建立set监听 否则后续使用set修改的时候无法刷新视图
          this.$set(value, 'toggle', false);
          value.children.forEach((v, k) => {
            if (k === 0) {
              this.radioCheckList[key] = v.id;
            }
          });
        });
      });

      this.request();
    },
    request() {
      // 排除掉某个对象
      let { list, ...obj } = this.datas.mdata;

      requestScienceExpertList(obj).then(res => {
        this.datas.mdata.total = res.data.total;
        this.datas.mdata.list = res.data.data;
      });
    },
    toggleMore(item) {
      this.$set(item, 'toggle', !item.toggle);
      // 强制刷新视图
      // this.$forceUpdate();
    },
    radioChange() {
      this.radioCheckList.forEach((value, key) => {
        switch (key) {
          case 0:
            this.datas.mdata.typeId = value;
            break;
          case 1:
            this.datas.mdata.businessId = value;
            break;
          case 2:
            this.datas.mdata.maturityId = value;
            break;
          case 3:
            this.datas.mdata.sourceId = value;
            break;
          default:
            break;
        }
      });
      this.request();
    },
    pageChange(nowpage) {
      this.datas.mdata.page = nowpage;
      this.request();
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    search() {
      this.datas.mdata.name = this.$refs.keyword.value;
      this.request();
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
    navigation(type, item) {
      switch (type) {
        case 'detail':
          this.$router.push({ name: 'TechnicianDetail', query: { id: item.id, jump: 'technician' } });
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
  text-decoration: none;
}
a:active {
  text-decoration: none;
}

.container {
  margin: -1rem 0;
  padding-top: 1.2rem;
  padding-bottom: 1rem;
  min-height: 60vh;
  background-color: #f8f8f8;

  .search_box {
    margin-top: 1.5rem;
    width: 100%;
    height: auto;
    background-color: #fff;

    & > div {
      margin-top: 1rem;
      padding: 0 1.5rem 1rem;
      border-bottom: 1px solid #ebebeb;
    }

    & > div:last-child {
      border-bottom: 0;
    }

    .search {
      .search-input {
        display: inline-block;
        position: relative;

        input {
          padding: 0 2.375rem 0 0.625rem;
          width: 22.75rem;
          height: 1.875rem;
          background-color: #fff;
          border: 1px solid #f08519;
        }

        img {
          position: absolute;
          top: 50%;
          right: 0.625rem;
          transform: translateY(-50%);
          width: 1.375rem;
          height: 1.375rem;
        }
      }
    }

    .search-label {
      margin-top: 0.55rem;
      width: 3.75rem;
      font-size: 0.875rem;
      color: #999;
    }

    .type-list {
      height: 2.38rem;
      overflow: hidden;

      .scienceType-select {
        margin-left: 1.25rem;

        ::v-deep .el-radio-button__inner {
          color: #333;
          border: 0;
          background-color: #fff;
        }

        ::v-deep .el-radio-button__inner:hover,
        ::v-deep .el-radio-button__orig-radio:checked + .el-radio-button__inner {
          color: #f08519;
        }
      }
    }

    .type-list__open {
      height: auto;
      overflow: auto;
    }
  }

  .technician-box {
    min-height: 1px;
    background-color: #fff;

    .technician-card {
      padding: 1.5rem;
      color: #333;
      border-bottom: 1px solid #ebebeb;
      cursor: pointer;

      ::v-deep .el-progress-bar__outer,
      ::v-deep .el-progress-bar__inner {
        border-radius: 0.125rem;
      }
    }

    .technician-card:last-child {
      border-bottom: 0;
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

  ::v-deep .el-pagination {
    display: inline-block;
    width: 100%;
    padding: 3rem 0 5rem;
    text-align: center;

    .btn-next,
    .btn-prev,
    .el-pager li {
      background-color: #fff !important;
      color: #666 !important;
      border: 1px solid #ebebeb;
    }

    .btn-next,
    .btn-prev {
      width: 4.375rem;
    }

    .el-pager li:not(.disabled).active {
      color: #fff !important;
      background-color: #f08519 !important;
    }

    .btn-next.disabled,
    .btn-next:disabled,
    .btn-prev.disabled,
    .btn-prev:disabled,
    .el-pager li.disabled {
      background-color: #ededed !important;
    }

    .el-pager li.active + li {
      border-left: auto;
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
