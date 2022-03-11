<template>
  <div class="card">
    <div class="row">
      <div class="col-xl-3 col-lg-4">
        <img :src="image" alt="" class="card-img img-fluid p-1">
      </div>
      <div class="col-xl-9 col-lg-8">
        <div class="card-body">
          <h4 class="card-title">{{ title }}</h4>
          <h6 class="card-subtitle">{{ formattedDate }}</h6>
          <p class="card-text text-truncate">{{text}}</p>

          <RouterLink :to="`/SpongeArticle/${id}`" class="btn btn-primary">
            Číst dáleeeeeeeeee
            <em class="bi-play"/>
          </RouterLink>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preview",
  props: {
    id: Number,
    title: String,
    date: Date,
    text: String,
    image: String
  },
  computed: {
    formattedDate() {
      return this.date.toLocaleDateString()
    }
  }
}
</script>

<style scoped>



</style>
