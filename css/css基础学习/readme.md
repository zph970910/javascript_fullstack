- padding 内边距（影响盒子大小）
  padding 10px;上下左右内边距10px
  padding 10px 20px;上下10px,左右20px
  padding 10px 20px 30px;上10px,左右20px,下30px
  padding 10px 20px 30px 40px;上10px,右20px,下30px,左40px
  padding-top：
- margin 外边距
  margin：20px,auto 

- overflow 溢出
  overflow:hidden 超出则隐藏
  overflow:scroll 滚动条
  overflow:auto 超出则有滚动条

- white-space 空白空间
  white-space:pre 空白被浏览器保留，不换行
  white-space:pre-wrap 保留空白，正常换行
  white-space:pre-line 空白合并，保留换行
  white-space:nowrap 空白保留，文本不换行，直到遇到<br />标签为止
  
- text-overflow 溢出是否显示省略号
  text-overflow: ellipsis 溢出显示省略号
  text-overflow: clip 不显示省略号，简单的裁剪

-块级元素
div,dl dt dd,form,h1-h6,hr-水平分割线，ol,ul,p,fieldset

- 内联元素特点
a.行内逐个进行显示
b.没有自己的形状，不能定义宽高
行内元素:a,br,i,em,label,span,strong,textarea,u,select

行内块元素
  img 图片，input 输入框

- 元素转变
 display：block 将元素转换为块级元素，是该元素拥有块状元素的特点
          inline 转换为行内元素

- text-align: center 文字居中
  vertical-align: middle;垂直居中

- position属性
  static 默认值
  absolute 相对于父级的绝对定位，若无父级，则以HTML直接指定left，top...
  relative 相对于自己的位置移动
  fixed 相对于浏览器的绝对定位，不论窗口滚动与否，元素都在那个位置

