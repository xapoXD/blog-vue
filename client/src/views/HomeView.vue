<script>
import Article from "@/components/Article3.vue";
import Preview from "@/components/Preview.vue";
import Article3 from "@/components/Article3.vue";
import Picture from "@/components/icons/beats.jpg";

export default {
  components: {Article3, Preview, Article},
  data() {
    return {
      articles: [
        {
          id:1,
          image: Picture,
          title: "Post 1",
          date: new Date(),
          text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
        },
        {
          id:2,
          image: 'https://picsum.photos/id/1036/4608/3072',
          title: "Post 2",
          date: new Date(),
          text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
        },
        {
          id:3,
          image: 'https://picsum.photos/id/1040/4496/3000/',
          title: "Post 3",
          date: new Date(),
          text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
        },
      ]
    }
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
