---
title: NodePPT
date: 2018-04-11 14:38:20
tags:
    - nodeppt
    - 学习
---

> 用了好几次这个ppt，自己确实觉得这是用过的ppt中最简洁，B格最高的ppt，但是每次做都要去看原文档，十分的不方便，因此自己写一篇文章，将经常使用的一些命令和参数记录下来。
例子：https://yangkunyi.com/Share/ppt.html
原文：https://github.com/ksky521/nodeppt

<!-- more -->

## 简介

> 这是一款网页ppt库，只需要编辑相应的md文档就可以做出演示ppt，支持markdown,html,css,js等不同的语言，十分的方便。

### 常用命令

#### 本地跑md文档

```
// port是端口号
nodeppt start -p <port>
```

#### 生成html文档

```
// 默认生成publish文件夹
nodeppt generate filename -a
```

### 常用主题和动画

#### 主题

`colors`-`moon`-`blue`-`dark`-`green`-`light`

#### 翻页动画

- kontext
- vkontext
- circle
- earthquake
- cards
- glue
- stick
- move
- newspaper
- slide
- slide2
- slide3
- horizontal3d
- horizontal
- vertical3d
- zoomin
- zoomout
- pulse

#### 单页动画语法

> `{:&.动画}`

---

> 因为自己又经常将ppt放到GitHub上去，所以也顺便记一下git的常用指令

## git常用指令

#### 从本地上传到仓库的步骤

1. `git init`
2. `git add .`
3. `git commit -m '备注'`
4. `git remote origin add 仓库地址`
5. `git pull` //当仓库不为空的时候需要做的工作
6. `git push`
7. `git status` //查询状态

![git指令][1]


  [1]: http://otn4ut2th.bkt.clouddn.com/bloggithub.png
