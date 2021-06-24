/* 


  数据传输：
    应用层：将数据按照协议包一层 也可自定义协议 发给传输层
    传输层：传输层包装端口 源端口 目标端口 发送给网络层
    网络层：网络层包ip地址 源ip 目标ip 发送给数据链路层
    数据链路层：数据链路层包一层mac地址 源mac 目标mac 发送给物理层
    物理层：全都变成二进制  沿着网线送到交换机 
      交换机解析二进制数 向上反着解析成数据链路层以太网协议的数据 拆以太网协议头
       - 若是局域网内
         查询mac地址表 在就直接发送 不在就广播，发送前又将数据打成二进制发送 。
         交换机能拆到数据链路层 故称'二层设备' 几层设备就是这样来的 看能拆到几层         

         交换机将这条数据送给一台计算机，这台计算机收到的也是二进制数 向上拆解到
         数据链路层以太网的数据格式 看看目标mac是不是自己 不是的话就将这个数据包
         丢弃。是的话就继续拆 到网络层 拆ip头 局域网内ip没啥用，再继续向上拆 到
         传输层 解析端口 找到该端口对应的程序，到达应用层 一拆得到数据 。
       - 若跨局域网
         将数据打成二进制数送给网关 
           

*/