<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
     <p>导航：
       <router-link to="/">首页</router-link>|
       <router-link to="/HiPage">hi页面</router-link>|
      <router-link to="/HiPage/ChildOne">Hi页面1</router-link> |
      <router-link to="/HiPage/ChildTown">Hi页面2</router-link>|
      <router-link :to="{name:'ToPage',params:{username:'赵静很聪明'}}">to传参</router-link>|
      <router-link to="/UrlPage/赵静大好人/就是这么有自信">url传递参数</router-link>
     </p>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
