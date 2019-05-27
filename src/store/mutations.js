import axios from "axios"
axios.defaults.baseURL='http://127.0.0.1:8888/Educationl_war/'
import qs from "qs"


export default {
  TEACHER_LOGIN (state, {teachername, teacherpass}) {
    axios.post("login",qs.stringify({type:1,name:teachername,pass:teacherpass})).then(
      success=>{
        alert(success.data)
      }).catch(error=>{
        alert(123);
      }
    )
  }
}

