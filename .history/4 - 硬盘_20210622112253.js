/* 

 硬盘：
    机械硬盘/磁盘：唱片机。靠的是机械的转速读写数据。随身听快进可以听到转速加快
                  7200转/分的硬盘 -> 120转/s -> 转一圈花费 0.008s
                  机械硬盘慢的原因是找数据慢 要转着找，读数据往内存读都一样
                  平均延迟时间：转半圈花费的时间 约4ms
                  平均寻到时间：找磁道 约5ms
                  正常关机转动手臂会慢慢停下来回到原先位置
                  突然断开电源转动手臂

                  磁道：
                  扇区：一个扇区512Bytes个字节 硬盘的最小读写单位 
                       操作系统最小读写单位一个block块 约8个扇区大小 4k
                       ps：buffer缓冲区 -> 卡车
                           操作系统的block块 -> 收纳箱
                           硬盘的扇区 -> 快递
                           读写数据：大卡车里存放了n个收纳箱 每个收纳箱里存放了8个快递    
                        
                  柱面：一个柱面开始到另一个柱面结束 中间包含的所有盘片对应的磁盘
    固态硬盘/磁盘：依赖电子存取数据

*/