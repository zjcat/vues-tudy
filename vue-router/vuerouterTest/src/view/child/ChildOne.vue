<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{$route.name}}</p>
  </div>
</template>
<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'Hi, I am child1!!!!!!!!!'
    }
  }
}
</script>
<style scoped>
 
</style>