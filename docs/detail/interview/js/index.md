# js

## 如何使用原生 js 给一个按钮绑定 2 个 onclick 事件
  ```js
  const btn1 = document.getElementById('btn')
  btn1.addEventListener('click', hello1)
  btn1.addEventListener('click', hello2)
  function hello1() {
    alert('hello 1')
  }
  function hello2() {
    alert('hello 2')
  }
  ```

## 去除字符串空格
  + str.trim() 去除头尾空格
  ```js
  str.trim()局限性：无法去除中间的空格，实例如下：
  var str = "   xiao  ming   ";
  var str2 = str.trim();
  console.log(str2);   //xiao  ming 
  同理，str.trimLeft()，str.trimRight()分别用于去除字符串左右空格。
  ```
  + 正则
  ```js
  去除所有空格: str = str.replace(/\s*/g,"");      
  去除两头空格: str = str.replace(/^\s*|\s*$/g,"");
  去除左空格： str = str.replace( /^\s*/, “”);
  去除右空格： str = str.replace(/(\s*$)/g, "");
  str为要去除空格的字符串，实例如下：
  var str = " 23 23 ";
  var str2 = str.replace(/\s*/g,"");
  console.log(str2); // 2323
  ```

## cookies sessionStorage和localstorage区别
  + 相同点：都存储在客户端
  + 不同：  
    存储大小  
    >cookie < 4k;
    sessionStorage和localstorage 可达5m  

    有效时间
    >localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据； 
    sessionStorage  数据在当前浏览器窗口关闭后自动删除;  
    cookie          设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

    数据与服务器之间的交互方式  
    >cookie的数据会自动的传递到服务器，服务器端也可以写cookie到客户端;  
    sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存

## 拖拽会用到哪些事件
  ```
  · dragstart:拖拽开始时在被拖拽元素上触发此事件,监听器需要设置拖拽所需数据,从操作系统拖拽文件到浏览器时不触发此事件;
  · dragenter:拖拽鼠标进入元素时在该元素上触发,用于给拖放元素设置视觉反馈,如高亮;
  · dragover:拖拽时鼠标在目标元素上移动时触发.监听器通过阻止浏览器默认行为设置元素为可拖放元素;
  · dragleave:拖拽时鼠标移出目标元素时在目标元素上触发.此时监听器可以取消掉前面设置的视觉效果;
  · drag:拖拽期间在被拖拽元素上连续触发;
  · drop:鼠标在拖放目标上释放时,在拖放目标上触发.此时监听器需要收集数据并且执行所需操作.如果是从操作系统拖放文件到浏览器,需要取消浏览器默认行为;
  · dragend:鼠标在拖放目标上释放时,在拖拽元素上触发.将元素从浏览器拖放到操作系统时不会触发此事件
  ```

## array求和
  ```js
  const arr = [1, 2, 3, 4, 5]
  let sum = 0
  for (const i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') sum += arr
  }
  console.log(sum)
  ---
  function sum1(arr) {
    let all = 0
    for (const i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') all += arr[i]
    }
    return all
  }
  console.log(sum1([1, 2, 3]))
  ```

## array去重
  ```js
  const arr = [1, 1, 2, 3, 3, 4]
  let newArr = []
  for (const i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) newArr.push([i])
  }
  ---
  const arr = [1,2,1,2]
  Array.from(new Set(arr)) //[1,2]
  ---
  const arr = [1,2,3,4,4,4,1]
  const arr1 = [...new Set(arr)]
  ```

## 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear停止上面的 mySetInterVal
  ```js
  function mySetInterVal (fn, a, b) {
    this.a = a
    this.b = b
    this.time = 0
    this.handle = -1
    this.start = () => {
      this.handle = setTimeout(() => {
        fn()
        this.time++
        this.start()
      }, this.a + this.time * this.b)
    }

    this.stop = () => {
      clearTimeout(this.handle)
      this.time = 0
    }
  }

  let a = new mySetInterVal(() => {
    console.log('123')
  }, 10, 20)
  a.start()
  a.stop()
  ```

  
## React 项目中有哪些细节可以优化？实际开发中都做过哪些性能优化
  对于正常的项目优化，一般都涉及到几个方面，开发过程中、上线之后的首屏、运行过程的状态

  来聊聊上线之后的首屏及运行状态：

  首屏优化一般涉及到几个指标FP、FCP、FMP；要有一个良好的体验是尽可能的把FCP提前，需要做一些工程化的处理，去优化资源的加载

  方式及分包策略，资源的减少是最有效的加快首屏打开的方式；

  对于CSR的应用，FCP的过程一般是首先加载js与css资源，js在本地执行完成，然后加载数据回来，做内容初始化渲染，这中间就有几次的网络反复请求的过程；所以CSR可以考虑使用骨架屏及预渲染（部分结构预渲染）、suspence与lazy做懒加载动态组件的方式

  当然还有另外一种方式就是SSR的方式，SSR对于首屏的优化有一定的优势，但是这种瓶颈一般在Node服务端的处理，建议使用stream流的方式来处理，对于体验与node端的内存管理等，都有优势；

  不管对于CSR或者SSR，都建议配合使用Service worker，来控制资源的调配及骨架屏秒开的体验

  react项目上线之后，首先需要保障的是可用性，所以可以通过React.Profiler分析组件的渲染次数及耗时的一些任务，但是Profile记录的是commit阶段的数据，所以对于react的调和阶段就需要结合performance API一起分析；

  由于React是父级props改变之后，所有与props不相关子组件在没有添加条件控制的情况之下，也会触发render渲染，这是没有必要的，可以结合React的PureComponent以及React.memo等做浅比较处理，这中间有涉及到不可变数据的处理，当然也可以结合使用ShouldComponentUpdate做深比较处理；

  所有的运行状态优化，都是减少不必要的render，React.useMemo与React.useCallback也是可以做很多优化的地方；

  在很多应用中，都会涉及到使用redux以及使用context，这两个都可能造成许多不必要的render，所以在使用的时候，也需要谨慎的处理一些数据；

  最后就是保证整个应用的可用性，为组件创建错误边界，可以使用componentDidCatch来处理；

  实际项目中开发过程中还有很多其他的优化点：

  1.保证数据的不可变性
  2.使用唯一的键值迭代
  3.使用web worker做密集型的任务处理
  4.不在render中处理数据
  5.不必要的标签，使用React.Fragments


## 防抖节流
```js
防抖

原理：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
适用场景：
按钮提交场景：防止多次提交按钮，只执行最后提交的一次
搜索框联想场景：防止联想发送请求，只发送最后一次输入
简易版实现
function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}
立即执行版实现
有时希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行。
// 有时希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行。
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait);
    }
  }
}
返回值版实现
func函数可能会有返回值，所以需要返回函数结果，但是当 immediate 为 false 的时候，因为使用了 setTimeout ，我们将 func.apply(context, args) 的返回值赋给变量，最后再 return 的时候，值将会一直是 undefined，所以只在 immediate 为 true 的时候返回函数的执行结果。
function debounce(func, wait, immediate) {
  let timeout, result;
  return function () {
    const context = this;
    const args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      if (callNow) result = func.apply(context, args)
    }
    else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait);
    }
    return result;
  }
}
2）节流

原理：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
适用场景
拖拽场景：固定时间内只执行一次，防止超高频次触发位置变动
缩放场景：监控浏览器resize
使用时间戳实现
使用时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。
function throttle(func, wait) {
  let context, args;
  let previous = 0;

  return function () {
    let now = +new Date();
    context = this;
    args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  }
}
使用定时器实现
当触发事件的时候，我们设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，直到定时器执行，然后执行函数，清空定时器，这样就可以设置下个定时器。
function throttle(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null;
        func.apply(context, args)
      }, wait)
    }

  }
}
```

## 闭包
什么是闭包
函数执行后返回结果是一个内部函数，并被外部变量所引用，如果内部函数持有被执行函数作用域的变量，即形成了闭包。

可以在内部函数访问到外部函数作用域。使用闭包，一可以读取函数中的变量，二可以将函数中的变量存储在内存中，保护变量不被污染。而正因闭包会把函数中的变量值存储在内存中，会对内存有消耗，所以不能滥用闭包，否则会影响网页性能，造成内存泄漏。当不需要使用闭包时，要及时释放内存，可将内层函数对象的变量赋值为null。

2）闭包原理
函数执行分成两个阶段(预编译阶段和执行阶段)。

在预编译阶段，如果发现内部函数使用了外部函数的变量，则会在内存中创建一个“闭包”对象并保存对应变量值，如果已存在“闭包”，则只需要增加对应属性值即可。
执行完后，函数执行上下文会被销毁，函数对“闭包”对象的引用也会被销毁，但其内部函数还持用该“闭包”的引用，所以内部函数可以继续使用“外部函数”中的变量
利用了函数作用域链的特性，一个函数内部定义的函数会将包含外部函数的活动对象添加到它的作用域链中，函数执行完毕，其执行作用域链销毁，但因内部函数的作用域链仍然在引用这个活动对象，所以其活动对象不会被销毁，直到内部函数被烧毁后才被销毁。

3）优点
可以从内部函数访问外部函数的作用域中的变量，且访问到的变量长期驻扎在内存中，可供之后使用
避免变量污染全局
把变量存到独立的作用域，作为私有成员存在
4）缺点
对内存消耗有负面影响。因内部函数保存了对外部变量的引用，导致无法被垃圾回收，增大内存使用量，所以使用不当会导致内存泄漏
对处理速度具有负面影响。闭包的层级决定了引用的外部变量在查找时经过的作用域链长度
可能获取到意外的值(captured value)
4）应用场景
应用场景一： 典型应用是模块封装，在各模块规范出现之前，都是用这样的方式防止变量污染全局。

var Yideng = (function () {
    // 这样声明为模块私有变量，外界无法直接访问
    var foo = 0;

    function Yideng() {}
    Yideng.prototype.bar = function bar() {
        return foo;
    };
    return Yideng;
}());
应用场景二： 在循环中创建闭包，防止取到意外的值。

如下代码，无论哪个元素触发事件，都会弹出 3。因为函数执行后引用的 i 是同一个，而 i 在循环结束后就是 3

for (var i = 0; i < 3; i++) {
    document.getElementById('id' + i).onfocus = function() {
      alert(i);
    };
}
//可用闭包解决
function makeCallback(num) {
  return function() {
    alert(num);
  };
}
for (var i = 0; i < 3; i++) {
    document.getElementById('id' + i).onfocus = makeCallback(i);
}



## 链式调用
  [答案](https://github.com/lgwebdream/FE-Interview/issues/22)

## 实现lodash的_get
  [link](https://github.com/lgwebdream/FE-Interview/issues/20)

## React 事件绑定原理
  [link](https://github.com/lgwebdream/FE-Interview/issues/23)

## 请写一段 JS 程序提取 URL 中的各个 GET 参数(参数名和参数个数不确定)，将其按key-value形式返回 到一个json 结构中，如{a:’1′, b:’2′, c:”, d:’xxx’, e:undefined}
  ```js
  function serilizeUrl(url) {
  var urlObject = {};
  if (/\?/.test(url)) {
  var urlString = url.substring(url.indexOf("?") + 1);
  var urlArray = urlString.split("&");
  for (var i = 0, len = urlArray.length; i < len; i++) {
  var urlItem = urlArray[i];
  var item = urlItem.split("=");
  urlObject[item[0]] = item[1];
  }
  return urlObject;
  }
  return null;
  }
  ```

## 看下面代码，给出输出结果
  ```js
  for(var i=1;i<=3;i++){
  setTimeout(function(){
  console.log(i);
  },0);
  };
  ```
  答案：4 4 4。 原因：Javascript 事件处理器在线程空闲之前不会运行。追问，如何让上述代码输出 1 2 3？
  ```js
  for(var i=1;i<=3;i++){
  setTimeout((function(a){  //改成立即执行函数
  console.log(a);
  })(i),0);
  };
  ```

## 