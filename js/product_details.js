//获取pid
var str=window.location.href;
var pid=str.substr(str.lastIndexOf("=")+1);

//显示商品信息
loadDetails();

function loadDetails(){
  // 创建XHR对象
  var xhr = new XMLHttpRequest();
  // 设置状态信息改变后的处理函数
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {// 正常接收到响应了
          var res = xhr.responseText;
          res=JSON.parse(res);
          console.log(res);
          //显示产品信息
          document.getElementById('product_img').src=res.pic;
          document.getElementById('title1').innerHTML=res.title;
          document.getElementById('title2').innerHTML=res.title2;
          document.getElementById('product_info').innerHTML='<li>作者：'+res.author+'</li>'
          +'<li>出版社：'+res.pubhouse+'</li>'
          +'<li>出版时间：'+res.pubtime+'</li>';
          document.getElementById('price').innerHTML='¥ '+res.price;
          document.getElementById('details').innerHTML=res.details;
      }
  };
  // 建立请求连接（并没有发送请求）
  xhr.open('GET', 'php/product_details.php?pid='+pid, true);
  // 发送请求
  xhr.send(null);
}
