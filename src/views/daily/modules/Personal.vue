<template>
  <div class="container">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-empty v-if="!list.length && finished" description="描述文字" />
      <template v-else>
        <div class="search-info">
          <div class="user-info">
            <div class="avatar" alt="">王</div>
            <div class="user">
              <div class="name">王多鱼</div>
              <div class="position">总裁办 | 高级项目经理</div>
            </div>
          </div>
          <div class="time" @click="show = true">
            <span>{{ dateText }}</span>
            <van-icon name="play" style="transform: rotate(90deg)" />
          </div>
        </div>
        <div class="list">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <div class="item" v-for="item in list" :key="item">
              <div class="date-time">
                <div class="date">2022-12-30</div>
                <div class="week">星期五</div>
              </div>
              <div v-if="item.status === 0" class="status text-gray">已保存</div>
              <div v-if="item.status === 1" class="status text-blue">已提交</div>
              <div v-else class="status text-orange">有点评</div>
            </div>
            <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
          </van-list>
        </div>
      </template>
    </van-pull-refresh>
    <div class="btn-wrap">
      <van-button type="info" icon="plus" block>新建日报</van-button>
    </div>
    <van-popup v-model="show" round position="bottom" :style="{ height: '35%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        title="选择年月"
        ref="picker"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @confirm="checkDate"
        @cancel="cancel"
      />
    </van-popup>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      show: false,
      minDate: new Date(2022, 0, 1),
      maxDate: new Date(2025, 6, 1),
      currentDate: moment()._d,
      dateText: '',
      indexes: []
    };
  },
  mounted() {
    this.dateText = moment().format('YYYY年MM月')
  },
  methods: {
    moment,
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        if (this.refreshing) {
          this.list = []
          this.refreshing = false
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    },
    // 下拉刷新
    onRefresh() {
      // 清空列表数据
      this.finished = false
      this.list = []
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    },
    // 时间处理
    formatter(type, val) {
      if (type === 'year') {
        return `${val}年`
      } else if (type === 'month') {
        return `${val}月`
      }
      return val
    },
    // 确定选择时间
    checkDate(value) {
      this.currentDate = value
      this.dateText = moment(value).format('YYYY年MM月')
      this.indexes = this.$refs.picker.getPicker().getIndexes()
      this.show = false
    },
    // 取消时间选择
    cancel() {
      // 设置时间选中值对应的索引
      this.$refs.picker.getPicker().setIndexes(this.indexes)
      this.show = false
    }
  },
}
</script>
<style lang="stylus" scoped>
.container
  background: #F6F6F6
.search-info
  padding: 24px 30px
  display flex
  justify-content: space-between
  align-items: center
  background: #fff
  margin-bottom: 30px
  .user-info
    display flex
    align-items: center
    .avatar
      width: 64px
      height: @width
      border-radius: 50%
      background: #FFB32F
      color: #fff
      line-height: @width
      text-align: center
      font-size: 32px
      margin-right: 10px
    .name
      font-size: 28px
      color: #666666
    .position
      font-size: 24px
      color: #666666
  .time
    padding: 14px 20px 14px 30px
    border: 1px solid #E2E2E2
    font-size: 24px
    color: #666666
    border-radius: 30px
    span
      margin-right: 20px
.list
  padding: 0 30px 132px
  .item
    padding: 24px 30px
    margin-bottom: 20px
    border-radius: 12px
    background: #fff
    display: flex
    align-items: center
    justify-content: space-between
    .date
      color: #333333
      font-size: 36px
      font-weight: bold
      line-height 48px
      margin-bottom: 8px
    .week
      font-size: 24px
      color: #999999
      line-height: 32px
    .status
      font-size: 26px
      line-height: 38px
.btn-wrap
  position fixed
  width: 100%
  padding: 20px 30px
  box-sizing: border-box
  background: #fff
  bottom env(safe-area-inset-bottom)
  .van-button
    border-radius: 12px
</style>