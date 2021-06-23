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
    固态硬盘SSD：依赖电子存取数据

    内存不足计算机会被卡死，指令读取没有问题 但是写入数据内存满了写入不了 就一直等着
    这时只有关机重启 敲命令释放内存估计也不好使 因为已经卡死了 为时已晚。
    或者就等着 等着某个消耗较大内存的程序释放掉。
    linux会自动随机杀死某个程序以至于计算机不被卡死，，，为了预防于未然 不要等待内存爆
    了才去清内存 为时已晚 内存差不多不够用时就可以清了。

    I/O设备：输入输出设备 包括设备控制器和设备本身。
             拆开计算机所有的硬件都被焊接在一块板子上，这个板子叫主板，主板上有好多接口
             每一个接口都对应一个芯片[设备控制器]
             不同厂商的硬件和不同厂商生产的计算机可以兼容 这个硬件设备要提供驱动程序
             操作系统只规定好接口 负责调用。

    硬盘接口：
      IDE：并口 好多引脚那样排列
      SATA：串口 内存卡的头那样排列
      SCSI
      SAS 「SATA + SCSI」
      光纤通道

      
      SSD + SAS  ---->土豪 速度超快的场景
      SSD + SATA ----> 常规  对速度要求比较高的场景
      机械硬盘 + SAS ---->常规 对速度没有特俗要求的场景
      机械硬盘 + SATA --->最穷 对速度要求较低的场景


      RAID：给硬盘做集群 多快硬盘连接到raid卡(阵列卡)上 然后制作raid
      raid卡类型：
        raid0: 至少有1块盘 [数据分别存在两块盘中 0101 盘1:00 盘2:11]
               容量：n块盘合在一起的容量
               性能：理论上是n块盘合在一起的读写速度 实际上低一些
               冗余性：不允许坏任何一块盘 
               特点：追求读写性能 对数据安全没有要求。
                    [程序代码不重要 程序运行产生的数据重要 wps软件代码不重要 使用wps写的文章重要]
        raid1: 只能有2块盘 [数据存在一块盘中 其中一块盘做备份 0101 盘1:0101 盘2:0101]
               容量：1块盘的容量
               性能：几乎是一块盘的读写速度
               冗余性：允许坏其中一块盘 
               特点：数据安全 不考虑速度
        raid5: 至少有3快盘 [两两之间做异或运算 0101 盘1:0 盘2:1 -> 盘3:1]
               容量：废掉1块盘的容量 等量盘的情况下 容量低于raid0
               性能：读写速度低于raid0 高于raid1 

        raid10: 至少有4块盘


        通常系统盘做raid1 其他盘做raid5
*/