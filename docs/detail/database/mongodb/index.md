# mongoDB
## Linux使用docker安装
  1. 目录创建
      ```sh
      cd /home
      mkdir mongotest
      cd mongotest
      vi docker-compose.yml
      ```
  2. 创建docker-compose.yml
      ```yml
      version: '3.1'
      services:
        mongo:
          image: mongo
          restart: always
          environment:
            MONGO_INITDB_ROOT_USERNAME: root
            MONGO_INITDB_ROOT_PASSWORD: root
          ports:
            - 27017:27017
          volumes:
            - /home/mongotest:/data/db
      ```
  3. 创建服务  
    `docker-compose up -d`

  4. 端口添加至防火墙,或者关闭防火墙  
      `firewall-cmd --add-port=27017/tcp --permanent`  
      `firewall-cmd --reload`
## mongoDB 初始化
  + 查看容器名称
    `docker ps | grep mongotest`
  + 连接数据库
    `docker exec -it mongotest_mongo_1 mongo`
     - exec 容器内操作
     - -it 交互式终端
     - mongotest_mongo_1 容器名称
  + 切换至管理员  
    `use admin`  
    `db auth('root', 'root')`  
    `show dbs`
  + 添加用户 / 管理员  
    >注意要先切换至相应仓库再创建用户 

    `use testdb`  
    `db.createUser({user:'test1',pwd:'test1',roles:[{role:'dbOwner', db:'testdb'}]})`
  + 插入数据  
    >使用GUI工具进行操作:  robo 3T
## GUI工具连接数据库 robo 3T
  >主机安全组 入站端口 要开启 & Source：源IP：0.0.0.0/0
  + 傻瓜式连接  
      database: testdb  
      username: test1  
      password: test1
## 数据库的备份与恢复
  + 数据库备份  
      ```sh
      docker exec -it mongotest_mongo_1 mongodump -h localhost -u root -p example -o /tmp/test
      ```
  + 数据库恢复  
      ```sh
      docker exec -it mongotest_mongo_1 mongorestore -h localhost -u root -p example —dir /tmp/test
      ```
## node 操作数据库
  （待补充）
