<template>
  <div class="page">
    <!-- Main Navbar-->
    <header class="header">
      <nav class="navbar">
        <div class="container-fluid">
          <div class="navbar-holder d-flex align-items-center justify-content-between">
            <!-- Navbar Header-->
            <div class="navbar-header">
              <!-- 名字跳回首页 --><a href="index.html" class="navbar-brand d-none d-sm-inline-block">
              <div class="brand-text d-none d-lg-inline-block"><!--<span>AHEAD信息分院</span>--><strong>教师管理系统</strong></div>
              <div class="brand-text d-none d-sm-inline-block d-lg-none"><strong>BD</strong></div></a>
              <!-- 放大缩小菜单栏--><a id="toggle-btn" href="#" class="menu-btn active"><span></span><span></span><span></span></a >
            </div>
            <!-- 菜单 -->
            <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
              <!-- Search-->

              <!-- 菜单栏右边-->
              <li class="nav-item dropdown"> <a id="notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link">
                <i class="fa fa-bell-o"></i><span class="badge bg-red badge-corner">12</span></a>
                <ul aria-labelledby="notifications" class="dropdown-menu">
                  <li><a rel="nofollow" href="#" class="dropdown-item">
                    <div class="notification">
                      <div class="notification-content">
                        <i class="fa fa-envelope bg-green"></i>你有一条新通知</div>
                      <div class="notification-time"><small>4小时前</small></div>
                    </div></a></li>
                  <li><a rel="nofollow" href="#" class="dropdown-item">
                    <div class="notification">
                      <div class="notification-content">
                        <i class="fa fa-twitter bg-blue"></i>你有一条新通知</div>
                      <div class="notification-time"><small>4小时前</small></div>
                    </div></a></li>
                  <li><a rel="nofollow" href="#" class="dropdown-item">
                    <div class="notification">
                      <div class="notification-content">
                        <i class="fa fa-upload bg-orange"></i>你有一条新通知</div>
                      <div class="notification-time"><small>4小时前</small></div>
                    </div></a></li>
                  <li><a rel="nofollow" href="#" class="dropdown-item">
                    <div class="notification">
                      <div class="notification-content">
                        <i class="fa fa-twitter bg-blue"></i>你有一条新通知</div>
                      <div class="notification-time"><small>4小时前</small></div>
                    </div></a></li>
                  <li><a rel="nofollow" href="#" class="dropdown-item all-notifications text-center">
                    <strong>所有通知</strong></a></li>
                </ul>
              </li>
              <!-- 邮件                        -->
              <li class="nav-item dropdown"> <a id="messages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link"><i class="fa fa-envelope-o"></i>
                <span class="badge bg-orange badge-corner">10</span></a>
                <ul aria-labelledby="notifications" class="dropdown-menu">
                  <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
                    <div class="msg-profile"></div>
                    <div class="msg-body">
                      <h3 class="h5">消息管理</h3><span>发送消息</span>
                    </div></a></li>
                  <li><a rel="nofollow" href="#" class="dropdown-item all-notifications text-center">
                    <strong>查看所有消息</strong></a></li>
                </ul>
              </li>
              <!-- Languages dropdown    -->
              <li class="nav-item dropdown"><a id="languages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link language dropdown-toggle">
                <img src="../assets/logo.png" style="width: 30px;height: 30px"><span class="d-none d-sm-inline-block">臭傻逼</span></a>
                <ul aria-labelledby="languages" class="dropdown-menu">
                  <li><a rel="nofollow" href="#" class="dropdown-item">啥玩意</a></li>
                  <li><a rel="nofollow" href="#" class="dropdown-item">啥玩意</a></li>
                </ul>
              </li>
              <!-- Logout    -->
              <li class="nav-item"><a href="login.html" class="nav-link logout"> <span class="d-none d-sm-inline">退出</span><i class="fa fa-sign-out"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="page-content d-flex align-items-stretch">
      <!-- Side Navbar -->
      <nav class="side-navbar">
        <!-- 头像名称-->
        <div class="sidebar-header d-flex align-items-center">
          <div class="avatar"><img src="../assets/login.jpg" style="width: 60px;height: 60px;border-radius: 30px"></div>
          <div class="title" style="margin-top:5%;margin-left: 10%">
            <h1 class="h4">杨繁荣</h1>
            <p>JAVA开发工程师</p>
          </div>
        </div>
        <!-- 左侧导航--><span class="heading">主菜单</span>
        <ul class="list-unstyled">
          <li class="active"><a href="index.html">首页</a></li>
          <li><a href="tables.html">通知管理</a></li>
          <li><a href="charts.html">系统管理</a></li>
          <li><a href="forms.html">评分管理</a></li>
          <!--data-toggle是下拉箭头-->
          <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse">教师管理</a>
            <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
              <li><a href="#">页面</a></li>
              <li><a href="#">页面</a></li>
              <li><a href="#">页面</a></li>
            </ul>
          </li>
          <li><a href="login.html">登陆页面</a></li>
        </ul>
        <span class="heading">下面</span>
        <ul class="list-unstyled">
          <li> <a href="#"> <i class="icon-flask"></i>你好</a></li>
          <li> <a href="#"> <i class="icon-screen"></i>我好</a></li>
          <li> <a href="#"> <i class="icon-mail"></i>大家好</a></li>
          <li> <a href="#"> <i class="icon-picture"></i>广州好迪</a></li>
        </ul>
      </nav>
      <div class="content-inner">
        <!-- Page Header-->
        <header class="page-header">
          <div class="container-fluid">
            <h2 class="no-margin-bottom">首页</h2>
          </div>
        </header>
        <!-- Dashboard Counts Section-->


        <!-- Client Section-->

        <!-- Feeds Section-->

        <!-- Updates Section                                                -->

        <!-- Page Footer-->
        <footer class="main-footer">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6">
                <p>Your company &copy; 2017-2019</p>
              </div>
              <div class="col-sm-6 text-right">
                <p>江西省教育厅</p>
                <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Teacher'
  }
</script>

<style scoped>
/*  @import "../../static/vendor/bootstrap/css/bootstrap.min.css";
  @import "../../static/css/style.default.css";*/

</style>
