<?php
/*
* 返回页码数
* 请求参数：
  type-商品类型
* 返回数据：
  $totalRecord-总记录数
  $pageCount-总页码数
*/
require('init.php');

@$type = $_REQUEST['type'] or $type = 0;

$pageSize=4;//每页显示的条数

//获取总记录数
if($type==0){
  $sql = "SELECT * FROM product";
}else{
  $sql = "SELECT * FROM product WHERE typeId=$type";
}
$result = mysqli_query($conn,$sql);
$totalRecord = mysqli_num_rows($result);//总记录数
$pageCount = ceil($totalRecord/$pageSize);//总页码数
$output['totalRecord']=$totalRecord;
$output['pageCount']=$pageCount;



echo json_encode($output);
