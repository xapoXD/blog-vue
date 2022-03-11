<script setup>
import { RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Header from "@/components/Head.vue"

</script>

<template>
  <Header>
  </Header>

  <div class="cs-header">
    <HelloWorld msg="LINKS HERE" />

      <RouterLink class="container"  to="/">Home</RouterLink>

      <RouterLink class="container2"  to="/about">About</RouterLink>

  </div>

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
  text-align: left;
}

.container2 {
  font-family: arial;
  font-size: 24px;
  text-align: right;
}

</style>
