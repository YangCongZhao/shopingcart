//图片轮播
carousel();
//加载商品列表
newProduct();

//加载商品列表
function newProduct(){
  //创建XHR对象
  var xhr=new XMLHttpRequest();
  //设置状态信息改变后的处理函数
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4){//正常接收到了响应
      var res=xhr.responseText;
      res=JSON.parse(res);
      // console.log(res);
      //显示商品信息
      var htmlStr="";
      for(var i=0;i<res.length;i++){
        htmlStr+='<li>'
                +'<a href="" class="a_img"><img src="'+res[i].pic+'" alt=""/></a>'
                +'<a href="" class="a_text">'+res[i].title+'</a>'
                +'<strong>¥ '+res[i].price+'</strong>'
                +'</li>';
      }
      var ind_product=document.getElementById('ind_product');
      ind_product.innerHTML=htmlStr;
    }
  }
  //建立请求连接
  xhr.open('GET','php/ind_product.php',true);
  //发送请求
  xhr.send(null);
}



function carousel(){
  //查找元素
  var banner=document.getElementById("banner");
  var lis=banner.getElementsByTagName("li");
  var as=document.getElementById("indicator").getElementsByTagName("a");
  var len=lis.length;
  var i=0;//当前显示的图片的下标
  //1.自动轮播
  //定时器
  var timer=setInterval(slideNext,3000);
  //鼠标移入事件
  banner.onmouseover=function(){
    clearInterval(timer);
  }
  //鼠标移出事件
  banner.onmouseout=function(){
    timer=setInterval(slideNext,3000);
  }
  //下一个
  function slideNext(){
    //切换下一张图片
    if(i<len-1){//如果不是最后一张
      lis[i].className="";
      as[i].className="";
      i++;
      lis[i].className="cur";
      as[i].className="cur";
    }else{//如果是最后一张
      lis[i].className="";
      as[i].className="";
      i=0;
      lis[i].className="cur";
      as[i].className="cur";
    }
  }
  //上一个
  function slidePrev(){
    //切换上一张图片
    if(i>0){//如果不是第一张
      lis[i].className="";
      as[i].className="";
      i--;
      lis[i].className="cur";
      as[i].className="cur";
    }else{//如果是第一张
      lis[i].className="";
      as[i].className="";
      i=len-1;
      lis[i].className="cur";
      as[i].className="cur";
    }
  }

  //2.小圆点指示器切换
  for(var y=0;y<len;y++){
    as[y].onmouseover=function(){//为每个小圆点绑定鼠标移入事件
      for(var c=0;c<len;c++){//循环比较当前移入的是哪一个
        if(this==as[c]){//获取移入的小圆点的下标
          if(i!=c){//移入的不是当前显示的，才需要切换
              lis[i].className="";
              as[i].className="";
              i=c;
              lis[i].className="cur";
              as[i].className="cur";
          }
          break;
        }
      }
    }
  }
  //3.左右箭头
  //下一张
  var next=document.getElementById('next');
  next.onclick=slideNext;
  //上一张
  var prev=document.getElementById('prev');
  prev.onclick=slidePrev;
}
