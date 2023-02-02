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
      <van-cell is-link value="【XM00001】吉大一入院项目">
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
        <div class="input-select">
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
        <div class="input-select">
          小时
          <van-icon name="arrow-down" style="margin-left: 12px" />
        </div>
      </div>
    </div>
    <div class="submit">
      <van-button type="info" block>确定</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: '',
      value: '',
      checked: false
    }
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
</style>