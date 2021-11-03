---
title: 学习PHP之环境搭建
date: 2017-09-30 12:02:08
tags: 
  - PHP
  - 学习
---


> 注：因为搭建的是本地的服务器，所以只有自己的电脑开着的时候，才能访问到。

<!-- more -->

### 一、注册域名

 1. 这是一个免费域名的注册地址[www.noip.com][1]，这种网站有很多，只是本人用的这一个，可自由选择。
 ![此处输入图片的描述][2]
 2. 注册登录即可。（一个简单的域名注册申请，就不再赘述了）
 3. 根据自己的ip注册后的结果是这样（要特别注意的是ip地址的填写，不知道自己此刻的ip地址可以用命令行查询；***此处的ip地址会根据你使用的网络而改变***）：
 ![此处输入图片的描述][3]

### 二、架构包的安装

 1. 下载架构包（架构包当然也有很多种，本人使用的是链接中的这个）[AppSever8.6.0][4]
 2. 安装架构包（跟着流程走就好了，规则就是两个键按左边，三个键按中间，一个键就只能按它咯~）***注意安装目录的选择！***安装完之后，会有一个这样的目录：
 ![此处输入图片的描述][5]
 3. 测试：在浏览器地址栏中输入你之前申请的并且与ip地址对应的域名，当看到以下结果，说明你ok了，否则请从头开始=_=（嘿嘿，有问题肯定是某个步骤出了问题，仔细检查）：
 ![此处输入图片的描述][6]
 4. 此处显示的是，文件夹`www`中的index.php文件
> 当然我们希望这些关于服务器的各种信息只有我们自己能看到，而别人看不到，很简单，将文档的名字改成只有你自己知道就好了:
![此处输入图片的描述][7]
 5. 既然index文件已经被我们改掉了，因此可以开始写第一个index文件了，此刻网页会自动显示该文件（之后就可以开始写自己的网页了）：
 
```
// index.html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>index</title>
</head>
<body>
	<p style="font-size: 50px;color: #66ccff;">啦啦啦</p>
	<p style="font-size: 40px;color: red">完了</p>
</body>
</html>
```

![此处输入图片的描述][8]
  


  [1]: https://www.noip.com/
  [2]: http://otn4ut2th.bkt.clouddn.com/blogwebsite.PNG
  [3]: http://otn4ut2th.bkt.clouddn.com/blogresult.PNG
  [4]: https://www.appservnetwork.com/en/
  [5]: http://otn4ut2th.bkt.clouddn.com/blogfile.PNG
  [6]: http://otn4ut2th.bkt.clouddn.com/blogifo.png
  [7]: http://otn4ut2th.bkt.clouddn.com/blogfilename.png
  [8]: http://otn4ut2th.bkt.clouddn.com/blogover.png