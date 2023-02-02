<template>
  <div class="container">
    <div class="report-to">
      <div class="report-cell" @click="showDate = true">
        <van-icon name="calendar-o" size="16" />
        <span class="label">汇报日期：</span>
        {{ dateText }}
      </div>
      <div class="report-cell target">
        <van-icon name="contact" size="16" />
        <span class="label">汇报对象：</span>
        <!-- <div class="tags"> -->
        <span class="tag">
          <van-tag round type="primary" closeable @close="close" size="large" color="#F6F6F6" text-color="#333333">王总裁</van-tag>
        </span>
        <span class="tag">
          <van-tag round type="primary" closeable @close="close" size="large" color="#F6F6F6" text-color="#333333">王总裁</van-tag>
        </span>
        <span class="tag">
          <van-tag round type="primary" closeable @close="close" size="large" color="#F6F6F6" text-color="#333333">王总裁</van-tag>
        </span>
        <span class="tag">
          <van-tag round type="primary" closeable @close="close" size="large" color="#F6F6F6" text-color="#333333">王总裁</van-tag>
        </span>
        <span class="tag">
          <span class="add-tag"><van-icon name="plus" /></span>
        </span>
        <!-- </div> -->
      </div>
    </div>
    <!-- 日报内容 -->
    <div class="content">
      <!-- 今日总结 -->
      <div class="wrap">
        <div class="subtitle">今日总结</div>
        <div class="report-list">
          <div class="item daily">
            <div class="item-title">
              <div>
                <span class="tag">日常</span>
                <span class="finished">已完成：90%</span>
                <span>用时：0.5小时</span>
              </div>
              <div class="operate">
                <van-icon name="edit" style="margin-right: 20px" :size="16" />
                <van-icon name="delete-o" :size="16" />
              </div>
            </div>
            <div class="item-content">
              今日的工作计划已完成，针对项目还做了一个整理，不断提升自己
            </div>
          </div>
          <div class="item project">
            <div class="item-title">
              <div>
                <span class="tag">项目</span>
                <span>已完成：90%</span>
                <span>用时：0.5小时</span>
              </div>
              <div class="operate">
                <van-icon name="edit" style="margin-right: 20px" :size="16" />
                <van-icon name="delete-o" :size="16" />
              </div>
            </div>
            <div class="item-content">
              <div class="project-title">【XM00001】吉大一入院项目</div>
              今日的工作计划已完成，针对项目还做了一个整理，不断提升自己</div>
          </div>
        </div>
        <div class="btn-group add-plan">
          <van-button type="default" @click="showPlan = true">导入上次工作计划</van-button>
          <van-button type="default" icon="plus" @click="addWorkItem">新增工作项</van-button>
        </div>
      </div>
      <!-- 明日计划 -->
      <div class="wrap">
        <div class="subtitle">明日计划</div>
        <div class="report-list">
          <div class="item daily">
            <div class="item-title">
              <div>
                <span class="tag">日常</span>
                <span class="finished">已完成：90%</span>
                <span>用时：0.5小时</span>
              </div>
              <div class="operate">
                <van-icon name="edit" style="margin-right: 20px" :size="16" />
                <van-icon name="delete-o" :size="16" />
              </div>
            </div>
            <div class="item-content">
              今日的工作计划已完成，针对项目还做了一个整理，不断提升自己
            </div>
          </div>
          <div class="item project">
            <div class="item-title">
              <div>
                <span class="tag">项目</span>
                <span>已完成：90%</span>
                <span>用时：0.5小时</span>
              </div>
              <div class="operate">
                <van-icon name="edit" style="margin-right: 20px" :size="16" />
                <van-icon name="delete-o" :size="16" />
              </div>
            </div>
            <div class="item-content">
              <div class="project-title">【XM00001】吉大一入院项目</div>
              今日的工作计划已完成，针对项目还做了一个整理，不断提升自己</div>
          </div>
        </div>
        <div class="btn-group">
          <van-button type="default" block icon="plus">新增计划</van-button>
        </div>
      </div>
      <!-- 其他事项 -->
      <div class="wrap">
        <div class="subtitle">其他事项</div>
        <div class="other">
          <van-field
            v-model="message"
            rows="3"
            autosize
            :border="false"
            :label-width="0"
            type="textarea"
            maxlength="300"
            placeholder="此处可填写在工作中遇到的问题、建议或希望领导给予帮助的事项。"
            show-word-limit
          />
        </div>
      </div>
      <!-- 附件 -->
      <div class="wrap appendix">
        <div class="subtitle">附件</div>
        <div class="tips">最多上传十张，每张图片小大不得超多500KB</div>
        <div class="upload-wrap">
          <van-uploader v-model="fileList" :preview-size="76" multiple :max-count="10" :max-size="500 * 1024" @oversize="onOversize" />
        </div>
      </div>
      <!-- 操作区 -->
      <div class="submit">
        <div class="save">
          <van-button type="info" plain block>保存</van-button>
        </div>
        <div class="submit-btn">
          <van-button type="info" block>提交</van-button>
        </div>
      </div>
    </div>
    <!-- 日期选择 -->
    <van-popup v-model="showDate" round position="bottom" :style="{ height: '35%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        ref="picker"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @confirm="checkDate"
        @cancel="cancel"
      />
    </van-popup>
    <!-- 导入上次工作计划 -->
    <van-popup v-model="showPlan" round position="bottom" :style="{ maxHeight: '65%' }">
      <div class="pop-main">
        <div class="pop-title">
          <div class="title">
            <van-icon name="calendar-o" :size="16" />
            汇报计划日期：2022-01-02
          </div>
          <van-icon name="cross" :size="20" />
        </div>
        <div class="plan-list">
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              今日的工作计划已完成，针对项目还做了一个整理，不断提升自己
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
              今日的工作计划已完成，针对项目还做了一个整理，不断提升自己
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              今日的工作计划已完成，针对项目还做了一个整理，不断提升自己
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
              今日的工作计划已完成，针对项目还做了一个整理，不断提升自己
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              今日的工作计划已完成，针对项目还做了一个整理，不断提升自己
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
              今日的工作计划已完成，针对项目还做了一个整理，不断提升自己
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              今日的工作计划已完成，针对项目还做了一个整理，不断提升自己
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
              今日的工作计划已完成，针对项目还做了一个整理，不断提升自己
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              今日的工作计划已完成，针对项目还做了一个整理，不断提升自己
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
              今日的工作计划已完成，针对项目还做了一个整理，不断提升自己
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              今日的工作计划已完成，针对项目还做了一个整理，不断提升自己
            </div>
          </div>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px"></van-checkbox>
            <div class="plan-content">
              <div class="plan-title">【XM00001】吉大一入院项目</div>
              今日的工作计划已完成，针对项目还做了一个整理，不断提升自己
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
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      dateText: '',
      indexes: [],
      showDate: false,
      message: '',
      minDate: new Date(2022, 0, 1),
      maxDate: new Date(2025, 6, 1),
      currentDate: moment()._d,
      fileList: [
        { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: 'https://cloud-image', isImage: true },
      ],
      showPlan: false,
      checked: false
    }
  },
  mounted() {
    this.dateText = moment().format('YYYY年MM月DD日')
  },
  methods: {
    close() {
      this.showDate = false
    },
    // 时间处理
    formatter(type, val) {
      if (type === 'year') {
        return `${val}年`
      } else if (type === 'month') {
        return `${val}月`
      } else if (type === 'day') {
        return `${val}日`
      }
      return val
    },
    // 确定选择时间
    checkDate(value) {
      this.currentDate = value
      this.dateText = moment(value).format('YYYY年MM月')
      this.indexes = this.$refs.picker.getPicker().getIndexes()
      this.showDate = false
    },
    // 取消时间选择
    cancel() {
      // 设置时间选中值对应的索引
      this.$refs.picker.getPicker().setIndexes(this.indexes)
      this.showDate = false
    },
    onOversize(file) {
      console.log(file);
      this.$toast('文件大小不能超过 500kb')
    },
    addWorkItem() {
      this.$router.push({ path: 'addWorkItem' })
    }
  }
}
</script>
<style lang="stylus" scoped>
.report-to
  background: #fff
  padding: 0 30px
  font-size: 28px
  .report-cell
    padding: 30px 0
    color: #666666
    .label
      color: #333333
      margin-left: 20px
  .target
    border-top: 1px solid #E5E5E5
    // display: flex
    // flex-wrap wrap
    .tag
      height: 48px
      display: inline-block
      margin: 0 18px 10px 0
    .add-tag
      width 48px
      height: @width
      line-height @width
      text-align: center
      border-radius: 50%
      background: #F6F6F6
      display: inline-block
.content
  margin-top: 10px
  padding: 30px
  background: #fff
  .subtitle
    font-size: 32px
    color: #333
    font-weight: bold
    line-height: 44px
    margin-bottom: 28px
  .report-list
    .item
      padding: 20px
      border-radius: 12px
      margin-bottom: 20px
      &.daily
        background: #ECFBF7
        .tag
          background: #44D7B6
      &.project
        background: #E6F1FF
        .tag
          background: #0876FF
      .item-title
        font-size: 24px
        display: flex
        align-items: center
        justify-content: space-between
        margin-bottom: 20px
        color: #666666
        .tag
          width: 80px
          height: 40px
          display: inline-block
          line-height: 44px
          text-align: center
          color: #fff
          border-radius: 4px
          margin-right: 20px
        .finished
          margin-right: 30px
      .operate
        padding-right: 10px
      .item-content
        background: #fff
        padding: 24px
        border-radius: 12px
        color: #333
        font-size: 28px
        line-height: 40px
        .project-title
          font-size: 28px
          font-weight: bold
          line-height: 40px
          padding-bottom: 20px
          margin-bottom: 20px
          border-bottom: 1px solid #E5E5E5
  .btn-group
    margin: 10px 0 60px
    &.add-plan
      display: flex
      gap: 22px
      .van-button
        flex: 1
    .van-button
      border-radius: 12px
      color #666666
.other
  border: 1px solid #E5E5E5
  border-radius: 12px
  overflow hidden
.appendix
  margin-top: 60px
  .tips
    line-height 32px
    font-size: 24px
    color: #666666
  .upload-wrap
    margin-top: 28px
.submit
  margin-top: 100px
  display: flex
  align-items: center
  justify-content: space-between
  .van-button
    border-radius: 12px
  .save
    width 335px
  .submit-btn
    width 335px
.pop-main
  padding 42px 30px
  background: #F6F6F6
  position relative
  .pop-title
    display: flex
    align-items: center
    justify-content: space-between
    font-size 28px
    color #666666
    line-height: 40px
    margin-bottom: 30px
  .plan-list
    max-height: 800px
    padding-bottom: 100px
    overflow-y scroll
    .item
      background: #fff
      display: flex
      align-items: center
      padding 30px
      border-radius 12px
      margin-bottom 16px
      .van-checkbox
      .plan-title
        font-weight: bold
        margin-bottom: 10px
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