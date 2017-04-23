# jSlider

那就先从一个demo开始吧..

## 轮播原理

外层是个限定大小的容器，内层ul设置宽度为 `图片数x100%`，通过使里面的li浮动形成如下的布局。
在这种布局下，设置ul为绝对定位，通过改变ul的left值就可以实现轮播的切换。
![](public/slider-theory.png)

## demo1

通过设置ul的transition属性，动态改变ul的left值形成自动动画。
