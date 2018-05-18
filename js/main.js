loadHeader();//加载header.html头文件
loadFooter();//加载footer.html


//加载header.html头文件
function loadHeader(){
  //1.创建XHR对象
  var xhr_header = new XMLHttpRequest();
  //2.设置状态信息改变后的处理函数
  xhr_header.onreadystatechange=function(){
    if(xhr_header.readyState == 4){//正常接收到了响应
      var res=xhr_header.responseText;
      // console.log(res);
      //加载头部
      var header_box=document.getElementById("header_box");
      header_box.innerHTML=res;
      //判断用户是否登录，如果已登录，则显示导航条上的个人中心按钮及下拉菜单
      if(sessionStorage.uid){//已登录
        var nav_user=document.getElementById('nav_user');
        nav_user.innerHTML='<a href="user/user.html"><em class="icon-user"></em>个人中心<em' +'class="icon-triangle"></em></a>'
                +'<div class="user_dropdown">'
                +'<p><span>'+sessionStorage.uname+'</span>，您好~</p>'
                +'<div class="userlink_1 clearfloat">'
                +'<a href="user/user.html">我的订单</a>'
                +'<a href="" id="user_quit">退出登录</a>'
                +'</div>'
                +'</div>';
        //退出
        var user_quit=document.getElementById('user_quit');
        user_quit.onclick=function(){
          sessionStorage.clear();//清除sessionStorage
        }
      }

    }
  }
  //3.建立请求连接
  xhr_header.open('GET','header.html?111',true);
  //4.发送请求
  xhr_header.send(null);
}

//加载footer.html
function loadFooter(){
  //1.创建XHR对象
  var xhr_footer = new XMLHttpRequest();
  //2.设置状态信息改变后的处理函数
  xhr_footer.onreadystatechange=function(){
    if(xhr_footer.readyState == 4){//正常接收到了响应
      var res=xhr_footer.responseText;
      // console.log(res);
      //加载footer
      var footer=document.getElementById("footer");
      footer.innerHTML=res;
    }
  }
  //3.建立请求连接
  xhr_footer.open('GET','footer.html',true);
  //4.发送请求
  xhr_footer.send(null);
}
