<template>
  <div style="background-color: #eee;height: 100%">
    <div>
      <nav class="navbar navbar-default navbar-static-top" style="box-shadow: 2px 2px 2px #ccc">
        <div class="container-fluid" style="overflow: hidden">
          <div class="navbar-header" style="float: left">
           <a class="navbar-brand" href="#">学生管理系统</a>
          </div>
          <div style="padding-top:8px;float: right">
            <button type="button" class="btn btn-default">退出</button>
          </div>
        </div>
      </nav>
    </div>
    <div class="container-fluid" style="margin-top: -20px;height: 100%" id="two">
      <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-3"
               style="padding-left:0px;padding-right: 0px;box-shadow: 4px 4px 4px #ccc;">
            <div class="heard">
                <div style="width: 50%;float: left;text-align: center;padding-top:8%">
                <img src="../assets/banner.jpg" style="width: 100px;height: 100px;border-radius: 50px">
              </div>
              <div style="width: 50%;float: right;text-align: center">
                <br/>
                <h2>张三</h2>
                <h3>欢迎登陆</h3>
              </div>

            </div>
            <div class="bg">
              <ul style="height:501px">
                <li>修改登陆密码</li>
                <li>查看个人信息</li>
                <li>查看个人成绩</li>
                <li>查看缴费信息</li>
                <li>查看评教信息（月度）</li>
                <li>查看评教信息（学期）</li>
               <!-- <li style="height: 108px"></li>-->
              </ul>
            </div>
          </div>
          <div class="col-lg-9 col-md-9 col-sm-9" style="position: relative;height:650px">
            <div style="height: 90%">
              <div style="margin: auto;width: 96%;height: 94%;margin-top:3%;background-color: #fff;
              border-radius: 20px;box-shadow: 4px 4px 4px #ccc"></div>
            </div>
            <div class="foot" style="font-size: 13px">2019-2022&copy;京网备号：201700000402<br/>
            地址：江西省抚州市临川区
            </div>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Student',
    data(){
      return{

      }
    },
    mounted () {

    }
  }
</script>

<style scoped>
  .foot{
    padding-top: 10px;
    position: absolute;
    bottom:0;
    height: 8%;
    box-shadow: 2px 2px 2px #ccc;
    width: 98%;
    text-align: center;
    background-color: #fff;
    border-radius: 20px;
  }
  .right{
  }
  .bg{
    background-color: #ffffff;
    height: 100%;
  }
  ul{
    height: 100%;
    margin-top: 0px;
    -webkit-padding-start:0px;
    margin-bottom: 0px;
  }
  li{
    padding-top: 4%;
    padding-left: 20%;
    list-style: none;
    height: 50px;
    border-bottom: solid 1px #eeeeee;
  }
  .heard{
    height: 150px;
    width:100%;
    background:url("../assets/head.jpg");
  }
</style>
