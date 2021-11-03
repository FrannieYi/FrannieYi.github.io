---
title: JavaSccript语言精粹
date: 2017-07-20 15:01:07
tags: 
    - 笔记
---

### 知识点

<!-- more -->

* 字符串是不可变的。一旦被创建就永远无法改变。
* typeof运算符产生的值有‘number’ ‘string’ ‘boolean’ ‘undefined’ ‘function’ ‘object’。
* 一个属性存取表达式用于指定一个对象或数值的属性或元素。
* 原型连接只有在检索值的时候才被用到。如果我们尝试弃获取对象的某个属性值，但该对象没有此属性名，那么JavaScript会试着从原型对象中获取属性值。如果那个原型对象也没有该属性，那么再从它的原型中寻找，依次类推，只到该过程最后到达终点Object.prototype。如果想要的属性完全不存在于原型练中，那么结果就是undefined值。这个过程为**委托**。
* 用for in的方法来遍历一个对象中的所有属性名，属性名出现的顺序是不确定的，因此要对任何可能出现的顺序有所准备。若想自定义顺序最好的方式是避免使用for in，而是通过建立数组的形式将属性存入，然后用for循环从数组中依次获取属性。这样也不用担心可能发掘出原型链中的属性，并且我们按正常的顺序取得了它的值。
* 最小化使用全局变量的方法之一是为你的应用只创建一个唯一的全局变量。资源都纳入一个名称空间之下，你的程序与其他应用程序、组件或类库之间发生冲突的可能性就会显著降低。
* 函数对参数值不会进行类型检查：任何类型的值都可以被传递给任何参数。
* apply方法让我们构建一个参数数组传递给调用函数。
* 因为语言的一个设计错误，arguments并不是一个真正的数组。它只是一个“类似数组（array-like）”的对象。arguments拥有一个length属性，但它没有任何数组的方法。
* **尾递归**是一种在函数的最后执行递归调用语句的特殊形式的递归。
* 作用域的好处是内部函数可以访问定义它们外部函数的参数和变量（除了this和arguments）。
* **继承**的两种服务：
 * 是代码重用的一种形式。（如果一个新的类与一个已经存在的类大部分相似，那么你只需要具体说明其不同点即可。代码重用的模式极为重要，因为它们可以显著的减少软件开发的成本。）
 * 另一个好处是引入了一套类型系统的规范。（由于程序员无需编写显式类型转换的代码，他们的工作量将大大减轻，这是一件很好的事情，因为类型转换会丧失类型系统在安全上的优势。）
* 构造一个生成对象的函数：
 * 1.创建一个新的对象。
 * 2.有选择地定义私有的实例变量和放方法。
 * 3.给这个新对象扩充方法。
 * 4.返回那个新对象。
* 数组的length属性的值是这个数组的最大整数属性名加上1，它不一定等于数组里属性的个数。
* for in 用来遍历数组的所有属性，但遗憾的是，for in 无法保证属性的顺序。
* 数组和对象的使用区别：当属性名是小而连续的整数时，你应该使用数组；否则，使用数组。
* 排序的稳定性是指排序后的数组中相等值的相对位置没有发生改变，而不稳定性排序则会改变相等值的相对位置。

### 方法篇

##### Array

* array.concat(item...):产生新的数组，和它类似功能的array.push(item)。
* array.join(separator):把一个array构造成一个字符串。
* array.pop():移除数组的最后一个元素，并返回这个元素。
* array.push(item...):把一个或多个参数item附加到一个数组的尾部。
* array.reverse():反转array里的元素的顺序，并返回array本身。
* array.shift():移除数组array中的第一个元素，并返回该元素。
* array.slice(start,end):对array中的一段做浅复制。
* array.sort(comparefn):对array中的内容进行排序。
* array.splice(start,deleteCount,item...):从array中移除一个或多个元素，并用新的item替换它们。
* array.unshift(item...):像push方法一样，用于把元素添加到数组中，但它是把item插入到array的开始部分，不是尾部。返回array的新的length。

#### Function

* function.apply(thisArg,argArray):调用function，传递一个会被绑定到this上的对象和一个可选的数组作为参数。

#### Number

* number.toExponential(fractionDigits):把这个number转换成一个指数形式的字符串。
* number.toFixed(fractionDigits):把这个number转换成为一个十进制数形式的字符串。可选择参数控制其小数点后的数字位数。
* number.toPrecision(precision):把这个number转换成一个十进制数形式的字符串。可选择参数控制数字的精度（0~21）。
* number.toString(radix):把这个number转换成字符串。可选择参数控制基数（2~36，默认是10）。

#### Object

* object.hasOwnProperty(name):判断属性是否存在，不会检查原型链中的同名属性。

#### RegExp

* regexp.exec(string):最强大（和最慢），看书理解。
* regexp.test(string):最简单（和最快），匹配就返回true，否则返回false，不要对这个方法使用g标识。

#### String

* string.charAt(pos):返回在string中pos位置处的字符。
* string。charCodeAt(pos):返回在string中pos位置的字符的字符码位（以整数形式表示）。
* string.conecat(string...):把其他的字符串连接在一起来构造一个新的字符串。
* string.indexOf(searchString,postion):在string中查找另一个字符串searchString。找到就返回第一个匹配字符的位置，否则返回-1。可选参数position从字符串的哪个位置开始查找。
* string.lastIndexOf(searchString,position):从字符串的末尾开始查找。
* string.lacaleCompare(that):比较两个字符串。
* string.match(regexp):让字符串和一个正则表达式进行匹配。
* string.replace(searchValue,replaceValue):对string进行查找和替换操作，并返回一个新的字符串（如果searchValue不是一个带有g标识的正则表达式那就只会替换第一个）。
* string.search(regexp):接收一个正则表达式作为对象参数返回匹配的首字符位置。
* string.slice(start,end):复制string的一部分来构造一个新的字符串。
* string.split(separator,limit):把这个string分割成片段来创建一个字符串数组。
* string.substring(start,end):和slice方法一样，只是他不能处理负数参数。
* string.toLocaleLowerCase():返回一个新字符串，使用本地化的规则将这个string中所有字母转换成小写格式。
* string.toLacaleUpperCase():返回一个新字符串，使用本地化的规则将这个string中所有字母转换成大写格式。
* string.toLowerCase():返回一个新的字符串，这个string中所有字母都被转换为小写格式。
* string.toUpperCase():返回一个新的字符串，这个strnig中所有字母都被转换为大写格式。
* string.fromCharCode(char...):函数根据一串数字编码返回一个字符串。