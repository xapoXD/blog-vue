<script>

import Article from '../components/Article.vue'

export default {
  components: {
    Article
  }
}

</script>

<template>
  <main>
    <Article/>
  </main>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
