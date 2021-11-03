---
title: Daily1
date: 2019-07-08 22:44:09
tags:
    - 日报
    - SQL
---

> 说在前面，今天雨，我希望我们在一起。

<!-- more -->

## 工作

* 今天结束了在线的工作，总的来说在线的工作其实没有热线那么累，热线自己还会将嗓子说哑了，但是在线就是开心的在聊天，不能解决也还有疑难可以提，嘿嘿。
* 项目的话，只能说自己考虑的方面还是不够全面，能想的确实是想了，但是能做到却不一定能做，但是自己只要把自己能做的做到就可以了。
* 这个月就有一个述职了，所以要开始准备了。
* 其他好像没什么了吧，就是自己接触到行业的知识还不够吧。

## 学习

#### SQL

##### 检索数据(SELECT语句)
```
//检索单个列表
SELECT prod_name
FROM Products;

//检索多个列表
SELECT prod_name,prod_id，prod_price
FROM Products;

//检索所有列
SELECT *
FROM Products;

//检索不同的值
SELECT DISTINCT vend_id
FROM Products;

//限制结果
(SQL\Access)
SELECT top 5 prod_name
FROM Products;
(DB2)
SELECT prod_name
FROM Products
FETCH FIRST 5 ROWS ONLY;
(Oracle)
SELECT prod_name
FROM Product
WHERE ROWNUM <＝5
（MySQL\MariaDB\PostgreSQL\SQLite）
SELECT prod_name
FROM Products
LIMIT 5;

//为了得到后五行数据
SELECT prod_name
FROM Products
LIMIT 5 OFFSET 5;
```
