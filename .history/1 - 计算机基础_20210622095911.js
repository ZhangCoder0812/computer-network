/* 

 计算机分类：
    个人pc：
           台式机：
           笔记本：断电后有电池续航
    服务器：最好一直开机 插着点 不要宕机 
           设计追求高性能 容易坏 因为一直开着 发热 硬件容易受损
           
    服务器分类：
        按尺寸：1U / 2U / 4U 【1U=4.445厘米】
        按外形：机架式 / 刀片式 / 塔式 / 小型机[高端定制] / 云主机 
        按品牌：戴尔 / 惠普 / IBM


 1. 软件分为两大类：
        操作系统：协调，管理，控制就算计硬件资源与应用软件的一个控制程序。
        应用软件：一堆代码文件

 2. 计算机体系的三层结构：
        应用程序
        操作系统
        硬件      

 3. 计算机五大组成部分：
        控制器：计算机指挥系统 负责控制其他硬件的运行 -- 大脑
        运算器：负责数学运算与逻辑运算 -- 大脑
               [控制器+运算器 = cpu]
        存储器：存储数据 
                内存/主存：内存条 基于电存储数据 断电数据丢失 临时保存数据 速度快 
                外存: 硬盘、磁盘 基于磁盘存储数据 断电不丢失 长久保存数据 速度慢

                cpu内部也有存储器 叫寄存器 跟cpu一样的材质做成 速度超快 没有延迟 
                不是主力存储设备 容量小 断电丢失 用于存储临时运算结果

                计算机越用越卡就是因为内存不足 存储数据越来越多 加内存条
                加快软件启动速度 要先从硬盘读入内存 所以要换快好硬盘 固态硬盘较好 好于机械硬盘
                mac配置的就是固态硬盘 所以启动软件较快
        输入设备：键盘 鼠标
        输出设备：显示器 打印机

    ps：程序的运行与计算机三大核心硬件 cpu，内存，硬盘 的关系
        程序最先存放在磁盘中
        程序的运行经历加载的过程：程序代码 数据从磁盘读入内存 cpu从内存中读取指令运行
        类似于人看一眼文字 大脑记住 然后去做
        cpu不会自发的控制程序运行 ，我们是控制cpu进而控制其他硬件运行

    ps：安装软件都装到硬盘里，不是安装在内存中 断电丢失[大脑失忆]
        软件的运行都是把数据加载到内存中
        所以说
           计算机硬盘的大小决定了能够安装的软件数量，
           计算机的内存大小决定了能够同时运行的软件数量。   

 4. 计算机是基于电工作的，电的特性 高低电频
     内存中放的就是一些高低电频「常称 0 1 」，磁盘 将磁信号转为电信号 高低电频  
     计算机里面不可能存数字 存的是高低电频
     
 5. cpu
     内存中存了很多个01 01 ... 
     cpu每次固定的读取规定个数个 01 01 「二进制个数」 ... 
     cpu 一个二进制数即一位 
        32位 一次读取32位二进制数 32个车道 每次从内存中拿32个 认为每32个是一个整体
        64位 一次读取64位二进制数 64个车道 每次从内存中拿64个 认为每64个是一个整体

     cpu具有向下兼容性  64位的cpu能够运行64和32位的软件 64个车道一次跑32个指令能跑的开
                      32位的cpu只能运行32位的软件

     cpu按指令集分为：
            精简指令集：单条指令做的事少 完成一个功能需要的指令数多 设计复杂 单条指令简单不容易出错。
                       用于金融 导弹 原子弹的主服务器
            复杂指令集：单条指令做的事多 完成一个功能需要的指令数少 设计简单 单条指令复杂容易出错。
                       用于个人电脑 公司服务器                
     x86 指的是cpu的型号 复杂指令集
     x86-64 指的是这个软件能够运行在复杂指令集的64位cpu上
     
     cpu2核4线程：2核相当于2个cpu 
                 4线程 4个工作流水线=2核*2个流水线
                 伪4核 能当4个cpu用

     cpu厂商：intel / amd       
     
 6. 存储器「存数据 取数据」
     
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

     BIOS类似于学校保安，开学的时候 保安开门 把校长迎进来「windows」来接管学校管理。

     buffer 缓存区：内存中的数据不是立马




*/
