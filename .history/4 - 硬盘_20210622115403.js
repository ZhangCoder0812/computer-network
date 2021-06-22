/* 

 硬盘：
    机械硬盘/磁盘：唱片机。靠的是机械的转速读写数据。随身听快进可以听到转速加快
                  7200转/分的硬盘 -> 120转/s -> 转一圈花费 0.008s
                  机械硬盘慢的原因是找数据慢 要转着找，读数据往内存读都一样
                  平均延迟时间：转半圈花费的时间 约4ms
                  平均寻到时间：找磁道 约5ms
                  正常关机转动手臂会慢慢停下来回到原先位置
                  突然断开电源转动手臂由于惯性还在转 损伤硬件

                  磁道：
                  扇区：一个扇区512Bytes个字节 硬盘的最小读写单位 
                       操作系统最小读写单位一个block块 约8个扇区大小 4k
                       ps：buffer缓冲区 -> 卡车
                           操作系统的block块 -> 收纳箱
                           硬盘的扇区 -> 快递
                           读写数据：大卡车里存放了n个收纳箱 每个收纳箱里存放了8个快递    
                        
                  柱面：一个柱面开始到另一个柱面结束 中间包含的所有盘片对应的磁盘
    固态硬盘/磁盘：依赖电子存取数据

    内存不足计算机会被卡死，指令读取没有问题 但是写入数据内存满了写入不了 就一直等着
    这时只有关机重启 敲命令释放内存估计也不好使 因为已经卡死了 为时已晚。
    或者就等着 等着某个消耗较大内存的程序释放掉。
    linux会自动随机杀死某个程序以至于计算机不被卡死，，，为了预防于未然 不要等待内存爆
    了才去清内存 为时已晚 内存差不多不够用时就可以清了。

    I/O设备：输入输出设备 包括设备控制器和设备本身。
             拆开计算机所有的硬件都被焊接在一块板子上，这个板子叫主板，主板上有好多接口
             

*/