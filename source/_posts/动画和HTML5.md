---
title: 动画和HTML5
date: 2017-03-23 14:33:24
tags: 
    - Javascript
    - 动画
    - HTML5
---



### 用JavaScript实现动画效果
<!-- more -->
#### 知识点

* position属性：
 * static：默认值，意思是有关元素将按照它们在标记里出现的先后顺序出现在浏览器窗口里。
 * relative：与static相似，区别是relative的元素还可以（通过应用float属性）从文档的正常显示顺序里脱离出来。
 * absolute：我们就可以将它摆在“容器”的任何位置。这个容器要么是文档本身，要么是一个有着fixed或absolute属性的父元素。这个元素在原始标记里面出现的位置与它显示位置无关，因为它的显示位置由top，left，right和bottom等属性决定。你可以使用像素或百分比为单位设置这些属性。
* overflow属性：
 * visible：不裁剪溢出内容。
 * hidden：隐藏溢出内容。
 * scroll：类似鱼hidden，浏览器将对溢出的内容进行隐藏，但显示一个滚动条以便让用户能够滚动看到内容的其他部分。
 * auto：类似于scroll，但浏览器只在确实发生溢出时才显示滚动条，如果没有溢出就不显示滚动条。
#### 时间
* setTimeout：能够让某个函数在经过一段预定的时间之后才开始执行。
 * 函数有两个参数：第一个是字符串，执行的函数名；第二个是数值，以毫秒为单位设定了需要经过多长时间才开始执行第一个参数所给出的函数。
 * `setTimeout("function",interval)`
 * 在绝大多数情况下，将函数调用赋值给一个变量是一个好主意。
 * `varible=setTimeout("function",interval)`
 * 取消某个正在排队等候执行的函数：
 * `clearTimeout(variable)`

### HTML5

#### video：

* currentTime：返回当前播放的位置，以秒表示；
* duration：返回媒体的总时长，以秒表示，对于流媒体返回无穷大； * paused：表示媒体是否处于暂停状态；
* 触发脚本的事件：
* play：在媒体播放开始时发生；
* pause：在媒体暂停是发生；
* loadeddata：在媒体可以从当前播放位置开始播放时发生；
* ended：在媒体已播放完成而停止时发生；
* 别忘了给`<video>`元素叫control属性：
* `<video src="movie.ogv" control>`

#### 表单：

新的输入控件类型

* email，用于输入电子邮件地址；
* url，用于输入URL；
* date，用于输入日期和时间；
* number，数值；
* ranger，生成滑动条；
* search，搜索框；
* tel，电话号码；
* color，选择颜色；
新的属性

* autocomplete，用于为文本（text）输入框添加一组建议的输入项；
* autofocus，让表单元素自动获得焦点；
* form，对<form>标签外部的表单元素分组；
* min，max和step，用在范围（range）和数值（number）输入框中；
* pattern，定义一个正则表达式，以便验证输入的值；
* placeholder，在文本输入临时性的提示信息；
* required，表示必填；
