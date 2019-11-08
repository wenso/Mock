//基础的接口加载
const base = require('../services/index')
//定义路径
const path = '/mock'
module.exports = {
    // region 收起所有

    // 用户列表
    [`${path}/apis/getuserlist`]: base.userList,
    // 用户详情
    [`${path}/apis/getuserinfo`]: base.userInfo,
    //广告列表
    [`${path}/apis/getadlist`]: base.adList,
    //短信验证码
    [`${path}/apis/getsmscode`]: base.smsCode,
    //用户登录
    [`${path}/apis/loginbyphone`]: base.login
    // endregion

}