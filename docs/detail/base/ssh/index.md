# ssh远程连接Linux服务器
## 查看ssh服务的状态
  + sudo service sshd status
     + Loaded: error (Reason: No such file or directory) 未安装ssh
     + Active: inactive (dead) 未开启服务
## 安装ssh服务
  + sudo yum install sshd
  + sudo yum install openssh-server (或者)
## 开启ssh服务
  + sudo service sshd start
  + Active: active (running) since Sun 2013-04-07 13:43:11 CST; 15s ago
  ```
  首先进入/etc目录下，/etc目录存放的是一些配置文件，比如passwd等配置文件，要想使用ssh远程登陆，
  配置 /etc/ssh/sshd_config文件里的配置信息，使用vim编辑，
  在命令行模式下输入 vim /etc/ssh/sshd_config，进入之后，按“i”进入编辑状态，
  在其文件里找到并修改为：
    PasswordAuthentication yes , PermitRootLogin yes
  ```
  + sevice ssh start/stop/restart/status
  + 检查是否开启： ps -e | grep sshd
## 错误处理
 ``` sh
 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:1234567890-.
Please contact your system administrator.
Add correct host key in /var/root/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /var/root/.ssh/known_hosts:1
ECDSA host key for ip has changed and you have requested strict checking.
Host key verification failed.
```
  + 删除： `/user/.ssh/known_hosts` 本地连接方 主机名称一行的密钥