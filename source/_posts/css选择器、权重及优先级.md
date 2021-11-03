---
title: css选择器、权重及优先级
date: 2017-03-21 15:11:22
tags: 
	- 笔记
	- 分享
	- 前端
---



## 遇到的问题
<!-- more -->
1. 子元素使用padding会影响父元素。（解决方法是给父元素用padding）
2. 背景图片的设置。（已解决）

---

## 分享会（胡小青）

# CSS选择器、权重及优先级

### 选择器的种类

- 通配符选择器（＊）
- id选择器（#ID）
- 类选择器（.className）
- 标签选择器(E)
- 后代选择器（Ｅ Ｆ）
- 子元素选择器(E>F)
- 相邻兄弟元素选择器(E + F)
- 群组选择器（selector1,selector2,...,selectorN）
- 交集选择器（E.className)
- 属性选择器
- 伪类选择器

```
//html
<div id="share">id选择器</div>
<div class="share">类选择器</div>
<div>
	<em>标签选择器</em>
</div>
<div>
	<p>后代选择器</p>
	<p><span>非直系后代</span></p>
</div>
<div>
	<p>子元素选择器</p>
</div>
<div>
	<p>相邻兄弟1</p>
	<span>相邻兄弟2</span>
</div>
<div>
	<h1>群组选择器</h1>
	<h2>群组选择器</h2>
	<h3>群组选择器</h3>
</div>

//css
*{
	margin: 0;
	padding: 0;
}
#share{
	width: 200px;
	background: #cfd2d1;
}
.share{
	width: 200px;
	background: #e9eeec;
	margin-bottom: 10px;
}
div.share {
	border: 2px solid #000;
}
em{
	background: #f5f6f6;

}
div p {
	background: #e9eeec;
}
div p span{
	width: 200px;
	background: #acb1af;
}

div > p {
	width: 200px;
	background: #adcec0;
}
p + span {
	width: 200px;
	background: #9d9e9e;
}
h1,h2,h3 {
	width: 200px;
	background: #afead2;
}

```

------

#### 属性选择器

| 属性选择器|  功能 |  |
|:-----:|:------:|:-----:|
|E[att]|匹配所有具有att属性的E元素，不考虑它的值。|css2|
|E[att=val]|匹配所有att属性等于"val"的E元素|css2|
|E[att~=val]|匹配属性包含val的元素，并设置其样式：注意是val，所以val-ab这样不算| css2 |
|E[att\|=val]|匹配所有att属性具有多个连字号分隔（hyphen-separated）的值、其中一个值以"val"开头的E元素，主要用于lang属性|css2|
| E[att^=val]  | 选择匹配的元素E，E定义了属性att,属性值以val开头的字符串 |css3|
|E[arr$=val]|选择匹配的元素E，E定义了属性att,属性值以val结尾的字符串|css3|
|E[att*=val]|选择匹配的元素E，E定义了属性att,属性值包含val的字符串，也就是val可以在任意位置|css3|


```
//html
<a href="xxx.pdf">我链接的是PDF文件</a>
<a href="#" class="icon">我类名是icon</a>
<a href="#" title="我的title是more">我的title是more</a>
<a href="#" name="about" lang="en-zhN">选择含有about的元素</a>
<a href="#" name="about-ab" lang="en">选择含有about的元素</a>
<a href="#" name="about ab">选择含有about的元素</a>

//css
a[href="xxx.pdf"] {
	border: 1px solid #000;
}
a[href$=pdf]{
  background: orange;
  color: #fff;
}
a[class^=icon] {
  background: #55e2a8;
  color:#fff;
}
a[title*=more] {
  background: #7a92e9;
  color: #fff;
}
a[name~=about] {
	background: #55e2a8;
}
a[lang|=en] {
	border: 1px solid #000;
}
```

### 伪类选择器 ***

#### 动态伪类

- 锚点伪类
  - `:link`  链接访问前状态
  - `:visited`  链接访问后状态
  - `:hover`  鼠标悬浮链接的状态
  - `:active`  激活链接时的状态
>伪类的顺序：link - visited -> hover -> active

- 用户行为伪类
 - `:hover` 用于当用户把鼠标移动到元素上面时的效果
 - `:active` 用于用户点击元素那一下的效果
 - `:focus`用于元素成为焦点，这个经常用在表单元素上
 >顺序： focus - > hover -> active
IE6下只有`<a>`支持`:hover`，IE6,7都不支持`:focus`、`:active`

```
//html
<a href="#" class="link">link效果</a>
<a href="#" class="visited">visited效果</a>
<a href="#" class="hover">hover效果</a>
<a href="#" class="active">active效果</a>
<input type="text" name="">

//css
.link:link {
	background: pink;
}
.visited:visited{
	background: #cca;
}
.hover:hover {
	background: lightblue;
}
.active:active {
	background: lightgreen;
}
input:focus {
	outline: 2px solid red;
}

```

#### UI元素状态伪类

这类伪类主要针对form元素

| 伪类 |  功能 |适用元素|
|:-----:|:-----:|
| `:enabled` |匹配表单中激活的元素| type="text"|
| `:disabled`|匹配表单中禁用的元素| type="text"|
| `:checked` |匹配表单中被选中的radio（单选框）或checkbox（复选框）元素| type="radio" |
|`::selection`|	匹配用户当前选中的元素|


```
input[type="radio"]:disabled {
	background-color: red;
}
```

#### 结构伪类

-  `:first-child`*  选择某个元素的第一个子元素,IE6不支持；
- `:last-child`* 选择某个元素的最后一个子元素；
- `:nth-child()`* 选择某个元素的一个或多个特定的子元素，IE6-8，Firefox3.0不兼容；
  >:nth-child(length)&ensp;&ensp;参数是具体数字
   :nth-child(n)&ensp;&ensp;参数是n,n从0开始计算
   :nth-child(n*length)&ensp;&ensp;n的倍数选择，n从0开始算
   :nth-child(n+length)&ensp;&ensp;选择大于length后面的元素
	:nth-child(-n+length)&ensp;&ensp;选择小于length前面的元素
	:nth-child(n*length+1)&ensp;&ensp;表示隔几选一

```
li:last-child {
	background: #f9f57a;
}
li:nth-child(2) {
	background: #c8cac9;
}
li:nth-child(2n) {
	border: 3px solid red;
}
li:nth-child(n+3) {
	border: 3px solid yellow;
}
li:nth-child(-n+3) {
	border: 3px solid yellow;
}
```

- `:nth-last-child()`选择某个元素的一个或多个特定的子元素，从这个元素的最后一个子元素开始算，IE6-8，Firefox3.0不兼容；
- `:nth-of-type()`选择指定的元素,与nth-child类似也可以使用表达式，IE6-8，Firefox3.0不兼容；
- `:nth-last-of-type()`选择指定的元素，从元素的最后一个开始计算；
- `:first-of-type`选择一个上级元素下的第一个同类子元素，与first-child类似，不过是指定了元素类型；
- `:last-of-type`选择一个上级元素的最后一个同类子元素；
- `:only-child`选择的元素是它的父元素的唯一一个子元素，兼容到IE9；
- `:only-of-type`选择一个元素是它的上级元素的唯一一个相同类型的子元素，IE6-8，Firefox3.0不兼容；
- `:empty`选择的元素里面没有任何内容，兼容到IE9；
- `:not()`选择不匹配的元素，兼容到IE9；
- `target` 匹配文档中特定"id"点击后的效果，兼容到IE9。

```
//html
<a href="#test">test</a>
<div>第一个div</div>
<p>第一个p</p>
<div id="test">第二个div</div>
<p>第二个p</p>
<p></p>

//css
div:not{
	background-color: lightgrey;
}
p:empty{
	height:30px;
	width:30px;
	background:pink;
}
div:target{
	color:blue;
}
```

#### 伪元素选择器

| 伪元素 |  功能 |
|:-----:|:-----:|
|`:first-line`|	匹配元素的第一行|
| `:first-letter`|	匹配元素的第一个字母|
| `:before`	|元素之前插入生成的内容|
| `:after`|  元素之后插入生成的内容|
| `:selecton`| 改变浏览网页选中文的默认效果|

伪元素可以用`::`也可以用`:`
关于first-letter使用条件比较苛刻，一般只有
有兴趣可以参考[深入CSS ::first-letter伪元素及其实例](http://www.zhangxinxu.com/wordpress/2016/09/css-first-letter-pseudo-element/)

```
li::first-letter {
	font-size: 56px;
}
```

### 伪类和伪元素的区别

>
- CSS 伪类用于向某些选择器添加特殊的效果。
- CSS 伪元素用于将特殊的效果添加到某些选择器。
两者都与选择器相关，可以添加一些“特殊”的效果。

>区别：
&ensp;&ensp;&ensp;&ensp;伪类的效果可以通过添加一个实际的类来达到，而伪元素的效果则需要通过添加一个实际的元素才能达到

**伪类**

```
//html
<p>
    <i>first</i>
    <i>second</i>+
</p>

//css
p>i:first-child {
    color: red
}
```

![伪类](https://sfault-image.b0.upaiyun.com/28/5a/285a5d7bc8c979311d637f576914ccea_articlex)

**伪类** `:first-child` 添加样式到第一个子元素
如果我们不使用伪类，而希望达到上述效果，可以这样做：

```
//html
<p>
    <i class="first-child">first</i>
    <i>second</i>
</p>

//css
.first-child {
    color: red
}
```
> 我们给第一个子元素添加一个类，然后定义这个类的样式。

**伪元素：**
```
//html
<p>I am stephen lee.</p>

//css
p:first-letter {
    color: red
}
```

![伪元素](https://sfault-image.b0.upaiyun.com/47/d5/47d55dc18a1c34ba5ca9dc53faccb623_articlex)

伪元素 `:first-letter` 添加样式到第一个字母
那么如果我们不使用伪元素，要达到上述效果，我们可以这样做：

```
//html
<p>
    <span>I</span> am stephen lee.
```



