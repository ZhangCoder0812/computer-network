/* 

 操作系统最核心的概念就是进程

 进程指的是一个程序的运行过程，具体来说指的是操作系统控制硬件
 来运行程序的过程。

 第一代：
   

 第二代：
    批处理系统：一次只把一个。道程序读入内存，运行完毕后，再执行下一个程序
                没有并发称之为串行。    
            优点：充分利用了计算机资源    
            缺点：需要人的参与 程序员需要等待 程序是串行的

 第三代：
    多道技术[并发]：
        空间上的复用：运行前先加载到内存中 保证cpu在多任务之间切换速度快 
        时间上的复用：多个任务复用cpu时间片 cpu在多个任务之间来回切 
                     速度很快 看起来像是同时运行   
        cpu什么时候切换：
                      1. 当一个任务遇到I/O 肯定要切换 提升效率
                      2              
                     
       并发：多个任务看起来是同时运行的
       串行：多个任务一个运行完毕再运行下一个
    
    分时操作系统：多用户多任务


*/