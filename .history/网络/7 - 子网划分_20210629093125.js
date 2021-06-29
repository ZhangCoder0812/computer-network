/* 
 
  子网划分：借主机位给网络位用
  IP地址 = 网络号 + 主机号 
  子网掩码用来标识ip地址的网络号

  192.168.10.139/24
    -> 11000000.10101000.00001010.10001011 ip地址
    -> 11111111.11111111.11111111.00000000 子网掩码 
    -> 11000000.10101000.00001010.00000000 子网地址 192.168.10.0

  192.168.10.139/24 这个C类地址由于子网掩码是24 子网地址 192.168.10.0 
  所以这个地址可用网络号有254个。
  若用这个C类地址组件公司网络 人员就几十人 网络号用不完 造成ip地址浪费

  这时可以给子网掩码加一位
  192.168.10.139/25 按位与运算得出子网地址为 192.168.10.128


*/