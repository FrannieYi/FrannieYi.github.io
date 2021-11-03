---
title: DOM知识点
date: 2017-04-10 19:07:45
tags: 
    - DOM
    - JS
    - 前端
---

### DOM
<!-- more -->
D：document（文档）
O：object（对象）：用户定义对象，内建对象，宿主对象
M：model（模型）：“map”，树
#### 节点
* 元素节点（element node）：body，ul，li......
获取元素节点的方法：
 * 通过元素id（getElementById ）
 * 通过标签名（getElementsByTagName）
 * 通过类名（getElementsByClassName）
* 属性节点（attribute node）
`<p title="yang">hahahahahahha</p> `
title="yang"是一个属性节点
属性节点总是包含在元素节点中
* 文本节点
#### 获取和设置属性
* getAttribute（获取）
```
//例子
var paras=document.getElementsByTagName("p");
for(var i=0;i<paras.lengeh;i++){
    alert(paras[i].getAttribute("title"));
}
```
* setAttribute（设置）
若属性本不存在，实际就将完成两项操作：1.创建属性，2.设置值。
注：并不会改变源文件扽静态内容。
```
//例子
var shopping=document.getElementById("purchases");
shopping.setAttribute("title","a list of goods");
```

### 实例：JavaScript图片库
* childNodes属性
用来获取任何一个元素的所有子元素。
```
//获取body所有子元素个数的函数例子
function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}
window.onload=countBodyChildren;
```
* nodeType属性
 * 元素节点的nodeType属性值是1。
 * 属性节点的nodeType属性值是2。
 * 文本节点的nodeType属性值是3。
`alert(body_element.nodeType); `
* nodeValue属性
得到和设置一个节点的值。
`alert(discription.nodeValue); `
* firstChild和lastChild属性
这两个属性都是为了个简便且直观的获取对应的元素。

### 注意点
* DOM是一套对文档内容进行抽象和概念化的方法。
* 变量名中不能包含空格和标点符号（美元$符号除外）。
* 变量名允许包含字母，数字，美元符号和下划线（但第一个字符不能是数字）。
* 变量申明实例：my_mood或者myMood（峰驼式camel case：首选）。
* Javascript是弱类型语言，不需要对变量进行类型声明。
* 变量可以包含操作。
* 字符串可以做拼接操作。
* innerHTML属性和documen.write方法都是HTML的专有属性。
` var message="I am feeling"+"happy"; `
* 每个元素节点都是一个对象。