---
title: PHP绘图
date: 2017-12-24 12:25:09
tags: 
    - 笔记
    - PHP
---

> web课程的笔记和一些实例代码。还有一份自定义图形作业，感觉还不错，简单做了一个二维码。（全是画矩形，确实有点无聊了，有空画点有趣的图）

<!-- more -->

### PHP绘图

#### 1. GD（Graphics Dynamic Library）

- GD1 / GD2
- 可以通过`phpinfo()`来查询

#### 2. 绘图流程

```
// 确定绘画图片的格式
// 格式有：jpg，png，gif
header("Content-type:image/格式");

// 1. 建立一个画布（分配存储空间）
$image = ImageCreate(长度,宽度);// 一般画布
$image = ImageCreateTrueColor(长度,宽度);// 高清

// 2. 建立颜色板
$bgcolor=ImageColorAllocate($image,0,255,0);// 默认背景颜色

// 3. PHP绘图命令
// 点  ImageSetPixel($image,x,y,$color)
ImageSetPixel($image,90,40,$textcolor);
// 线  ImageLine($image,x1,y1,x2,y2,$color)
ImageLine($image,0,0,$bgcolor);
// 弧  ImageArc($image,x,y,高,宽,开始角度,结束角度,$color)
ImageArc($image,50,25,90,40,0,360,$textcolor1);
// 巨型  ImageRectangle($image,x1,y1,x2,y2,$color)
ImageRectangle($image,20,10,80,40,$textcolor);
// 空心多边形  ImagePolygon($image,$点数组,点数,$color)
ImagePolygon($image,$point,count($point)/2,$textcolor);
// 实心多边形  ImageFilledPolygon($image,$点数组,点数,$color)
ImageFilledPolygon($image,$point,count($point)/2,$textcolor);
// 透明  ImageColorTransparent($image,$color)
ImageColorTransparent($image,$textcolor);
// 文字输出 ImageTTFtext($image,大小,角度,x,y,$color,字体绝对路径,string)
ImageTTFtext($image,32,0,0,50,$textcolor,"simhei.ttf",$string);


// 4. 显示/导出  ImageXXX($image[,储存图形的位置和名称])
Imagepng($image);

// 5. 结束 释放空间
ImageDestroy($image);

```

### 实例：二维码绘制

```
<?php 
    // 文件输出图片格式为png
    header("Content-type:image/png");
    // 建立一个画布
    $image = ImageCreate(100,100);
    // 设定画布的北京颜色
    $bgcolor = ImageColorAllocate($image,255,255,255);
    ImageFill($image,0,0,$bgcolor);
    // 画笔的颜色
    $black = ImageColorAllocate($image,0,0,0);    
    $white = ImageColorAllocate($image,255,255,255);

    ImageFilledRectangle($image,0,0,28,28,$black);
    ImageFilledRectangle($image,4,4,24,24,$white);
    ImageFilledRectangle($image,8,8,20,20,$black);

    ImageFilledRectangle($image,72,0,500,28,$black);
    ImageFilledRectangle($image,76,4,96,24,$white);
    ImageFilledRectangle($image,80,8,92,20,$black);

    ImageFilledRectangle($image,0,72,28,500,$black);
    ImageFilledRectangle($image,4,76,24,96,$white);
    ImageFilledRectangle($image,8,80,20,92,$black);

    ImageFilledRectangle($image,64,64,84,84,$black);
    ImageFilledRectangle($image,68,68,80,80,$white);
    ImageFilledRectangle($image,72,72,76,76,$black);

    ImageFilledRectangle($image,0,32,20,44,$black);
    ImageFilledRectangle($image,4,36,8,40,$white);

    ImageFilledRectangle($image,4,44,12,48,$black);
    ImageFilledRectangle($image,0,48,4,68,$black);

    ImageFilledRectangle($image,8,52,12,56,$black);
    ImageFilledRectangle($image,12,48,20,68,$black);
    ImageFilledRectangle($image,16,52,20,64,$white);

    ImageFilledRectangle($image,32,4,36,8,$black);
    ImageFilledRectangle($image,40,0,44,8,$black);
    ImageFilledRectangle($image,48,0,52,4,$black);
    ImageFilledRectangle($image,52,4,56,8,$black);
    ImageFilledRectangle($image,60,4,64,8,$black);
    ImageFilledRectangle($image,64,0,68,4,$black);
    ImageFilledRectangle($image,64,8,68,12,$black);

    ImageFilledRectangle($image,48,8,52,16,$black);
    ImageFilledRectangle($image,52,12,56,20,$black);
    ImageFilledRectangle($image,56,8,60,16,$black);

    ImageFilledRectangle($image,24,56,32,68,$black);
    ImageFilledRectangle($image,24,60,28,64,$white);

    ImageFilledRectangle($image,24,40,28,44,$black);
    ImageFilledRectangle($image,24,48,28,52,$black);
    ImageFilledRectangle($image,28,44,32,48,$black);
    ImageFilledRectangle($image,32,40,36,44,$black);
    ImageFilledRectangle($image,36,48,44,52,$black);
    ImageFilledRectangle($image,32,12,44,16,$black);
    ImageFilledRectangle($image,36,16,40,24,$black);
    ImageFilledRectangle($image,32,20,36,28,$black);
    ImageFilledRectangle($image,24,32,40,36,$black);
    ImageFilledRectangle($image,36,28,48,32,$black);
    ImageFilledRectangle($image,40,24,44,28,$black);
    ImageFilledRectangle($image,44,20,68,24,$black);
    ImageFilledRectangle($image,48,24,52,28,$black);
    ImageFilledRectangle($image,56,24,60,28,$black);
    ImageFilledRectangle($image,64,24,68,28,$black);

    ImageFilledRectangle($image,32,68,36,100,$black);
    ImageFilledRectangle($image,32,76,36,80,$white); 

    ImageFilledRectangle($image,68,84,84,88,$black);
    ImageFilledRectangle($image,88,88,92,92,$black);
    ImageFilledRectangle($image,84,68,88,84,$black);
    ImageFilledRectangle($image,88,64,92,88,$black);
    ImageFilledRectangle($image,88,76,92,80,$white);
    ImageFilledRectangle($image,92,72,96,88,$black);
    ImageFilledRectangle($image,96,72,100,100,$black);
    ImageFilledRectangle($image,76,96,96,100,$black);
    ImageFilledRectangle($image,76,88,80,96,$black);
    ImageFilledRectangle($image,80,92,88,96,$black);
    ImageFilledRectangle($image,88,88,92,92,$black);
    ImageFilledRectangle($image,68,96,72,100,$black);
    ImageFilledRectangle($image,64,92,68,96,$black);

    ImageFilledRectangle($image,68,32,72,36,$black);
    ImageFilledRectangle($image,76,32,80,44,$black);
    ImageFilledRectangle($image,84,32,88,36,$black);
    ImageFilledRectangle($image,92,32,96,44,$black);
    ImageFilledRectangle($image,64,36,68,44,$black);
    ImageFilledRectangle($image,68,40,72,44,$black);
    ImageFilledRectangle($image,84,40,88,44,$black);
    ImageFilledRectangle($image,96,36,100,48,$black);

    ImageFilledRectangle($image,64,48,76,56,$black);
    ImageFilledRectangle($image,68,52,80,60,$black);
    ImageFilledRectangle($image,68,52,76,56,$white);
    
    ImageFilledRectangle($image,80,48,84,52,$black);
    ImageFilledRectangle($image,64,60,72,64,$black);
    ImageFilledRectangle($image,80,60,88,64,$black);
    ImageFilledRectangle($image,84,52,88,64,$black);
    ImageFilledRectangle($image,88,48,100,52,$black);
    ImageFilledRectangle($image,92,52,96,60,$black);
    ImageFilledRectangle($image,96,56,100,64,$black);

    ImageFilledRectangle($image,44,32,48,36,$black);
    ImageFilledRectangle($image,56,28,64,32,$black);
    ImageFilledRectangle($image,52,32,60,36,$black);
    ImageFilledRectangle($image,48,36,56,40,$black);
    ImageFilledRectangle($image,40,36,44,44,$black);
    ImageFilledRectangle($image,56,40,64,48,$black);
    ImageFilledRectangle($image,48,44,52,52,$black);
    ImageFilledRectangle($image,52,48,56,56,$black);
    ImageFilledRectangle($image,44,56,64,60,$black);
    ImageFilledRectangle($image,56,60,60,64,$black);

    ImageFilledRectangle($image,36,56,40,64,$black);
    ImageFilledRectangle($image,40,64,44,72,$black);   
    ImageFilledRectangle($image,44,60,48,68,$black);  
    ImageFilledRectangle($image,48,68,56,72,$black);  
    ImageFilledRectangle($image,52,72,56,80,$black);  
    ImageFilledRectangle($image,56,72,60,76,$black);  
    ImageFilledRectangle($image,48,76,52,84,$black);

    ImageFilledRectangle($image,36,72,40,88,$black);
    ImageFilledRectangle($image,40,76,44,84,$black);
    ImageFilledRectangle($image,36,96,40,100,$black);
    ImageFilledRectangle($image,44,88,48,100,$black);
    ImageFilledRectangle($image,48,88,52,92,$black);
    ImageFilledRectangle($image,60,68,64,72,$black);
    ImageFilledRectangle($image,56,80,64,84,$black);
    ImageFilledRectangle($image,56,92,60,96,$black);
    
    // 形成图像
    Imagepng($image);
    // 释放空间
    ImageDestroy($image);
?>
```

##### 结果（扫一扫啊，哈哈哈）
![二维码][1]


  [1]: http://otn4ut2th.bkt.clouddn.com/bloggenerate.png


---

## 更新图

#### 图一

```
<?php
    // 一幅随机图
    
    // 文件输出图片格式为png
    header("Content-type:image/png");
    // 建立一个画布
    $image = ImageCreate(500,550);
    // 设定画布的北京颜色
    $bgcolor = ImageColorAllocate($image,0,0,0);
    ImageFill($image,0,0,$bgcolor);
    // 画笔的颜色
    $black = ImageColorAllocate($image,0,137,167);

    // 绘画过程

    $x2 = 0;
    for($j = 0;$j < 25; $j++){
        // 随机生成圆半径
        $radius1 = rand(7,12);
        // 随机点生成一个实心圆
        $x1 = rand(1,499);
        $y1 = rand(1,499);
        for($i = 1;$i < $radius1;$i++){
            
            $w = $i;
            $h = $i;
            imagearc($image, $x1,  $y1,  $w,  $h,  0, 360, $black);
        }
        if($x2 !== 0){
            ImageLine($image,$x1,$y1,$x2,$y2,$black);
        }
        // 随机生成圆半径
        $radius2 = rand(7,12);
        // 随机再生成一点连接上一点
        $x2 = rand(1,499);
        $y2 = rand(1,499);
        for($i = 1;$i < $radius2;$i++){
            
            $w = $i;
            $h = $i;
            imagearc($image, $x2,  $y2,  $w,  $h,  0, 360, $black);
        }
        ImageLine($image,$x1,$y1,$x2,$y2,$black);
    }
    
    
    // 打出名字
    $string = "x1067017 杨坤怡";
    ImageTTFtext($image,12,0,360,530,$black,"c:/windows/fonts/FZPXJW.TTF",$string);

    // 形成图像
    Imagepng($image);
    // 释放空间
    ImageDestroy($image);
?>
```

#### 图二

```
<?php
    // 一幅随机图
    
    // 文件输出图片格式为png
    header("Content-type:image/png");
    // 建立一个画布
    $image = ImageCreate(400,420);
    // 设定画布的北京颜色
    $bgcolor = ImageColorAllocate($image,55,60,56);
    ImageFill($image,0,0,$bgcolor);
    // 画笔的颜色
    $black = ImageColorAllocate($image,0,137,108);

    // 绘画过程

    // 随机生成空心三角形
    $point=array();
    for($j = 1;$j < 10;$j++){
        for($i = 1;$i < 4;$i++){
            $x = rand(1,399);
            $y = rand(1,399);
            array_push($point,$x,$y);
        }
        ImagePolygon($image,$point,count($point)/2,$black);
    }
    
    // 打出名字
    $string = "x1067017 杨坤怡";
    ImageTTFtext($image,12,0,250,410,$black,"c:/windows/fonts/FZPXJW.TTF",$string);

    // 形成图像
    Imagepng($image);
    // 释放空间
    ImageDestroy($image);
?>
```

#### 图三

```
<?php
    // 绘画一个A字母
    // 文件输出图片格式为png
    header("Content-type:image/png");
    // 建立一个画布
    $image = ImageCreate(400,400);
    // 设定画布的北京颜色
    $bgcolor = ImageColorAllocate($image,0,0,0);
    ImageFill($image,0,0,$bgcolor);
    // 画笔的颜色
    $black = ImageColorAllocate($image,241,124,103);

    // 绘画过程

    // for($i = 1;$i < 6;$i++){
    //     $w = $i * 15;
    //     $h = $i * 15;
    //     imagearc($image, 250,  250,  $w,  $h,  0, 360, $black);
    // }

    $start = 0;
    $stop = 120;
    for($i = 1;$i < 13;$i++){
        $w = $i * 25;
        $h = $i * 25;
        imagearc($image, 200,  200,  $w,  $h,  $start, $stop, $black);
        $start += 1*$i;
        $stop -= 1*$i;
    }

    $start = 120;
    $stop = 240;
    for($i = 1;$i < 13;$i++){
        $w = $i * 25;
        $h = $i * 25;
        imagearc($image, 200,  200,  $w,  $h,  $start, $stop, $black);
        $start += 1*$i;
        $stop -= 1*$i;
    }

    $start = 240;
    $stop = 360;
    for($i = 1;$i < 13;$i++){
        $w = $i * 25;
        $h = $i * 25;
        imagearc($image, 200,  200,  $w,  $h,  $start, $stop, $black);
        $start += 1*$i;
        $stop -= 1*$i;
    }

    // 打出名字
    $string = "x1067017 杨坤怡";
    ImageTTFtext($image,12,0,250,370,$black,"c:/windows/fonts/FZPXJW.TTF",$string);


    // 形成图像
    Imagepng($image);
    // 释放空间
    ImageDestroy($image);
?>
```
