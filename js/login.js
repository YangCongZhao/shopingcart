//获取元素
var btn_login=document.getElementById("login");//登录按钮
var inp_uname=document.getElementById("uname");//用户名
var inp_upwd=document.getElementById("upwd");//密码
//变量
var uname="";
var upwd="";
//文本框失去焦点时，表单验证
inp_uname.onblur=unameCheck;
inp_upwd.onblur=pwdCheck;

//点击提交按钮
btn_login.onclick=doLogin;



//验证用户名
function unameCheck(){
    uname=inp_uname.value;//获取用户输入的内容
    if(!uname){//用户名为空的时候，显示提示信息
        inp_uname.parentElement.previousElementSibling.querySelector(".tips").innerHTML="用户名不能为空";
        inp_uname.parentElement.querySelector("i").style.display="block";
        return false;
    }else{//不为空的时候
        inp_uname.parentElement.previousElementSibling.querySelector(".tips").innerHTML="";
        inp_uname.parentElement.querySelector("i").style.display="none";
        return true;
    }
}
//验证密码
function pwdCheck(){
    upwd=inp_upwd.value;
    if(!upwd){//密码为空的时候
      inp_upwd.parentElement.previousElementSibling.querySelector(".tips").innerHTML="密码不能为空";
      inp_upwd.parentElement.querySelector("i").style.display="block";
      return false;
    }else{
      inp_upwd.parentElement.previousElementSibling.querySelector(".tips").innerHTML="";
      inp_upwd.parentElement.querySelector("i").style.display="none";
      return true;
    }
}


//登录
function doLogin(){
  var unameResult=unameCheck();
  var upwdResult=pwdCheck();
  if(unameResult && upwdResult){//表单验证通过
    // 创建XHR对象
    var xhr_login = new XMLHttpRequest();
    // 设置状态信息改变后的处理函数
    xhr_login.onreadystatechange = function() {
        if (xhr_login.readyState == 4) {// 正常接收到响应了
            var res = xhr_login.responseText;
            res=JSON.parse(res);
            console.log(res);
            if(res.code==1){//登录成功
              sessionStorage.uid=res.uid;
              sessionStorage.uname=res.uname;
              sessionStorage.phone=res.phone;
              history.go(-1);//返回登录前页面
            }else{//登录失败
              inp_uname.parentElement.previousElementSibling.querySelector(".tips").innerHTML="用户名或密码错误";
            }
        }
    };
    // 建立请求连接（并没有发送请求）
    xhr_login.open('POST', 'php/user_login.php', true);
    //设置请求头
    xhr_login.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // 发送请求
    xhr_login.send("unameOrPhone="+uname+"&upwd="+upwd);
  }
}
