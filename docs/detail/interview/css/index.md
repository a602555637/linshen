# css

## 200\*200div 在不同分辨率屏幕上下左右居中
```css
div {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  background: #333;
  z-index: 999;
}
```

## 写一个左中右布局占满屏幕，其中左右两块是固定宽度 200 ，中间自适应宽，要求先加载中间块

```html
<style>
  #left,
  #right {
    width: 200px;
    height: 200px;
    background-color: #ffe6b8;
    position: absolute;
  }
  #left {
    left: 0px;
  }
  #right {
    right: 0px;
  }
  #center {
    background-color: #eee;
    height: 200px;
  }
</style>
<body>
  <div id="left">我是左边</div>
  <div id="right">我是右边</div>
  <div id="center">我是中间</div>
</body>
```

## 阐述清楚浮动的几种方式（常见问题）

```css
父元素 {
  overflow: hidden;
  zoom: 1; /*解决IE6，7兼容问题*/
}
/* 万能的清除浮动（伪类） 给浮动的父元素添加clear类 */
.clear:after {
  content: '.';
  clear: both;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.clear {
  zoom: 1; /*（解决IE6，7兼容问题） */
}
```
  
## 伪类 伪元素
  伪类(pseudo-classes)

其核⼼就是⽤来选择DOM树之外的信息,不能够被普通选择器选择的⽂档之外的元素，⽤来添加⼀些选择器的特殊效果。
⽐如:hover :active :visited :link :visited :first-child :focus :lang等
由于状态的变化是⾮静态的，所以元素达到⼀个特定状态时，它可能得到⼀个伪类的样式；当状态改变时，它⼜会失去这个样式。
由此可以看出，它的功能和class有些类似，但它是基于⽂档之外的抽象，所以叫 伪类。
2）伪元素(Pseudo-elements)

DOM树没有定义的虚拟元素
核⼼就是需要创建通常不存在于⽂档中的元素，
⽐如::before ::after 它选择的是元素指定内容，表示选择元素内容的之前内容或之后内容。
伪元素控制的内容和元素是没有差别的，但是它本身只是基于元素的抽象，并不存在于⽂档中，所以称为伪元素。⽤于将特殊的效果添加到某些选择器
2）伪类与伪元素的区别

表示⽅法

CSS2 中伪类、伪元素都是以单冒号:表示,
CSS2.1 后规定伪类⽤单冒号表示,伪元素⽤双冒号::表示，
浏览器同样接受 CSS2 时代已经存在的伪元素(:before, :after, :first�line, :first-letter 等)的单冒号写法。
CSS2 之后所有新增的伪元素(如::selection)，应该采⽤双冒号的写法。
CSS3中，伪类与伪元素在语法上也有所区别，伪元素修改为以::开头。浏览器对以:开头的伪元素也继续⽀持，但建议规范书写为::开头
定义不同

伪类即假的类，可以添加类来达到效果
伪元素即假元素，需要通过添加元素才能达到效果
总结:

伪类和伪元素都是⽤来表示⽂档树以外的"元素"。
伪类和伪元素分别⽤单冒号:和双冒号::来表示。
伪类和伪元素的区别，关键点在于如果没有伪元素(或伪类)，
是否需要添加元素才能达到效果，如果是则是伪元素，反之则是伪类。
4）相同之处：

伪类和伪元素都不出现在源⽂件和DOM树中。也就是说在html源⽂件中是看不到伪类和伪元素的。
不同之处：
伪类其实就是基于普通DOM元素⽽产⽣的不同状态，他是DOM元素的某⼀特征。
伪元素能够创建在DOM树中不存在的抽象对象，⽽且这些抽象对象是能够访问到的。

## 超链接访问过后 hover 样式就不出现
  原因：a:visited和a:hover的顺序放错了  
  a标签的四种状态排序原则：love hate原则---l(Link) ov(visited)e h(hover)a(active)te

## 浏览器还有默认的天生 inline-block 元素（拥有内在尺寸，可设置高宽， 但不会自动换行）
  `<input> 、<img> 、<button> 、<texterea> 、<label>`

## rgba()和 opacity 的透明效果有什么不同
  rgba()和 opacity 都能实现透明效果，但最大的不同是   
  opacity 作用于元素，以及元素内 的所有内容的透明度，  
  而rgba()只作用于元素的颜色或其背景色。（设置 rgba 透明的元素的子元素不会继承透 明效果！）

## css 中可以让文字在垂直和水平方向上重叠的两个属性是什么？
  line-height ：设置大小比字体大小 小 即可实现垂直方向上重叠  
  letter-spacing ： 设置成负值即可实现水平方向上重叠

## 如何垂直居中一个浮动元素
  ```css
  /*方法一：已知元素的高宽*/
  #div1{
  background-color:#6699FF;
  width:200px;
  height:200px;
  position: absolute;
  //父元素需要相对定位
  top: 50%;
  left: 50%;
  margin-top:-100px ;   //二分之一的 height，width
  margin-left: -100px;
  }
  /*方法二:未知元素的高宽*/
  #div1{
  width: 200px;
  height: 200px;
  background-color: #6699FF;
  margin:auto;
  position: absolute;
  left: 0;
  //父元素需要相对定位
  top: 0;
  right: 0;
  bottom: 0;
  }
  ```

## 如何垂直居中一个<img>
  ```css
  #container
  {
  /*<img>的容器设置如下*/
  display:table-cell;
  text-align:center;
  vertical-align:middle;
  }
  ```

## px 和 em 的区别
  px 和 em 都是长度单位，区别是，px 的值是固定的，指定是多少就是多少，计算比较容 易。em 得值不是固定的，并且 em 会继承父级元素的字体大小。 浏览器的默认字体高都是 16px。所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em, 10px=0.625em