# nginx配置https服务
## nginx安装  
  ```sh
  sudo yum install epel-release
  yum update
  yum install -y nginx
  ```

  + 设置开机自启动
  ```sh
  systemctl enable nginx
  systemctl start nginx
  ```
  + 配置文件目录  
    主配置文件：/etc/nginx/nginx.conf  
    默认文件目录：/usr/share/nginx/html  
    错误日志：/var/log/nginx/error.log  
    访问日志：/var/log/nginx/access.log  
## 配置https服务
  1. 下载证书 .crt .key 放到`/etc/nginx/`中
  2. `vim  /etc/nginx/nginx.conf` 添加https相应配置
  ```
  server
  {
    listen 443 default ssl;
    server_name milestien.cn;
    ssl_certificate /etc/nginx/milestien.cn.crt;
    ssl_certificate_key /etc/nginx/milestien.cn.key;
    ssl_session_cache    shared:SSL:1m;
    ssl_session_timeout  5m;
    ssl_ciphers  ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
    ssl_prefer_server_ciphers  on;
    ssl_protocols  TLSv1 TLSv1.1 TLSv1.2;
    location / {
          root   html;
          index  index.html index.htm;
    }
  }
  ```
  3. 重启服务  
  `systemctl restart nginx`
  4. 查看端口  
  `netstat -anplt`
## 设置http强制跳转https
  + 修改配置文件  
  `vim  /etc/nginx/nginx.conf`  
  + 在80的server中，先将server_name后的localhost修改为此证书域名。然后在下面添加上一句：  
  `rewrite ^(.*)$ https://${server_name}$1 permanent;`
  + 重启服务  
  `systemctl restart nginx`
## 常见问题
  1. http跳转到localhost
   >是由于浏览器DNS缓存导致，清除一下即可