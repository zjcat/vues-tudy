<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>用户ID{{ $route.params.nameId}}</p>
    <p>文件标题{{ $route.params.nameTitle}}</p>
  </div>
</template>
<script>
export default {
  name: 'UrlPage',
  data () {
    return {
      msg: ':冒号的形式传递参数'
    }
  }
}
</script>
<style scoped>
 
</style>