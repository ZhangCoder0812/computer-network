/* 

  cpu和'二级高速缓存'通过'高速缓存总线连接'
  cpu和内存/主存通过PCI桥连接 不是直接连接的 上北下南 这个桥也叫'北桥'
  ISA桥/南桥连接的是低速设备 USB 键盘鼠标 

  计算机启动过程：
      1. 计算机通电 一通电计算机就会找到BIOS程序 计算机启动的第一个系统
         启动很快 看不到BIOS界面 瞬间切到windows/linux系统
         所以我们在开机的时候要快速按f2/f8/f11/esc等等可以进入BIOS 让计算机
         停在BIOS界面 不去找其他系统 不按的话会去找启动项 查找其他系统 往内存中读取 。
      2. BIOS开始运行，检测硬件：cpu、内存、硬盘等
      3. BIOS读取CMOS存储器中的参数，选择启动设备
      4. BIOS读取启动盘 将操作系统代码读取到内存中 这个启动盘如果放了很多数据 BIOS
         就要找到这个操作系统代码。所以我们一般装系统的时候吧操作系统的引导信息放在启动盘
         的第一个分区里面 BIOS第一个读取的分区就是这个扇区 称为MBR 主引导分区
         MBR主引导记录512字节，
           前446为引导信息 一个程序 称为bootloader
           后64为分区信息，
           最后两个为标志位


      总结：启动BIOS 再启动windows/linux...

*/