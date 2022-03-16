<script setup>
import { RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Header from "@/components/Head.vue"
import Footer from "@/components/Footer.vue"

</script>

<template>
  <Header>
  </Header>



    <div class="container">
      <div class="row justify-content-md-center">


      <nav class="navbar navbar-light bg-light" >
        <form class="container-fluid justify-content-start" >


        <div class="col col-lg-2">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink  class="nav-link" to="/about">About</RouterLink>
            </li>
          </ul>
        </div>

        <div class="col-md-auto">
          Variable width content HEJJJJ
        </div>

        <div class="col col-lg-2">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink  class="nav-link" to="/">Home</RouterLink>
            </li>
          </ul>
        </div>

        </form>
      </nav>

      </div>
    </div>


<Footer>
</Footer>


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
