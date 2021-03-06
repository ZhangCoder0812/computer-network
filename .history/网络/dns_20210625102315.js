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
              没有的话 本地域名服务器 询问 根域名服务器，根域名服务器说虽然我没有
               www.baidu.com的地址 但我可以告诉你.com的地址 你去问 .com吧。。com
               说我也没有 www.baidu.com的地址  但我可以告诉你.baidu的地址 你去问
               .baidu 吧， .baidu 
      [常用]  本地域名服务器 -> 根域名服务器  得到顶级域名.com的地址
              本地域名服务器 -> 顶级域名服务器 得到二级域名.baidu的地址
              本地域名服务器 -> 权限域名服务器 得到 www的地址

*/