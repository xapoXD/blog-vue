<template>
  <div class="row">
    <div class="col-8 offset-2">
      <NewArticle></NewArticle>
    </div>
  </div>

</template>

<script>
import NewArticle from '@/components/NewArticle.vue';

export default {
  name: "NewArticleView",
  components: {NewArticle, Preview, Article},
  data() {
    return {
      articles: []
    }
  },
  async created() {
    const res = await fetch('https://localhost:3000/articles',
        {
          method:'POST',
          body: JSON.stringify(this.article)})

  }

}

</script>

<style scoped>

</style>
