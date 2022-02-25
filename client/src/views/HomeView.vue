<script>
import TheWelcome from '@/components/TheWelcome.vue'
import Article from '../components/Article.vue'

export default {
  components: {
    Article
  },

  data() {
    return {
      count: 1
    }
  },


  methods: {
    onClick() {
      this.count++;
    }
  }
}
</script>

<template>
  <main>
    <TheWelcome />
    <button type="button" @click="onClick">Count: {{ count}} </button>
    <Article/>
  </main>
</template>
