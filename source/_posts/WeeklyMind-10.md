---
title: WeeklyMind-10
date: 2019-07-14 22:47:35
tags:
    - 周报
    - SQL
---

> 说在前面：前天看了一个数据提取的sql，发现自己的差距还很大呀，所以这个周末会继续学习。

<!-- more -->

## 工作

* 保证自己的心态没有问题就好了，一切都在开始慢慢步入正轨，跟同事的第一次聚餐也结束了，大家这两个月的实习生活也十分的精彩，希望在每个小伙伴在接下来的工作里都能有所成长和发展。
* 收到一个可以写点东西的消息，这个周末会思考一下，如果能有所展现也是不错的。

## 学习

#### 一、何为战略设计思维（看书）

### 二、SQL

##### 组合WHERE子句
```
//AND 操操作符
SELECT prod_name,prod_price,prod_id
FROM Products
WHERE vend_id＝'DLL01' AND prod_price<＝4;

//OR 操作符
SELECT prod_name,prod_price,prod_id
FROM Products
WHERE vend_id＝'DLL01' OR vend_id＝'BRS01';

//求值顺序（AND先于OR）
SELECT prod_name,prod_price,prod_id
FROM Products
WHERE (vend_id＝'DLL01' OR vend_id＝'BRS01')
      AND prod_price>＝10;

//IN操作符
SELECT prod_name,prod_price,prod_id
FROM Products
WHERE vend_id IN ('DLL01','BRS01')
ORDER BY prod_name;

//同上功能
SELECT prod_name,prod_price,prod_id
FROM Products
WHERE vend_id ＝ 'DLL01' OR vend_id ＝ 'BRS01'
ORDER BY prod_name;

//NOT操作符(等通于不等于的功能)
SELECT prod_name
FROM Products
WHERE NOT vend_id ＝ 'DLL01'
ORDER BY prod_name;
```

* 为什么要用IN操作符？
 * 在很多合法选项时，IN操作符的语法更清晰，更直观
 * 在与其他AND和OR操作符组合使用IN的时候，求值顺序更加容易管理
 * IN操作符一般比一组OR操作符执行得更快
 * IN最大的优点是可以包含其他SELECT语句，能够更动态地建立WHERE子句

##### 用通配符进行过滤

```
//LIKE操作符
// % 表示任何字符出现任意次数
SELECT prod_name,prod_id
FROM Products
WHERE prod_name LIKE 'Fish%';

SELECT prod_name,prod_id
FROM Products
WHERE prod_name LIKE '%bean bag%';

SELECT prod_name,prod_id
FROM Products
WHERE prod_name LIKE 'F%y';

// _ 与 % 类似，但只匹配单个字符
SELECT prod_name,prod_id
FROM Products
WHERE prod_name LIKE '__ inch teddy bear';

// [] 用来指定一个字符集
SELECT cust_contact
FROM Customers
WHERE cust_contact LIKE '[JM]%'
ORDER BY cust_contact;

// 反义用^来表示(或者用NOT来表示)
SELECT cust_contact
FROM Customers
WHERE cust_contact LIKE '[^JM]%'
ORDER BY cust_contact;
```

* 使用通配符的技巧：
 * 不要过度使用通配符
 * 在确实需要使用通配符的时候，也尽量不要把它用在搜索模式的开始处。将通配符放在开始，搜索是最慢的。
 * 仔细注意通配符的位置。
