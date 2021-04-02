(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{357:function(s,n,t){"use strict";t.r(n);var e=t(42),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nginx配置https服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置https服务"}},[s._v("#")]),s._v(" nginx配置https服务")]),s._v(" "),t("h2",{attrs:{id:"nginx安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx安装"}},[s._v("#")]),s._v(" nginx安装")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release\nyum update\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("设置开机自启动")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nginx\nsystemctl start nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("配置文件目录"),t("br"),s._v("\n主配置文件：/etc/nginx/nginx.conf"),t("br"),s._v("\n默认文件目录：/usr/share/nginx/html"),t("br"),s._v("\n错误日志：/var/log/nginx/error.log"),t("br"),s._v("\n访问日志：/var/log/nginx/access.log")])]),s._v(" "),t("h2",{attrs:{id:"配置https服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置https服务"}},[s._v("#")]),s._v(" 配置https服务")]),s._v(" "),t("ol",[t("li",[s._v("下载证书 .crt .key 放到"),t("code",[s._v("/etc/nginx/")]),s._v("中")]),s._v(" "),t("li",[t("code",[s._v("vim /etc/nginx/nginx.conf")]),s._v(" 添加https相应配置")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("server\n{\n  listen 443 default ssl;\n  server_name milestien.cn;\n  ssl_certificate /etc/nginx/milestien.cn.crt;\n  ssl_certificate_key /etc/nginx/milestien.cn.key;\n  ssl_session_cache    shared:SSL:1m;\n  ssl_session_timeout  5m;\n  ssl_ciphers  ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;\n  ssl_prefer_server_ciphers  on;\n  ssl_protocols  TLSv1 TLSv1.1 TLSv1.2;\n  location / {\n        root   html;\n        index  index.html index.htm;\n  }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("重启服务"),t("br"),s._v(" "),t("code",[s._v("systemctl restart nginx")])]),s._v(" "),t("li",[s._v("查看端口"),t("br"),s._v(" "),t("code",[s._v("netstat -anplt")])])]),s._v(" "),t("h2",{attrs:{id:"设置http强制跳转https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置http强制跳转https"}},[s._v("#")]),s._v(" 设置http强制跳转https")]),s._v(" "),t("ul",[t("li",[s._v("修改配置文件"),t("br"),s._v(" "),t("code",[s._v("vim /etc/nginx/nginx.conf")])]),s._v(" "),t("li",[s._v("在80的server中，先将server_name后的localhost修改为此证书域名。然后在下面添加上一句："),t("br"),s._v(" "),t("code",[s._v("rewrite ^(.*)$ https://${server_name}$1 permanent;")])]),s._v(" "),t("li",[s._v("重启服务"),t("br"),s._v(" "),t("code",[s._v("systemctl restart nginx")])])]),s._v(" "),t("h2",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),t("ol",[t("li",[s._v("http跳转到localhost")])]),s._v(" "),t("blockquote",[t("p",[s._v("是由于浏览器DNS缓存导致，清除一下即可")])])])}),[],!1,null,null,null);n.default=a.exports}}]);