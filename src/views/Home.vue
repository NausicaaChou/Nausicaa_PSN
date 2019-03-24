<template>
  <div>
    <Header></Header>
    <router-view class="container"></router-view>
  </div>
</template>

<script>

// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
<style>
  body{
    direction: ltr;
    min-height: 100%;
    height: auto;
    background-color: #002055;
    background-image: radial-gradient(ellipse 50% 70% at 50% 0,#002c74 20%,#001536);
    background-attachment: fixed;
    margin: 0;
    line-height: 1.5;
    color: rgba(255,255,255,.9);
  }
</style>
