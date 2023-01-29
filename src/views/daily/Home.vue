<template>
  <div class="home">
    <van-tabs
      v-model="active"
      sticky
      color="#0876FF"
      title-inactive-color="#666666"
      title-active-color="#0876FF"
    >
      <van-tab title="个人">
        <Personal></Personal>
      </van-tab>
      <van-tab title="团队">团队</van-tab>
      <van-tab title="我的关注">我的关注</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Personal from "./modules/Personal";
export default {
  name: "Home",
  components: { Personal },
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style lang="stylus" scoped>
.home {
  /deep/ {
    .van-tabs__wrap {
      border-bottom: 1px solid #E2E2E2
    }
  }
}
</style>
