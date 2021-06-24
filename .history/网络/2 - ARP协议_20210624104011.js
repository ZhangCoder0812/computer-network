/* 

  ARP协议：通过ip地址找到mac地址 [地址解析协议]
          ARP数据包：计算机1的mac地址 xxx的mac地址 源ip地址 目标ip地址 数据部分
          现在要获取xxx的mac地址 这里xxx填的是 FF-FF-FF-FF-FF-FF 这个有特殊含义
          计算机收到这个数据包 发现 FF-... 代表要获取我的mac地址
          通过拆包发现目标ip与自己一致 就会把自己的mac地址返回 这样目标地址就会
          收到源地址的mac地址

          路由器发送真正数据的时候会把数据包中的mac地址删除掉

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
         不一样：获取网关的mac地址 当前局域网的网关收到数据包 发现目标地址不是当前局域网
                 就往外广播 并且把源目标地址改为对外的ip地址 一层层向外传递、
         以上只是再发ARP协议的数据包 为发真正的数据做准备        
  2. 发送真正的数据
         计算机1的mac地址 xxx的mac地址 源ip地址 目标ip地址 数据部分            
          

  

*/