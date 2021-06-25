/* 

  DNS [Domain Name Server] 域名解析服务
      负责把域名解析成ip地址


      ip地址范围已经规定好了，不可以乱写，否则不能使用
      就像身份证一样 不按规定填写就查不到你这个人

  DNS查询方式：
    递归查询：递归查询一层层向上查询 拿到每个域的地址 然后再返回给客户端
     [很少使用] ->本地域名服务器
                 ->根域名服务器 [全球只有13台 只放顶级域的解析记录 .com .cn .edu 等的解析记录]
                  ->顶级域名服务器 [放二级域名的ip地址]
                     ->权限域名服务器
              www.baidu.com 先问根域名服务器 得到顶级域名.com的地址
                            再在com域名服务器上查找 得到二级域名.baidu的地址
                            一层层向上查询 
              这样分层查询好处是每台DNS服务器上存的的解析记录不会特别多
              要是每台DNS服务器上存的是完整的域名和ip地址的对应关系 那么
              数据量特别多 查询速度也较慢

    迭代查询： 客户端先问本地域名服务器 有的话就直接返回  
      [常用]   没有的话 本地域名服务器 询问 根域名服务器，根域名服务器说虽然我没有
               www.baidu.com的地址 但我可以告诉你.com的地址 你去问 .com吧。。com
               说我也没有 www.baidu.com的地址  但我可以告诉你.baidu的地址 你去问
               .baidu 吧， .baidu 服务器吧www的地址返回。
              
              本地域名服务器 -> 根域名服务器  得到顶级域名.com的地址
              本地域名服务器 -> 顶级域名服务器 得到二级域名.baidu的地址
              本地域名服务器 -> 权限域名服务器 得到 www的地址

    无论哪种方式，客户端跟本地DNS之间的查询方式都是递归查询 。
      递归查询指的是：下一层DNS服务器帮忙去查询
      迭代查询指的是：本地DNS服务器自己去查询 。
        迭代：一层层更新 虽然也重复 但不是单纯的重复 有更新
              迭代开发 不断的跟新功能和版本   
              
    13台根域名服务器：9台在美国 1台在日本 1台在瑞典 1台在英国 1台在法国
                     这时候中国还在打仗
                     只有一台是主DNS服务器 在美国 其他的都是镜像 同步过来的
                     解析记录          

    DNS查询走的是UDP协议 UDP协议能稳定传输的数据量只有512字节 这512字节
    即要包含UDP本身的一些数据还要包含全球13台DNS服务器的信心包含在内，13
    台已经是极限了 多一台都不行 数据量抗不住 工作机制跟UDP有关系 所以中国
    现在想要加一台 加不了。
    所以要想把中国从全世界互联网中给踢除 只需要在根DNS服务器里面把与中国有关
    的域名全干掉 如: .cn 只要别人访问 .cn结尾的域名就全都访问不到。这时候中国
    跟美国打互联网仗 那...


    优化机制：
        为提升速度 客户端再拿到DNS解析结果后会缓存起来，下次再做域名解析的时候
        就不用问本地DNS服务器了 直接在缓存中取。DNS缓存有时间限制 称为TTL。
        因为域名对应的IP地址是可以修改的 一直使用缓存 当域名对应的IP地址变了
        就会访问不到。好在域名和IP地址的对应关系不会经常变。

*/