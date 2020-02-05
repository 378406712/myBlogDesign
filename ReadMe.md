需求：
​		后台管理：用户中心，撰写文章，我的博文，评论管理【40%】

​				用户中心页：可以读取登录用户的信息，以及登录时间，IP地址等【100%】

​				撰写文章页：用户可以发表博文，上传图片(发布完成，)【30%】

               账号信息设置页：能够修改密码，设置（更新）个人资料，以及删除账号所有信息（100%）

​				我的博文页：可以读取渲染发表的博文信息，具有搜索功能，点击编辑按钮能跳转到对应的博文页                              面进行修改，删除按钮能够在当前页面删除该博文（渲染，编辑，删除，搜索功能完成）

​				编辑修改页：读取需要修改的博文信息，能够修改（修改，渲染信息完成）【100%】

​				评论管理页 ：渲染前台游客发布的评论，有搜索功能（）【30%】

​		前台展示：注册，登录，首页，博文页

​				注册页：能够验证注册信息，将数据存入数据库。【100%】

​				登录页：读取数据库中用户信息，验证成功方可进入后台【100%】

​				首页：渲染文章缩略，点击具体博文，能够进入对应的文章页【40%】

​				博文页：渲染后台发表的文章，开放评论功能【0%】

P.S：还是觉得数据库跟后端还是自己写，火狐的firebase还是有很多问题，虽然挺方便的。
​		 这两天在学微信小程序，毕设可能做的时间少了（其实今晚又划水弄博客...)
            【时间:2019年11月19日22:54:04】
    
    基本的功能都实现了，也做了用户体验虽然可能就我一个人在用，但是还是考虑到了用户都体验感
        后面会增加一些简单都前台个性化装饰模块和makedown编辑器
            【时间:2020年02月05日15:57:51】
    
关于后台这块：

​	后台我还是自己搭建一个，在另外一个文件夹下专门写后台和数据库的代码，图片上传到该目录文件下，数据渲染还是前台来做。【时间:2019年11月19日22:54:04】

​	之前一直在想后台可以用ejs模板来渲染数据，那么我用vue使用axios请求下数据也能渲染到前台页面，前后端分离之前理解的还是不够清晰。

​	如果是使用前端框架开发，使用axios请求接口数据，然后前端渲染

​	如果是jq，或者未用其他框架，那么后端可以用ejs渲染页面，前端也能用ajax请求

​	今天收获很大【时间:2019年11月29日22:51:09】
​	
​	后台用的是NODE.JS，但是没有用MVC架构，
​	用的是app级别路由，没有用router二级路由【时间:2020年02月05日15:57:51】

部分页面展示：

![Image text](https://github.com/378406712/myBlogDesign/blob/master/showIMG/首页.png)
![Image text](https://github.com/378406712/myBlogDesign/blob/master/showIMG/登录.png)
![Image text](https://github.com/378406712/myBlogDesign/blob/master/showIMG/注册.png)
![Image text](https://github.com/378406712/myBlogDesign/blob/master/showIMG/用户中心页.png)
![Image text](https://github.com/378406712/myBlogDesign/blob/mac/showIMG/%E8%B4%A6%E5%8F%B7%E4%BF%A1%E6%81%AF%E9%A1%B5.png
)
![Image text](https://github.com/378406712/myBlogDesign/blob/master/showIMG/撰写文章页.png)
![Image text](https://github.com/378406712/myBlogDesign/blob/master/showIMG/修改文章页.png)
![Image text](https://github.com/378406712/myBlogDesign/blob/master/showIMG/编辑文章页.png)
![Image text](https://github.com/378406712/myBlogDesign/blob/master/showIMG/评论管理页.png)
