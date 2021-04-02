# BOM

Browser Object Model 浏览器对象模型

## 主要对象

### window

浏览器实例，global 对象 => 全局对象

- 方法：
  ```js
  window.alert('content')
  window.confirm('message') // 返回true / false
  window.prompt('显示文本', '默认文本') // 返回输入的内容 || 默认文本 / null
  window.open(
    'https://google.com',
    'width=400,height=200,left=0,top=0,toolbar=no,menubar=no,scrollbars=no,location=no,status=no'
  ) // 窗口宽高 xy坐标 是否显示工具栏/菜单栏/滚动条/地址字段/状态栏
  // setTimeout
  // setInterval
  ```

### location

```js
hash: '#%E4%B8%BB%E8%A6%81%E5%AF%B9%E8%B1%A1'
host: 'localhost:8080'
hostname: 'localhost' // 服务器名称
// 完整url
href: 'http://localhost:8080/feeling/js/#%E4%B8%BB%E8%A6%81%E5%AF%B9%E8%B1%A1'
origin: 'http://localhost:8080'
pathname: '/feeling/js/' // 路径
port: '8080'
protocol: 'http:' // 协议
```

- 方法：

```js
/*
 * 重载页面
 */
location.reload() // 有可能从缓存中加载
location.reload(true) // 从服务器加载
```

### history

- 方法：

```js
history.back() // 回到历史记录的上一步
histoty.go(-1) // 等同于

history.forward // 回到历史记录的下一步
history.go(1) // 等同于
```

### screen

```js
console.log('页面宽：' + screen.availWidth)
console.log('页面高：' + screen.availHeight)

console.log('pageWidth:' + window.innerWidth)
console.log('pageHeight:' + window.innerHeight)
```

### navigator

UserAgent:用来识别浏览器名称、版本、引擎以及操作系统等信息的内容

```js
//console.log(navigator.userAgent);
// 判断浏览器
function getBrowser() {
  var explorer = navigator.userAgent,
    browser
  if (explorer.indexOf('MSIE') > -1) {
    browser = 'IE'
  } else if (explorer.indexOf('Chrome') > -1) {
    browser = 'Chrome'
  } else if (explorer.indexOf('Opera') > -1) {
    browser = 'Opera'
  } else if (explorer.indexOf('Safari') > -1) {
    browser = 'Safari'
  }
  return browser
}
var browser = getBrowser()
console.log('您当前使用的浏览器是：' + browser)
// 判断终端
function isPc() {
  var userAgentInfo = navigator.userAgent,
    Agents = [
      'Andriod',
      'iPhone',
      'symbianOS',
      'windows phone',
      'iPad',
      'iPod',
    ],
    flag = true,
    i
  console.log(userAgentInfo)
  for (i = 0; i < Agents.length; i++) {
    if (userAgentInfo.indexOf(Agents[i]) > -1) {
      flag = false
      break
    }
  }
  return flag
}
var isPcs = isPc()
console.log(isPcs)
```

document

event
