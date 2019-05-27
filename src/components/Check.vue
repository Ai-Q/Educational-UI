<template>
  <div  @mousedown="mousedownFn($event)"  class="che">
    <drag-verify style="margin: auto;"
      :width="width"
      :height="height"
      :text="text"
      :success-text="successText"
      :background="background"
      :circle="circle"
      :progress-bar-bg="progressBarBg"
      :completed-bg="completedBg"
      :handler-bg="handlerBg"
      :handler-icon="handlerIcon"
      :text-size="textSize"
      :success-icon="successIcon"
      ref="Verify"
    >
    </drag-verify>
  </div>

</template>

<script>
  import Vue from 'vue'
  import 'font-awesome/css/font-awesome.min.css'
  import dragVerify from 'vue-drag-verify'

  export default {
    name: 'app',
    components:{
      dragVerify
    },
    data () {
      return {
        handlerIcon: "fa fa-angle-double-right",
        successIcon: "fa fa-check",
        background: "#cccccc",
        progressBarBg: "#4b0",
        completedBg: "#66cc66",
        handlerBg: "#fff",
        circle:false,
        text: "请将滑块拖动到右侧",
        successText: "验证成功",
        width:280,
        height: 42,
        textSize: "16px",
        isCircle:'true',

      }
    },methods:{
      mousedownFn:function (e) {
        alert(this.$refs.Verify.isMoving)
        alert(this.$refs.Verify.isPassing)
        alert(this.$refs.Verify.handlerIconClass)
      }
    }
  }
</script>

<style>
  .che{
    align-content: center;
  }
</style>
