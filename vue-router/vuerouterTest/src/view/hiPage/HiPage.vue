<template>
    <div>
        {{showName}}
        <router-view class="ischild"></router-view>
    </div>
</template>
<style>
</style>
<script>
export default {
  name: "HiPage",
  data() {
    return {
      showName: "这是Hi页面"
    };
  }
};
</script>

