## 
html(string) 解析 dom 树
css 解析为 cssom
合成 render tree
生成 layout tree
绘制 paint
composite 合成：一个页面有很多分层，最终合成一个平面

## 性能优化
js relayout repaint composite

改变了 元素的布局：width,height,display layout(重排)->
改变了 元素的 color,shadow repaint(重绘)->
重排一定引起重绘，重绘不一定引起重排
composite: transform opacity 前提条件：变化的元素要处于一个独立的'层'上面

影响的是：当前处于的一个'层'

提升：
1. will-change: 
2. 3d transform: `translate3D(60px, 0, 0)`
3. animation transition 激活的时候
4. video
5. backface-visiblity:hidden

left,top
transform