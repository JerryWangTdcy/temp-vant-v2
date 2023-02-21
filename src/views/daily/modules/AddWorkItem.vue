<template>
  <div class="container">
    <div class="subtitle">今日工作事项</div>
    <div class="wrap">
      <van-cell is-link value="项目">
        <template #title>
          <span class="custom-title">工作事项类型 </span>
          <span class="require">*</span>
        </template>
      </van-cell>
      <van-cell is-link value="【XM00001】吉大一入院项目" @click="showPro = true">
        <template #title>
          <span class="custom-title">选择项目 </span>
          <span class="require">*</span>
        </template>
      </van-cell>
      <div class="describe">
        <div class="title">
          <span class="custom-title">工作事项描述 </span>
          <span class="require">*</span>
        </div>
        <div class="content">
          <van-field
            v-model="message"
            rows="3"
            autosize
            :border="false"
            :label-width="0"
            type="textarea"
            maxlength="200"
            placeholder="请详细描述今日单项工作内容及完成情况"
            show-word-limit
          />
        </div>
      </div>
    </div>
    <div class="subtitle">实际进展</div>
    <div class="wrap box">
      <div class="cell">
        <div class="title">
          <span class="custom-title">完成进度  </span>
          <span class="require">*</span>
        </div>
        <div class="input-number">
          <van-field v-model="value" type="number" placeholder="请输入" />
        </div>
        %
      </div>
      <div class="cell">
        <div class="title">
          <span class="custom-title">工作用时  </span>
          <span class="require">*</span>
        </div>
        <div class="input-number">
          <van-field v-model="value" type="number" placeholder="请输入" />
        </div>
        <div class="input-select" @click="showDateModal = true">
          小时
          <van-icon name="arrow-down" style="margin-left: 12px" />
        </div>
      </div>
      <div class="cell">
        <van-checkbox v-model="checked" icon-size="16px" style="font-size: 14px; color: #666666;">列入明日工作计划</van-checkbox>
      </div>
    </div>
    <div class="subtitle">计划进展</div>
    <div class="wrap box">
      <div class="cell">
        <div class="title">
          <span class="custom-title">计划完成  </span>
          <span class="require">*</span>
        </div>
        <div class="input-number">
          <van-field v-model="value" type="number" placeholder="请输入" />
        </div>
        %
      </div>
      <div class="cell">
        <div class="title">
          <span class="custom-title">计划用时  </span>
          <span class="require">*</span>
        </div>
        <div class="input-number">
          <van-field v-model="value" type="number" placeholder="请输入" />
        </div>
        <div class="input-select" @click="showDateModal = true">
          小时
          <van-icon name="arrow-down" style="margin-left: 12px" />
        </div>
      </div>
    </div>
    <div class="submit">
      <van-button type="info" block>确定</van-button>
    </div>
    <!-- 选择项目 -->
    <van-popup v-model="showPro" round position="bottom" :style="{ maxHeight: '65%' }">
      <div class="pop-main">
        <div class="pop-title">
          <van-icon name="cross" color="#fff" :size="20" />
          <div class="title">请选择具体项目</div>
          <van-icon name="cross" @click="showPro = false" :size="20" />
        </div>
        <div class="plan-list">
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
            </div>
          </div>
        </div>
        <div class="btn-group">
          <div>
            <van-button type="info" plain block>全选</van-button>
          </div>
          <div>
            <van-button type="info" block>确定</van-button>
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 事项类型 -->
    <van-popup v-model="showProType" round position="bottom" :style="{ maxHeight: '50%' }">
      <van-picker
        title="事项类型"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      />
    </van-popup>
    <!-- 时间点 -->
    <van-popup v-model="showDateModal" round position="bottom" :style="{ maxHeight: '50%' }">
      <van-picker
        title="请选择"
        show-toolbar
        :columns="columnsDate"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      />
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: '',
      value: '',
      showPro: false,
      checked: false,
      showProType: false,
      showDateModal: false,
      columns: ['日报', '项目'],
      columnsDate: ['小时', '分']
    }
  },
  methods: {
    onConfirm(value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`);
    },
    onChange(picker, value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      this.$toast('取消');
    },
  }
}
</script>
<style lang="stylus" scoped>
.subtitle
  padding 20px 30px
  line-height: 44px
  color: #333
  font-size: 28px
.wrap
  &.box
    padding 30px 32px 1px
  background #fff
  .van-cell__title
    flex 1
  .van-cell__value
    flex 0 0 auto
  .require
    color #E02020
  .custom-title
    font-size: 28px
    color: #333333
  .describe
    padding 0 30px 40px
    .title
      padding: 30px 0
    .content
      border: 1px solid #E5E5E5
      border-radius: 12px
      overflow hidden
  .cell
    display: flex
    align-items: center
    margin-bottom: 40px
    .input-number,.input-select
      width 160px
      height 68px
      border-radius 12px
      overflow hidden
      border: 1PX solid #E5E5E5
      margin 0 20px 0 40px
      display: flex
      align-items: center
      .van-cell
        padding 0 10px
    .input-select
      color: #999999
      font-size: 28px
      display: flex
      align-items: center
      justify-content: center
      margin-left 0
.submit
  background: #fff
  padding: 20px 30px
  margin-top 80px
  height: calc(132px + env(safe-area-inset-bottom))
  box-sizing border-box
  .van-button
    border-radius: 12px
.pop-main
  padding 42px 30px
  background: #fff
  position relative
  .pop-title
    display: flex
    align-items: center
    justify-content: space-between
    font-size 28px
    color #666666
    line-height: 40px
    margin-bottom: 30px
    .title
      font-size 32px
      color #333
      flex 1
      font-weight bold
      text-align center
  .plan-list
    max-height: 800px
    padding-bottom: 100px
    overflow-y scroll
    .item
      background: #fff
      display: flex
      align-items: center
      padding 30px
      height: 40px
      border-radius 12px
      margin-bottom 16px
      border-bottom 1PX solid #e5e5e5
      .plan-content
        color #333333
        font-size 28px
        line-height 40px
        margin-left 20px
        flex 1
  .btn-group
    position absolute
    width 100%
    bottom 0
    left 0
    display: flex
    padding 20px 30px
    background: #fff
    gap 20px
    box-sizing: border-box
    div
      flex 1
      .van-button
        border-radius: 12px
</style>