<script setup>
import { RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Header from "@/components/Head.vue"

</script>

<template>
  <Header>
  </Header>

  <div style="float:right">
      <RouterLink class="container"  to="/">Home</RouterLink>
  </div>

      <RouterLink class="container2"  to="/about">About</RouterLink>



  <RouterView />
</template>

<style>

.cs-header {

  background-position: top center;
  height: 10vh;
}


.container {
  font-family: arial;
  font-size: 24px;
text-align: center;

}

.container2 {
  font-family: arial;
  font-size: 24px;
  text-align: right;

  float:left  ;
}

</style>
