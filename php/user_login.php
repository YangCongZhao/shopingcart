<?php
/**
*用户登录验证
*请求参数：
*  unameOrPhone-用户名或手机号
*  upwd-密码
*输出结果：
* {"code":1}//登录成功
* 或
* {"code":400}//登录失败
*/
//接收请求参数
@$unameOrPhone = $_REQUEST['unameOrPhone'] or die('uname or phone required');//输出一条消息，并退出当前脚本
@$upwd = $_REQUEST['upwd'] or die('upwd required');
$upwd=md5($upwd);
//引入通用文件
require('init.php');
//执行sql语句
$sql = "SELECT uid,uname,phone FROM users WHERE (uname='$unameOrPhone' AND upwd='$upwd') OR (phone='$unameOrPhone' AND upwd='$upwd')";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row){//登录成功
  $output['code'] = 1;
  $output['uid'] = intval($row['uid']);
  $output['uname'] = $row['uname'];
  $output['phone'] = $row['phone'];
}else {
  $output['code'] = 400;
}

echo json_encode($output);
