/* eslint-disable */
<template>
  <div class="flex justify-between header">
    <div class="flex-sub flex align-center header_left">
      <span style="font-size: 0.875rem; color: #999;">你所在的位置 ：</span>
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top: 0.125rem;">
        <!-- 首页 -->
        <el-breadcrumb-item :to="{ path: '/' }" style="color: #999;">首页</el-breadcrumb-item>
        <!-- END -->

        <!-- 资讯详情 -->
        <el-breadcrumb-item v-if="!(jumpType == 'index') && jumpType == 'information'" :to="{ path: '/information' }" style="color: #999;">创投圈</el-breadcrumb-item>
        <el-breadcrumb-item v-if="!(jumpType == 'index') && jumpType == 'government'" :to="{ path: '/services/government' }" style="color: #999;">政府服务</el-breadcrumb-item>
        <el-breadcrumb-item v-if="!(jumpType == 'index') && jumpType == 'more'" :to="{ path: '/information/more' }" style="color: #999;">更多资讯</el-breadcrumb-item>
        <!-- END -->

        <!-- 活动详情 -->
        <el-breadcrumb-item v-if="!(jumpType == 'index') && (jumpType == 'activity' || jumpType == 'activity-more')" :to="{ path: '/activity' }" style="color: #999;">
          最新活动
        </el-breadcrumb-item>
        <el-breadcrumb-item
          v-if="
            !(jumpType == 'index') &&
              (jumpType == 'unicornProject' || jumpType == 'unicornProject-more' || jumpType == 'unicornProject-roadshow' || jumpType == 'unicornProject-roadshow-more')
          "
          :to="{ path: '/unicorn/project' }"
          style="color: #999;"
        >
          预见独角兽计划
        </el-breadcrumb-item>
        <el-breadcrumb-item v-if="!(jumpType == 'index') && jumpType == 'unicornProject-more'" :to="{ path: '/activity/more?jump=unicornProject' }" style="color: #999;">
          更多活动
        </el-breadcrumb-item>
        <el-breadcrumb-item v-if="!(jumpType == 'index') && jumpType == 'activity-more'" :to="{ path: '/activity/more?jump=activity' }" style="color: #999;">
          更多活动
        </el-breadcrumb-item>
        <el-breadcrumb-item v-if="!(jumpType == 'index') && jumpType == 'unicornProject-roadshow-more'" :to="{ path: '/activity/more?jump=unicornProject' }" style="color: #999;">
          更多路演
        </el-breadcrumb-item>
        <!-- END -->

        <!-- 科技成果/科技成果详情 -->
        <el-breadcrumb-item
          v-if="!(jumpType == 'index') && (jumpType == 'services' || jumpType == 'achievements' || jumpType == 'technician' || jumpType == 'needs2')"
          :to="{ path: '/services' }"
          style="color: #999;"
        >
          科技服务
        </el-breadcrumb-item>
        <el-breadcrumb-item v-if="!(jumpType == 'index') && jumpType == 'achievements'" :to="{ path: '/services/achievements?jump=services' }" style="color: #999;">
          科技成果
        </el-breadcrumb-item>
        <!-- END -->

        <!-- 技术专家详情 -->
        <el-breadcrumb-item v-if="!(jumpType == 'index') && jumpType == 'technician'" :to="{ path: '/services/technician?jump=services' }" style="color: #999;">
          技术专家
        </el-breadcrumb-item>
        <!-- END -->

        <!-- 需求详情 -->
        <el-breadcrumb-item
          v-if="!(jumpType == 'index') && (jumpType == 'needs' || jumpType == 'needs2')"
          :to="{ path: jumpType == 'needs2' ? '/needs?jump=services' : '/needs' }"
          style="color: #999;"
        >
          技术需求
        </el-breadcrumb-item>
        <!-- END -->

        <!-- 机构详情 -->
        <el-breadcrumb-item v-if="!(jumpType == 'index') && jumpType == 'mechanism'" :to="{ path: '/mechanism' }" style="color: #999;">投资机构</el-breadcrumb-item>
        <!-- END -->

        <!-- 企业详情 -->
        <el-breadcrumb-item v-if="!(jumpType == 'index') && jumpType == 'enterprise'" :to="{ path: '/enterprise' }" style="color: #999;">融资企业</el-breadcrumb-item>
        <!-- END -->

        <!-- 当前页 -->
        <el-breadcrumb-item style="color: #333;"><slot></slot></el-breadcrumb-item>
        <!-- END -->
      </el-breadcrumb>
    </div>

    <!-- <div class="flex-sub text-right header_right">
      <div class="self-end flex align-center search-input">
        <input placeholder="输入关键字" ref="keyword" value="" />
        <img style="cursor: pointer;" src="@/assets/img/header/search.png" @click.stop="search" />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  components: {},
  props: {
    jumpType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
::v-deep .el-breadcrumb__inner a,
::v-deep .el-breadcrumb__inner.is-link {
  color: #999;
}
::v-deep .el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #333;
}
</style>
