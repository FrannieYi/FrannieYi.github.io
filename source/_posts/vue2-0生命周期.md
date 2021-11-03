---
title: vue2.0生命周期
date: 2017-06-02 10:03:58
tags: 
    - vue
    - Javascript
    - 分享
---

### 图解

<!-- more -->

![lifecycle][1]


  [1]: http://i4.buimg.com/519918/2060f4c49f431cd5.png



### 函数解释

* `beforeCreate`
在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。

* `created`
实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

* `beforeMount`
在挂载开始之前被调用：相关的 render 函数首次被调用。

* `mounted`
el 被新创建的vm.\$el替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。

* `beforeUpdate`
数据更新时调用，发生在虚拟DOM重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

* `updated`
由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。

* `beforeDestroy`
实例销毁之前调用。在这一步，实例仍然完全可用。

* `destroyed`
Vue 实例销毁后调用。调用后，Vue实例指示的所有东西都会解除绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

### 例子
```
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/vue/2.1.3/vue.js"></script>
</head>
<body>

<div id="app">
     <p>{{ message }}</p>
</div>

<script type="text/javascript">

  var app = new Vue({
      el: '#app',
      data: {
          message : "Hello!"
      },
       beforeCreate: function () {
                console.group('beforeCreate 创建前状态===============》');
               console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
               console.log("%c%s", "color:red","data   : " + this.$data); //undefined
               console.log("%c%s", "color:red","message: " + this.message)
        },
        created: function () {
            console.group('created 创建完毕状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el); //undefined
               console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
               console.log("%c%s", "color:red","message: " + this.message); //已被初始化
        },
        beforeMount: function () {
            console.group('beforeMount 挂载前状态===============》');
            console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
            console.log(this.$el);
               console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
               console.log("%c%s", "color:red","message: " + this.message); //已被初始化
        },
        mounted: function () {
            console.group('mounted 挂载结束状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
            console.log(this.$el);
               console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
               console.log("%c%s", "color:red","message: " + this.message); //已被初始化
        },
        beforeUpdate: function () {
            console.group('beforeUpdate 更新前状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);
               console.log("%c%s", "color:red","data   : " + this.$data);
               console.log("%c%s", "color:red","message: " + this.message);
        },
        updated: function () {
            console.group('updated 更新完成状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);
               console.log("%c%s", "color:red","data   : " + this.$data);
               console.log("%c%s", "color:red","message: " + this.message);
        },
        beforeDestroy: function () {
            console.group('beforeDestroy 销毁前状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);
               console.log("%c%s", "color:red","data   : " + this.$data);
               console.log("%c%s", "color:red","message: " + this.message);
        },
        destroyed: function () {
            console.group('destroyed 销毁完成状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);
               console.log("%c%s", "color:red","data   : " + this.$data);
               console.log("%c%s", "color:red","message: " + this.message)
        }
    })
</script>
</body>
</html>
```

* 用浏览器打开

> beforecreated：el 和 data 并未初始化
created:完成了 data 数据的初始化，el没有
beforeMount：完成了 el 和 data 初始化
mounted ：完成渲染

* 关于更新`app.message= 'vue';`

* 关于销毁`app.$destroy();`

> 销毁完成后，我们再重新改变message的值，vue不再对此动作进行响应了。但是原先生成的dom元素还存在。可以这么理解，执行了destroy操作，后续就不再受vue控制了。

* 生命周期函数的一些用法

> beforecreate : 举个栗子：可以在这加个loading事件
created ：在这结束loading，还做一些初始化，实现函数自执行
mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
beforeDestory： 你确认删除XX吗？
destoryed ：当前组件已被删除，清空相关内容
