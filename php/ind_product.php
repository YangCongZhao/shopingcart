<?php
/*
* API (Application Programming Interface)应用程序编程接口
  返回商品表中最新的8条数据
*/

require('init.php');
$count = 8;
$sql = "SELECT title,price,pic FROM product ORDER BY pid DESC LIMIT 8";
$result = mysqli_query($conn,$sql);
$output = mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($output);
