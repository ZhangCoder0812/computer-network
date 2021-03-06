/* 


  mac地址：收件地址 物理地址
  ip地址：收件人 

  我们只需要填写 目标ip地址和数据内容 计算机会根据目标ip地址
  根据ARP协议自动获取对方的mac地址

  每个接入网络的设备通信都是由内部的网卡设备进行的，所以统一用网卡表示设备
  每张网卡在出厂时都会写入一个mac地址 00-16-EA-AE-3C-40 
  前3个数 网络硬件厂商编号
  后3个数 网卡序列号 
  mac地址全球唯一的弟子

  计算机通过通过网线接入到交换机的端/网口1，这个端口1就是网络中的具体位置，
  类似于'门牌号'，交换机就知道了这个计算机的mac地址在端口1上，从而就把mac
  地址和端口1进行了绑定。

  网卡/设备接入网络想要通信，就要配置一个ip地址。
  ip地址分为 
      ipv4：共约42亿个 由于早期编码个分配问题 很多不能使用 于2011年被用尽
      ipv6：共约3.4*10^38个
 
  我们计算机插入网线后并没有配置ip地址，那是因为DHCP协议自动帮我们配置了，
  【动态主机配置协议】，计算机插入网线或者手机连入wifi，操作系统会自动向
  路由器发送一包DHCP请求，请求为其分配ip地址，路由器收到DHCP请求后会分配
  一个ip地址并返回，操作系统收到DHCP回包后将其分配的ip地址配置到网卡上。

  在一个局域网中ip地址也是唯一的，路由器不会给不同的设备分配同一个ip地址。
  当然也可以关闭DHCP 自己手动配置ip，但要保证ip地址不能与网络中其他ip地址
  重复。

  =======================================

  交换机：- 把数据包发送到正确的位置，交换机相当于邮递员 根据数据包中的
            mac地址找到对应的物理端口，一台交换机有很多端口 都有自己的
            编号，计算机的网口通过网线连接到交换机的端口上，这个端口就是
            一个确定的物理位置，我们只要知道某个计算机的mac地址在哪个网口
            上就能正确的把数据发送给它。 
          在交换机中有一个mac地址表，即：mac地址与端口的映射关系
          想要与某个计算机通信时，只需要查询一下这个计算机的mac地址
          在哪个端口上 从这个端口发送出去就行了



*/