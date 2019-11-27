var partent=document.getElementById('content-items')
//console.log(partent)
var send=document.getElementById('send')
send.addEventListener('click',function(){
    var html=$(' <li class="content-item">'+
     '<div class="pic">'+
       '<img src="./images/8362D9EF7A0B5265E61E674C421FADD0.png" alt="">'+
    '</div>'+
'<div class="message">'+
    '<p class="name">医生</p>'+
    '<p class="detail">你的体检报告出来了，你的身体很健康，祝你生活愉快</p>'+
'</div>'+
'</li>')
html.appendTo(partent)})
   /* console.log(10)
var li=document.createElement('li')
li.setAttribute('class','content-item')
console.log(li)

var divPic=document.createElement('div')
divPic.setAttribute('class','pic')
li.appendChild(divPic)

var img=document.createElement('img')
img.setAttribute('src','./images/B37731DBE0BCB39777A28F4B6737F80C.png')
divPic.appendChild(img)
var message=document.createElement('div')
message.setAttribute('class','message')
li.appendChild(message)

var p1=document.createElement('p')
p1.setAttribute('class','name')
var p1Text=document.createTextNode('蜗牛')
p1.appendChild(p1Text)
message.appendChild(p1)

var p2=document.createElement('p')
p1.setAttribute('class','name')
var p2Text=document.createTextNode('中午一起吃饭')
p2.appendChild(p2Text)
message.appendChild(p2)
//console.log(li)

partent.appendChild(li)
})*/



