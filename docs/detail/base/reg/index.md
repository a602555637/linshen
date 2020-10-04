# 正则表达式 regex
## 是什么
 + 记录文本规则的代码
## 常用元字符
  代码|说明
  --| :--:
  .|  除换行符以外的任意字符
  \w| 字母或数字或下划线或汉字
  \s| 任意空白符
  \d| 数字
  \b| 单词的开始或结束
  ^ | 开始
  $ | 结束

+ 例子🌰  

  `\ba\w*\b`
  >以字母`a`开头的单词——先是某个单词开始处`\b`，然后是字母`a`,然后是任意数量的字母或数字`\w*`，最后是单词结束处`\b`;

  `\d+`
  >1个或更多连续的数字。这里的`+`是和`*`类似的元字符，不同的是`*`匹配重复任意次(可能是0次)，而+则匹配重复1次或更多次;

  `\b\w{6}\b`
  >刚好6个字符的单词

  `^\d{5,12}$`
  >5-12位数字

+ 转义字符  
  `\.`, `\*`, `\\`
## 常用的限定符
  代码/语法| 说明
  --| :--:
  *|  重复零次或更多次
  +| 重复一次或更多次
  ?| 重复零次或一次
  {n}| 重复n次
  {n,}| 重复n次或更多次
  {n,m} | 重复n到m此

+ 例子🌰  

  `IOS\d+`  
  >IOS后面跟1个或更多数字

  `^\w+`
  >一行的第一个单词(或整个字符串的第一个单词，具体匹配哪个意思得看选项设置)
## 字符类
  `[0-9]`代表的含意与`\d`就是完全一致：一位数字;  
  `[a-z0-9A-Z_]`也完全等同于`\w`（如果只考虑英文的话）  

+ 例子🌰  

  `\(?0\d{2}[) -]?\d{8}`
  >匹配几种格式的电话号码  
  首先是一个转义字符`\(`,它能出现0次或1次`?`,  
  然后是一个`0`,  
  后面跟着2个数字`\d{2}`,  
  然后是`)`或`-`或`空格`中的一个，它出现1次或不出现`?`,  
  最后是8个数字`\d{8}`
## 分枝条件

  `0\d{2}-\d{8}|0\d{3}-\d{7}`
  >匹配两种以连字号分隔的电话号码:  
  一种是三位区号，8位本地号(如010-12345678),  
  一种是4位区号，7位本地号(0376-2233445)

  `\(0\d{2}\)[- ]?\d{8}|0\d{2}[- ]?\d{8}`
  >匹配3位区号的电话号码,  
  其中区号可以用小括号括起来，也可以不用,  
  区号与本地号间可以用连字号或空格间隔，也可以没有间隔

  `\d{5}-\d{4}|\d{5}`
  >匹配美国的邮政编码,  
  5位数字，或者用连字号间隔的9位数字
## 分组
  重复多个字符用`()` 子表达式也叫分组

  `(\d{1,3}\.){3}\d{1,3}`
  >简单的IP地址匹配,  
  `\d{1,3}`1到3位的数字,  
  `(\d{1,3}\.){3}`三位数字加上一个.整体分组重复3次

  `((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)`
  >尝试解析,  
  `(2[0-4]\d|25[0-5]|[01]?\d\d?)`
## 反义
  代码/语法| 说明
  --| :--:
  \W | 任意不是字母，数字，下划线，汉字的字符
  \S | 任意不是空白符的字符
  \D | 任意非数字的字符
  \B | 不是单词开头或结束的位置
  [^x] | 除了x以外的任意字符
  [^aeiou] | 除了aeiou这几个字母以外的任意字符

+ 例子🌰

  `\S+`
  >不包含空白符的字符串
  `<a[^>]+>`
  >用尖括号括起来的以a开头的字符串
## 后向引用
   使用小括号指定一个子表达式后，匹配这个子表达式的文本(也就是此分组捕获的内容)可以在表达式或其它程序中作进一步的处理。默认情况下，每个分组会自动拥有一个组号，规则是：从左向右，以分组的左括号为标志，第一个出现的分组的组号为1，第二个为2，以此类推。  
  后向引用用于重复搜索前面某个分组匹配的文本。例如，\1代表分组1匹配的文本

  `\b(\w+)\b\s+\1\b`  
  >匹配重复的单词,像go go, 或者kitty kitty  
  首先是一个单词，也就是单词开始处和结束处之间的多于一个的字母或数字`\b(\w+)\b`,这个单词会被捕获到编号为1的分组中,  
  然后是1个或几个空白符`\s+`,  
  最后是分组1中捕获的内容（也就是前面匹配的那个单词）`\1`

  + 也可指定子表达式的组名  

    `(?<Word>\w+)`
    >或者把尖括号换成'也行  

    `(?'Word'\w+)`,  

    这样就把`\w+`的组名指定为`Word`  
    要反向引用这个分组捕获的内容，你可以使用`\k<Word>`,所以上一个例子也可以写成这样：  
    `\b(?<Word>\w+)\b\s+\k<Word>\b`

  + 常用分组语法
    分类 |代码/语法| 说明
    --|--| :--:
    捕获 |(exp) | 匹配exp,并捕获文本到自动命名的组里
    捕获 |(`?<name>exp)` | 匹配exp,并捕获文本到名称为name的组里，也可以写成`(?'name'exp)`
    捕获 |(?:exp) | 匹配exp,不捕获匹配的文本，也不给此分组分配组号
    零宽断言 | (?=exp) | 匹配exp前面的位置
    零宽断言 | (?<=exp) | 匹配exp后面的位置
    零宽断言 | (?!exp) | 匹配后面跟的不是exp的位置
    零宽断言 | (?<!exp) | 匹配前面不是exp的位置
    注释 | (?#comment) | 这种类型的分组不对正则表达式的处理产生任何影响，用于提供注释让人阅读
## 零宽断言
## 负向零宽断言
## 几个小例子
  + 合法qq号规则：1、5-15位；2、全是数字；3、不以0开头  

    `^[1-9][0-9]{4,14}$`

  + 验证国内电话号码(0555-6581752、021-86128488)  

    `/(^0[0-9]{3}-[1-9][0-9]{6}$)|(^0[0-9]{2}-[1-9][0-9]{7}$)/`