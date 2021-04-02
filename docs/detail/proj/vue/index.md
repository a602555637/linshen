# elementUI 相关

### el-table

### el-pagination

```html
<i-page
  :total="total"
  @on-change="handleChange($event, 'page')"
  @size-change="handleChange($event, 'pageSize')"
>
</i-page>
```

```js
	import iPage from '@/components/pagination'
	/* data */
	total: 0, // 总数据量
    num: 10, // 每页显示数量
    page: 1 // 当前页数

    /* methods */

    // 发送请求时
    (tmp, page, num)
    num: num || this.num,
    page: page || this.page

    // 获取数据时
    this.total = res.data.total

    // page改变时
    handleChange(e, prop) {
      // this.tableLoading = true
      if (prop === 'page') {
        this._getAdminLogs(this.searchData, e, this.num)
        this.page = e
      } else if (prop === 'pageSize') {
        this._getAdminLogs(this.searchData, this.page, e)
        this.num = e
      }
    }
```

### 分页模版

```vue
<template>
  <div class="i-pager">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="onChange"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: 'iPage',
  props: {
    // 总条数
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {}
  },
  methods: {
    // currentPage 改变时会触发
    onChange(e) {
      this.$emit('on-change', e)
    },
    // 当条数改变时
    handleSizeChange(e) {
      this.$emit('size-change', e)
    },
  },
}
</script>
<style scoped lang="scss">
.i-pager {
  padding: 10px 0;
  background: #fff;
  text-align: center;
}
</style>
```

已采用挂载全局的形式，简化好多代码量

### vue 组件刷新问题（表单提交后的重置）

- app.vue

```vue
<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>
<script>
//  app.vue
export default {
  provide() {
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      isRouterAlive: true,
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    },
  },
}
</script>
```

- 需要使用的地方引入

```vue
<script>
export default {
  inject: ['reload'],
  methods: {
    getList() {
      this.reload()
    },
  },
}
</script>
```
