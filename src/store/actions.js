
export default {
  teacherlogin({commit},{teachername,teacherpass}){
      commit("TEACHER_LOGIN",{teachername,teacherpass})
  }
}
