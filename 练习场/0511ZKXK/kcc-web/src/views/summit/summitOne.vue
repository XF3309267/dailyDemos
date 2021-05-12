/* eslint-disable */
<template>
  <div class="container flex flex-direction" :style="{...$common.setMinWdith()}">
    <el-image :src="require('@/assets/img/summit/summit1st1.png')" fit="cover" style="width: 100%; height: 100%; z-index: 0;"></el-image>
    <el-image :src="require('@/assets/img/summit/summit1st2.png')" fit="cover" style="width: 100%; height: 100%; z-index: 0;"></el-image>
    <el-image :src="require('@/assets/img/summit/summit1st3.png')" fit="cover" style="width: 100%; height: 100%; z-index: 0;"></el-image>
    <el-image :src="require('@/assets/img/summit/summit1st4.png')" fit="cover" style="width: 100%; height: 100%; z-index: 0;"></el-image>
    <el-image :src="require('@/assets/img/summit/summit1st5.png')" fit="cover" style="width: 100%; height: 100%; z-index: 0;"></el-image>
  </div>
</template>

<script>
export default {
  name: 'Summit1st',
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
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
}

@media screen and (max-width: 768px) {
  .container {
    margin-left: -1rem;
  }
}
</style>
