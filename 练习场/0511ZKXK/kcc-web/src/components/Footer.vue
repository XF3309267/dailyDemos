<template>
  <div class="container flex-direction">
    <el-row style="background-color: #303539;">
      <el-col :md="{span: 20, offset: 2}" :lg="{span: 20, offset: 2}" :xl="{span: 18, offset: 3}" class="footer-info">
        <div class="flex align-center" style="padding-top: 1rem; padding-bottom: 1rem;">
          <div class="flex flex-direction justify-center margin-right" style="height: 100%;">
            <img src="../assets/img/header/TW_logo_white.png" style="width: 9.75rem;height: 3.3125rem;" />
            <div style="margin-top: 0.5vh;">中科心客（北京）科技有限公司</div>
          </div>

          <div class="flex flex-direction justify-center text-left margin-right" style="height: 100%;margin-top: 2rem;">
            <div style="font-size: 0.875rem;">联系电话</div>
            <div style="margin-top: 0.625rem;font-size: 1.25rem;">
              {{ phone }}
              <span style="font-size: 0.625rem;">(周一到周五 9:00-18:00)</span>
            </div>
          </div>

          <div class="flex flex-direction justify-center text-left" style="height: 100%;margin-top: 2rem;">
            <div style="font-size: 0.875rem;">邮箱</div>
            <div style="margin-top: 0.625rem;font-size: 1.25rem;">
              <a :href="'mailto:' + email">{{ email }}</a>
            </div>
          </div>
        </div>

        <div class="dot"></div>

        <div class="flex" style="padding-top: 1.25rem;padding-bottom: 1.25rem;">
          <div class="flex align-start justify-between margin-right" style="width: 38rem;">
            <div class="flex flex-direction text-left">
              <span>关于中科心客</span>
              <div class="flex flex-direction about-list" style="margin-top: 0.625rem;font-size: 0.875rem;">
                <router-link :to="{ path: '/footer/index?tabs=1&time=' + new Date().getTime() }">企业介绍</router-link>
                <router-link :to="{ path: '/footer/index?tabs=2&time=' + new Date().getTime() }">核心团队</router-link>
                <router-link :to="{ path: '/footer/index?tabs=3&time=' + new Date().getTime() }">企业文化</router-link>
                <router-link :to="{ path: '/footer/index?tabs=4&time=' + new Date().getTime() }">企业荣誉</router-link>
                <router-link :to="{ path: '/footer/index?tabs=5&time=' + new Date().getTime() }">品牌大事记</router-link>
              </div>
            </div>

            <div class="flex flex-direction text-left">
              <span>商务合作</span>
              <div class="flex flex-direction about-list" style="margin-top: 0.625rem;font-size: 0.875rem;">
                <a href="javascript:void(0);">广告合作</a>
                <a href="javascript:void(0);">意见与建议</a>
                <!-- <a href="javascript:void(0);">友情链接</a> -->
              </div>
            </div>

            <div class="flex flex-direction text-left">
              <span>寻求报道</span>
              <div class="flex flex-direction about-list" style="margin-top: 0.625rem;font-size: 0.875rem;">
                <a href="javascript:void(0);" @click="navigation2('qrcode')">创业求报道</a>
                <a href="javascript:void(0);" @click="navigation2('qrcode')">项目找融资</a>
              </div>
            </div>

            <div class="flex flex-direction text-left">
              <span>加入我们</span>
              <div class="flex flex-direction about-list" style="margin-top: 0.625rem;font-size: 0.875rem;">
                <router-link :to="{ path: '/footer/index?tabs=7&time=' + new Date().getTime() }">诚聘英才</router-link>
              </div>
            </div>

            <div class="flex flex-direction text-left"><router-link :to="{ path: '/footer/index?tabs=8&time=' + new Date().getTime() }">联系我们</router-link></div>
          </div>

          <div class="flex-sub flex align-start">
            <div class="flex flex-direction text-left brand margin-right">
              <span>旗下品牌</span>
              <!-- <div class="brand_img_box" @click="navigation(6)"> -->
              <router-link :to="{ path: '/footer/index?tabs=6&time=' + new Date().getTime() }">
                <div class="brand_img_box">
                  <img src="../assets/img/footer/brand-1.png" style="cursor: pointer;" />
                  <img src="../assets/img/footer/brand-2.png" style="cursor: pointer;" />
                  <img src="../assets/img/footer/brand-3.png" style="cursor: pointer;" />
                </div>
              </router-link>
            </div>

            <div class="flex align-center text-left">
              <div class="flex flex-direction align-center">
                <img src="../assets/img/footer/media-1.png" style="width: 7rem;height: 7rem;" />
                <span style="margin-top: 0.25rem;font-size: 0.75rem;">南昌科技广场</span>
              </div>
              <div class="flex flex-direction align-center" style="margin-left: 1.2rem;">
                <img src="../assets/img/footer/media-2.png" style="width: 7rem;height: 7rem;" />
                <span style="margin-top: 0.25rem;font-size: 0.75rem;">预见独角兽</span>
              </div>
              <div class="flex flex-direction align-center" style="margin-left: 1.2rem;">
                <img src="../assets/img/footer/media-3.png" style="width: 7rem;height: 7rem;" />
                <span style="margin-top: 0.25rem;font-size: 0.75rem;">预见独角兽</span>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row style="background-color: #212121;">
      <el-col :span="24">
        <div class="copyright">
          <div class="flex justify-center align-center" style="height: 100%; color: #fff;">
            ©2016~2021 中科心客 |
            <!-- <a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/recordQuery?recordcode=赣ICP备12000995号-2" style="margin-left: 0.25rem;">赣ICP备12000995号-2</a> -->
            <a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/recordQuery" style="margin-left: 0.25rem;">赣ICP备17010309号-1</a>
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
import { requestRelationWay } from '@/api/index.js';

export default {
  name: '',
  data() {
    return {
      centerDialogVisible: false,
      email: '',
      phone: ''
    };
  },
  mounted() {
    this.request();
  },
  methods: {
    request() {
      requestRelationWay().then(res => {
        this.email = res.data.email.value;
        this.phone = res.data.phone.value;
      });
    },
    navigation(currentTab) {
      this.$router.push('/footer/index?tabs=' + currentTab + '&time=' + new Date().getTime());
    },
    navigation2(type) {
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

a {
  text-decoration: none;
  color: #fff;
}
a:hover,
a:visited,
a:link,
a:active {
  color: #fff;
}

a:hover {
  color: #f08519;
}

.container {
  width: 100%;

  .dot {
    border: 1px dotted #4e4e4e;
  }

  .about-list {
    a {
      margin-top: 0.375rem;
    }
  }

  .margin-right {
    margin-right: 3%;
  }

  .footer-info {
    padding-left: 1rem;
    color: #fff;
    background-color: #303539;
  }

  .brand {
    width: auto;

    img {
      margin-top: 0.9375rem;
      margin-right: 0.5rem;
      width: 5.625rem;
      height: 2.375rem;
    }

    .brand_img_box {
      display: grid;
      justify-content: space-between;
      grid-template-columns: repeat(2, 48%);
      grid-gap: 0.5rem;
    }
  }

  .copyright {
    height: 3.1875rem;
    background-color: #212121;
    font-size: 0.875rem;
  }

  @media screen and (max-width: 768px) {
    .footer-info {
      width: calc(100% + 1rem);
    }

    .footer-info,
    .copyright {
      margin-left: -1rem;
      padding-left: 1rem;
    }
  }
}
</style>
