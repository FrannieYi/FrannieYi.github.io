---
title: FirstPassage
date: 2017-03-20 21:20:46
tags: 
    - hexo
    - github
---


## 第一篇博文（搭建博客的坑！！！）
<!-- more -->
### 1.关于Hexo


* nmp安装Hexo


打开命令行工具，执行如下命令：

    $ npm install -g hexo

* 创建文件夹

本人是直接在D盘创建了一个名叫blog的文件夹，在blog中创建了Hexo文件夹。（这个看个人喜好吧，用命令行也未尝不可。）

* 初始化

在Hexo目录下打开命令行工具，执行：

    hexo init

之后执行：

    hexo server

会看到：

    INFO  Start processingINFO  Hexo is running at http://localhost:4000/. Press Ctrl+C to stop.

访问：[http://localhost:4000/](http://localhost:4000/ "初始页面")就可以看到Hexo的初始页面了。

### 2.关于个人设置

* 基本信息

本人修改了title、subtitle、author的内容，如下：


```
	# Site
	title: YangKunyi的博客
	subtitle: 爱看书的杨杨
	description:
	author: FrannieYi
	language:
	timezone:
```

***第一个坑***
**注意每一个冒号后面都有一个空格**

 > 无法生效的写法：title:Drubear的博客
 > 有效的写法：title:[空格]Drubear的博客

* 主题

> 知乎 - [好看的主题！][1]


  [1]: https://www.zhihu.com/question/24422335


使用git命令在github上clone下自己喜欢的主题，本人使用的是litten的yilia。


* 配置主题
根据clone下来的主题将页面进行个性化设置。可以参考博主给的各种参数。

* 部署设置

只需简单的执行

    hexo d

### **But，重点来了**
***前方巨坑请注意***

 1. 首先在github上建立一个仓库，名字叫做：`[你的用户名].github.io`**注意，你的用户名必须与你实际的用户名一字不差！**
 2. 拥有了个人的GitHubPages后，再回到Hexo的_config.yml文件，找到Deployment章节，做以下修改：（以FrannieYi为用户名为例）
```
# Deployment
## Docs: http://hexo.io/docs/deployment.html
deploy:
  type: git
  repository: https://github.com/FrannieYi/FrannieYi.github.io.git
  branch: master
```

以上两步做完后，执行 hexo d
如果没有报错，你是幸运的。
本人在这个坑里栽了无数次，系统报错

    ERROR Deployer not found: Git
最后发现这个错误是因为少运行了一行代码：

    npm install hexo-deployer-git --save


运行完以上代码终于，本人泪流满面的看到了自己亲手搭建的博客。

