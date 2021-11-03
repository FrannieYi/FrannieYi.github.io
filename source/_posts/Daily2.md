---
title: Daily2
date: 2019-07-09 23:25:16
tags:
    - 日报
    - SQL
---

> 说在前面，社会主义的一块砖，哪里需要哪里搬

<!-- more -->

## 工作

今日份工作接线支撑，中间抽空了解了线下工作。无异常

## 小组瞎聊

- 累了之后脑袋一片空白
- 接快了之后觉得自己就是一个机器
- 智能知识库暂时毫无作用 
- 不要太刻意的去模仿，遇到事情多想想就好了
- 措施：人力调度；增加话术（没有及时更新新的话术，场景已经变化了，但是还是只有一个话术）；时时关注现状；培养一线的能力，就是为了解决这种问题；线下工单情况，工作强度强了很多。

## 学习

#### 排序检索数据

```
//按照产品名称排序
SELECT prod_name
FROM Products
ORDER BY prod_name;(一定要放到最后)

//按多个排序
SELECT prod_name,prod_id,prod_price
FROM Products
ORDER BY prod_price,prod_name;

//按列位置排序
SELECT prod_name,prod_id,prod_price
FROM Products
ORDER BY 2,3;

//指定排序方向
//(升序ASC或者ASCENDING是默认的，降序是DESC或者DESCENDING)
SELECT prod_name,prod_id,prod_price
FROM Products
ORDER BY prod_price DESC;

//多个列排序
SELECT prod_name,prod_id,prod_price
FROM Products
ORDER BY prod_price DESC,prod_name;

```
