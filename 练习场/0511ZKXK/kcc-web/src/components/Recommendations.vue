<template>
  <div class="container">
    <div class="flex flex-direction" style="margin-top: 0.5rem;">
      <div class="other-box">
        <span class="box_title">相关推荐</span>
        <div class="flex flex-direction flex-wrap message-box">
          <!-- <div class="flex flex-direction" v-for="(item, key) in value" :key="'message' + key" @click.stop="navigation('detail', item)"> -->
          <div class="flex flex-direction" v-for="(item, key) in value" :key="'message' + key">
            <router-link :to="{ name: 'AchievementsDetail', query: { id: item.id, jump: 'achievements' } }">
              <span class="box-span">{{ item.name }}</span>
              <span class="box-span">{{ item.businessName }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommendations',
  props: {
    value: {
      type: [Array, Object]
    }
  },
  watch: {
    value(val) {
      console.log(val);
    }
  },
  data() {
    return {};
  },
  created() {
    console.log('create');
  },
  methods: {
    navigation(type, item) {
      switch (type) {
        case 'qrcode':
          this.centerDialogVisible = true;
          break;
        case 'detail':
          this.$router.push({ name: 'AchievementsDetail', query: { id: item.id, jump: 'achievements' } });
          break;
        default:
          break;
      }
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
/* 去除默认样式 */
a {
  display: grid;
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
  color: #f08519;
  text-decoration: none;
}
a:active {
  text-decoration: none;
}

.other-box {
  position: relative;
  margin-bottom: 2rem;
  min-height: 10vh;

  .box_title {
    margin-left: 0.75rem;
    font-weight: bold;

    &::before {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 0.25rem;
      height: 1.35rem;
      background-color: #f08519;
    }
  }

  .message-box {
    margin-top: 1rem;
    padding: 0 0 1rem 1rem;
    min-height: 1px;
    width: 100%;
    border: 1px solid #ebebeb;

    & > div {
      margin-top: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #e8e8e8;
      cursor: pointer;

      .box-span {
        margin-left: 0.5rem;
        font-size: 0.875rem;
        font-weight: bold;
        color: #333;
      }

      .box-span:last-child {
        font-size: 0.75rem;
        color: #666;
        font-weight: 400;
      }
    }

    & > div:last-child {
      border-bottom: 0;
      padding-bottom: 0;
    }
  }
}
</style>
