<template>
    <div class="bg">
      <div style="width: 80%;margin-left: 10%">
        <br/>
        <h1 v-html="noticeList.noticeTitle" style="text-align: center"></h1>
        <p v-html="noticeList.noticeContent" style="line-height: 40px"></p>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'notice',
    data(){
      return{
        noticeList:"",
        context:""
      }
    },
    mounted(){
      let routerParams = this.$route.params.noticeList
      this.noticeList=routerParams
    }
  }
</script>

<style scoped>
  .bg{
    margin-top: -20px;
    min-height: 720px;
    background:-webkit-linear-gradient(#73b9b5,#75d9b7);/*for safari5.1-6.0*/

    background:-o-linear-gradient(#73b9b5,#75d9b7);/*Opera 11.1-12.0*/

    background:-moz-linear-gradient(#73b9b5,#75d9b7);/*firefox 3.6-15*/

    background:linear-gradient(#75d9b7,#eeeeee);/*标准语法，必须放在最后*/
  }
</style>
