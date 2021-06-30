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
  【动态主机配置协议】，计算机插入网线或者手机连入wifi，操作系统会自动
  发送一包DHCP请求，   

*/