import axios from "axios"
axios.defaults.baseURL='http://127.0.0.1:8888/Educationl_war/'

export default {
  noticeList({commit}){
    axios.post("noticeInfo/noticeList").then(success => {
      const data=success.data;
      commit("NOTICELIST",{data})
    }).catch(error => {
      alert("error")
    })
  }
}
