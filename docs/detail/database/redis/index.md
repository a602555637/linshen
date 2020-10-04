# redis
## 介绍
  + 高性能 **key-value** 数据库
  + 优势：数据持久化 多数据结构 数据备份
  + 应用场景：  
    缓存： **TTL**  
    计数&消息系统（高并发，发布/订阅阻塞队列功能）  
    分布式会话session&分布式锁（秒杀）
  + redis VS mongodb  
    存储方式： key-value VS document  
    使用方式& 可靠性： mongodb => SQL & ACID支持  
    应用场景： 高性能缓存 VS 海量数据分析
## 安装
  + 创建目录  
    `cd /home`  
    `mkdir redistest`  
    `cd redistest`  
    `vi docker-compose.yml`  
  
  + 创建docker-compose.yml
      ```
      version: '3'
      services:
        redis-test:
          image: 'redis'
          restart: always
          container_name: 'redis-test'
          ports:
            - 15001:6379
          volumes:
            - /home/redistest:/data
          command: ["redis-server", "--requirepass", "root"]
      ```
  + 创建服务  
    `docker-compose up -d`
## 命令行 GUI工具
  + gui
## node集成redis
