/* 

  cpu和'二级高速缓存'通过'高速缓存总线连接'
  cpu和内存/主存通过PCI桥连接 不是直接连接的 上北下南 这个桥也叫'北桥'
  ISA桥/南桥连接的是低速设备 USB 键盘鼠标 

  计算机启动过程：
      1. 计算机通电 一通电计算机就会找到BIOS程序 计算机启动的第一个系统
         启动很快 看不到BIOS界面 瞬间切到windows/linux系统
         所以我们在开机的时候要快速按f2/f8/f11/esc等等可以进入BIOS 让计算机
         停在BIOS界面 不去找其他系统 
      2. BIOS运行 


      总结：启动BIOS 再启动windows/linux...

*/