## feeling

### 在访问局域网的某网址时，提示"您的连接不是私密连接"，错误代码：NET::ERR_CERT_COMMON_NAME_INVALID、NET::ERR_CERT_AUTHORITY_INVALID等。

- 比如说  
`Request URL: https://localhost:8080/sockjs-node/info?t=1602551125588`

把?后面的去掉， 访问  
`https://localhost:8080/sockjs-node/info`

点击继续前往即可解决
