/* 
 
  子网划分：借主机位给网络位用
  IP地址 = 网络号 + 主机号 
  子网掩码用来标识ip地址的网络号

  192.168.10.139/24
    -> 11000000.10101000.00001010.10001011 ip地址
    -> 11111111.11111111.11111111.00000000 子网掩码 255.255.255.0
    -> 11000000.10101000.00001010.00000000 子网地址 192.168.10.0

  192.168.10.139/24 这个C类地址由于默认子网掩码是24 子网地址 192.168.10.0 
  所以这个网段[10网段]可用主机号有254个，没有进行子网划分 所包含的这254个ip地址
  同属于一个网络 一个局域网
  若用这个C类地址组件公司网络 人员就几十人 网络号用不完 造成ip地址浪费

  这时可以给子网掩码加一位
  192.168.10.139/25 按位与运算得出子网地址为 192.168.10.128 跟之前的子网地址就不一样了

  192.168.10.139/25 
    -> 11000000.10101000.00001010.10001011 ip地址
    -> 11111111.11111111.11111111.10000000 子网掩码 255.255.255.128
    -> 11000000.10101000.00001010.10000000 子网地址 192.168.10.128


   192.168.10.0
    192.168.10.1  




*/