/* 

    ip地址：32位二进制数据组成，每8位表示成一个十进制数 [网络号+主机号]
      网络号：标识属于哪一个局域网
      主机号：标识这个局域网里哪台机器
    
      10101100.00010000.00001010.00000010 -> ip地址：172.16.10.2
      10101100.00010000.00001010.         -> 网络号：172.16.10 通常加个0 172.16.10.0 用来
                                                    表示是一个网络地址 不是一个具体的ip地址  
                                .00000010 -> 主机号：2

      一个ip地址从哪里开始到哪里结束是网络号，从哪开始到哪结束是主机号
      要提前告知。172.16.10.2/24 表示前24位是网络号 后面是主机号
      这个24也叫'子网掩码' 用来标识一个ip地址的网络号个数 从左到右只要属于
      网络号 都标识为1 
      也可以这样写 11111111.11111111.11111111.00000000 => 255.255.255.0 
      前24位都标识为1 表示网络号 不是网络号的标识为0 表示主机号

      再例如：
          ip：192.168.12.95
          子网掩码：255.255.255.0
          
          255.255.255.0 即：11111111.11111111.11111111.00000000
          表示这个ip地址的前24位是网络号 后8位是主机号
          所以 192.168.12 是网络号 表示该局域网是192.168.12.0
               95 是主机号 该局域网内第95台机器

    ip地址 子网掩码 按位与运算[同为1得1] 得到子网地址           

        10101100.00010000.00001010.11111110 -> ip地址：172.16.10.254/24
        11111111.11111111.11111111.00000000 -> 子网掩码：255.255.255.128
        10101100.00010000.00001010.00000000 -> 子网地址：172.16.10.0
            
        10101100.00010000.00001010.11111110 -> ip地址：172.16.10.254/25
        11111111.11111111.11111111.10000000 -> 子网掩码：255.255.255.128
        10101100.00010000.00001010.10000000 -> 子网地址：172.16.10.128
       
        所以就算ip地址一样 子网掩码不一样 也不是属于同一个局域网 ，真正决定属于
        哪一个局域网跟子网掩码有关系。

    网络号越少支持的网络数量越少，但每种网络涵盖的主机数越多。
    网络地址多能分出来的局域网数量就多


  ip地址的分类：
       A类 网络号前8位 首位固定为0 
           范围：00000000 ~ 01111111  由于0开头地址特俗地址 不能用
                 最大值127开头的地址也有特殊含义 也取不到 只能取到126
                 所以A类地址最小值是1 最大值126
       B类 网络号前16位 首位固定10
           范围：10000000 ~ 10111111 128 ~ 191
       C类 网络号前24位 首位固定110 后8位主机号 00000000 ~ 11111111
           0~255 由于0和255有特俗含义 0代表网络地址 255代表广播地址
           所以可用主机号个数 0~255 共26个数-0和255 = 254 个
           网络范围：11000000 ~ 11011111 192 ~ 223
       D类
       E类  
  
      1     8  9   16  17  24  25  32
  A类： 1~126    Host    Host    Host
  B类： 128~191          Host    Host
  C类： 192~223                  Host
  D类： 224~239  多播组  多播组   多播组                   
  E类： 240~255  保留     保留    保留
 
 
  特俗的ip地址：
    127.0.0.1 本地回环地址 自己跟自己通信
    255.255.255.255 广播地址
    172.16.45.0 

*/
