---
title: Daily3
date: 2019-07-11 22:54:57
tags:
    - 日报
    - SQL
---

> 写在前面：人啊，总是对自己求而不得的东西有着无比的向往，一旦得到了又会是怎么样呢？

<!-- more -->

## 工作

比较轻松的一天，工作是自己喜欢又沉浸其中的，我很高兴自己还保持着那样一颗平常心，尽管周遭事物与人都在改变。

## 学习

#### 筛选数据

```
//相等检验，使用WHERE子句
SELECT prod_name,prod_price
FROM Products
WHERE prod_price＝3.49;

//检查单个值
SELECT prod_name,prod_price
FROM Products
WHERE prod_price<10;

//不匹配检查
SELECT vend_id,prod_name
FROM Products
WHERE vend_id<>'DLL01';(or !＝)

//范围值检查
SELECT prod_name,prod_price
FROM Products
WHERE prod_price BETWEEN 5 AND 10;

//空值检查
SELECT cust_name
FROM Customers
WHERE cust_email IS MULL;
```
