
export default {
  NOTICELIST(state,{data}) {
    state.noticeList=JSON.parse(data)
  }
  /*TEACHER_LOGIN (state, {teachername, teacherpass}) {
    axios.post("login",qs.stringify({type:1,name:teachername,pass:teacherpass})).then(
      success=>{
        alert(success.data)
      }).catch(error=>{
        alert(123);
      }
    )
  }*/
}

