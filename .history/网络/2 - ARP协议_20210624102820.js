/* 

  ARP协议：通过ip地址找到mac地址

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
         网关[每个国家的海关 每个局域网都有个网关 计算机练到交换机上 交换机连到路由器上 
             路由器就是网关,所以路由器要有两个网口 一个对内 一个对外]，
         拿到目标mac地址是网关的mac地址    

  1. 拿到目标mac地址
       ARP协议：
        判断两台计算机的子网地址是否一样，是否在同一个局域网内？
         一样：获取计算机2的mac地址
         不一样：获取网关的mac地址 前端局域网的网关收到数据包 发现目标地址不是当前局域网
                 就往外广播 并且把源目标地址改为对外的ip地址 
  2. 发送真正的数据
         计算机1的mac地址 xxx的mac地址 数据部分            
          

*/