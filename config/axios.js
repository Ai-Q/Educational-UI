import axios from "axios"
import Utis from "../static/js/utils"
import Element from "element-ui"
axios.defaults.baseURL="http://127.0.0.1:8888/Educationl_war/"
axios.defaults.headers = {
  "Content-Type": "application/x-www-form-urlencoded"
}

//添加请求拦截器
axios.interceptors.request.use((config)=> {

  console.log("请求="+config.url);
  if(config.url=="loginToken"){
    console.log("utl="+sessionStorage.getItem("loginToken"));
  }else if(config.url=="login"){
    console.log(config.data)
  }else if(config.url=="noticeInfo/noticeList"){
    console.log("资讯放行")
  }else{
    config.headers={
      'token':window.sessionStorage.getItem("token"),

    }
  }

  //请求时候带上token
  /*if (window.sessionStorage.getItem("token")) {
    console.log(config.data);
    const a = config.data;
    const b = a.split('&');
    const result = b[0].split('=')[1];
    console.log("=====data==="+result);
    config.headers.authentication = window.sessionStorage.getItem("token");
  }*/
  return config;
},(error)=>{
  return promise.reject(error);
});

//添加响应拦截
axios.interceptors.response.use((response)=>{
  response.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    const a=Utis.decrypt(response.data);
    if(a.indexOf("loginToken")!= -1) {

      response.data=a
    }
    console.log(response.data)

  //想做什么
  return response;

},(error)=>{
  //对错误作什么
  return promise.reject(error+"这里错误");
})
