# Linux 常用命令

## 查看版本

rpm -q centos-release

```
centos-release-8.2-2.2004.0.1.el8.x86_64
```

uname -a

```
Linux instance-2xy05ihl 4.18.0-147.8.1.el8_1.x86_64 #1 SMP Thu Apr 9 13:49:54 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
```

## 查看进程

- 查看监听的端口  
  `netstat -lntp`
- 查看建立的 TCP 连接  
  `netstat -antp`

## 防火墙

- 开启防火墙  
  `systemctl start firewalld`
- 重启防火墙  
  `firewall-cmd --reload`
- 查看防火墙状态  
  `systemctl status firewalld`
- 停止防火墙  
  `systemctl disable firewalld`
- 禁用防火墙  
  `systemctl stop firewalld`

## 端口

- 开放指定端口  
  `firewall-cmd --add-port=8080/tcp --permanent`
- 查看已开放端口  
  `firewall-cmd --list-all`
- 关闭端口  
  `firewall-cmd --zone=public --remove-port=80/tcp --permanent`
- 重新载入  
  `firewall-cmd --reload`
- 查看端口状态  
  `firewall-cmd --zone=public --query-port=80/tcp`
