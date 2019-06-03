/**
 * 工具类
 */
import Vue from 'vue'
import CryptoJS from 'crypto-js'
const privateKey="qwertyuiop123456"
import md5 from "js-md5"
export default {//加密
  encrypt(word){
    console.log("加密中");
    var key  = CryptoJS.enc.Utf8.parse(privateKey);
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return encrypted.toString();
  },
  //解密
  decrypt(word){

    var key  = CryptoJS.enc.Utf8.parse(privateKey);
    var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  },
//md5加盐

  setMD5(value,salt){

    //salt通过API请求获得
    let pass = md5(value+salt);
    //登录请求
    return pass;
  }
}
