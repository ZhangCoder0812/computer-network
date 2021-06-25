/* 

  DNS [Domain Name Server] 域名解析服务
      负责把域名解析成ip地址

      ip地址范围已经规定好了，不可以乱写，否则不能使用
      就像身份证一样 不按规定填写就查不到你这个人

  DNS查询方式：
    递归查询：本地域名服务器->根域名服务器->顶级域名服务器->权限域名服务器
              一层层向上查询 
    迭代查询    

*/