// 注意：每次调用 $.get | $.post | $.ajax 的时候，会先调用该函数
// 此函数中可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function (options) {
    // 在发起真正的Ajax请求前统一拼接url
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url;
    console.log(options.url);

    // 统一为有权限的接口，设置 headers 请求头
    if (options.url.indexOf('/my/') !== -1) { // 请求路径中带有 /my
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }

    // 全局统一挂载 complete 回调函数
    // 无论成功失败都会调用complete函数
    options.complete = function (res) {
        // console.log('执行了complete');
        // console.log(res);
        // 在complete回调函数中，可以使用res.responseJSON拿到服务器响应回来的数据
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            // 1. 强制清空token
            localStorage.removeItem('token');
            location.href = '/大事件项目/Code/login.html';
            // 2. 强制跳转到登录页
        }
    }
})

