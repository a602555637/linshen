<template>
  <div>
    此页面可使用vue单文件组件
    <button ref="btn" @click="change">{{ buttonName }}</button>
    <a href="/detail">123</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonName: '点击按钮',
    }
  },
  methods: {
    change() {
      console.log(111)
    },
  },
}
</script>
