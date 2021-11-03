---
title: BOM知识点
date: 2017-04-06 08:56:57
tags: 
	- BOM
	- 前端
	- 笔记
---

## BOM

<!-- more -->

### 一、window对象

#### 1.全局作用域

* 全局变量会变成window对象的属性。
* 全局变量不能通过delete操作符删除，而直接在window对象上的定义的属性可以。

```
var age=29;
window.color="red";
//在IE<9时抛出错误，在其他所有浏览器中都返回false
delete window.age;
//在IE<9时抛出错误，在其他所有浏览器中都返回true
delete window.color;//returns true

alert(window.age);//29
alert(window.color);//undefined
```

* 尝试访问未声明变量会抛出错误，但是通过查询window对象，可以知道某个可能未声明变量是否存在。

#### 窗口关系及框架

* 除非最高层窗口是通过window.open()打开的，否则其window对象的name属性不会包含任何值。
* 在使用框架的情况下，浏览器中会存在多个Global对象。
* 在每个框架中定义的全局变量会自动变成框架中window对象的属性。
* 由于每个window对象都包含原生类型的构造函数，因此每个框架都有一套自己的构造函数，这些构造函数一一对应但并不相等。

#### 窗口位置

* screenLeft/screenTop:分别用于表示相对于屏幕左边和上边的位置。
* screenY/screenX:提供相同的窗口位置属性。``

```
var leftPos=(typeof window.screenLeft=="number")?window.screenLeft:window.screenX;
var topPos=(typeof window.screenLeft=="number")?window.screenTop:window.screenY;
```

注意：最终无法在跨浏览器的条件下取得窗口左边和上边的精确坐标值。

* moveTo()两个参数:移动到什么位置去。
* moveBy()两个参数:向什么地方移动。
两个函数不适用与框架，只能对最外层的window对象使用。

#### 窗口大小

* innerWidth/innnerHeight:返回浏览器本身的尺寸。
* outerWidth/outerHeight:返回浏览器本身的尺寸。
* document.documentElement.clientWidth/document.documentElement.clientHeight

```
var pageWidth=window.innerWidth;
    pageHeight=window.innerHeight;
if(typeof pageWidth!="number"){
    if(document.compatMode=="CSS1Compat"){
    //通过检查document.compatMode来确定页面是否处于标准模式
        pageWidth=document.documentElement.clientWidth;
        pageHeight=document.documentElement.clientHeight;
    }
    else{
        pageWidth=document.body.clientWidth;
        pageHeight=document.body.clientHeight;
    }
}
```

* resizeTo()两个参数:调整到。
* resizeBy()两个参数:接受新窗口与原窗口的宽度和高度之差。
两个函数不适用与框架，只能对最外层的window对象使用。

#### 导航和打开窗口

* window.open():既可以导航到一个特定的URL，也可以打开一个新的浏览器窗口。接收四个参数：1.要加载的URL 2.窗口目标 3.一个特定的字符串 4.一个表示新页面是否取代浏览器历史纪录中当前加载页面的布尔值<br>方法会返回一个指向新窗口的引用。
 * 1.打开窗口
 * 2.安全限制
 * 3.弹出窗口屏蔽程序

```
var blocked=false;

try{
    var wroxWin=window.open("http://www.wrox.com", "_blank");
    if(wroxWin==null){
        blocked=true;
    }
}
catch(ex){
    blocked=true;
}
if(blocked){
    alert("The popup was blocked!");
}

```

在任何情况下，以上代码都可以检测出调用window.open()打开的弹出窗口是不是被屏蔽来了。但要注意的是，检测窗口是否被屏蔽只是一方面，它并不会阻止浏览器显示与被屏蔽的弹出窗口有关的消息。

#### 间歇调用和超时调用

* JavaScript是单线程语言，但它允许通过设置超时值和间歇值来调度代码在特定的时刻执行。
* setTimeout():<br>
 * 接受两个参数：1.要执行的代码（不建议传字符串，因为可能导致性能损失，建议用函数） 2.以毫秒表示的时间
 * 该方法会返回一个数值ID，表示超时调用。这个超时调用ID是计划执行代码的唯一标识符，可以通过它来取消超时调用。
* setInterval():
 * 与超时调用类似，但是它会按照指定的时间间隔重复执行代码，直到间歇调用被取消或者页面被卸载。
 * 也接受两个参数：1.要执行的代码 2.以毫秒表示的时间
* clearTimeout():取消超时调用或者间歇时间调用。
* 在开发环境下，很少使用真正的间歇调用，原因是后一个间歇调用可能会在前一个间歇调用结束之前启动。所以，最好不要使用间歇调用。
* 一般认为，使用超时调用来模拟间歇调用的是一种最佳模式。

```

var num=0;
var max=10;
function incremenetNumber(){
    num++;
    //如果执行次数尚未达到max设定的值，则设置另一次超时调用
    if(num<max){
        setTimeout(incrementNumber,500);
    }
    else{
        alert("Done!");
    }
}

setTimeout(incrementNumber,500);

```

#### 系统对话框

* alert():向用户显示一个系统对话框，其中包含一个制定的文本和一个OK（确定）按钮。
* confirm():向用户显示“警告”对话框，返回true或者flase。
* prompt():显示一个“提示”框，用于提示用户输入一些文本。接受两个参数：1.要显示给用户的文本提示 2.文本输入域的默认值。
* window.find():显示“查询”对话框。
* window.print():显示“打印”对话框。

### 二、location对象

#### 查询字符串参数

* 解析查询字符串的函数

```
function getQueryStringArgs () {
	// 解析查询字符串

	//取得查询字符串并去掉开头的问号
	var qs=(location.search.length>0?location.search.substring(1):""),

	//保存数据对象
	args={},

	//取得每一项
	items=qs.length?qs.sqlit("&"):[],
	item=null,
	name=null,
	value=null,

	//在for循环中使用
	i=0,
	len=items.length;

	//逐个将每一项添加到args对象中
	for (var i = 0; i < len ; i++) {
		item=items[i].sqlit("=");
		name=decodeURIComponent(item[0]);
		value=decodeURIComponent(item[1]);

		if (name.length) {
			args[name]=value;
		}
	}

	return args;
}
```

#### 位置操作
改变浏览器的位置

* assigned()：`location.assign("http://www.wrox.com");`
* location.href
* window.location
* replace()：让用户无法回到前一个页面，历史记录中不会生成新的记录。
* raload()：作用是重新加载当前显示的页面。最好将其放在代码的最后一行。

### 三、navigation对象

#### 检查插件

* 检查插件

```
//检查插件（在IE中无效）
function hasPlugin (name) {
	name=name.toLowerCase();
	for (var i = 0; i < navigator.plugins.length; i++) {
		if (navigator.plugins[i].name.toLowerCase().indexOf(name)>-1) {
			return true;
		}
	}
	return false;
}

//检测flash
//alert(hasPlugin("Flash"));

//检测QuickTime
//alert(hasPlugin("QuickTime"));

//检测IE中的插件
function hasIEPlugin (name) {
	try{
		new ActiveXObject(name);
		return true;
	}
	catch(ex){
		return false;
	}
}

//检测flash
//alert(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));

//检测QuickTime
//alert(hasPlugin("QuickTime.QuickTime"));
```

#### 注册处理程序

* registerContentHandler()：接收三个参数：1.要处理的MIME类型。2.可以处理该MIME类型的页面的URL。3.应用程序的名称。
* registerProtocolHandler()：接收三个参数：1.要处理的协议。2.处理该协议的页面的URL。3.应用程序的名字。

### 四、screen对象

### 五、history对象

* go()
* back()
* forward()
* lengh属性