# es6

### js 数组中 对象的某个 key 去重

```js
let arrList = [
  { key: 1, value: 'aaa' },
  { key: 2, value: 'bbb' },
  { key: 3, value: 'ccc' },
  { key: 4, value: 'aaa' },
  { key: 5, value: 'aaa' },
  { key: 6, value: 'ddd' },
]
const obj = {}
arrList = arrList.reduce((arr, item) => {
  obj[item.value] ? '' : (obj[item.value] = true && arr.push(item))
  return arr
}, [])
```
