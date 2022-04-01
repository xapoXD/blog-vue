<script>
import Article from "@/components/Article3.vue";
import Preview from "@/components/Preview.vue";
import Article3 from "@/components/Article3.vue";
import Picture from "@/components/icons/beats.jpg";

export default {
  components: {Article3, Preview, Article},
  data() {
    return {
      articles: []
    }
  },
  async created() {
    const res = await fetch('https://localhost:3000/articles',
        {
          method: 'GET',
        });
    console.log(res);
    this.articles = await res.json();
  }
}

</script>

<template>
  <div class="row">
    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2  pb-3 pt-3" v-for="article in articles">
      <Preview :id="article.id" :title="article.title" :date="article.date" :text="article.text" :image="article.image"></Preview>
    </div>
  </div>
</template>
