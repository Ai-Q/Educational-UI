import axios from "axios"
import Utis from "../static/js/utils"
import Element from "element-ui"
axios.defaults.baseURL="http://127.0.0.1:8888/Educational_war/"
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
    if (config.data!=undefined||config.data!=null||config.data!=''){
      let paramStr = config.data.split("&").sort();
      let newParamStr='';
      for(let i=0;i<paramStr.length;i++){
        newParamStr+=paramStr[i];
      }
      const oldsign=Utis.setMD5(newParamStr,window.localStorage.getItem("Access-Token"));
      const sign=oldsign.toUpperCase();
       config.headers={
      'Access-Token':Utis.encrypt(window.sessionStorage.getItem("Access-Token")),
         'sign':sign
     }
    }else{
      config.headers={
        'Access-Token':Utis.encrypt(window.sessionStorage.getItem("Access-Token"))
      }
    }
  }

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
