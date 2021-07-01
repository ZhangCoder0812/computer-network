/* 

  DHCP（动态主机配置协议）是一个局域网的网络协议 一个套接字程序
       用来分配ip地址 计算机默认就会安装一个DHCP的客户端
       DHCP的服务端在路由器上， 所以电脑一开机就会有个ip地址
       我们并没有手动分配过，DHCP客户端会自动向DHCP服务端申请
       一个ip地址。这个ip地址有时间限制 超过一定时间 会再次申请
       所以说是动态的。


  想要实现网络通信 每台主机需要具备四要素：
    - 本机的IP地址
    - 子网掩码
    - 网关的IP地址
    - DNS的地址 
   
  获取以上地址有两种方式：
    - 手动配置 静态获取 
      设置->以太网->更改适配器选项->以太网 右击 属性->
      internet 协议版本4 -> 使用下面的ip地址
      自己手动填写，为保证填写的ip地址能用 填之前先ping一下
      ping不通就代表没有在使用 可以填
      ping的通就代表有人再用就不能填 会冲突
      「ping 192.168.12.94」
      
      DNS服务器可以随便写 找个网上共享的DNS服务器地址

    - 动态获取 通过DNCP服务自动获取 一开机 DHCP客户端会自动
      向DHCP服务端申请一个ip地址  


  DNCP获取IP地址：
    DHCP报文头： 以太网头｜IP头｜UDP头｜DHCP数据包
     基于UDP协议传输    


*/