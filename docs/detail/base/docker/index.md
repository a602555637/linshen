# Docker

## Docker 主要特性

- 文件、资源、网络隔离
- 变更管理、 日志记录
- 写时复制

## Linux 安装 Docker

1. 删除旧版本（没有则跳过）
   ```sh
   sudo yum remove docker \
                 docker-client \
                 docker-client-latest \
                 docker-common \
                 docker-latest \
                 docker-latest-logrotate \
                 docker-logrotate \
                 docker-engine
   ```
2. 安装依赖

   ```sh
   sudo yum install -y yum-utils \
   device-mapper-persistent-data \
   lvm2
   ```

   添加 stable 的 Docker-ce 的源：

   ```sh
   sudo yum-config-manager \
   --add-repo \
   https://download.docker.com/linux/centos/docker-ce.repo

   ```

3. 安装 docker-ce:
   `sudo yum install docker-ce docker-ce-cli containerd.io`
4. 启动服务  
   `sudo systemctl start docker`
   - 查看服务状态  
     `systemctl status docker`
   - 查看正在运行的镜像  
     `docker ps`
   - 查看所有镜像  
     `docker ps -a`
5. docker 镜像加速设置
   - `vim /etc/docker/daemon.json`
     写入到文件
   ```json
   {
     "registry-mirrors": ["https://registry.docker-cn.com"]
   }
   ```
   - 重启服务  
     `systemctl daemon-reload`
     `systemctl restart docker`
6. 删除容器
   1. 停止运行  
      `docker stop [NAMES]`
   2. 删除  
      `docker rm [NAMES || CONTAINER ID]`
7. 常用命令  
   `docker run/start/stop/restart/log`

## docker-compose

1. 下载 docker-compose
   ```
   sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   ```
2. 给予执行权限
   `sudo chmod +x /usr/local/bin/docker-compose`
3. 测试命令
   `docker-compose --version`
4. docker-compose.yml

   ```yml
   version: '3'
   services:
     mysql:
       image: mysql
       environment:
         - MYSQL_ROOT_PASSWORD=123456
       ports:
         - 28002:3306
     mongo:
       image: mongo
       restart: always
       environment:
         MONGO_INITDB_ROOT_USERNAME: root
         MONGO_INITDB_ROOT_PASSWORD: example

     mongo-express:
       image: mongo-express
       restart: always
       ports:
         - 8081:8081
   ```

5. 创建服务
   `docker-compose up -d`

## docker hub

- log in
  `docker login`
- commit
  ```
  docker commit [CONTAINER ID] [dockerhub prefix]/[respostry name]:[tag]
  docker commit bdcefb6b2613 milestien/mysql:1.0
  ```
- push
  `docker push milestien/mysql:1.0`
- pull
  `docker pull milestien/mysql5.7`

## 常见问题

### centos8 安装提示 container.io 版本过低

- `yum list docker-ce`
- `yum list containerd.io`
- 问题原因：centos8 的 yum 库中没有符合最新版 docker-ce 对应版本的 containerd.io，docker-ce-3:19.03.11-3.el7.x86_64 需要 containerd.io >= 1.2.2-3
- 解决方案:
  1. 通过阿里云镜像库安装符合最新 docker-ce 版本的 containerd.io
     - `yum install -y https://mirrors.aliyun.com/docker-ce/linux/centos/7/x86_64/edge/Packages/containerd.io-1.2.13-3.2.el7.x86_64.rpm`
     - `sudo yum -y install docker-ce docker-ce-cli`
  2. 安装指定版本的 docker-ce 跟 containerd.io
     - `sudo yum install -y docker-ce-18.09.1 docker-ce-cli-18.09.1`
     - `sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io`
  3. centos7
