<template>
  <div class="container padding-lr flex-direction information" :style="{...$common.setMinWdith()}">
    <bread-crumb :jumpType="jumpType">资讯详情</bread-crumb>

    <div class="flex flex-direction article">
      <el-row :gutter="20" style="margin-top: 1rem;">
        <el-col :span="16">
          <div class="header">{{ data.name }}</div>

          <div class="flex align-center info">
            <el-image :src="require('@/assets/img/headIcon.png')" fit="fill" style="width: 1.875rem; height: 1.875rem; border-radius: 50%; background-color: #EDEDED;"></el-image>
            <span style="margin-left: 0.5rem; color: black;">{{ data.publisher }}</span>
            <span style="margin-left: 1rem;">{{ data.publishTime }}</span>
            <i class="el-icon-view" style="margin-left: 2rem;"></i>
            <span style="margin-top: -0.125rem; margin-left: 0.25rem;">{{ data.browse }}</span>
          </div>

          <div class="content" v-html="data.content"></div>
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb.vue';
import { request } from '@/utils/request';

export default {
  name: 'InformationDetail',
  components: { BreadCrumb },
  data() {
    return {
      jumpType: '',
      data: {
        browse: 0,
        collection: 0,
        content: '',
        id: 0,
        name: '',
        picture: '',
        publishTime: '',
        publisher: '',
        subtitle: '',
        typeName: ''
      }
    };
  },
  mounted() {
    this.request();
  },
  methods: {
    request() {
      request('/visitor/messageInfo/getMessageInfo?id=' + this.$route.query.id).then(res => {
        if (res.code === 200) {
          this.data = res.data;
        }
      });
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
.information {
  padding-bottom: 1rem;

  .article {
    margin-top: 2rem;
    padding: 1rem;

    .header {
      font-size: 1.75rem;
      font-weight: bold;
      color: #333;
    }

    .info {
      margin-top: 1.5rem;
      height: auto;
      color: #7b7b7b;
      font-size: 0.875rem;
    }

    .content {
      margin-top: 1rem;
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
</style>
