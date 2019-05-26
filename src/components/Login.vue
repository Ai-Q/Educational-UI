<template>

  <div class="wrap container">
    <div class="toptitle" >
     教务管理系统<br/><hr/>
    </div>
    <div class="row">
      <!--登陆框-->
      <div class="col-lg-6 col-md-6 col-sm-6">
        <div style="width: 80%;margin-left: 10%">
          <el-tabs type="border-card" style="text-align: center" >
            <el-tab-pane>
              <span slot="label"><i class="el-icon-s-custom" @click="cut"></i> 教师登陆</span>
              <!--教师登陆-->
              <form>
                <br/>
                <div class="input_box">
               <span >用户名：</span><el-input placeholder="请输入用户名" v-model="teachername"  prefix-icon="el-icon-user-solid"  clearable>
              </el-input></div>
                <br/>
                <div class="input_box">
                  <span >密　码：</span>
                  <el-input placeholder="请输入密码" prefix-icon="el-icon-unlock" v-model="teacherpass" show-password></el-input></div>
                  <CHECK/>
                <el-checkbox v-model="teacherremember">记住密码</el-checkbox>
                忘记密码
                <br/>
                <el-button type="primary" plain @click="teacherlogin">登陆</el-button>
                <el-button type="info" plain @click="reset">重置</el-button>
              </form>

            </el-tab-pane>
            <!--==============================================================================-->
            <el-tab-pane label="学生登陆" @click="cut" >
              <form>
                <br/>
                <div class="input_box">
                  <span >用户名：</span><el-input placeholder="请输入用户名" v-model="studentname"  prefix-icon="el-icon-user-solid"  clearable>
                </el-input></div>
                <br/>
                <div class="input_box">
                  <span >密　码：</span>
                  <el-input placeholder="请输入密码" prefix-icon="el-icon-unlock" v-model="studentname" show-password></el-input></div>
                <CHECK/>
                <el-checkbox v-model="studentremember">记住密码</el-checkbox>
                忘记密码
                <br/>
                <el-button type="primary" plain @click="teacherlogin">登陆</el-button>
                <el-button type="info" plain @click="reset">重置</el-button>
              </form>
            </el-tab-pane>
          </el-tabs>

        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6">
        <div>123</div>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import check from "./check"
  export default {
    components:{
      CHECK:check
    },
    data(){
      return{
        teachername:"",
        teacherpass:"",
        teacherremember:"",
        studentname:"",
        studentpass:"",
        studentremember:""
      }
    },
    methods:{
      cut(){
        alert("123")
      },
      reset(){

      },
      teacherlogin(){
        alert("login")
        this.$ajax.post("test").then(success=>{alert(success.data)}).catch(error=>{})
        /*alert
        this:$ajax.post("test").then(success=>{alert(success.data)}).catch(error=>{})*/
      }
    }
  }
</script>

<style>
.toptitle{
  text-align: center;height: 20%;font-family:楷体;font-size: 48px;font-weight: bold;
  text-shadow:0 0 20px #eee;
  color:#fff;
}
.el-input{
  width: 70%;
}
.input_box{
  margin-bottom:5px;
  width: 100%;
}
  .el-input__inner{
  }
  .el-tabs__nav{
    width: 100%;
  }
  .el-tabs--border-card{
    border-radius: 20px;
    background-color: rgba(255,255,255,0.5);
    box-shadow:2px 2px 2px 2px rgba(255,255,255,0.3);
  }
  .el-tabs--border-card>.el-tabs__header{
    text-align: center;
    border-radius: 20px;
    background-color: rgba(255,255,255,0.5);
  }
  /*.el-tabs__nav{
    margin-left: 30%;
  }*/
    /*  *{
        maring:0px;
        padding:0px;
      }
      .img{
        !*background-image: url("../assets/banner.jpg");*!
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        background-size:cover;
        position:fixed;
      }*/
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.wrap {
  width: 100%;
  height: 100%;
  padding: 40px 0;
  position: fixed;
/*  top: 0%;*/
  opacity: 0.8;
  background: linear-gradient(to bottom right,#50a3a2,#53e3a6);
  background: -webkit-linear-gradient(to bottom right,#50a3a2,#53e3a6);
}


.wrap ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}
.wrap ul li {
  list-style-type: none;
  display: block;
  position: absolute;
  bottom: -120px;
  width: 15px;
  height: 15px;
  z-index: -8;
  background-color:rgba(255, 255, 255, 0.15);
  animotion: square 25s infinite;
  -webkit-animation: square 25s infinite;
}
.wrap ul li:nth-child(1) {
  left: 0;
  animation-duration: 10s;
  -moz-animation-duration: 10s;
  -o-animation-duration: 10s;
  -webkit-animation-duration: 10s;
}
.wrap ul li:nth-child(2) {
  width: 40px;
  height: 40px;
  left: 10%;
  animation-duration: 15s;
  -moz-animation-duration: 15s;
  -o-animation-duration: 15s;
  -webkit-animation-duration: 15s;
}
.wrap ul li:nth-child(3) {
  left: 20%;
  width: 25px;
  height: 25px;
  animation-duration: 12s;
  -moz-animation-duration: 12s;
  -o-animation-duration: 12s;
  -webkit-animation-duration: 12s;
}
.wrap ul li:nth-child(4) {
  width: 50px;
  height: 50px;
  left: 30%;
  -webkit-animation-delay: 3s;
  -moz-animation-delay: 3s;
  -o-animation-delay: 3s;
  animation-delay: 3s;
  animation-duration: 12s;
  -moz-animation-duration: 12s;
  -o-animation-duration: 12s;
  -webkit-animation-duration: 12s;
}
.wrap ul li:nth-child(5) {
  width: 60px;
  height: 60px;
  left: 40%;
  animation-duration: 10s;
  -moz-animation-duration: 10s;
  -o-animation-duration: 10s;
  -webkit-animation-duration: 10s;
}
.wrap ul li:nth-child(6) {
  width: 75px;
  height: 75px;
  left: 50%;
  -webkit-animation-delay: 7s;
  -moz-animation-delay: 7s;
  -o-animation-delay: 7s;
  animation-delay: 7s;
}
.wrap ul li:nth-child(7) {
  left: 60%;
  animation-duration: 8s;
  -moz-animation-duration: 8s;
  -o-animation-duration: 8s;
  -webkit-animation-duration: 8s;
}
.wrap ul li:nth-child(8) {
  width: 90px;
  height: 90px;
  left: 70%;
  -webkit-animation-delay: 4s;
  -moz-animation-delay: 4s;
  -o-animation-delay: 4s;
  animation-delay: 4s;
}
.wrap ul li:nth-child(9) {
  width: 100px;
  height: 100px;
  left: 80%;
  animation-duration: 20s;
  -moz-animation-duration: 20s;
  -o-animation-duration: 20s;
  -webkit-animation-duration: 20s;
}
.wrap ul li:nth-child(10) {
  width: 120px;
  height: 120px;
  left: 90%;
  -webkit-animation-delay: 6s;
  -moz-animation-delay: 6s;
  -o-animation-delay: 6s;
  animation-delay: 6s;
  animation-duration: 30s;
  -moz-animation-duration: 30s;
  -o-animation-duration: 30s;
  -webkit-animation-duration: 30s;
}
.wrap ul li:nth-child(11) {
  left: 5px;
  animation-duration: 10s;
  -moz-animation-duration: 10s;
  -o-animation-duration: 10s;
  -webkit-animation-duration: 10s;
}
.wrap ul li:nth-child(12) {
  width: 40px;
  height: 40px;
  left: 15%;
  animation-duration: 15s;
  -moz-animation-duration: 15s;
  -o-animation-duration: 15s;
  -webkit-animation-duration: 15s;
}
.wrap ul li:nth-child(13) {
  left: 25%;
  width: 25px;
  height: 25px;
  animation-duration: 12s;
  -moz-animation-duration: 12s;
  -o-animation-duration: 12s;
  -webkit-animation-duration: 12s;
}
.wrap ul li:nth-child(14) {
  width: 50px;
  height: 50px;
  left: 35%;
  -webkit-animation-delay: 3s;
  -moz-animation-delay: 3s;
  -o-animation-delay: 3s;
  animation-delay: 3s;
  animation-duration: 12s;
  -moz-animation-duration: 12s;
  -o-animation-duration: 12s;
  -webkit-animation-duration: 12s;
}
.wrap ul li:nth-child(15) {
  width: 60px;
  height: 60px;
  left: 45%;
  animation-duration: 10s;
  -moz-animation-duration: 10s;
  -o-animation-duration: 10s;
  -webkit-animation-duration: 10s;
}
.wrap ul li:nth-child(16) {
  width: 75px;
  height: 75px;
  left: 55%;
  -webkit-animation-delay: 7s;
  -moz-animation-delay: 7s;
  -o-animation-delay: 7s;
  animation-delay: 7s;
}
.wrap ul li:nth-child(17) {
  left: 65%;
  animation-duration: 8s;
  -moz-animation-duration: 8s;
  -o-animation-duration: 8s;
  -webkit-animation-duration: 8s;
}
.wrap ul li:nth-child(18) {
  width: 90px;
  height: 90px;
  left: 75%;
  -webkit-animation-delay: 4s;
  -moz-animation-delay: 4s;
  -o-animation-delay: 4s;
  animation-delay: 4s;
}
.wrap ul li:nth-child(19) {
  width: 100px;
  height: 100px;
  left: 85%;
  animation-duration: 20s;
  -moz-animation-duration: 20s;
  -o-animation-duration: 20s;
  -webkit-animation-duration: 20s;
}
.wrap ul li:nth-child(20) {
  width: 120px;
  height: 120px;
  left: 95%;
  -webkit-animation-delay: 6s;
  -moz-animation-delay: 6s;
  -o-animation-delay: 6s;
  animation-delay: 6s;
  animation-duration: 30s;
  -moz-animation-duration: 30s;
  -o-animation-duration: 30s;
  -webkit-animation-duration: 30s;
}


@keyframes square {
  0%  {
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }
  100% {
    bottom: 800px;
    transform: rotate(600deg);
    -webit-transform: rotate(600deg);
    -webkit-transform: translateY(-500);
    transform: translateY(-500)
  }
}
@-webkit-keyframes square {
  0%  {
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }
  100% {
    bottom: 800px;
    transform: rotate(600deg);
    -webit-transform: rotate(600deg);
    -webkit-transform: translateY(-500);
    transform: translateY(-500)
  }
}
</style>
