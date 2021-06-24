/* 

  ARP协议：用来获取目标mac地址

  在一个局域网内 靠的是目标mac地址找到对方计算机在哪里 将数据包送给这
  台计算机

  - 计算机1要与计算机2通信，计算机1必须拿到计算机2的ip地址
  - 通信分为2类：
        局域网内：基于mac地址
        广域网内/公网/跨局域网：基于ip地址，网关
  
  - 如何确定计算机1和计算机2是否在一个局域网内？
         根据ip和子网掩码 与 运算算出来

  - 局域网内通信 要不要有对方的ip地址？
         一定要有，局域网内这个ip地址的作用是判断两台计算机是否
         在同一个局域网内，并不是用来找到对方。根据ip拿到对方的mac
         地址 

  - 跨局域网通信
         计算机1发现和计算机2不在同一个局域网内，就将数据包往外发，经过
         网关[每个国家的海关]，拿到目标mac地址是网关的mac地址    

          

*/