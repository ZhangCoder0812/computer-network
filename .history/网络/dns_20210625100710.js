/* 

  DNS [Domain Name Server] 域名解析服务
      负责把域名解析成ip地址

      ip地址范围已经规定好了，不可以乱写，否则不能使用
      就像身份证一样 不按规定填写就查不到你这个人

  DNS查询方式：
    递归查询：本地域名服务器
                ->根域名服务器 [全球只有13台 只放顶级域的解析记录 .com .cn .edu 等的解析记录]
                  ->顶级域名服务器 [放二级域名的ip地址]
                     ->权限域名服务器
              www.baidu.com 先问根域名服务器 得到顶级域名.com的地址
                            再在com域名服务器上查找 得到二级域名.baidu的地址
                            一层层向上查询 
              这样分层查询              
    迭代查询    

*/