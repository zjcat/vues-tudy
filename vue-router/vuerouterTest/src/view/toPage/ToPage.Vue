<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{$route.params.username}}</p>
  </div>
</template>
<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: '不管你信不信反正'
    }
  }
}
</script>
<style scoped>
 
</style>