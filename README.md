# SPA (Single Page web Application)
web特有的一种应用  
基于ajax的出现而实现的应用  
1. SPA是什么？  
    >单页Web应用（single page web application，SPA），就是只有一张Web页面的应用，是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序。 - 百度百科
    - 多页面与单页面的区别
    ![](https://github.com/876108531/my-app/blob/dev_0.1_add_router/src/image/diff.png)
2. SPA的历史
    - 1998年 Ajax 技术诞生  
      >fetch 可以理解为经过Promise封装过的ajax
    - 2014 HTML5.0 发布
      >让单页面应用的另一重要部分：“路由” 得以完善
3. SPA应用的实现
    hash与h5的区别 
        1. location.hash  location.pathname
        2. 请求方式 服务端配置不同
    1. 原生实现  
       - hash
         >https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onhashchange
          1. hashchange
          2. location.hash
    
       - H5 history API
         >https://developer.mozilla.org/zh-CN/docs/Web/API/History_API 
          1. popstate
          
          2. pushState
          3. replaceState
          4. back()、forward()、 go()
          
       
    2. react实现  
        - react-router
            > https://reacttraining.com/react-router/
            1. Router
        - redux
            > https://cn.redux.js.org/
            
            
