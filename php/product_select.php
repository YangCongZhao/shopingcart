<?php
/**
*加载所有商品
* 请求参数：
* type-商品类型，默认为0
* pageNum-请求页码，默认为1
*/
require('init.php');
@$type = $_REQUEST['type'] or $type = 0;
@$pageNum = $_REQUEST['pageNum'] or $pageNum = 1;

$pageSize = 4;//每页显示的条数
$start =($pageNum-1)*$pageSize ;//查询起始位置

if($type==0){
  $sql = "SELECT pid,title,pubhouse,price,pic FROM product ORDER BY pid DESC LIMIT $start,$pageSize";
}else{
  $sql = "SELECT pid,title,pubhouse,price,pic FROM product WHERE typeId=$type ORDER BY pid DESC LIMIT $start,$pageSize";
}

$result = mysqli_query($conn,$sql);
$output= mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($output);
