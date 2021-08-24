// 注意：每次调用 $.get | $.post | $.ajax 的时候，会先调用该函数
// 此函数中可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function (options) {
    // 在发起真正的Ajax请求前统一拼接url
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url;
    console.log(options.url);
})