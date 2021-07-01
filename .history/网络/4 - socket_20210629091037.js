/* 

       应
====> socket <====
       传
       网
       数
       物

   socket：在网络数据传输时，OSI每层协议都做了不同的事，要想使用网络数据传输
           就必须了解每一层具体干了什么事，这对于使用者来说成本很高。于是socket
           将 传输层，网络层，数据链路层，物理层 封装起来，封装成一个个接口
           就称为socket。使用者只需要关注应用层 处理自己的数据 剩下的交给socket
           来处理剩下每一层协议包的内容。

           现在基于网络通讯的软件都是基于套接字写出来的

*/