/* 

存储器「存数据 取数据」
     
     分类：
        寄存器：1ns <1kb 和cpu一样材质制成 容量小 几乎无延迟
        高速缓存：2ns 4MB [cpu和内存之间再加一层存储设备]
        内存：10ns 512-2048MB
        磁盘：10ms 200-1000GB
        磁带：100s 400-800GB

     内存：
        RAM「Random Access Memory」：内存。qq 微信 爱奇艺...
        ROM「Read Only Memory」：只读内存 只能读 不能写 读取数据于内存一样 但断电不丢失
                                用于BIOS「Basic Input Output System」基本的输入输出操作系统 

     买的新的计算机里面内置的系统就是BIOS，只能用键盘 不能用鼠标 不能打游戏 听歌等高级功能。
     这个页面就是我们装系统时进入的那个界面。如果新买的计算机啥都没有那么这个计算机就是一堆废
     铁，啥也用不了。买的新计算机可以装新系统 但前提是鼠标键盘内存要能用 这些控制计算机
     基本硬件工作的系统。要是新买的计算机啥都没有 在装系统之前 你就要把控制基本硬件
     工作的程序写好 这显然不现实。

     所以BIOS必须存放在ROM中，禁止修改 放在RAM内存中一断点就没了 不可能厂商带着电把电脑卖给你。
     用来保命的 保证这太计算机能够基本使用。

     一开机cpu就去ROM里面读BIOS系统，接管计算机硬件的运行 。扫描启动项配置Boot 从硬盘中查找安装的高级
     操作系统「windows，linux，macOs」读到RAM内存中，然后cpu从内存中读取接管运行。

     BIOS类似于学校保安，开学的时候 保安开门 把校长迎进来「windows」来接管学校管理

*/