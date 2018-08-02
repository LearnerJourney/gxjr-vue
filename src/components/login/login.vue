<template>
  <div class="login">
    <headTopCompent></headTopCompent>
    <headBottomCompent></headBottomCompent>
    <div class="loginBg">
      <div class="loginContainer">
        <div class="loginInfo">
          <div>
            <h3>用户登录</h3>
            <input type="text" placeholder="用户名/手机号"/>
            <input type="password" placeholder="密码"/>
            <div>
              <input type="checkbox"> <span>记住我</span>
            </div>
            <div>
              <input type="button" value="登录" class="loginBtn">
            </div>
            <div class="hint">
              <span>忘记密码</span><span>立即注册</span>
            </div>
            <div class="site_safe"> 您的信息已使用SSL加密技术，数据传输安全 </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headTopCompent from '../headTop/headTop.vue'
  import headBottomCompent from '../headBottom/headBottom.vue'
  export default {
    name: "login",
    components: {
      headTopCompent,
      headBottomCompent
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    .loginBg {
      height: 880px;
      background-image: url(https://oss.wlgyjr.cn/web/images/user/login.png);
      background-size: 100% 100%;
      --moz-background-size: 100% 100%;
      --webkit-background-size: 100% 100%;
      padding: 0;
      margin: 0;
      display: block;
      width: 100%;
      min-width: 1200px;
      clear: both;
      .loginContainer {
        width: 1200px;
        margin: 0 auto;
        height: 600px;
        position: relative;
        .loginInfo {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 400px;
          height: 400px;
          border-radius: 8px;
          background: #fff;
          >div {
            margin: 14px 40px 0 40px;
            >h3 {
              margin-top: 20px;
              margin-bottom: 35px;
              font-size: 24px;
              text-align: center;
              color: #666;
              font-weight: 500;
            }
            >div {
              margin-top: 10px;
              color: #666;
              font-weight: normal;
              margin-bottom: 5px;
              font-size: 14px;
              >input,>span {
                vertical-align: middle;
                display: inline-block;
              }
            }
            .hint {
              font-size: 12px;
              span {
                vertical-align: initial;
              }
              span:last-child {
                color: #ff5c5c;
                float: right;
              }
            }
            .site_safe {
              margin-top: 20px;
              background: url(https://oss.wlgyjr.cn/web/images/user/safe.png) no-repeat 12px center;
              text-indent: 30px;
              color: #ccc;
              font-size: 12px;
            }
            >input                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             {
              display: block;
              width: calc(100% - 24px);
              height: 32px;
              line-height: 44px;
              padding: 6px 12px;
              font-size: 14px;
              color: #555;
              border: 1px solid #ccc;
              border-radius: 8px;
              outline:none;
              margin-top: 10px;
            }
            .loginBtn {
              height: 50px;
              background: #ff4c4c;
              border: none;
              font-size: 16px;
              /*button禁止点击时的样式*/
              /*!*cursor: not-allowed;*! 禁止手势 */
              /*box-shadow: none;*/
              /*opacity: .65;*/
              color: #fff;
              cursor: pointer;
              border-radius: 4px;
              width: 100%;
            }
            >input:focus {
              border: 1px solid #66afe9;
              box-shadow: 0px 0px 10px #66afe9;
            }
            >input::-webkit-input-placeholder { /* WebKit browsers */
              color:    #ccc;
            }
            >input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
              color:    #ccc;
            }
            >input::-moz-placeholder { /* Mozilla Firefox 19+ */
              color:    #ccc;
            }
            >input:-ms-input-placeholder { /* Internet Explorer 10+ */
              color:    #ccc;
            }
          }
        }
      }
    }
  }
</style>
