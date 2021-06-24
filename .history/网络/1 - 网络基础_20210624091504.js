/* 

  1 - 为什么有网络？
      方便数据传输，通信，资源共享。早期互联网就称：信息高速公路
    
  2 - 什么是网络
      网络 = 物理连接介质 + 互联网通讯协议「OSI七层协议」
      协议：一堆规定 一堆标准
      
  3 - OSI七层协议：应 表 会 传 网 数 物
           应：应用层 「第7层」
           表：表示层 「第6层」
           会：会话层 「第5层」
           传：传输层 「第4层」
           网：网络层 「第3层」ip协议
           数：数据链路层 「第2层」以太网协议 对数据进行分组  数据在这一层称为‘数据帧’
           物：物理层 「第1层」网口+网线 发送电信号/比特位 010101 

           以太网协议规定
              - 接入互联网的主机必须要有一块网卡，
              - 以太网的数据称为数据帧，分为头head和数据data两部分 其中head长度固定
              - 以太网协议通信采用广播的通信方式 => 计算机通讯靠吼

           mac地址：每台计算机的位置 独一无二 由12位16进制数组成
                   前6位厂商编号 后6位流水线号

           计算机之间通信，将每台计算机的网线插在交换机的网口上 这样计算机之间就在同一网段内，
           其中一个计算机发出一个数据包「heade+data」，其他任何计算机都能接受到 交换机上有多少个
           网口机会复制多少份 只有接受者那台计算机才会响应 基于mac地址找到接受者计算机的位置。

           mac地址学习：计算机通信完成后 交换机会记住其mac地址 产生mac表 下次再通信的时候就不用广播了
                      直接找到这台计算机。

           局域网内部计算机通过交换机连接起来，通信靠以太网吼的方式「广播」基于mac地址查找。
           不同局域网内的计算机通信 基于IP地址 mac地址只在局域网内有效 IP标识是哪个局域网/子网 网络层来干这件事。
           广域网通信基于ip地址 没有mac地址一说 基于ip地址找到哪个局域网/子网 局域网内部再基于mac地址找到这台计算机。

           ip地址 + mac地址 => 能标识全世界独一无二的一台计算机位置


        也有分为5层的：
           应：应用层 + 表示层 + 会话层 
           传：传输层  
           网：网络层  
           数：数据链路层 
           物：物理层 
        
        ip：
          两个版本 IPV4 IPV6
          IPV4规定ip地址格式：点分10进制 分4段 最小 0.0.0.0 最大 255.255.255.255   
          二进制：00000000.00000000.00000000.00000000 => 十进制：0.0.0.0
          二进制：11111111.11111111.11111111.11111111 => 十进制：255.255.255.255

          单纯的ip地址没有意义 要配合子网掩码

          子网掩码 32位 从左到右连续n个1 
                      11111111.11111111.11111111.00000000 => 255.255.255.0
         
            ip1 ：10101100.0010000.00001010.00000100  -> 172.16.10.4
            ip2 ：10101100.0010000.00001010.00000101  -> 172.16.10.5
           
            172.16.10.4/24
            则：24子网掩码 表示从左到右连续24个1 
              即 11111111.11111111.11111111.00000000 -> 255.255.255.0

            ip1 和 ip2 属于一个网段/子网内
            因为 ip地址 会和 子网掩码做与运算 
            ip1:    10101100.0010000.00001010.00000100
            子网掩码：11111111.11111111.11111111.00000000     
            做与运算：10101100.0010000.00001010.00000000 -> 得到子网地址：172.16.10.0 

            ip2:    10101100.0010000.00001010.00000101
            子网掩码：11111111.11111111.11111111.00000000     
            做与运算：10101100.0010000.00001010.00000000 -> 得到子网地址：172.16.10.0 

            两个子网地址一致

            vlan [虚拟局域网]

*/